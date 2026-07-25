import java.util.*;

/* ===================== 1. CUSTOM EXCEPTION HIERARCHY ===================== */
class DLSException extends Exception {
    public DLSException(String m) { super(m); }
    public DLSException(String m, Throwable cause) { super(m, cause); }
}
class CourseFullException extends DLSException {
    private final String courseId;
    public CourseFullException(String courseId, int cap) {
        super("Course " + courseId + " is full (capacity " + cap + ")");
        this.courseId = courseId;
    }
    public String getCourseId() { return courseId; }
}
class DuplicateEnrollmentException extends DLSException {
    public DuplicateEnrollmentException(String sid, String cid) {
        super("Student " + sid + " already enrolled in " + cid);
    }
}

/* ===================== 2. ROLES (composition, not inheritance) ============ */
abstract class Role {
    private final String title;
    protected Role(String title) { this.title = title; }
    public String getTitle() { return title; }
    public abstract String permissions();          // forces subclass implementation
    @Override public String toString() { return title; }
}
class StudentRole extends Role {
    private final List<Course> enrolled = new ArrayList<>();
    public StudentRole() { super("Student"); }
    @Override public String permissions() { return "enrol, view, submit"; }
    void addCourse(Course c) { enrolled.add(c); }
    List<Course> getEnrolled() { return Collections.unmodifiableList(enrolled); }
}
class InstructorRole extends Role {
    public InstructorRole() { super("Instructor"); }
    @Override public String permissions() { return "upload, grade"; }
}

/* ===================== 3. STRATEGY: delivery medium ====================== */
interface Notifier { void send(String to, String message); }
class EmailNotifier implements Notifier {
    @Override public void send(String to, String m) { System.out.println("  [EMAIL -> " + to + "] " + m); }
}
class SMSNotifier implements Notifier {
    @Override public void send(String to, String m) { System.out.println("  [SMS   -> " + to + "] " + m); }
}
class DashboardNotifier implements Notifier {
    @Override public void send(String to, String m) { System.out.println("  [DASH  -> " + to + "] " + m); }
}

/* ===================== 4. OBSERVER contract ============================== */
interface CourseObserver {
    void onMaterialUploaded(Course c, Material m);
    String getId();
}

/* ===================== 5. PERSON + role composition ===================== */
class Person {
    private final String id;
    private final String name;
    private final List<Role> roles = new ArrayList<>();
    public Person(String id, String name) { this.id = id; this.name = name; }
    public String getId() { return id; }
    public String getName() { return name; }
    public void addRole(Role r) { roles.add(r); }
    public void removeRole(Role r) { roles.remove(r); }
    public boolean hasRole(Class<? extends Role> t) {
        for (Role r : roles) if (t.isInstance(r)) return true;
        return false;
    }
    public List<Role> getRoles() { return Collections.unmodifiableList(roles); }
}

/* A Student IS-A Person and HAS-A Notifier (Strategy) and IS-A CourseObserver */
class Student extends Person implements CourseObserver {
    private final Notifier notifier;
    public Student(String id, String name, Notifier notifier) {
        super(id, name);
        this.notifier = notifier;
        addRole(new StudentRole());
    }
    @Override public void onMaterialUploaded(Course c, Material m) {
        notifier.send(getName(), "New " + m.type() + " in " + c.getId() + ": " + m.title());
    }
}

/* A TeachingAssistant is ONE Person holding TWO roles -- the midterm answer */
class TeachingAssistant extends Student {
    public TeachingAssistant(String id, String name, Notifier n) {
        super(id, name, n);
        addRole(new InstructorRole());
    }
}

/* ===================== 6. ABSTRACT MATERIAL + polymorphism =============== */
abstract class Material {
    private final String title;
    protected Material(String title) { this.title = title; }
    public String title() { return title; }
    public abstract String type();                 // dynamic dispatch target
}
class VideoLecture extends Material {
    public VideoLecture(String t) { super(t); }
    @Override public String type() { return "VIDEO"; }
}
class PdfReading extends Material {
    public PdfReading(String t) { super(t); }
    @Override public String type() { return "PDF"; }
}

/* ===================== 7. SUBJECT: thread-safe Course =================== */
class Course {
    private final String id;
    private final int maxSeats;
    private final List<Person> enrolled = new ArrayList<>();
    private final List<CourseObserver> observers = new ArrayList<>();
    private final List<Material> materials = new ArrayList<>();

    public Course(String id, int maxSeats) { this.id = id; this.maxSeats = maxSeats; }
    public String getId() { return id; }

    /* SYNCHRONIZED: check-then-act must be atomic or capacity is breached. */
    public synchronized void enrol(Person p) throws DLSException {
        for (Person e : enrolled)
            if (e.getId().equals(p.getId()))
                throw new DuplicateEnrollmentException(p.getId(), id);
        if (enrolled.size() >= maxSeats) throw new CourseFullException(id, maxSeats);
        enrolled.add(p);
        if (p instanceof CourseObserver) observers.add((CourseObserver) p);
        System.out.println("  enrolled " + p.getName() + " (" + enrolled.size() + "/" + maxSeats + ")");
    }

    public synchronized int seatsTaken() { return enrolled.size(); }

    public void uploadMaterial(Person uploader, Material m) throws DLSException {
        if (!uploader.hasRole(InstructorRole.class))
            throw new DLSException(uploader.getName() + " lacks InstructorRole");
        List<CourseObserver> snapshot;
        synchronized (this) {                 // mutate shared state under the lock
            materials.add(m);
            snapshot = new ArrayList<>(observers);
        }
        System.out.println(uploader.getName() + " uploaded " + m.type() + " '" + m.title() + "'");
        for (CourseObserver o : snapshot) o.onMaterialUploaded(this, m);
    }
}

/* ===================== 8. REGISTRATION ENGINE (threads) ================= */
class RegistrationAgent extends Thread {
    private final Course course;
    private final Person applicant;
    public RegistrationAgent(Course c, Person p) { this.course = c; this.applicant = p; }
    @Override public void run() {
        try { course.enrol(applicant); }
        catch (DLSException e) { System.out.println("  REJECTED: " + e.getMessage()); }
    }
}

/* ===================== 9. DEMO ========================================== */
public class DLS {
    public static void main(String[] args) throws InterruptedException {
        Course oop = new Course("CS212", 3);
        Person prof = new Person("P01", "Dr Satti");
        prof.addRole(new InstructorRole());

        List<Person> applicants = new ArrayList<>();
        applicants.add(new Student("S1", "Danyal", new EmailNotifier()));
        applicants.add(new Student("S2", "Ayesha", new SMSNotifier()));
        applicants.add(new TeachingAssistant("T1", "Bilal", new DashboardNotifier()));
        applicants.add(new Student("S4", "Hamza", new EmailNotifier()));
        applicants.add(new Student("S5", "Zara", new SMSNotifier()));

        System.out.println("--- concurrent registration, 3 seats, 5 applicants ---");
        List<Thread> threads = new ArrayList<>();
        for (Person p : applicants) { Thread t = new RegistrationAgent(oop, p); threads.add(t); t.start(); }
        for (Thread t : threads) t.join();
        System.out.println("final seats = " + oop.seatsTaken() + " (must never exceed 3)");

        System.out.println("--- upload + observer notification ---");
        try { oop.uploadMaterial(prof, new VideoLecture("Composition vs Inheritance")); }
        catch (DLSException e) { System.out.println("FAILED: " + e.getMessage()); }

        System.out.println("--- TA has both roles ---");
        Person ta = applicants.get(2);
        System.out.println("Bilal roles = " + ta.getRoles()
            + " | student? " + ta.hasRole(StudentRole.class)
            + " | instructor? " + ta.hasRole(InstructorRole.class));

        System.out.println("--- authorisation failure ---");
        try { oop.uploadMaterial(applicants.get(0), new PdfReading("Notes")); }
        catch (DLSException e) { System.out.println("FAILED: " + e.getMessage()); }
    }
}
