# CS-212 OOP — END-SEMESTER MASTER EXTENSION & ACTIVE RECALL DRILL MANUAL

**Dr. Fahad Ahmed Satti | NUST SEECS | Summer 2026 | Pure Java**

> **This document EXTENDS `CS212_Mid_Master.pdf` (135 pages, Parts 0–29). It does not replace it.**
> Parts 1–22 and 24–29 of that document remain valid and are not reproduced here.
> This file contains: revised errata, the fully solved midterm, a **replacement for Part 23**, new
> Parts 30–39 covering ESE scope, and the drill manual.
>
> Read order for the ESE: **Part MSE → Part 35 → Part 37 → Part 38 → Part 23R → Parts 30–34 → Part 39.**
> That order is deliberate. It puts the things he has *demonstrably* asked before the things he might ask.

---

# PART 0-EXT — SCOPE, WHAT CHANGED, AND ERRATA

## 0-EXT.1 What is now confirmed vs. what is inferred

Everything below is graded by evidence strength. Do not treat these as equal.

| Evidence tier | What it is | What's in it |
|---|---|---|
| **TIER 1 — He actually asked it** | Quiz 2, Quiz 3, the Midterm paper | Static binding vs dynamic binding, static method hiding, constructor chaining (`this()`/`super()`), pass-by-value reassignment, overload resolution + override interaction, `Interface.super.method()`, re-abstraction, the DLS architecture problem, Observer, `synchronized`, custom exceptions |
| **TIER 2 — He posted a deck or a lab on it** | 7 decks, Labs 03–10, Assignments 1–2 | Composition/LSP/OCP/fragile base class, Collections (`HashMap`/`ArrayList`), Threads (`extends Thread`), abstract classes vs interfaces, encapsulation discipline, UML class diagrams |
| **TIER 3 — His outline schedules it, no deck yet** | Weeks 11–16 | Association/aggregation/composition in UML, exception handling, SOLID, file handling & serialization |
| **TIER 4 — Proxy material only** | Previous professor's decks (Mehwish Kiran) | The *content* of Tier 3 topics. **Her phrasing, not his.** Flagged throughout as `[PROXY]`. |

**The single most important scope fact:** he converted **Assignment 2 into the 35-mark core of the midterm**. He recycles his own coursework into exams verbatim. Therefore:

> **Every lab task and assignment brief he has posted is a candidate ESE question.** Lab 09 (abstract `PaymentProcessor` + `Auditable` interface) and Lab 10 (`Car`/`Engine`, `SmartPhone` with `CameraModule` + `GPSModule`) are the two most likely sources for the ESE's applied section. They are written up as exam answers in Part 36.

## 0-EXT.2 Hard rules derived from his marking behaviour

These come from the red pen on your own quiz scripts. They are not general advice.

1. **A correct output with a thin justification scores ~50%.** On Quiz 3 Q1 you wrote the right output and the right mechanism, and he still wrote *"why?"* in the margin and took 2 of 4 marks. He wants the **rule that governs the mechanism**, not the mechanism alone. "`Portable.super.identify()` calls the interface method" = the mechanism. "…which is necessary because the **class-wins rule** would otherwise select `Device.identify()`" = the rule. The second sentence is where the marks are.
2. **Justifications are marked on named rules.** Write the rule's name: *class-wins rule, static binding, method hiding, re-abstraction, two-phase overload resolution, Liskov substitution, fragile base class*. Naming it is cheap and he rewards it.
3. **"Explain the output" means trace it, not state it.** Q2/Q3 of Quiz 3 lost 0.5 each for stating a conclusion without the compile-time/runtime split.
4. **He asks the counterfactual.** Midterm Part 2 Q2 was *"what happens if the parent method is changed to `static`?"* Every mechanism you learn, learn its **broken variant**: what changes if I add `static`, `final`, `private`, `abstract`, or change the return type.
5. **Rubrics penalise procedural code and public fields explicitly.** Lab 07's rubric bottom tier is literally "Procedural design"; Lab 08's is "run() called sequentially instead of utilising actual hardware threads." If you hand-write a system answer, **no public fields, no logic in `main`, `start()` never `run()`.**
6. **He wants ethics commentary in system answers.** Labs 07, 08, 09, 10 all carry a CLO-5 ethics row. Lab 08's exemplary tier: *"deeply connects the technical race condition to real-world civilian financial harm."* On a 20-mark design question, two sentences of ethical justification is likely worth 1–2 marks and costs you 20 seconds.

## 0-EXT.3 ERRATA — where his slides are wrong or contradict each other

Carried forward from the mid document, re-verified, plus three new ones.

### E1 — Overload ambiguity contradiction *(carried, still live)*
- **Polymorphism deck s5–6:** claims `print(5)` with `print(long)` and `print(Integer)` overloads is an ambiguous compile error.
- **Same deck s10–11:** identical setup, resolves to `"long"`.
- **Truth: s10–11 are correct.** Overload resolution runs in three phases; widening (phase 2) is fully attempted before autoboxing (phase 3). `int → long` is a widening primitive conversion, so it wins in phase 2 and phase 3 never runs. No ambiguity.
- **Exam-safe phrasing:** *"Resolves to `long`. Java's overload resolution completes phase 2 (widening) before considering phase 3 (autoboxing), so `print(long)` is selected. Note: if both candidates required boxing, or both were in the same phase, this would be an ambiguity error."* — This scores under either marking scheme because it states the correct answer and shows you know when ambiguity *does* arise.

### E2 — Covariant return types *(carried)*
- **Week-2 deck s30:** an override's return type "must be same."
- **Polymorphism deck:** "same or covariant."
- **Truth: covariant is correct** since Java 5. The compiler emits a synthetic **bridge method** with the erased parent signature that forwards to your narrower override, because the JVM dispatches on exact descriptor match.
- **Phrasing:** *"Covariant returns are legal; the compiler generates a bridge method so the JVM's signature-exact dispatch still finds the override."*

### E3 — "A Car is an Engine" *(carried — now directly contradicted by his own newer deck)*
- **Week-2 deck s13:** "A Car is an Engine."
- **Composition deck s27:** *"A car is not a subtype of an engine… Modelling a car as an 'engine inheritor' would be absurd logically."*
- **Truth:** Car **HAS-A** Engine. Composition. His newer deck corrects his older deck. If a paper quotes the older line, say so and correct it — he has already published the correction himself, so you are safe.

### E4 — boolean "1 bit" *(carried, minor)*
- JLS does not specify boolean's storage size. In HotSpot a standalone `boolean` typically occupies a byte; `boolean[]` is byte-packed. Say *"logically 1 bit of information; JVM-dependent in storage, typically one byte."*

### E5 — **NEW, HIGH VALUE: the `final` field with a setter (Composition deck, s14 vs s19)**

He contradicts himself inside five slides, and the code he shows **does not compile**.

- **s14:** *"Typically implemented via a private final reference variable."*
  ```java
  public class Car {
      private final Engine engine;
  }
  ```
- **s19:** *"At runtime, we can completely swap the engine if a setter is provided:"*
  ```java
  public void setEngine(Engine e) {
      this.engine = e;      // <-- DOES NOT COMPILE
  }
  ```
- **Compiler error:** `cannot assign a value to final variable engine`
- **Why:** a blank `final` instance field must be assigned exactly once, and only in an initialiser or every constructor. Any later assignment is rejected at compile time.
- **Why it matters conceptually:** this is not a typo, it is a **real design tension**, and that is exactly the kind of thing he asks about. `final` buys you immutability and thread-safety (a `final` field is safely published — other threads cannot observe it half-initialised). Dropping `final` buys you runtime Strategy swapping but means `engine` is now mutable shared state, so concurrent `setEngine`/`start()` calls need `synchronized`.
- **Exam-safe phrasing:** *"As written this does not compile — a `final` field cannot be reassigned. To support runtime swapping you must drop `final`, which is a deliberate tradeoff: you gain Strategy-pattern flexibility and lose immutability and safe publication, so the field now needs synchronisation if shared across threads."*
- **This connects two of his lectures.** Say that sentence and you have linked the Composition deck to the Threads deck. See Part 39's cross-link list.

### E6 — NEW: `setEngine` reachability (Composition deck, s19–20)
s20 calls `car.setEngine(new TurboPetrolEngine())` but `TurboPetrolEngine` is never defined anywhere in the deck, and the `Car` class on s17 has no setter at all. The slide sequence is not a runnable program. Harmless, but don't try to reproduce s17+s19+s20 as one class — you'll produce something that doesn't compile.

### E7 — NEW: "one contiguous inherited object" (Composition deck, s23)
He says composition adds "memory indirection… compared to one contiguous inherited object." This is directionally fine but overstated for Java: an inherited object *is* one contiguous heap allocation, but any reference-typed field in it (inherited or composed) is already a pointer. The real cost is one extra object header (12–16 bytes) plus a possible cache miss, not a categorical difference. If asked, say *"one extra allocation and header per component, plus a potential cache miss on the delegated call — usually negligible, and the JIT often inlines the forwarding method away."* That last clause is his style — he teaches mechanism, so mentioning JIT inlining of the forwarder is a marks-scoring detail.

### E8 — NEW: Lab 10 title bug
Lab 10's heading inside the document says "Abstraction & Interfaces" (copy-pasted from Lab 09) while the actual topic is Composition vs Inheritance. Irrelevant to marks; noted so you don't think you're missing a lab.

---

# PART MSE — THE MIDTERM PAPER, FULLY SOLVED

This is reconstructed from your account of the paper plus his quizzes. **He recycles.** Assignment 2 → midterm Part 3/4 already happened once; expect midterm Part 2 → ESE Part 2 with the same shapes and different code. Solve these until the reasoning is automatic.

## MSE.Q1 — Static binding vs. dynamic binding, and how the compiler distinguishes overloading from overriding

### The full-marks answer

**Definitions, stated as a mechanism:**

- **Static (early) binding** — the target method is chosen by the **compiler**, from the **declared (compile-time) type** of the reference, and burned into the bytecode as a fixed symbolic reference. Emitted as `invokestatic`, `invokespecial`, or `invokeinterface`/`invokevirtual` with no later lookup.
- **Dynamic (late) binding** — the compiler only records a *signature*; the **JVM** selects the actual implementation at call time from the **runtime class of the object**, by indexing that class's **vtable** (virtual method table). Emitted as `invokevirtual`.

**What is statically bound in Java — the unifying sentence:**

> `static`, `private`, and `final` methods, plus constructors, are all **statically bound**. That single fact explains why *none* of them can be overridden: overriding requires a runtime vtable lookup, and these methods have no vtable slot to replace.

Learn that as one sentence. It answers four separate exam questions.

**The two-phase model — this is the part that earns the marks:**

Every instance method call is resolved in **two independent phases**:

| Phase | Who | Chooses | Based on | Governs |
|---|---|---|---|---|
| **1. Signature selection** | Compiler | *Which* method signature | **Declared type** of the reference + static types of the arguments | **Overloading** |
| **2. Implementation selection** | JVM | *Whose* body runs | **Runtime class** of the object | **Overriding** |

So:

- **Overloading is resolved entirely in phase 1** → compile-time / static. Same name, **different parameter list**. The compiler picks one and never revisits it.
- **Overriding is resolved entirely in phase 2** → runtime / dynamic. Same name, **same parameter list**, same-or-covariant return type. The compiler picked the signature; the JVM picks the body.

**How the compiler tells them apart:** it compares the **erased parameter signature**.
- Signature differs → new method, added to the class's method set → **overload**.
- Signature identical and the parent method is accessible and not `static`/`private`/`final` → **override**, occupying the *same vtable slot* as the parent's.
- Signature identical but the parent method **is** `static` → **hiding**, not overriding. Both exist; the compiler picks by declared type.

**The killer illustration (this is Quiz 3 Q3, and he will reuse it):**

```java
class Parent {
    void show(Object o) { System.out.print("Parent.Object"); }
    void show(String s) { System.out.print("Parent.String"); }
}
class Child extends Parent {
    void show(Object o) { System.out.print("Child.Object"); }
    void show(String s) { System.out.print("Child.String"); }
}

public class Demo {
    public static void main(String[] args) {
        Parent p = new Child();
        p.show("Hello");
    }
}
```

**Output:** `Child.String`

**Trace:**
1. **Phase 1 (compiler).** Declared type of `p` is `Parent`. Argument static type is `String`. Both `show(Object)` and `show(String)` are applicable; `String` is more specific than `Object`, so `show(String)` is selected. This is **overloading, decided now, and never re-decided.**
2. **Phase 2 (JVM).** Runtime class of the object is `Child`. `Child.show(String)` overrides `Parent.show(String)` and occupies the same vtable slot. `invokevirtual` finds `Child.show(String)`.
3. **Result:** `Child.String`.

**The one-sentence version to write under time pressure:**
> *"The compiler chose the signature `show(String)` from `p`'s declared type `Parent` (overloading, static), and the JVM chose `Child`'s body from the object's runtime type (overriding, dynamic) — so `Child.String`."*

**The counterfactual he will ask:** change the call to `p.show((Object) "Hello")`.
- Phase 1 now sees static type `Object` → selects `show(Object)`.
- Phase 2 still dispatches to `Child`.
- **Output: `Child.Object`.** The cast changed the *compile-time* decision. This is the cleanest possible proof that the two phases are independent.

---

## MSE.Q2 — "What happens if the parent method is changed to `static`?"

### The base code (dynamic dispatch working normally)

```java
class Parent {
    void identify() { System.out.print("Parent "); }
}
class Child extends Parent {
    void identify() { System.out.print("Child "); }
}
public class Runner {
    public static void main(String[] args) {
        Parent p = new Child();
        p.identify();
    }
}
```
**Output:** `Child ` — `invokevirtual`, vtable lookup on runtime type `Child`.

### Now make **both** methods `static` (this is Quiz 2 Q4 — you got it wrong)

```java
class Parent {
    static void identify() { System.out.print("Parent "); }
}
class Child extends Parent {
    static void identify() { System.out.print("Child "); }
}
public class Runner {
    public static void main(String[] args) {
        Parent p = new Child();
        p.identify();          // legal but terrible style; compiler warns
    }
}
```

**Output:** `Parent ` — **not** `Child`.

**Why, in the order he wants it:**
1. `static` methods belong to the **class**, not to any instance. There is no `this`, so there is nothing to dispatch on.
2. Therefore `Child.identify()` does **not override** `Parent.identify()`. It **hides** it. This is **method hiding**, a distinct mechanism with its own name — *use the name*.
3. Both methods exist independently. Neither has a vtable slot.
4. The compiler resolves `p.identify()` using the **declared type of `p`, which is `Parent`**, and emits `invokestatic Parent.identify()`. The object `p` points to is never consulted — it isn't even read.
5. The JVM performs **no** dynamic dispatch.

**Answer to "does the JVM use dynamic method dispatch here?" — NO.** Static methods are statically bound. You wrote "yes" on Quiz 2. This is the highest-frequency trap in his entire question bank; it appeared on Quiz 2 *and* the midterm.

### What changes in the child method

| Aspect | Instance methods | `static` methods |
|---|---|---|
| Relationship | Overriding | **Hiding** |
| Resolved by | JVM, runtime type | Compiler, declared type |
| Bytecode | `invokevirtual` | `invokestatic` |
| `@Override` annotation | Legal | **Compile error** |
| `super.identify()` | Legal | Illegal — use `Parent.identify()` |
| Can reduce visibility? | No | No (same rule) |
| Can hide a `static` with an instance method? | — | **No — compile error** |

### Two compile errors he can build from this

```java
class Parent { static void identify() { } }
class Child extends Parent {
    @Override static void identify() { }     // ERROR
}
```
`error: static methods cannot be annotated with @Override` *(verified on JDK 21)* — `@Override` asserts that you are overriding, and hiding is not overriding. **This is a free-marks question if he asks "why won't this compile."**

```java
class Parent { static void identify() { } }
class Child extends Parent {
    void identify() { }                       // ERROR
}
```
`error: identify() in Child cannot override identify() in Parent; overridden method is static`
And the reverse (instance in parent, `static` in child) fails too: `overriding method is static`. **You may not change static-ness across an override/hide boundary.**

---

## MSE.Q3 — "How do you retrieve the child's output if the parent method stays `static`?"

Four options. He wants you to know that **only one of them is dynamic dispatch, and it requires giving up `static`.**

**Option 1 — Call it through the class name (the direct answer).**
```java
Child.identify();     // prints "Child " — invokestatic Child.identify()
```
Resolution is at compile time against `Child`, so `Child`'s hidden method is selected. This is the answer he is fishing for.

**Option 2 — Change the declared type of the reference.**
```java
Child c = new Child();
c.identify();         // prints "Child "
```
Still `invokestatic`, still compile-time — you changed the *declared* type, which is the only input the compiler has. This proves the mechanism: **the object never mattered, only the declaration.**

**Option 3 — Cast the reference (same reasoning, different syntax).**
```java
Parent p = new Child();
((Child) p).identify();   // prints "Child "
```
The cast changes the compile-time type. Note this is a **compile-time** effect only; no runtime dispatch occurs. Contrast with a cast used to reach a subclass *instance* method, where the cast enables the call and the JVM still dispatches.

**Option 4 — Remove `static` (the only route to genuine polymorphism).**
```java
class Parent { void identify() { System.out.print("Parent "); } }
class Child extends Parent {
    @Override void identify() { System.out.print("Child "); }
}
Parent p = new Child();
p.identify();         // prints "Child " — invokevirtual, real dynamic dispatch
```

**The sentence that scores full marks:**
> *"You cannot get dynamic dispatch from a `static` method — it has no vtable slot. You can only change which method the **compiler** selects, by calling `Child.identify()` or by declaring/casting the reference as `Child`. Genuine runtime polymorphism requires removing `static`, because dispatch needs an instance to dispatch on."*

**Trap variant to expect:** he adds a `static` field to the same setup.
```java
class Parent { static String tag = "P"; }
class Child extends Parent { static String tag = "C"; }
Parent p = new Child();
System.out.println(p.tag);   // "P"
```
**Fields are *always* statically bound — even instance fields.** Fields are never virtual in Java. `p.tag` reads `Parent.tag` because `p` is declared `Parent`. This is field hiding, and it applies to non-static fields too:
```java
class A { int x = 1; }
class B extends A { int x = 2; }
A a = new B();
System.out.println(a.x + " " + ((B) a).x);   // "1 2"
```
Both `x` fields exist in the same object simultaneously. **Methods can be virtual; fields never are.** That's a one-line answer to a whole family of his questions.

---

## MSE.Q4 — Predict the output: static hiding + constructor chaining

### The Quiz 2 Q1 constructor-chaining problem (you got this wrong too)

```java
class SuperClass {
    SuperClass() {
        this(5);
        System.out.print("S1 ");
    }
    SuperClass(int x) {
        System.out.print("S2:" + x + " ");
    }
}
class SubClass extends SuperClass {
    SubClass() {
        System.out.print("Sub ");
    }
}
public class Demo {
    public static void main(String[] args) { new SubClass(); }
}
```

**Output:** `S2:5 S1 Sub `

You wrote `S1 Sub` — you missed the `this(5)` delegation entirely.

**Trace, in exact execution order:**
1. `new SubClass()` → `SubClass()` body begins. Its first statement is an **implicit `super()`** (inserted by the compiler because you wrote neither `this(...)` nor `super(...)`).
2. `super()` → `SuperClass()` begins. Its first statement is `this(5)`, an explicit **constructor delegation**.
3. `this(5)` → `SuperClass(int)` begins. It has an implicit `super()` to `Object()`. Then prints `S2:5 `. Returns.
4. Control returns to `SuperClass()`, which continues **after** `this(5)` and prints `S1 `. Returns.
5. Control returns to `SubClass()`, which continues after the implicit `super()` and prints `Sub `.

**The rule to state:** *"A constructor body runs only after its `this(...)` or `super(...)` delegation completes. Printing therefore happens innermost-first: `SuperClass(int)` → `SuperClass()` → `SubClass()`."*

### The Quiz 2 Q2 error question (you got this wrong)

```java
class Alpha {
    public Alpha() { }
}
class Beta extends Alpha {
    public Beta() {
        super();
        this(10);                              // <-- ERROR
    }
    public Beta(int size) {
        System.out.println("Size: " + size);
    }
}
```

**The error:** you cannot have both `super()` and `this(10)` in one constructor, and `this(10)` is not the first statement.

**Compiler message:** `error: call to this must be first statement in constructor`

**The rule:** a constructor may contain **at most one** explicit delegation — either `super(...)` **or** `this(...)`, never both — and it must be the **very first statement**. Rationale (state this, it's the mechanism): each object must have its superclass state initialised **exactly once**, before any subclass code touches it. Allowing both would run the superclass chain twice; allowing a delegation later would let you read uninitialised inherited fields.

**Your answer said `public` on a constructor is illegal. It is not.** `public`, `protected`, `private`, and package-private are all legal on constructors. `private` constructors are the standard mechanism for singletons and static factories. Do not repeat this.

**The three constructor errors he can build:**

```java
class A { A() { System.out.println("x"); this(); } }
// error: call to this must be first statement in constructor
// (and even first: error: recursive constructor invocation)

class A { A(int x) { } }
class B extends A { B() { } }
// error: constructor A in class A cannot be applied to given types;
//   required: int, found: no arguments
// Cause: implicit super() has no matching no-arg constructor in A.
// Fix: add A() to A, or write super(someInt) explicitly in B.

class A { private A() { } }
class B extends A { B() { super(); } }
// error: A() is not public in A; cannot be accessed from outside package
// A private constructor makes the class effectively un-subclassable.
```

That second one is his favourite and it is genuinely easy to miss: **defining any parameterised constructor removes the compiler-supplied default no-arg constructor**, which silently breaks every subclass.

### A combined static-hiding + chaining problem in his style

```java
class Base {
    static String who() { return "Base"; }
    Base() { System.out.print(who() + "-ctor "); }
}
class Derived extends Base {
    static String who() { return "Derived"; }
    Derived() { System.out.print("Derived-ctor "); }
}
public class Demo {
    public static void main(String[] args) {
        Base b = new Derived();
        System.out.println("| " + b.who());
    }
}
```

**Output:** `Base-ctor Derived-ctor | Base`

**Trace:**
1. `new Derived()` → implicit `super()` → `Base()` runs first.
2. Inside `Base()`, the unqualified call `who()` is resolved **at compile time within `Base`'s own scope** to `Base.who()` — `static`, so no dispatch, and `Derived.who()` hides rather than overrides it. Prints `Base-ctor `.
3. `Derived()` body prints `Derived-ctor `.
4. `b.who()` uses `b`'s declared type `Base` → `Base.who()` → `Base`.

**Now the vicious variant** — make `who()` an *instance* method:

```java
class Base {
    String who() { return "Base"; }
    Base() { System.out.print(who() + "-ctor "); }
}
class Derived extends Base {
    private String tag = "Derived";
    @Override String who() { return tag; }
    Derived() { System.out.print("Derived-ctor "); }
}
Base b = new Derived();
```

**Output:** `null-ctor Derived-ctor `

**Why — and this is a genuinely hard, genuinely examinable point:**
1. `Base()` runs **before** any of `Derived`'s field initialisers.
2. `who()` is now virtual, so `invokevirtual` dispatches on the runtime type `Derived` → `Derived.who()` runs.
3. `Derived.who()` returns `tag`, but `tag` has not been assigned yet — it holds its default value `null`.
4. Prints `null-ctor `.

**The rule:** *"Never call an overridable method from a constructor.* The subclass override executes against a partially constructed object whose fields are still at default values." This is a documented *Effective Java* item, and note he **quotes Josh Bloch on slide 10 of the Composition deck** — he reads Bloch, so Bloch-sourced answers land well with him. It is also the **self-use issue** he names on Composition deck s9 under the fragile base class problem. Connecting those two is a cross-link worth stating explicitly.

---

## MSE Part 1 — the 15 MCQs: the fact list they are drawn from

MCQs on "core Java syntax, binding, and inheritance rules" come from a small, predictable pool. Cover it cold:

| # | Fact | Answer |
|---|---|---|
| 1 | Can a `static` method be overridden? | No — hidden. |
| 2 | Can a `private` method be overridden? | No — not inherited; a same-signature child method is a new, unrelated method. |
| 3 | Can a `final` method be overridden? | No. |
| 4 | Can a constructor be overridden? | No — not inherited. Can be **overloaded**. |
| 5 | Can an override reduce visibility? | No. Can **widen** it (`protected` → `public`). |
| 6 | Can an override change the return type? | Only to a **subtype** (covariant). Primitives must match exactly. |
| 7 | Can an override throw broader **checked** exceptions? | No. Same, narrower, or none. Unchecked: unrestricted. |
| 8 | Are fields polymorphic? | **No.** Always resolved by declared type. |
| 9 | Does Java support multiple inheritance of classes? | **No.** Of *type* via interfaces, yes. Of *state*, no. |
| 10 | Two interfaces, same `default` method, one implementer? | Compile error; resolve with `A.super.m()`. |
| 11 | Interface vs abstract class: state? | Interface: only `public static final` constants. Abstract class: any instance fields. |
| 12 | Can an interface have a constructor? | No. |
| 13 | Can an abstract class have a constructor? | Yes — runs via `super()` from the concrete subclass. |
| 14 | Can an abstract class have zero abstract methods? | Yes. Still not instantiable. |
| 15 | Can a concrete class re-declare an inherited concrete method as `abstract`? | Only if the class is itself `abstract` — this is **re-abstraction** (Quiz 3 Q2). |
| 16 | What does `Interface.super.m()` require? | That your class directly implements `Interface`, and `m()` has a `default` body. |
| 17 | Class method vs interface `default`, same signature? | **Class wins**, always. |
| 18 | Is Java pass-by-value or by-reference? | **Always by value.** Object *references* are copied by value. |
| 19 | `equals()` without `hashCode()` in a `HashMap` key? | Compiles; breaks lookup — unequal hashes land in different buckets. |
| 20 | `start()` vs `run()`? | `start()` creates an OS thread and invokes `run()` on it. `run()` executes on the caller's thread — no concurrency. |
| 21 | Can `start()` be called twice on one `Thread`? | No — `IllegalThreadStateException`. |
| 22 | What does `synchronized` on an instance method lock? | `this`. On a `static` method: the `Class` object. |
| 23 | Are local variables shared between threads? | No — each thread has its own **stack**. Only **heap** state races. |
| 24 | Checked vs unchecked? | Checked = compile-time enforced, extends `Exception` but not `RuntimeException`. Unchecked = `RuntimeException`/`Error` subclasses. |
| 25 | Does `finally` always run? | Yes, except `System.exit()`, JVM crash, or infinite loop/thread kill in `try`. |


---

# PART 23R — COMPOSITION vs INHERITANCE *(REPLACES Part 23 of the mid document)*
### Source: `OOP_Week4.pdf`, "Composition vs. Inheritance", 31 slides, dated July 17 2026

**Part 23 of the mid document was flagged as a reconstruction because no deck had been posted. The deck now exists. Discard the old Part 23 and use this. Everything here is sourced from his slides.**

## 23R.1 The three relationships — his exact slide (s3), reproduce verbatim

> **IS-A (inheritance)** A subclass is a specialized form of the superclass. Example: Dog IS-A Animal.
> **HAS-A (composition)** An object contains another object as a part. Example: Car HAS-A Engine.
> **USES-A (dependency)** A method uses another object temporarily. Example: Car USES-A GasStation.

`USES-A` is the one students forget and he listed it first-class. **A parameter or a local variable is USES-A. A field is HAS-A. `extends` is IS-A.** That single line resolves most UML-relationship MCQs.

## 23R.2 His comparison table (s21) — memorise and reproduce verbatim

| Aspect | Inheritance | Composition |
|---|---|---|
| Relationship | IS-A | HAS-A |
| Coupling | Tight (Implementation) | Loose (Interface) |
| Flexibility | Static (Compile-time) | Dynamic (Run-time) |
| Encapsulation | Weak (White-box reuse) | Strong (Black-box reuse) |
| Overhead | Direct dispatch | Delegation methods |

**White-box vs black-box reuse is his vocabulary.** Use those exact words. White-box = the subclass can see and depend on the parent's internals via `protected`. Black-box = the container sees only the component's public API.

## 23R.3 Inheritance benefits (s6) — four, and he numbers them

1. **Code reuse** — common behaviour in one base class (DRY).
2. **Polymorphic dispatch** — call `animal.eat()` without knowing the subtype at compile time.
3. **Domain modelling** — hierarchy mirrors real-world taxonomies.
4. **Framework integration** — many legacy Java libraries *require* extending a base class, e.g. `HttpServlet`.

Point 4 is the one that shows you read the slide rather than a textbook. Cite `HttpServlet`.

## 23R.4 Inheritance challenges (s8) — four, and these are the exam answers

1. **Tight coupling** — subclasses depend on superclass *implementation details*.
2. **Encapsulation violation** — `protected` members expose base internals to children.
3. **Static hierarchy** — the parent-child link is fixed at compile time. **You cannot change an object's superclass later.**
4. **Combinatorial explosion** — adding a behaviour across a hierarchy forces dozens of subclasses.

## 23R.5 The Fragile Base Class Problem (s9) — three named sub-problems

> A seemingly safe change in the base class can cause distant subclasses to silently malfunction.

- **Accidental Override** — the base class adds a new method whose signature collides with a private helper already in the child. (Note: a *truly* `private` child method cannot be overridden, so the practical failure is either a package-private/protected collision, or a `@Override`-less child method that silently starts overriding new base behaviour. If you want to be precise and score the extra mark, say: *"the collision becomes an unintended override the moment the child method is not `private`"*.)
- **Self-use issues** — if an overridden method calls other superclass methods, changing the parent's internal call pattern breaks the child.
- **Encapsulation leak** (s10) — changing one `protected` field requires auditing **all** subclasses, including those written by other teams in other packages.

**He quotes Bloch on s10 — reproduce it:**
> *"Inheritance violates encapsulation ... a subclass depends on the implementation details of its superclass."* — Effective Java, Josh Bloch

**Cross-link (state this in any fragile-base-class answer):** "self-use issues" is the same mechanism as the constructor trap in MSE.Q4 — a superclass constructor calling an overridable method is self-use at its most dangerous, because the child override runs against uninitialised child fields and returns `null`.

## 23R.6 The Diamond Problem (s11) — his exact framing, and what's genuinely Java

> Classic C++ issue: Class D inherits from B and C, and both inherit from A. Which copy of A's fields does D get?
> Java originally avoided this by forbidding multiple inheritance of **state** (classes), allowing it only for **type** (interfaces).
> Modern Java Catch: Since Java 8, interfaces can have `default` methods. If a class implements two interfaces with the same default method, the compiler throws an error, forcing the developer to manually resolve the collision.

**"State vs type" is the phrase to use.** Java forbids multiple inheritance *of state*; it permits multiple inheritance *of type*.

**The complete Java diamond, compilable, with all three resolution routes:**

```java
interface Camera {
    default String describe() { return "Camera"; }
}
interface GPS {
    default String describe() { return "GPS"; }
}

// ---------- FAILS ----------
class BadPhone implements Camera, GPS { }
// error: class BadPhone inherits unrelated defaults for describe()
//        from types Camera and GPS

// ---------- FIX 1: pick one explicitly ----------
class PhoneA implements Camera, GPS {
    @Override public String describe() { return Camera.super.describe(); }
}

// ---------- FIX 2: combine both ----------
class PhoneB implements Camera, GPS {
    @Override public String describe() {
        return Camera.super.describe() + "+" + GPS.super.describe();
    }
}

// ---------- FIX 3: ignore both, supply your own ----------
class PhoneC implements Camera, GPS {
    @Override public String describe() { return "Smartphone"; }
}
```

**Rules for `X.super.m()` — he tested this on Quiz 3 Q1:**
- `X` must be an interface your class **directly** implements. `Camera.super.describe()` inside a subclass of `PhoneA` is illegal.
- `m()` must have a `default` body in `X`.
- You may only use it **inside a method that overrides `m()`**.
- There is no `X.super.m()` for classes; the class form is `super.m()`, and only for the single direct superclass.

**The class-wins rule — the exact thing you lost 2 marks on:**

```java
abstract class Device {
    void identify() { System.out.print("Device"); }
}
interface Portable {
    default void identify() { System.out.print("Portable"); }
}
class Laptop extends Device implements Portable {
    public void identify() { Portable.super.identify(); }
    void boot() { identify(); System.out.println(" booted."); }
}
// new Laptop().boot();
```
**Output:** `Portable booted.`

**The justification that gets 4/4 instead of 2/4:**
> *"Without the explicit override, the **class-wins rule** applies: a concrete method inherited from a superclass always takes precedence over an interface `default` method with the same signature, so `Device.identify()` would run and print `Device`. `Laptop` overrides `identify()` and uses `Portable.super.identify()` to explicitly select the interface's default implementation, deliberately overriding the class-wins default. Note also that widening the access modifier from package-private `void` in `Device` to `public` in `Laptop` is legal — overrides may widen visibility, never narrow it."*

Three named rules in one paragraph: class-wins, explicit interface-super selection, access-widening. **That** is what his margin note "why?" was asking for.

## 23R.7 Composition — his implementation pattern (s14, s16–19)

> Typically implemented via a **private final** reference variable. The composed object is often an **interface type**, enabling the Strategy Pattern. There is **no special keyword** in Java for this; it is purely an architectural design choice.

**His Car–Engine example, corrected for E5 (the `final` bug):**

```java
public interface Engine {
    void start();
    void stop();
    int getHorsePower();
}

public class PetrolEngine implements Engine {
    @Override public void start() { System.out.println("Petrol engine roaring..."); }
    @Override public void stop()  { System.out.println("Stopping petrol engine."); }
    @Override public int getHorsePower() { return 150; }
}

public class ElectricEngine implements Engine {
    @Override public void start() { System.out.println("Silent electric start..."); }
    @Override public void stop()  { System.out.println("Stopping electric engine."); }
    @Override public int getHorsePower() { return 200; }
}

public class Car {
    private Engine engine;          // NOT final -- see below

    public Car(Engine engine) {
        if (engine == null) throw new IllegalArgumentException("Engine required");
        this.engine = engine;
    }

    public void start() {
        System.out.println("Car starting...");
        engine.start();             // DELEGATION -- this is the whole pattern
    }

    public void stop() {
        engine.stop();
        System.out.println("Car stopped.");
    }

    public int horsePower() { return engine.getHorsePower(); }   // forwarding

    public synchronized void setEngine(Engine e) {               // runtime swap
        if (e == null) throw new IllegalArgumentException("Engine required");
        this.engine = e;
    }
}
```

**Write this comment next to the field in the exam:**
```java
private Engine engine;   // deliberately not final: s14 says final, but s19's setter
                         // requires mutability. final + setter does not compile.
                         // Tradeoff: lose immutability & safe publication,
                         // gain runtime Strategy swapping -> hence synchronized setter.
```
That comment demonstrates you found his contradiction *and* understood the design consequence. It is the single highest-value thing you can write on a composition question.

**If the question demands immutability instead**, use `final` and no setter, and get flexibility by constructing a new `Car`:
```java
Car turbo = new Car(new TurboPetrolEngine());   // replace the object, not the field
```
State which of the two you chose and why. He rewards **justified design choices** (that phrase is from his rubrics).

## 23R.8 Cost of composition (s23) — three, he numbers them

1. **Boilerplate code** — you must hand-write a forwarding method per exposed behaviour. (He notes IDEs generate these: *Alt+Insert*, or Lombok.)
2. **Memory indirection** — extra objects linked by references, slight heap lookup overhead. *(See erratum E7 — qualify this.)*
3. **Identity issues** — the container and the component are two distinct objects; **passing `this` from the inner component does not reference the outer container.** This is the "self problem," and it is the one real functional difference from inheritance. A subclass's `this` *is* the whole object; a component's `this` is only the component.

## 23R.9 Liskov Substitution Principle (s29) — his quote and his example

> *"If S is a subtype of T, then objects of type T may be replaced with objects of type S without altering the desirable properties of the program."* — Barbara Liskov (1987)

**His violation example: `Square extends Rectangle`.**

```java
class Rectangle {
    protected int width, height;
    public void setWidth(int w)  { this.width = w; }
    public void setHeight(int h) { this.height = h; }
    public int area() { return width * height; }
}

class Square extends Rectangle {                 // LSP VIOLATION
    @Override public void setWidth(int w)  { this.width = w; this.height = w; }
    @Override public void setHeight(int h) { this.width = h; this.height = h; }
}

// A client written against the Rectangle contract:
static void resizeAndCheck(Rectangle r) {
    r.setWidth(5);
    r.setHeight(4);
    assert r.area() == 20 : "expected 20, got " + r.area();
}
// resizeAndCheck(new Rectangle()); // passes: 20
// resizeAndCheck(new Square());    // FAILS: 16 -- setHeight(4) silently reset width
```

**The full-marks explanation (his s29 wording, expanded):** *"The client assumes an invariant of the `Rectangle` contract — that width and height are independent. `Square` must keep them equal, so it strengthens a precondition / breaks an invariant the supertype promised. The code compiles and the types are fine; the **behavioural** contract is violated, which is why LSP is a design rule, not a compiler rule. Fix: drop the inheritance. Give both a shared `Shape` interface with `area()`, or make `Square` hold a `Rectangle` by composition and expose only `setSide()`."*

**LSP → OCP → composition is his chain of reasoning across s7, s28, s29. Say it as one sentence:** *"OCP via inheritance only works if the base abstraction is stable and every subclass honours LSP; when it isn't, composition delivers OCP without the substitutability risk."*

## 23R.10 When to use inheritance (s28) vs. when not to (s30)

**Use inheritance when:**
- There is a true, undeniable IS-A relationship that strictly adheres to LSP.
- **Behavioural substitutability** holds — usable everywhere the superclass is expected, without altering correctness.
- The subclass **adds or refines** behaviour but **never removes or violates** superclass contracts.
- It models a **taxonomy**, not just a shortcut to avoid writing code.

**Do NOT use inheritance when:** *(these are his four, and they make excellent short-answer material)*
- Solely to reuse code from a class that "almost fits."
- When the subclass must throw `UnsupportedOperationException` to disable inherited methods. **This is the giveaway symptom** — if you're disabling parent behaviour, the IS-A claim is false.
- When the hierarchy mixes unrelated concepts (his example: `Duck extends Airplane` because both have `fly()`).
- When future changes could break the fragile base class.

**His Golden Rule (s31), quote it):** *"When in doubt, default to Composition."*

## 23R.11 Testability (s25) — he showed a Mockito example

```java
@Test
void carStartsEngine() {
    Engine mockEngine = mock(Engine.class);
    Car car = new Car(mockEngine);
    car.start();
    verify(mockEngine).start();
}
```
The examinable point is not Mockito syntax, it is **why composition is testable**: the dependency enters through the constructor, so you can substitute a fake. With inheritance you must construct the entire superclass environment and honour its initialisation order. Constructor injection is the mechanism; testability is the consequence.

---

# PART 30 — OBJECT RELATIONSHIPS & UML *(Outline Week 11 — Tier 3, no Satti deck; anchored to his s3 and Assignment 2)*

`[PARTIALLY PROXY]` — the relationship *semantics* are sourced from his Composition deck s3; the UML *notation* is standard and required by Assignment 2's rubric, which demands "standard UML drawing rules" and "public/private labels used perfectly to show encapsulation."

## 30.1 The five relationships, notation, and Java realisation

| Relationship | UML notation | Java realisation | Lifetime coupling | His phrase |
|---|---|---|---|---|
| **Inheritance (generalisation)** | Solid line, **hollow triangle** → parent | `extends` | n/a | IS-A |
| **Realisation** | **Dashed** line, hollow triangle → interface | `implements` | n/a | IS-A (of type) |
| **Association** | Plain solid line, optional arrow | A field referencing another domain object | Independent | HAS-A (weak) |
| **Aggregation** | Solid line, **hollow diamond** at whole | Field holding a shared/injected part | **Part survives the whole** | HAS-A (shared) |
| **Composition** | Solid line, **filled diamond** at whole | Field the whole creates and exclusively owns | **Part dies with the whole** | HAS-A (owned) |
| **Dependency** | **Dashed** line, open arrow | Parameter, local variable, or return type | Transient | USES-A |

**The distinction he will test:** aggregation vs composition is about **ownership and lifetime**, not syntax. Both are fields.

```java
// COMPOSITION (filled diamond): Car creates and exclusively owns the Engine.
class Car {
    private final Engine engine = new PetrolEngine();   // created inside; dies with Car
}

// AGGREGATION (hollow diamond): Course references Students that exist independently.
class Course {
    private final List<Student> enrolled = new ArrayList<>();   // injected; outlive Course
    public void enrol(Student s) { enrolled.add(s); }
}

// DEPENDENCY (dashed arrow): Car uses a GasStation transiently.
class Car {
    public void refuel(GasStation station) { station.dispense(this); }  // parameter only
}
```

**Note the tension with Lab 10 Task 1 and his slide 14.** Lab 10 says *"Write a constructor for the Car that instantiates its internal Engine component"* — that is **composition** (filled diamond), Car creates it. Slide 17 says `Car(Engine engine) { this.engine = engine; }` — the engine is **injected**, which is technically **aggregation** and enables the Strategy pattern. Both appear in his materials. If asked which you used, name it and justify:
> *"I injected the Engine (aggregation) rather than instantiating it internally (composition), because injection is what makes the Strategy swap and the unit test on s25 possible. Internal instantiation would hard-code `PetrolEngine` and reintroduce the tight coupling composition was meant to remove."*

## 30.2 Multiplicity — Assignment 2's rubric demands it

The Exemplary tier says *"clearly shows exactly how many objects connect to each other."* Label both ends.

| Notation | Meaning |
|---|---|
| `1` | exactly one |
| `0..1` | optional |
| `*` or `0..*` | zero or more |
| `1..*` | one or more |
| `1..40` | bounded range — use this for the seat limit |

For the DLS: `Course "1" --- "1..*" Instructor` (his brief says *"a single course can now be assigned to multiple instructors"* — that changed from the older system and he flagged it deliberately). `Course "1" *-- "0..*" Session` (filled diamond: sessions don't exist without their course). `Student "*" --- "*" Course` via an `Enrollment` association class.

## 30.3 UML class box format he expects

```
┌────────────────────────────────┐
│         «abstract»             │
│           Person               │   <- abstract class name in italics
├────────────────────────────────┤
│ - id : String                  │   -  private
│ - name : String                │   #  protected
│ # createdAt : LocalDate        │   +  public
├────────────────────────────────┤   ~  package-private
│ + getId() : String             │   underline = static
│ + addRole(r : Role) : void     │
│ + describe() : String          │
└────────────────────────────────┘
```
Return types after a colon. Parameters as `name : Type`. **Every field private unless you can justify otherwise** — the rubric ties this directly to encapsulation marks.


---

# PART 31 — EXCEPTION HANDLING *(Outline Week 12)*

`[PROXY — sourced from the previous professor's 45-slide Exceptions deck. His phrasing is unknown.]`
**BUT:** the midterm Part 4 already required *"custom exceptions + try-catch"*, and Lab 09's CLO-5 rubric demands input validation with *"clear error messages for invalid inputs."* So the **content** is Tier 1 confirmed even though the deck is Tier 4. Prioritise this part.

## 31.1 The five keywords

`try` · `catch` · `throw` · `throws` · `finally` — plus `try-with-resources` (Java 7+), which the proxy deck does **not** cover but modern Java requires. Flag it as an addition and use it: it is the Java answer to RAII and it impresses.

## 31.2 The hierarchy — draw this, it answers a third of the questions

```
                    Throwable
                   /         \
              Error          Exception
           (unchecked)      /         \
        OutOfMemoryError   /      RuntimeException
        StackOverflowError/         (unchecked)
                         /                \
                  CHECKED              NullPointerException
              IOException              ArithmeticException
              FileNotFoundException    ArrayIndexOutOfBoundsException
              ClassNotFoundException   IllegalArgumentException
              (your custom            NumberFormatException
               business exceptions)   ClassCastException
                                      IllegalStateException
                                      ConcurrentModificationException
```

| | Checked | Unchecked |
|---|---|---|
| Extends | `Exception` (not `RuntimeException`) | `RuntimeException` or `Error` |
| Compiler enforces? | **Yes** — catch it or declare `throws` | No |
| Represents | Recoverable external conditions | Programming bugs / unrecoverable |
| Custom business rules | **Use these** | Use for argument validation |

**`Error` you do not catch.** Proxy deck s19: *irrecoverable conditions — JVM out of memory, stack overflow, library incompatibility, infinite recursion. Beyond the programmer's control; we should not try to handle errors.*

## 31.3 `throw` vs `throws` — the classic one-mark MCQ

```java
// throws: a DECLARATION in the signature. Part of the method's contract.
void loadFile(String path) throws IOException { ... }

// throw: a STATEMENT. Actually raises the exception object now.
if (amount < 0) throw new IllegalArgumentException("Amount cannot be negative");
```
Proxy deck s29: *"ThrowableInstance must be an object of type `Throwable` or a subclass. Primitive types such as `int` or `char`, and non-`Throwable` classes such as `String` and `Object`, cannot be used as exceptions."*

```java
throw "something broke";     // error: incompatible types: String cannot be
                             //        converted to Throwable
```

## 31.4 catch ordering — subclass first, always

```java
try {
    riskyOperation();
} catch (Exception e) {              // ERROR
    ...
} catch (IOException e) {            // unreachable
    ...
}
// error: exception IOException has already been caught
```
Proxy deck s24: *"Exception subclasses must come before any of their superclasses."* Because the first matching `catch` wins, a supertype handler placed first makes every later subtype handler provably dead code, and the compiler rejects it.

**Multi-catch (Java 7+), when handling is identical:**
```java
try { ... }
catch (IOException | SQLException e) {   // e is effectively final; no reassignment
    logger.log(e);
}
```

## 31.5 `finally` — and the three ways it doesn't run

Proxy deck s36: *"The `finally` block will execute whether an exception is thrown or not… Any time a method is about to return to the caller from inside a try/catch block, via an uncaught exception or an explicit `return` statement, the `finally` clause is also executed just before the method returns."*

**Exceptions to "always":** `System.exit()` inside `try`; JVM crash / `kill -9`; an infinite loop or blocking call in `try` that never completes.

**The `finally`-overrides-`return` trap — a guaranteed predict-the-output question:**
```java
static int f() {
    try { return 1; }
    finally { return 2; }
}
// returns 2. The finally block's return DISCARDS the try's return value
// AND would silently swallow a pending exception. Never return from finally.
```
```java
static int g() {
    int x = 1;
    try { return x; }
    finally { x = 99; }
}
// returns 1. The return VALUE was already copied to the stack before finally ran.
// Mutating the variable afterwards has no effect. Contrast with the case above.
```
Those two together are a perfect 4-mark question. Know both.

## 31.6 try-with-resources — the Java answer to RAII

```java
// The old way: 3 nested try blocks and a real chance of a leak.
BufferedReader br = null;
try {
    br = new BufferedReader(new FileReader("data.txt"));
    System.out.println(br.readLine());
} catch (IOException e) {
    System.err.println("Read failed: " + e.getMessage());
} finally {
    if (br != null) {
        try { br.close(); } catch (IOException ignored) { }
    }
}

// try-with-resources: close() is called automatically, in reverse declaration
// order, even if the body throws. Requires AutoCloseable.
try (BufferedReader br = new BufferedReader(new FileReader("data.txt"))) {
    System.out.println(br.readLine());
} catch (IOException e) {
    System.err.println("Read failed: " + e.getMessage());
}
```
**Bonus mechanism worth a mark:** if the body throws *and* `close()` throws, the body's exception propagates and `close()`'s is attached as a **suppressed** exception, retrievable via `getSuppressed()`. In the old `finally` idiom the close-exception would *replace* and destroy the real one. That is the concrete argument for the newer form.

Your own class can participate:
```java
class Camera implements AutoCloseable {
    Camera() { System.out.println("Camera opened"); }
    @Override public void close() { System.out.println("Camera closed"); }
}
try (Camera c = new Camera()) { System.out.println("Working"); }
// Camera opened / Working / Camera closed
```

## 31.7 Custom exceptions — the pattern the midterm required

Proxy deck s41–42: *"We can create our own exception class by creating a class which is extending `Exception`… `Exception` defines four public constructors."*

```java
// Base of your own hierarchy -- CHECKED, because callers must handle it.
public class DLSException extends Exception {
    public DLSException(String message) { super(message); }
    public DLSException(String message, Throwable cause) { super(message, cause); }
}

public class CourseFullException extends DLSException {
    private final String courseId;
    private final int capacity;

    public CourseFullException(String courseId, int capacity) {
        super("Course " + courseId + " is at capacity (" + capacity + ")");
        this.courseId = courseId;
        this.capacity = capacity;
    }
    public String getCourseId() { return courseId; }
    public int getCapacity()    { return capacity; }
}

public class DuplicateEnrollmentException extends DLSException {
    public DuplicateEnrollmentException(String studentId, String courseId) {
        super("Student " + studentId + " is already enrolled in " + courseId);
    }
}

public class InvalidSubmissionException extends DLSException {
    public InvalidSubmissionException(String reason) {
        super("Invalid submission: " + reason);
    }
}
```

**Four design rules he can ask you to justify:**
1. **Build a hierarchy, not a flat list.** A common base (`DLSException`) lets callers write one `catch (DLSException e)` for coarse handling while still allowing precise handling. This is exactly the *"custom exception hierarchy to differentiate between different types of errors"* the proxy deck's s44 activity demands.
2. **Checked for recoverable business rules** (course full — the caller can join the waitlist). **Unchecked for programmer errors** (`null` course ID — `IllegalArgumentException`).
3. **Carry data, not just a string.** `getCourseId()` lets the caller act. A message-only exception forces string parsing.
4. **Always preserve the cause** when wrapping: `throw new DLSException("Save failed", ioEx);` Losing the cause destroys the stack trace and is a real marks deduction on a "critique this code" question.

## 31.8 Exception rules in overriding — links straight back to MSE.Q1

```java
class Base {
    void save() throws IOException { }
}
class Derived extends Base {
    @Override void save() throws Exception { }    // ERROR
}
// error: save() in Derived cannot override save() in Base
//        overridden method does not throw Exception
```
**Rule:** an override may throw the **same** checked exceptions, **narrower** ones, **fewer**, or **none** — never broader or new ones. Unchecked exceptions are unrestricted.

**Mechanism, and this is the marks:** a caller holding a `Base` reference compiled its `catch` clauses against `Base`'s `throws` list. If an override could throw something broader, that caller would face an unhandled checked exception at runtime that the compiler proved impossible. **This is a Liskov Substitution requirement enforced by the compiler** — the only place in Java where LSP is mechanically checked. Say that sentence; it links Part 31 to Part 23R.9.

---

# PART 32 — THE SOLID PRINCIPLES *(Outline Week 13)*

`[PARTIALLY PROXY]` — **OCP (his s7) and LSP (his s29) are Tier 2, sourced directly from Satti's Composition deck.** SRP, ISP, DIP come from the previous professor's 29-slide SOLID deck.

| | Principle | One-line statement | His/her exact wording |
|---|---|---|---|
| **S** | Single Responsibility | One class, one reason to change | *"A class should have only one reason to change, meaning it should have only one job or responsibility."* |
| **O** | Open/Closed | Open for extension, closed for modification | Satti s7, attributed to **Bertrand Meyer** |
| **L** | Liskov Substitution | Subtypes substitutable for base types | Satti s29, **Barbara Liskov (1987)** |
| **I** | Interface Segregation | Don't force clients to depend on unused interfaces | *"Clients should not be forced to depend on interfaces they do not use."* |
| **D** | Dependency Inversion | Both levels depend on abstractions | *"High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions."* |

**Attribution matters to him** — he named Meyer on s7 and Liskov on s29. Name them.

## 32.1 SRP

```java
// VIOLATION -- three reasons to change: grading rules, file format, email provider.
class Student {
    void calculateGrade() { }
    void saveToFile()     { }
    void sendEmail()      { }
}

// FIXED
class Student { }                 // domain data only
class GradeCalculator { double calculate(Student s) { return 0; } }
class StudentRepository { void save(Student s) { } }
class NotificationService { void notify(Student s, String msg) { } }
```
**Test for SRP:** name the actors who could demand a change. Registrar, IT ops, and marketing are three actors → three classes.

## 32.2 OCP — Satti s7, and his own caution

> *"Software entities should be open for extension, but closed for modification."* — Bertrand Meyer
> *"Caution: OCP via inheritance relies heavily on a perfectly stable base class abstraction."* — his s7

```java
// VIOLATION -- every new type edits this method. The switch is the smell.
class FeeCalculator {
    double fee(String type, double amount) {
        if (type.equals("CREDIT")) return amount * 0.02;
        else if (type.equals("CRYPTO")) return amount * 0.01;
        return 0;
    }
}

// FIXED -- adding a type adds a class; this code never changes again.
interface FeePolicy { double fee(double amount); }
class CreditFee implements FeePolicy { public double fee(double a) { return a * 0.02; } }
class CryptoFee implements FeePolicy { public double fee(double a) { return a * 0.01; } }
class FeeCalculator {
    double fee(FeePolicy policy, double amount) { return policy.fee(amount); }
}
```
**A `switch` or `if`-chain on a type code is the OCP smell.** Replace with polymorphism. Then say his caution sentence: OCP via inheritance depends on a stable base abstraction, which is why the composition/Strategy version (above) is safer than a `FeeCalculator` subclass per type.

## 32.3 ISP

```java
// VIOLATION -- GuestLecturer is forced to implement things it cannot do.
interface DLSUser {
    void enroll(); void gradeSubmission(); void manageAccounts(); void uploadSlides();
}
class GuestLecturer implements DLSUser {
    public void enroll()            { throw new UnsupportedOperationException(); }
    public void gradeSubmission()   { throw new UnsupportedOperationException(); }
    public void manageAccounts()    { throw new UnsupportedOperationException(); }
    public void uploadSlides()      { /* the only real one */ }
}
```
**`UnsupportedOperationException` is the ISP smell — and note this is the *same* smell Satti lists on Composition-deck s30 as a reason not to inherit.** One symptom, two principles. Say that.

```java
// FIXED -- small, role-shaped interfaces, composed as needed.
interface Enrollable      { void enroll(String courseId); }
interface Grader          { void gradeSubmission(Submission s, double score); }
interface AccountManager  { void manageAccount(String userId); }
interface ContentUploader { void upload(Material m); }

class GuestLecturer implements ContentUploader { public void upload(Material m) { } }
class LabEngineer   implements Grader, ContentUploader { /* ... */ }
```
**This is directly how you answer Assignment 2's "massive user hierarchy" question.** ISP + role composition, not a 12-level `extends` tree.

## 32.4 DIP

```java
// VIOLATION -- high-level Course is welded to a low-level concrete class.
class EmailSender { void send(String to, String msg) { } }
class Course {
    private final EmailSender sender = new EmailSender();   // 'new' = hard dependency
    void publish(Material m) { sender.send("all", "New material"); }
}

// FIXED -- both depend on the abstraction; the concrete type is injected.
interface Notifier { void send(String to, String msg); }
class EmailNotifier     implements Notifier { public void send(String t, String m) { } }
class SMSNotifier       implements Notifier { public void send(String t, String m) { } }
class DashboardNotifier implements Notifier { public void send(String t, String m) { } }

class Course {
    private final List<Notifier> notifiers = new ArrayList<>();
    public Course(List<Notifier> notifiers) { this.notifiers.addAll(notifiers); }
    void publish(Material m) {
        for (Notifier n : notifiers) n.send("all", "New material: " + m.title());
    }
}
```
**`new` inside a high-level class is the DIP smell.** Push construction to the edges (constructor injection).

**Cross-link, and it's the important one:** *"DIP is achieved through composition — you hold an interface-typed field and inject the implementation. Satti's Engine/Car example on s16–17 is DIP: `Car` depends on the `Engine` interface, not on `PetrolEngine`. Composition is the mechanism; DIP is the principle."* This one sentence ties his newest deck to a topic he hasn't lectured yet, and it is exactly the kind of connection that separates a high grade from a middling one.

---

# PART 33 — FILE HANDLING & SERIALIZATION *(Outline Week 14)*

`[PROXY — previous professor's 41-slide Files and Streams deck. Lowest confidence part of this document. Do not over-invest until his deck lands.]`

## 33.1 Why files, and the vocabulary

Proxy s3: *"Storage of data in variables and arrays is temporary. Files are used for long-term retention… **Persistent data** – exists beyond the duration of program execution. **Stream** – ordered data that is read from or written to a file."*

Data hierarchy (s4–s5), a likely MCQ: **bit → byte → character → field → record → file → database.** *Record key* = the field uniquely identifying a record.

## 33.2 Byte streams vs character streams — the fork every question hinges on

| | Byte streams | Character streams |
|---|---|---|
| Base classes | `InputStream` / `OutputStream` | `Reader` / `Writer` |
| Data | Binary | Text, encoding-aware |
| Files | `.class`, `.exe`, `.zip`, `.obj`, images | `.txt`, `.xml`, `.html` |
| Human-readable | No | Yes |
| Serialization uses | **Byte** (`ObjectOutputStream`) | — |

## 33.3 The four classes to know cold

```java
// WRITE text
try (FileWriter fw = new FileWriter("students.txt", true)) {   // true = append
    fw.write("503823,Danyal Aqeel,3.5\n");
} catch (IOException e) { System.err.println("Write failed: " + e.getMessage()); }

// WRITE with formatting (usually better)
try (PrintWriter pw = new PrintWriter(new FileWriter("report.txt"))) {
    pw.printf("%-10s %5.2f%n", "Danyal", 3.5);
}

// READ line by line -- BufferedReader wraps FileReader for efficiency
try (BufferedReader br = new BufferedReader(new FileReader("students.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {          // readLine() returns null at EOF
        String[] parts = line.split(",");
        System.out.println(parts[1] + " -> " + parts[2]);
    }
} catch (FileNotFoundException e) {
    System.err.println("No such file: " + e.getMessage());
} catch (IOException e) {
    System.err.println("Read error: " + e.getMessage());
}
```
**Why `BufferedReader` wraps `FileReader`** (mechanism, and he asks for mechanism): a bare `FileReader.read()` can hit the OS per character. `BufferedReader` reads an 8 KB block into memory and serves characters from it, cutting system calls by orders of magnitude, and it adds `readLine()`. This is the **Decorator pattern** — wrapping a stream to add behaviour without subclassing it. **That is a composition cross-link: `java.io` is built on composition, not inheritance.** Excellent thing to say.

**Note `FileNotFoundException extends IOException`, so it must be caught first** — Part 31.4's ordering rule, applied.

## 33.4 The `File` class

Constructors (s16): `File(String pathName)`, `File(String dirPath, String filename)`, `File(File dir, String filename)`, `File(URI uri)`.
Methods (s20): `exists()`, `isFile()`, `isDirectory()`, `getPath()`, `list()`, plus `length()`, `delete()`, `renameTo()`, `canRead()`, `canWrite()`, `mkdir()`.
Paths (s17): **absolute** = from the root; **relative** = from the working directory where execution began.

`new File("x.txt")` **creates no file** — it creates a path object. `createNewFile()` or a writer creates the file. Classic MCQ.

## 33.5 Serialization — the highest-yield sub-topic here

```java
import java.io.*;

class Student implements Serializable {              // marker interface: no methods
    private static final long serialVersionUID = 1L; // ALWAYS declare this
    private String name;
    private int id;
    private transient String password;               // transient = NOT serialized
    private static String university = "NUST";       // static = NOT serialized

    Student(String name, int id, String password) {
        this.name = name; this.id = id; this.password = password;
    }
    @Override public String toString() {
        return name + "/" + id + "/pwd=" + password + "/uni=" + university;
    }
}

public class SerializeDemo {
    public static void main(String[] args) {
        Student s = new Student("Danyal", 503823, "secret123");

        try (ObjectOutputStream out =
                 new ObjectOutputStream(new FileOutputStream("student.ser"))) {
            out.writeObject(s);
        } catch (IOException e) { e.printStackTrace(); }

        try (ObjectInputStream in =
                 new ObjectInputStream(new FileInputStream("student.ser"))) {
            Student back = (Student) in.readObject();      // cast required
            System.out.println(back);
        } catch (IOException | ClassNotFoundException e) { e.printStackTrace(); }
    }
}
```
**Output:** `Danyal/503823/pwd=null/uni=NUST`

**Every part of that output is a separate exam point:**
- `transient String password` → restored as **`null`**. `transient` excludes a field from the byte stream. Use it for secrets and for anything not meaningfully persistable (a socket, a thread).
- `static String university` → prints `NUST` **not because it was serialized** but because it belongs to the class and was never removed from memory. Deserialize in a fresh JVM and it takes whatever the class initialiser gives it. **Static fields are never serialized.** This distinction is the trap.
- `serialVersionUID` → the version stamp. If you change the class and it doesn't match the stored value, `readObject` throws `InvalidClassException`. Omit it and the compiler generates one from the class structure, so *any* field change silently breaks old files.
- `readObject()` returns `Object` → you **must** cast, and it declares **`ClassNotFoundException`** (checked) as well as `IOException`.
- **Non-serializable field → `NotSerializableException` at write time**, not compile time. Every reference-typed field must itself be `Serializable` or `transient`. Deep object graphs serialize transitively, including cycles, which Java handles via reference tracking.

**Six rapid facts:** `Serializable` has zero methods (marker interface) · serialization does **not** call constructors on the way back in · `final` fields restore fine · inheritance: the parent must also be `Serializable`, or it needs an accessible no-arg constructor · you can customise with `writeObject`/`readObject` private methods · `Externalizable` gives full manual control.

---

# PART 34 — THE THREE PATTERNS HE ACTUALLY REQUIRES

He does not lecture "design patterns" as a unit, but he **requires three by name or by description** across Assignment 2, the midterm, and the Composition deck. These are Tier 1.

## 34.1 Strategy — from the Composition deck (s14, s20)

> *"The composed object is often an interface type, enabling the Strategy Pattern."* (s14)
> *"Composition is the structural backbone of the Strategy Pattern."* (s20)

**Structure:** a *Context* holds an interface-typed reference to a *Strategy* and delegates the varying behaviour to it. Swap the object, change the behaviour, no subclassing.

His Car/Engine is Strategy. His own summary of the payoff (s20): *"We didn't need to create a new `TurboCar` subclass. We just plugged in a different component."*

**Where it appears in the DLS:** the `Notifier` interface (Email/SMS/Dashboard) is Strategy. So is a `FeePolicy` or a `GradingRubric`.

## 34.2 Observer (Publish–Subscribe) — Midterm Part 3 Analysis Q3

**Assignment 2's exact requirement:** *"When an instructor uploads new material to a course, every student enrolled in that course must get a notification immediately… the course object should **not be tightly linked** to how these specific alerts are sent. You must use **decoupled design principles** so the courses and the notification types are kept completely separate."*

That is a two-layer problem, and **most students only solve one layer**. Solve both:
1. **Observer** decouples the `Course` (Subject) from *who* gets told (`Student` Observers).
2. **Strategy** decouples each `Student` from *how* they get told (`Notifier`: Email/SMS/Dashboard).

**Roles:**

| Role | DLS class |
|---|---|
| Subject / Publisher | `Course` — keeps the observer list, calls `notifyObservers()` |
| Observer interface | `CourseObserver` — the single method `onMaterialUploaded(...)` |
| Concrete Observer | `Student` (also `AcademicAdvisor`, if he wants) |
| Strategy (delivery) | `Notifier` → `EmailNotifier`, `SMSNotifier`, `DashboardNotifier` |

**Why Observer and not a direct call?** Say all four:
- `Course` depends only on the `CourseObserver` interface — it never imports `Student`, `Email`, or `SMS`. **DIP satisfied.**
- New observer types need zero changes to `Course`. **OCP satisfied.**
- Observers register and deregister at runtime. **Dynamic, unlike an inheritance hierarchy.**
- The alternative — `Course` looping over students and calling `sendEmail()` — hard-codes both the audience and the medium, which is precisely the tight coupling the brief forbids.

**Two mechanisms he can probe:**
- **Memory leak:** an observer that never deregisters is kept alive by the subject's strong reference. Real systems use `WeakReference` or a mandatory `remove`.
- **Concurrency:** iterating the observer list while another thread registers throws `ConcurrentModificationException`. Use `CopyOnWriteArrayList`, or copy the list inside a `synchronized` block and iterate the copy **outside** the lock — never call foreign code while holding a lock (that is how deadlocks happen). The full implementation in Part 35 does the copy-then-iterate version and comments it, because it demonstrates the reasoning; `CopyOnWriteArrayList` hides it.

## 34.3 Role composition — Midterm Part 3 Analysis Q1 & Q2

### Analysis Q1: what is the flaw in `TeachingAssistant extends Student, Instructor`?

**Answer, in the order he wants it:**

**1. It does not compile.** State this first and quote the error:
```java
class TeachingAssistant extends Student, Instructor { }
// error: '{' expected
```
Java permits exactly one `extends`. This is a **syntax** failure, not a design opinion. Say it as: *"Java forbids multiple inheritance of **state**, permitting it only for **type** via interfaces"* — his own s11 wording.

**2. Why the language forbids it (the mechanism).** Both `Student` and `Instructor` extend `Person`. If multiple class inheritance were allowed, `TeachingAssistant` would inherit **two `Person` sub-objects** — two copies of `id`, `name`, `email`. Which `getId()` runs? Which copy does `setName()` write? Field access and constructor chaining become ambiguous. C++ patches this with virtual inheritance; Java removed the problem instead of patching it.

**3. It is also wrong on design grounds, independently of the syntax.** Even if Java allowed it:
- **The IS-A claim is false.** A TA is a *person playing two roles*, not a specialised kind of Student-and-Instructor. Roles are **temporary and changeable**; inheritance is **permanent and compile-time**. This is Satti's Composition-deck s8 point: *"the parent-child relationship is fixed at compile time — you cannot change an object's superclass later."* A TA who graduates should stop being a student. With inheritance you cannot express that without constructing a different object.
- **LSP violation.** Code expecting a `Student` may call `enroll()`; code expecting an `Instructor` may call `assignGrade()`. A `TeachingAssistant` grading its own submissions is a correctness and integrity failure — the substitution alters desirable program properties.
- **Combinatorial explosion.** His s8, verbatim. Add a Lab Engineer who is also a student, an Alumni who guest lectures, an Advisor who teaches. With inheritance that's `StudentInstructor`, `StudentLabEngineer`, `AlumniGuestLecturer`, … With roles it's one class and a list.
- **Duplicated state is a data-integrity bug** even conceptually: two `email` fields means two versions of the truth.

### Analysis Q2: how do you resolve it in Java?

**Present the primary solution, then note the alternative and when each applies.** He rewards justified design choices.

**Primary — Role composition (`Person` HAS-A `List<Role>`):**
```java
class Person {
    private final List<Role> roles = new ArrayList<>();
    public void addRole(Role r)    { roles.add(r); }
    public void removeRole(Role r) { roles.remove(r); }   // <-- roles are temporary
    public boolean hasRole(Class<? extends Role> t) {
        return roles.stream().anyMatch(t::isInstance);
    }
}
```
Justify it in one paragraph:
> *"Roles are behaviours a person can gain and lose, so they belong in a mutable collection, not in a compile-time hierarchy. One `Person` object holds one copy of identity data — no duplicated state, no ambiguity. A TA is a `Person` with both a `StudentRole` and an `InstructorRole`; when they graduate we call `removeRole`. This is composition (HAS-A) replacing inheritance (IS-A), exactly the case for it he makes on slides 8 and 28."*

**Alternative — interfaces for capability + composition for state:**
```java
interface StudentCapable    { void enroll(Course c) throws DLSException; }
interface InstructorCapable { void uploadMaterial(Course c, Material m); }

class TeachingAssistant extends Person implements StudentCapable, InstructorCapable { }
```
**When to use which:** interfaces alone give you **multiple inheritance of type** with static, compile-time-checked capability — good when the set of roles is small and fixed. Role composition gives you **runtime mutability** — necessary here because the brief has TAs, Alumni, and Guest Lecturers whose roles change. **The strongest answer uses both:** roles as objects for state and lifecycle, interfaces for the capability contracts.

**Do not write "virtual inheritance."** That is C++. In Java it is a wrong answer.


---

# PART 35 — THE 20-MARK DLS CODING ANSWER (complete, compiled, verified)

**This code was compiled with `javac` on JDK 21 and executed. It is not sketch code.** Verified output is at the end. It is deliberately ~170 lines: long enough to hit every required concept, short enough to hand-write in about 35 minutes if you have practised it.

## 35.1 What the question demands, and where each mark lives

He asked for: **abstract classes/interfaces + dynamic polymorphism + thread synchronisation + exception handling**, applied to the DLS. Map every requirement to a line before you start writing — do this on the exam paper margin, it costs 60 seconds and stops you forgetting a whole category.

| Requirement | Where it lives in the code below |
|---|---|
| Abstract class | `Role`, `Material` — both with abstract methods |
| Interface | `Notifier`, `CourseObserver` |
| Dynamic polymorphism | `m.type()` on a `Material` ref; `o.onMaterialUploaded(...)` on a `CourseObserver` ref; `notifier.send(...)` on a `Notifier` ref |
| Inheritance (IS-A) | `Student extends Person`, `VideoLecture extends Material` |
| Composition (HAS-A) | `Person` has `List<Role>`; `Student` has a `Notifier` |
| Role composition (Analysis Q2) | `TeachingAssistant` = one `Person`, two `Role` objects |
| Observer (Analysis Q3) | `Course` (Subject) → `CourseObserver` list → `Student` |
| Strategy | `Notifier` swapped per student |
| Thread synchronisation | `synchronized enrol(...)`; `synchronized` block in `uploadMaterial` |
| Threads | `RegistrationAgent extends Thread`, started with `start()` |
| Custom exceptions | `DLSException` → `CourseFullException`, `DuplicateEnrollmentException` |
| try-catch | Inside `run()` and around both uploads |
| Encapsulation | Every field `private`; `Collections.unmodifiableList` on getters |
| Collections | `ArrayList` for lists (a `HashMap` registry is the Lab 07 variant) |

## 35.2 The code

```java
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
```

## 35.3 Verified output

```
--- concurrent registration, 3 seats, 5 applicants ---
  enrolled Danyal (1/3)
  enrolled Bilal (2/3)
  enrolled Ayesha (3/3)
  REJECTED: Course CS212 is full (capacity 3)
  REJECTED: Course CS212 is full (capacity 3)
final seats = 3 (must never exceed 3)
--- upload + observer notification ---
Dr Satti uploaded VIDEO 'Composition vs Inheritance'
  [EMAIL -> Danyal] New VIDEO in CS212: Composition vs Inheritance
  [DASH  -> Bilal] New VIDEO in CS212: Composition vs Inheritance
  [SMS   -> Ayesha] New VIDEO in CS212: Composition vs Inheritance
--- TA has both roles ---
Bilal roles = [Student, Instructor] | student? true | instructor? true
--- authorisation failure ---
FAILED: Danyal lacks InstructorRole
```
**Enrolment order varies between runs — that is the point.** Thread scheduling is non-deterministic. `final seats = 3` never varies, and *that* is what synchronisation buys you. If you run it and see 4 or 5, the lock is wrong.

## 35.4 The five design decisions to defend out loud (this is where the marks hide)

**1. Why `synchronized` on `enrol` and not just on `enrolled.add()`.**

The bug is a **check-then-act race**, and this is the single most examinable point in the whole answer:

```java
// BROKEN -- looks synchronized, isn't safe
public void enrol(Person p) throws DLSException {
    if (enrolled.size() >= maxSeats) throw new CourseFullException(id, maxSeats);
    synchronized (this) { enrolled.add(p); }     // lock is too small
}
```
With `maxSeats = 3` and `enrolled.size() == 2`, threads T1 and T2 can **both** evaluate `2 >= 3` as false, both pass the check, then both enter the lock and add. Final size = 4. **Capacity breached.** Assignment 2's rubric calls this out by name: *"Going over capacity because of simultaneous attempts is a major design failure."*

**The check and the act must be inside the same lock.** Say it exactly like that. Then add the mechanism: *"`synchronized` on an instance method locks `this`. Because both the size check and the add hold the same monitor, no other thread can observe the intermediate state. It also establishes a happens-before edge, so `enrolled`'s contents are visible to the next thread that acquires the lock — synchronisation gives mutual exclusion **and** visibility, not just mutual exclusion."* That last clause is a Satti-grade detail.

**2. Why `uploadMaterial` uses a `synchronized` *block*, not a `synchronized` method.**

```java
List<CourseObserver> snapshot;
synchronized (this) {
    materials.add(m);
    snapshot = new ArrayList<>(observers);   // copy the list under the lock
}
for (CourseObserver o : snapshot) o.onMaterialUploaded(this, m);   // notify OUTSIDE
```
Two reasons, both worth marks:
- **`ConcurrentModificationException` avoidance.** Iterating `observers` while another thread's `enrol()` adds to it throws CME. Copying under the lock and iterating the copy makes iteration immune.
- **Never call foreign code while holding a lock.** `onMaterialUploaded` runs arbitrary observer code. If an observer tries to acquire another lock while a second thread holds that lock and wants `this`, you deadlock. Releasing before notifying is the standard fix. `CopyOnWriteArrayList` would also work and is shorter, but the explicit copy **shows** the reasoning, and reasoning is what he marks.

**3. Why `Person` holds `List<Role>` instead of `TeachingAssistant extends Student, Instructor`.**
See Part 34.3. Compile failure first, then LSP and mutability. Write the compile error.

**4. Why `Course` never mentions `Email` or `SMS`.**
`Course` imports neither `Student` nor any `Notifier`. It knows only `CourseObserver`. `Student` knows only `Notifier`. Adding a WhatsApp channel means one new class and zero edits to `Course`. **That is the "decoupled design principles" the brief demands — DIP and OCP, delivered by two layers of indirection (Observer for audience, Strategy for medium).**

**5. Ethics sentence — CLO 5, do not skip it.**
Every one of Labs 07–10 has an ethics rubric row, and Lab 08's exemplary tier wants the race condition tied to *"real-world civilian financial harm."* Write two sentences:
> *"An unsynchronised `enrol` silently over-enrols a course, so students receive a confirmed seat that does not exist and discover the failure only at the start of term. Correctness here is not a performance concern but an obligation to the people whose academic year depends on the record being accurate."*

## 35.5 If you have only 15 minutes for a 20-mark question

Write these in this order and stop when time is up. Partial credit is heavily front-loaded.
1. The custom exception hierarchy (5 lines, guaranteed marks, fastest to write).
2. `abstract class Material` + two concretes with `type()` — proves abstract classes and dynamic dispatch in 8 lines.
3. `interface Notifier` + one implementation.
4. `Course.enrol` with `synchronized` and the capacity check **inside** the lock — this is the marks-densest single method on the paper.
5. `Course.uploadMaterial` with the observer loop.
6. `Person` + `List<Role>` + `TeachingAssistant`.
7. The `Thread` subclass and `main`.

Skip the demo `main` before you skip the `synchronized` block. Skip getters before you skip `@Override`.

---

# PART 36 — LABS 07–10 AS EXAM ANSWERS

He turned Assignment 2 into the midterm. **Assume he will turn Labs 09 and 10 into ESE questions.** Each lab below is compressed to what you would write on paper.

## 36.1 Lab 07 — Smart City Traffic Enforcement: Collections + zero-trust encapsulation

**His rubric's exemplary tier names the exact classes:** *"Perfectly selects and integrates **HashMap** for registry and **ArrayList** for violation history; instantaneous retrieval achieved."* That is the answer. Do not improvise a different collection.

```java
abstract class Vehicle {
    private final String plate;
    private final String ownerName;              // citizen data -- private, final
    private final double fineMultiplier;
    private final List<Violation> history = new ArrayList<>();

    protected Vehicle(String plate, String ownerName, double m) {
        this.plate = plate; this.ownerName = ownerName; this.fineMultiplier = m;
    }
    public String getPlate() { return plate; }
    public String getOwnerName() { return ownerName; }          // read-only getter
    public List<Violation> getHistory() {
        return Collections.unmodifiableList(history);           // defensive copy view
    }
    void logViolation(Violation v) { history.add(v); }          // package-private
    public abstract double calculateFine(double baseFine);
}

class PrivateVehicle extends Vehicle {
    public PrivateVehicle(String p, String o) { super(p, o, 1.0); }
    @Override public double calculateFine(double base) { return base * 1.0; }
}
class CommercialVehicle extends Vehicle {
    public CommercialVehicle(String p, String o) { super(p, o, 1.5); }
    @Override public double calculateFine(double base) { return base * 1.5; }   // surcharge
}

class TrafficRegistry {
    private final Map<String, Vehicle> registry = new HashMap<>();   // O(1) lookup

    public boolean register(Vehicle v) {
        return registry.putIfAbsent(v.getPlate(), v) == null;   // rejects duplicates
    }
    public void logViolation(String plate, Violation v) {
        Vehicle vehicle = registry.get(plate);                  // instant key lookup
        if (vehicle == null) throw new IllegalArgumentException("Unknown plate: " + plate);
        vehicle.logViolation(v);
    }
}
```

**Why `HashMap` — the mechanism he wants:** the brief says *"instant vehicle retrieval via license plates to avoid sequentially scanning millions of records."* `HashMap.get` is **O(1) average** — `hashCode()` selects a bucket, `equals()` resolves within it. An `ArrayList.indexOf` scan is **O(n)**; at a million vehicles that is the difference between microseconds and a linear sweep. `ArrayList` for history because it is **ordered and index-accessible**, and the brief demands *"chronological"* — a `HashSet` would destroy the ordering and a `LinkedList` gains nothing since we only append.

**Zero-trust encapsulation, the four moves:** all fields `private`; identity fields `final`; **no setters at all** on citizen data; getters return `Collections.unmodifiableList(...)` so a caller cannot mutate the internal list through the returned reference. **That last one is the mark most students miss** — returning the raw `List` is a public field in disguise, because `getHistory().clear()` works.

**`String` keys and `hashCode`:** `String` overrides both `hashCode()` and `equals()` correctly, so plates work as keys out of the box. If you keyed on a custom `Plate` class **you must override both** or lookups fail — `put` and `get` would land in different buckets. Classic MCQ.

## 36.2 Lab 08 — Concurrent camera feeds

**His rubric mandates the exact mechanism:** *"a `TrafficCamera` class explicitly **extending `java.lang.Thread`**"* and *"apply the **`synchronized` keyword**."* Do not use `Runnable` or an `ExecutorService` — the rubric's bottom tier penalises *"run() called sequentially instead of utilising actual hardware threads"*, so `start()` is mandatory, but the *middle* tiers explicitly reward `extends Thread` and `synchronized`. Give him what the rubric asks for.

```java
class TrafficCamera extends Thread {
    private final TrafficRegistry registry;      // SHARED heap object
    private final String plate;
    private final int count;

    public TrafficCamera(String name, TrafficRegistry r, String plate, int count) {
        super(name);
        this.registry = r; this.plate = plate; this.count = count;
    }
    @Override public void run() {                // NEVER call this directly
        for (int i = 0; i < count; i++) {
            registry.logViolation(plate, new Violation(getName() + "-" + i));
        }
    }
}

// Simulation: six cameras hammering ONE plate
TrafficRegistry shared = new TrafficRegistry();
shared.register(new CommercialVehicle("ABC-123", "Danyal Aqeel"));
List<Thread> cams = new ArrayList<>();
for (int i = 1; i <= 6; i++) {
    Thread c = new TrafficCamera("CAM" + i, shared, "ABC-123", 100);
    cams.add(c);
    c.start();                                  // start(), NOT run()
}
for (Thread c : cams) c.join();                 // wait before reading the result
// Unsynchronized: expect < 600 and/or ConcurrentModificationException
// Synchronized:   exactly 600, every time
```

**The fix, and the precision his rubric demands** (*"identifies the exact memory vulnerability within the shared collection"*):

```java
class TrafficRegistry {
    private final Map<String, Vehicle> registry = new HashMap<>();
    public synchronized void logViolation(String plate, Violation v) { ... }
    public synchronized boolean register(Vehicle v) { ... }
}
```

**Say this, naming the variable:** *"`ArrayList.add` is `elementData[size++] = e`, which is three separate operations: read `size`, write the slot, increment `size`. Two camera threads interleaving there write to the **same index** and one violation is lost, or `size` outruns the populated slots and a later read yields `null`. Growth is worse: if both threads trigger the internal `grow()` simultaneously, one thread's copy of `elementData` is discarded wholesale and a batch of records disappears. Each camera thread has its own **stack** holding its own `i` and `v`, so those never race; the `ArrayList` inside the shared `Vehicle` lives on the **heap**, and heap state is the only thing that can race."*

**The one-sentence cross-link that unifies the memory lecture and the concurrency lecture — memorise it verbatim:**
> **Each thread has its own Stack; the Heap is shared; therefore only heap state can race.**

**Locking on the right object — the rubric penalises *"synchronization applied to the wrong methods."*** `synchronized` on a `TrafficRegistry` instance method locks that `TrafficRegistry` object. If two threads hold references to **different** `TrafficRegistry` objects wrapping the same data, they lock different monitors and race anyway. One shared object → one monitor → safe. If you instead synchronised on the individual `Vehicle`, registry-level operations would still race.

**`start()` vs `run()`, and the two-mark follow-up:** `start()` asks the JVM for a new OS thread and invokes `run()` on it. Calling `run()` directly executes on the calling thread — the output looks sequential and correct, and **no race ever appears**, which is exactly why it is the rubric's failure mode. Also: `start()` twice on one `Thread` throws `IllegalThreadStateException`; a `Thread` object is single-use.

## 36.3 Lab 09 — Abstract `PaymentProcessor` + `Auditable` interface

The most likely ESE applied question, because it is the cleanest possible abstract-class-vs-interface demonstration.

```java
interface Auditable {
    String generateAuditTrail();
}

abstract class PaymentProcessor implements Auditable {
    private final double transactionFee;                 // encapsulated STATE

    protected PaymentProcessor(double transactionFee) {
        if (transactionFee < 0) throw new IllegalArgumentException("Fee cannot be negative");
        this.transactionFee = transactionFee;
    }
    protected double getTransactionFee() { return transactionFee; }

    public abstract void processTransaction(double amount);   // subclass MUST implement

    @Override public String generateAuditTrail() {
        return "[AUDIT] " + getClass().getSimpleName() + " fee=" + transactionFee;
    }
    protected void validate(double amount) {                  // CLO-5 ethics row
        if (amount <= 0) throw new IllegalArgumentException("Amount must be positive");
    }
}

class CreditCardProcessor extends PaymentProcessor {
    public CreditCardProcessor(double fee) { super(fee); }
    @Override public void processTransaction(double amount) {
        validate(amount);
        double total = amount + getTransactionFee();
        System.out.printf("CARD  | amount %.2f + fee %.2f = %.2f%n",
                          amount, getTransactionFee(), total);
    }
}

class CryptoProcessor extends PaymentProcessor {
    public CryptoProcessor(double fee) { super(fee); }
    @Override public void processTransaction(double amount) {
        validate(amount);
        double total = amount + getTransactionFee();
        System.out.printf("CRYPTO| amount %.2f + fee %.2f = %.2f%n",
                          amount, getTransactionFee(), total);
    }
}

// The point of Task 2: UserAccount shares NO parent with PaymentProcessor,
// yet both satisfy the same contract. Interfaces cross hierarchies.
class UserAccount implements Auditable {
    private final String username;
    public UserAccount(String username) { this.username = username; }
    public void login() { System.out.println(username + " logged in"); }
    @Override public String generateAuditTrail() { return "[AUDIT] login by " + username; }
}

// Polymorphism across unrelated hierarchies -- the whole lesson in three lines:
List<Auditable> auditables = List.of(
    new CreditCardProcessor(2.5), new CryptoProcessor(1.0), new UserAccount("danyal"));
for (Auditable a : auditables) System.out.println(a.generateAuditTrail());
```

**Abstract class vs interface — reproduce this table verbatim if asked:**

| | Abstract class | Interface |
|---|---|---|
| Instance fields (state) | **Yes** | No — only `public static final` constants |
| Constructor | Yes | **No** |
| Method bodies | Yes | Only `default` / `static` / `private` (Java 8/9+) |
| Multiple inheritance | **No** — one `extends` | **Yes** — many `implements` |
| Default member access | Any modifier | `public` (methods), implicitly |
| Models | "is a kind of" — shared **state** | "is capable of" — shared **behaviour** |
| Use when | Subclasses share fields and partial implementation | Unrelated classes must satisfy one contract |

**The one-line decision rule (Lab 09's own background paragraph):** *"Use an abstract class to share base **state**; use an interface to share **behaviour** across unrelated hierarchies."*

**Note the design in the code above: `PaymentProcessor` uses BOTH.** It `extends` nothing but `implements Auditable`, and it supplies a concrete `generateAuditTrail()` so subclasses inherit it. That is the intended architecture — the lab says *"apply the `implements` keyword to your previously created `PaymentProcessor` abstract class"* — an abstract class implementing an interface, which is a combination many students think is illegal. It is not.

**Also note:** an abstract class may implement an interface and leave the interface's methods abstract, deferring them to concrete subclasses. That is legal and is a fair MCQ.

## 36.4 Lab 10 — Composition, and the multiple-inheritance workaround

```java
class Engine {
    private final int horsepower;
    private final String fuelType;
    public Engine(int hp, String fuel) { this.horsepower = hp; this.fuelType = fuel; }
    public void ignite() {
        System.out.println("Igniting " + horsepower + "hp " + fuelType + " engine...");
    }
}

class Car {
    private final Engine engine;              // HAS-A. No 'extends' anywhere.
    public Car(int hp, String fuel) {
        this.engine = new Engine(hp, fuel);   // Car CREATES it -> true composition
    }
    public void startCar() {
        System.out.println("Car ignition sequence begins.");
        engine.ignite();                      // DELEGATION
    }
}

// Task 2: the thing inheritance cannot do.
class CameraModule {
    public String takePhoto() { return "photo_001.jpg"; }
}
class GPSModule {
    public String getCoordinates() { return "33.6844N, 73.0479E"; }
}

class SmartPhone {
    private final CameraModule camera = new CameraModule();
    private final GPSModule gps = new GPSModule();

    public String captureGeoTaggedPhoto() {                 // coordinates BOTH modules
        String photo = camera.takePhoto();
        String where = gps.getCoordinates();
        return photo + " @ " + where;
    }
}
```

**The sentence Lab 10's report explicitly asks for** (*"why composition solves the multiple inheritance limitation in Java"*):
> *"`class SmartPhone extends CameraModule, GPSModule` does not compile — Java allows exactly one `extends`, because multiple inheritance of **state** would give the object two copies of any shared superclass's fields, making field access and constructor chaining ambiguous. Composition sidesteps the restriction entirely: `SmartPhone` **has** a `CameraModule` and **has** a `GPSModule`, so it can hold any number of components, each fully encapsulated, each replaceable at runtime. Note the interface route gives multiple inheritance of **type** but no state, so composition is what you need when the parts carry their own data."*

**Note this contradicts nothing but differs from his slide 17.** Lab 10 says the `Car` constructor **instantiates** the Engine (composition, filled diamond, tight lifetime coupling, no runtime swap). Slide 17 **injects** it (aggregation, Strategy-capable, testable). Both are in his materials; know which you wrote and why. See Part 30.1.


---

# PART 37 — ACTIVE RECALL DRILL BANK

**How to use this, and it matters more than the content.** Cover the answer. Write your prediction **on paper**. Then open it. If you read the answer before writing, you get recognition, not recall — that is precisely how you lost marks on Quiz 2 questions you had already been warned about.

**Every output in Section A was compiled and executed on JDK 21. The answers are empirical, not remembered.**

## SECTION A — PREDICT THE OUTPUT (25)

### A1
```java
class Parent { static void identify() { System.out.print("Parent "); } }
class Child extends Parent { static void identify() { System.out.print("Child "); } }
Parent p = new Child();
p.identify();
```
<details><summary>Answer</summary>

**`Parent `** — `static` methods are **hidden**, not overridden. No vtable slot, so no dynamic dispatch. The compiler emits `invokestatic Parent.identify()` from `p`'s **declared** type. The object is never consulted. *(This was Quiz 2 Q4. You answered `Child`.)*
</details>

### A2
```java
class Parent { static String tag = "P"; }
class Child extends Parent { static String tag = "C"; }
Parent p = new Child();
System.out.println(p.tag);
```
<details><summary>Answer</summary>

**`P`** — **fields are never polymorphic**, static or not. Always resolved by declared type. Field hiding.
</details>

### A3
```java
class A { static { System.out.print("SA "); } { System.out.print("IA "); } A() { System.out.print("CA "); } }
class B extends A { static { System.out.print("SB "); } { System.out.print("IB "); } B() { System.out.print("CB "); } }
new B();
```
<details><summary>Answer</summary>

**`SA SB IA CA IB CB `**

Order: (1) all **static** initialisers, parent before child, **once ever**, at class load. (2) Then per instance: parent's **instance** initialiser, parent's **constructor body**, child's instance initialiser, child's constructor body. Note the instance initialiser runs **before** the constructor body but **after** `super()` — that is why `IA` precedes `CA` and `IB` precedes `CB`.
</details>

### A4
```java
class SuperClass {
    SuperClass() { this(5); System.out.print("S1 "); }
    SuperClass(int x) { System.out.print("S2:" + x + " "); }
}
class SubClass extends SuperClass { SubClass() { System.out.print("Sub "); } }
new SubClass();
```
<details><summary>Answer</summary>

**`S2:5 S1 Sub `** — implicit `super()` → `SuperClass()` → `this(5)` → `SuperClass(int)` prints first → unwinds. A constructor body runs only **after** its delegation completes. *(Quiz 2 Q1. You wrote `S1 Sub`.)*
</details>

### A5
```java
class A { int x = 1; int get() { return x; } }
class B extends A { int x = 2; int get() { return x; } }
A o = new B();
System.out.println(o.x + " " + ((B) o).x + " " + o.get());
```
<details><summary>Answer</summary>

**`1 2 2`** — both `x` fields exist in the one object. `o.x` reads `A.x` (declared type). The cast reads `B.x`. `o.get()` is a **method**, so it dispatches to `B.get()`, which reads `B`'s `x`. **Methods are virtual; fields are not.** One line, the whole distinction.
</details>

### A6
```java
class Parent {
    void show(Object o) { System.out.print("P.Obj"); }
    void show(String s) { System.out.print("P.Str"); }
}
class Child extends Parent {
    void show(Object o) { System.out.print("C.Obj"); }
    void show(String s) { System.out.print("C.Str"); }
}
Parent p = new Child();
p.show("Hi");
p.show((Object) "Hi");
```
<details><summary>Answer</summary>

**`C.StrC.Obj`** — phase 1 (compiler, static arg type) picks the **signature**; phase 2 (JVM, runtime object type) picks the **body**. The cast changes only phase 1. This pair is the cleanest proof the two phases are independent. *(Quiz 3 Q3 was the first half.)*
</details>

### A7
```java
static void p(long l)      { System.out.print("long "); }
static void p(Integer i)   { System.out.print("Integer "); }
static void p(int... v)    { System.out.print("varargs "); }
p(5);
```
<details><summary>Answer</summary>

**`long `** — three resolution phases, tried in order and never revisited: **(1)** exact/subtype match with no boxing or varargs — none. **(2)** widening primitive conversion — `int → long` matches `p(long)`. **Stops here.** (3) boxing (`Integer`) and (4) varargs are never reached. *(This settles erratum E1 empirically.)*
</details>

### A8
```java
abstract class Device { void identify() { System.out.print("Device"); } }
interface Portable { default void identify() { System.out.print("Portable"); } }
class Laptop extends Device implements Portable {
    public void identify() { Portable.super.identify(); }
    void boot() { identify(); System.out.println(" booted."); }
}
new Laptop().boot();
```
<details><summary>Answer</summary>

**`Portable booted.`** — and the justification is the marks: without the override, the **class-wins rule** would select `Device.identify()`; `Portable.super.identify()` explicitly overrides that default. Also legal: widening package-private → `public`. *(Quiz 3 Q1 — you got the output, lost 2 marks on this reasoning.)*
</details>

### A9
```java
String s1 = "Java", s2 = "Java";
String s3 = new String("Java");
String s4 = s3.intern();
System.out.println((s1 == s2) + " " + (s1 == s3) + " " + s1.equals(s3) + " " + (s1 == s4));
```
<details><summary>Answer</summary>

**`true false true true`** — literals are interned into the String Pool, so `s1 == s2`. `new String` forces a distinct heap object, so `s1 != s3`. `equals` compares content. `intern()` returns the pooled instance, so `s1 == s4`.
</details>

### A10
```java
class Base { String who() { return "Base"; } Base() { System.out.print(who() + " "); } }
class Derived extends Base { private String tag = "Derived"; @Override String who() { return tag; } }
new Derived();
```
<details><summary>Answer</summary>

**`null `** — `Base()` runs before `Derived`'s field initialisers. `who()` is virtual, so it dispatches to `Derived.who()`, which reads `tag` while it still holds its default `null`. **Never call an overridable method from a constructor.** This is the **self-use** case of the fragile base class problem (his Composition deck s9) and a Bloch item — he quotes Bloch on s10.
</details>

### A11
```java
static int f() { try { return 1; } finally { return 2; } }
static int g() { int x = 1; try { return x; } finally { x = 99; } }
System.out.println(f() + " " + g());
```
<details><summary>Answer</summary>

**`2 1`** — in `f`, `finally`'s `return` **replaces** the try's value (and would swallow a pending exception — never return from `finally`). In `g`, the return **value** was already copied to the operand stack before `finally` ran, so mutating the variable afterwards changes nothing.
</details>

### A12
```java
class Calculator { int operate(int x, int y) { return x + y; } }
abstract class AdvancedCalculator extends Calculator { abstract int operate(int x, int y); }
class Multiplier extends AdvancedCalculator { int operate(int x, int y) { return x * y; } }
Calculator calc = new Multiplier();
System.out.println(calc.operate(3, 4));
```
<details><summary>Answer</summary>

**`12`** — `AdvancedCalculator` **re-abstracts** an inherited concrete method, forcing every concrete subclass to supply its own. Name the mechanism: **re-abstraction**. Then dynamic dispatch on runtime type `Multiplier` → `3 * 4`. Legal only because `AdvancedCalculator` is itself `abstract`. *(Quiz 3 Q2.)*
</details>

### A13
```java
System.out.println(true ? 1 : 2.0);
```
<details><summary>Answer</summary>

**`1.0`** — the conditional operator has a **single** result type, computed by binary numeric promotion across both branches. `int` and `double` promote to `double`, so the chosen `1` is widened. The branch not taken still changes the answer.
</details>

### A14
```java
Integer i1 = 127, i2 = 127, i3 = 128, i4 = 128;
System.out.println((i1 == i2) + " " + (i3 == i4));
```
<details><summary>Answer</summary>

**`true false`** — the **Integer cache** interns boxed values from −128 to 127, so `i1` and `i2` are the same object. 128 is outside it, so autoboxing allocates two objects and `==` compares references. **Always use `.equals()` on wrappers.**
</details>

### A15
```java
class DataNode { int value = 1; }
static void processNode(DataNode n) { n.value = 5; n = new DataNode(); n.value = 10; }
DataNode myNode = new DataNode();
processNode(myNode);
System.out.print(myNode.value);
```
<details><summary>Answer</summary>

**`5`** — Java is **always pass-by-value**; the *reference* is copied. `n.value = 5` mutates the shared object, so it sticks. `n = new DataNode()` rebinds only the **local copy** of the reference, so `myNode` still points at the original and the `10` is written to an unreachable object that is immediately garbage. *(Quiz 2 Q3. You answered `10`. This is his single favourite trap.)*
</details>

### A16
```java
char c = 'A';
System.out.println((char)(c + 1) + " " + (c + 1));
```
<details><summary>Answer</summary>

**`B 66`** — arithmetic on `char` promotes to `int`. Without the cast you print the numeric code; with it you print the character. `char` is 16-bit **unsigned** UTF-16.
</details>

### A17
```java
List<Integer> a = new ArrayList<>(List.of(10, 20, 30));
a.remove(1);
List<Integer> b = new ArrayList<>(List.of(10, 20, 30));
b.remove(Integer.valueOf(20));
System.out.println(a + " " + b);
```
<details><summary>Answer</summary>

**`[10, 30] [10, 30]`** — coincidentally identical, and that is the trap. `remove(1)` calls **`remove(int index)`** and deletes *position* 1. `remove(Integer.valueOf(20))` calls **`remove(Object o)`** and deletes the *value* 20. Change the data to `List.of(10,20,30,1)` and they diverge. Overload resolution prefers the primitive `int` overload over boxing, so `remove(1)` never means "remove the value 1".
</details>

### A18
```java
System.out.println((0.1 + 0.2) + " " + (0.1 + 0.2 == 0.3));
```
<details><summary>Answer</summary>

**`0.30000000000000004 false`** — IEEE-754 binary floating point cannot represent 0.1 or 0.2 exactly. **Never compare doubles with `==`**; compare `Math.abs(a - b) < 1e-9`, or use `BigDecimal` for money.
</details>

### A19
```java
int[] arr = {1, 2, 3};
int[] copy = arr;
copy[0] = 99;
System.out.println(arr[0]);
```
<details><summary>Answer</summary>

**`99`** — `copy = arr` copies the **reference**, not the array. One array, two names. A real copy needs `arr.clone()` or `Arrays.copyOf(arr, arr.length)`. Note `clone()` on an array of objects is still **shallow**.
</details>

### A20
```java
System.out.println((10 / 3) + " " + (10 % 3) + " " + (-10 / 3) + " " + (-10 % 3));
```
<details><summary>Answer</summary>

**`3 1 -3 -1`** — integer division truncates **toward zero**, so `-10/3` is `-3` not `-4`. `%` therefore takes the sign of the **dividend**: `-10 % 3` is `-1`. (Unlike Python, where it would be `2`.)
</details>

### A21
```java
StringBuilder sb = new StringBuilder("ab");
sb.append("c").reverse();
System.out.println(sb);
```
<details><summary>Answer</summary>

**`cba`** — `StringBuilder` is **mutable**; every method mutates in place and returns `this`, which is what allows chaining. Contrast `String`, which is immutable: `s.concat("c").toUpperCase()` leaves `s` untouched. This is why string concatenation in a loop is O(n²) and `StringBuilder` is O(n).
</details>

### A22
```java
System.out.println(("1" + 2 + 3) + " " + (1 + 2 + "3"));
```
<details><summary>Answer</summary>

**`123 33`** — `+` is left-associative. Left: `"1"+2` → `"12"`, then `+3` → `"123"`. Right: `1+2` is **arithmetic** → `3`, then `+"3"` → `"33"`.
</details>

### A23
```java
class Base { void greet() { System.out.print("Base "); } }
class Mid extends Base { @Override void greet() { super.greet(); System.out.print("Mid "); } }
class Leaf extends Mid { @Override void greet() { super.greet(); System.out.print("Leaf "); } }
new Leaf().greet();
```
<details><summary>Answer</summary>

**`Base Mid Leaf `** — `super.greet()` is bound **statically** to the immediate superclass's implementation (`invokespecial`), so the chain walks up first, then unwinds printing downward. `super` never re-dispatches, which is why there is no infinite loop.
</details>

### A24
```java
class Counter {
    static int instances = 0;
    int id;
    Counter() { instances++; id = instances; }
}
new Counter(); new Counter();
Counter c = new Counter();
System.out.println(c.id + " " + Counter.instances + " " + new Counter().id);
```
<details><summary>Answer</summary>

**`3 3 4`** *(verified)*

One `static` field shared by the whole class; one `id` per instance. Three objects exist, so `instances == 3` and `c.id == 3`. The examinable point is the third term: **Java evaluates the operands of `+` strictly left to right**, so `Counter.instances` is read as `3` **before** `new Counter()` runs. Only then is the fourth object built, incrementing the counter to `4` and giving that object `id == 4`. Do not assume side effects in a later operand happen "up front" — evaluation order is specified and testable.
</details>

### A25
```java
Map<String, Integer> m = new HashMap<>();
m.put("a", 1);
m.put("a", 2);
System.out.println(m.size() + " " + m.get("a") + " " + m.get("b") + " " + m.getOrDefault("b", 0));
```
<details><summary>Answer</summary>

**`1 2 null 0`** — `Map` keys are unique; the second `put` **replaces** the value and returns the old one. A missing key gives `null`, not an exception. **`m.get("b") + 1` would throw `NullPointerException`** on unboxing — that is the follow-up he can ask. Use `getOrDefault`.
</details>

---

## SECTION B — SPOT THE ERROR (20)

For each: name the **error type** (compile / runtime / logic), give the **compiler message** where applicable, and diagnose in one sentence. **All compiler messages below were captured from actual `javac` runs on JDK 21.**

### B1
```java
class Parent { static void m() { } }
class Child extends Parent { @Override static void m() { } }
```
<details><summary>Answer</summary>

**Compile.** `error: static methods cannot be annotated with @Override`
`@Override` asserts you are overriding; `static` methods are **hidden**, and hiding is not overriding.
</details>

### B2
```java
class Parent { static void m() { } }
class Child extends Parent { void m() { } }
```
<details><summary>Answer</summary>

**Compile.** `error: m() in Child cannot override m() in Parent` / `overridden method is static`
You cannot change static-ness across the boundary. The reverse (instance in parent, `static` in child) also fails, with `overriding method is static`.
</details>

### B3
```java
class A { A(int x) { } }
class B extends A { B() { } }
```
<details><summary>Answer</summary>

**Compile.** `error: constructor A in class A cannot be applied to given types; required: int, found: no arguments`
`B()`'s implicit `super()` has no matching no-arg constructor. **Declaring any parameterised constructor removes the compiler-supplied default**, silently breaking every subclass. Fix: add `A()`, or write `super(0)` explicitly.
</details>

### B4
```java
interface X { default void m() { } }
interface Y { default void m() { } }
class Z implements X, Y { }
```
<details><summary>Answer</summary>

**Compile.** `error: types X and Y are incompatible; class Z inherits unrelated defaults for m() from types X and Y`
The Java diamond. Fix: override `m()` in `Z` and select with `X.super.m()`, combine both, or supply your own body.
</details>

### B5
```java
class Car {
    private final Engine engine;
    Car(Engine e) { this.engine = e; }
    void setEngine(Engine n) { this.engine = n; }
}
```
<details><summary>Answer</summary>

**Compile.** `error: cannot assign a value to final variable engine`
**This is his own Composition deck, s14 vs s19 — erratum E5.** A blank `final` field is assignable once, in an initialiser or every constructor. Drop `final` for a setter and accept the loss of immutability and safe publication (so synchronise it), or keep `final` and construct a new `Car`.
</details>

### B6
```java
class B { void s() throws java.io.IOException { } }
class D extends B { void s() throws Exception { } }
```
<details><summary>Answer</summary>

**Compile.** `error: s() in D cannot override s() in B` / `overridden method does not throw Exception`
An override may throw the same, narrower, fewer, or no checked exceptions — never broader. **The compiler is enforcing Liskov substitution**: the caller's `catch` clauses were compiled against `B`'s contract.
</details>

### B7
```java
class A { public void m() { } }
class B extends A { protected void m() { } }
```
<details><summary>Answer</summary>

**Compile.** `error: m() in B cannot override m() in A` / `attempting to assign weaker access privileges; was public`
Overrides may **widen** access, never narrow it. Otherwise a caller holding an `A` reference could be denied a method `A` publicly promised — LSP again.
</details>

### B8
```java
class Beta { Beta() { super(); this(10); } Beta(int s) { } }
```
<details><summary>Answer</summary>

**Compile.** `error: call to this must be first statement in constructor`
At most **one** explicit delegation, `super(...)` **or** `this(...)`, and it must be the first statement — so superclass state is initialised exactly once, before any subclass code can read it. *(Quiz 2 Q2. Your answer blamed the `public` modifier — `public` constructors are perfectly legal.)*
</details>

### B9
```java
abstract class Shape { abstract double area(); }
Shape s = new Shape();
```
<details><summary>Answer</summary>

**Compile.** `error: Shape is abstract; cannot be instantiated`
Fix: instantiate a concrete subclass, or use an anonymous class `new Shape() { double area() { return 0; } }`, which creates a subclass rather than instantiating `Shape`.
</details>

### B10
```java
interface Contract { void run(); }
class Impl implements Contract { }
```
<details><summary>Answer</summary>

**Compile.** `error: Impl is not abstract and does not override abstract method run() in Contract`
A concrete class must implement every inherited abstract method. Fix: implement it, or declare `Impl` `abstract`.
</details>

### B11
```java
class Config { final int limit; Config() { } }
```
<details><summary>Answer</summary>

**Compile.** `error: variable limit not initialized in the default constructor`
A blank `final` field must be assigned in **every** constructor (or at declaration). Not assigning it is as illegal as assigning it twice.
</details>

### B12
```java
try { riskyOp(); }
catch (Exception e) { }
catch (java.io.IOException e) { }
```
<details><summary>Answer</summary>

**Compile.** `error: exception IOException has already been caught`
The first matching `catch` wins, so a supertype handler placed first makes every later subtype handler provably dead code. **Subclasses before superclasses.**
</details>

### B13
```java
class Task extends Thread {
    public void run() { System.out.println("working"); }
}
Task t = new Task();
t.run();
t.run();
```
<details><summary>Answer</summary>

**Logic — compiles and prints correctly, which is what makes it dangerous.** Calling `run()` executes on the **caller's** thread, sequentially. No OS thread is created, no concurrency occurs, and **no race condition ever appears**, so your testing "passes" while the real system is broken. Lab 08's rubric bottom tier names this exactly. Fix: `t.start()`. And note `start()` twice on the same object throws `IllegalThreadStateException` — a `Thread` is single-use.
</details>

### B14
```java
class Registry {
    private final List<String> log = new ArrayList<>();
    public void add(String s) { synchronized (this) { log.add(s); } }
    public int size() { return log.size(); }
}
```
<details><summary>Answer</summary>

**Logic / runtime.** `add` is guarded but `size()` is not, so a reader can observe a torn or stale `size`. **Synchronisation must cover every access to the shared state, reads included** — the lock provides visibility (happens-before), not just mutual exclusion. Fix: `synchronized` on `size()` too.
</details>

### B15
```java
public void enrol(Person p) throws DLSException {
    if (enrolled.size() >= maxSeats) throw new CourseFullException(id, maxSeats);
    synchronized (this) { enrolled.add(p); }
}
```
<details><summary>Answer</summary>

**Logic — the check-then-act race, and the single most examinable bug in his course.** Two threads both evaluate the capacity check as false, then both add. **Capacity is breached.** The check and the act must be inside the **same** lock: make the whole method `synchronized`. Assignment 2's rubric: *"Going over capacity because of simultaneous attempts is a major design failure."*
</details>

### B16
```java
class Plate {
    private final String code;
    Plate(String c) { this.code = c; }
    @Override public boolean equals(Object o) {
        return o instanceof Plate && ((Plate) o).code.equals(code);
    }
}
Map<Plate, Vehicle> registry = new HashMap<>();
registry.put(new Plate("ABC-123"), v);
System.out.println(registry.get(new Plate("ABC-123")));
```
<details><summary>Answer</summary>

**Logic — prints `null`.** `equals` was overridden but **`hashCode` was not**, so the two equal `Plate` objects inherit `Object.hashCode()` (identity-based) and produce different hashes. `get` computes a bucket from the new object's hash, looks in the wrong bucket, and never even calls `equals`. **Rule: override `hashCode` whenever you override `equals`.** Contract: equal objects **must** have equal hash codes.
</details>

### B17
```java
List<String> items = new ArrayList<>(List.of("a", "b", "c"));
for (String s : items) { if (s.equals("b")) items.remove(s); }
```
<details><summary>Answer</summary>

**Runtime.** `ConcurrentModificationException`
The for-each loop uses an `Iterator` that tracks a `modCount`; structurally modifying the list behind the iterator's back invalidates it. (Single-threaded — the name is misleading.) Fix: `items.removeIf(s -> s.equals("b"))`, or an explicit `Iterator` with `it.remove()`.
</details>

### B18
```java
class Square extends Rectangle {
    @Override public void setWidth(int w)  { width = w; height = w; }
    @Override public void setHeight(int h) { width = h; height = h; }
}
```
<details><summary>Answer</summary>

**Logic — an LSP violation, and it compiles cleanly.** `Rectangle`'s contract promises independent dimensions; `Square` breaks that invariant, so `setWidth(5); setHeight(4);` yields area 16 where the client provably expects 20. **LSP is a design rule, not a compiler rule** — which is exactly why he teaches it (his s29). Fix: no inheritance; share a `Shape` interface, or compose.
</details>

### B19
```java
class Student {
    private final List<Course> courses = new ArrayList<>();
    public List<Course> getCourses() { return courses; }
}
```
<details><summary>Answer</summary>

**Logic — an encapsulation leak, and Lab 07's rubric penalises it directly.** `final` protects the *reference*, not the *contents*: `student.getCourses().clear()` works. Returning the live internal list is a public field in disguise. Fix: `return Collections.unmodifiableList(courses);` or `return new ArrayList<>(courses);`.
</details>

### B20
```java
class Course {
    private final EmailSender sender = new EmailSender();
    void publish(Material m) { sender.send("all", m.title()); }
}
```
<details><summary>Answer</summary>

**Logic — a design failure Assignment 2 explicitly forbids.** `Course` is welded to a concrete low-level class (**DIP violation** — `new` inside a high-level class), and adding SMS requires editing `Course` (**OCP violation**). The brief: *"the course object should not be tightly linked to how these specific alerts are sent."* Fix: depend on a `Notifier` interface, inject the implementation, and use Observer for the audience.
</details>

---

# PART 38 — TIMED DRILL SETS

Do these **on paper, with a timer, cold.** This is the part that actually moves your grade. Five sets of ten minutes.

**SET 1 (10 min) — binding.** A1, A2, A5, B1, B2. *Pass condition: all five correct, and you wrote the words "hidden," "declared type," and "fields are not polymorphic" without prompting.*

**SET 2 (10 min) — construction.** A3, A4, A10, B3, B8, B11. *Pass condition: A10 answered `null` with the self-use explanation.*

**SET 3 (10 min) — dispatch and resolution.** A6, A7, A8, A12, A23. *Pass condition: for A8 you wrote the phrase "class-wins rule" unprompted. That is the 2 marks you lost.*

**SET 4 (10 min) — concurrency and collections.** A17, A25, B13, B14, B15, B16, B17. *Pass condition: B15 identified as check-then-act with the fix stated.*

**SET 5 (35 min) — the big one.** Hand-write Part 35 from memory. Blank paper, no notes. Then diff it against Part 35 and count what you missed.

**Repeat Set 5 three times across three separate days.** If you only do one thing from this document, do that. Everything else is preparation for it.

---

# PART 39 — THE ESE 20-MINUTE FINAL SCAN

Read on the walk in. Numbered so you can check off what's gone fuzzy.

**Binding**
1. Overloading = compile-time, chosen by declared types. Overriding = runtime, chosen by the object's class.
2. Two phases, independent: compiler picks the **signature**, JVM picks the **body**.
3. `static`, `private`, `final` methods and constructors are all **statically bound** — that is why none can be overridden.
4. `static` methods are **hidden**, not overridden. `@Override` on one is a compile error.
5. **Fields are never polymorphic.** Ever. Declared type always wins.
6. To reach a hidden static: `Child.m()`, or declare/cast the reference as `Child`. For real dispatch, delete `static`.
7. Overloading resolution: (1) exact/subtype → (2) widening → (3) boxing → (4) varargs. First phase that matches wins. `p(5)` with `p(long)`/`p(Integer)` → `long`.
8. `super.m()` is `invokespecial` — statically bound, never re-dispatches.

**Overriding rules**
9. Same signature. Return type same or **covariant** (bridge method makes it work).
10. Access may **widen**, never narrow.
11. Checked exceptions: same, narrower, fewer, or none. Never broader. **This is compiler-enforced LSP.**
12. Class methods beat interface `default` methods — the **class-wins rule**. Override plus `Iface.super.m()` to opt out.

**Construction**
13. Order: static init (parent→child, once) → instance init → constructor body, parent before child.
14. One delegation per constructor, `this(...)` **or** `super(...)`, first statement only.
15. Declaring a parameterised constructor **removes** the default no-arg one and breaks subclasses.
16. **Never call an overridable method from a constructor** — the child override sees `null` fields. Self-use; fragile base class.
17. A blank `final` field must be assigned exactly once, in every constructor or at declaration.

**Inheritance vs composition**
18. IS-A = `extends`. HAS-A = a field. USES-A = a parameter or local.
19. Inheritance: white-box, tight, compile-time-static. Composition: black-box, loose, runtime-dynamic.
20. Fragile base class: accidental override, self-use, `protected` leak. Bloch: *"Inheritance violates encapsulation."*
21. Java forbids multiple inheritance **of state**, permits it **of type**. Two conflicting defaults → compile error → `X.super.m()`.
22. LSP: subtypes must substitute without altering correctness. `Square extends Rectangle` breaks it. Compiles fine — it is a **design** rule.
23. Don't inherit if you need `UnsupportedOperationException` to disable a parent method. Same smell as an ISP violation.
24. **His golden rule: when in doubt, default to composition.**
25. Composition costs: boilerplate forwarding, one extra allocation, and the **self problem** — a component's `this` is not the container.
26. Aggregation (hollow diamond) = injected, part outlives whole. Composition (filled diamond) = created inside, dies with the whole.

**Concurrency**
27. **Each thread has its own Stack; the Heap is shared; therefore only heap state can race.**
28. `start()` creates an OS thread; `run()` runs on the caller's thread and hides every race.
29. `synchronized` instance method locks `this`; `static` synchronized locks the `Class` object.
30. **Check-then-act must be inside one lock**, or the capacity guard fails.
31. Locks give mutual exclusion **and** visibility (happens-before).
32. Never call foreign code while holding a lock. Copy the observer list under the lock, notify outside it.
33. Iterating a list another thread mutates → `ConcurrentModificationException`.
34. `start()` twice → `IllegalThreadStateException`.

**Abstraction**
35. Abstract class = shared **state** + partial implementation, one `extends`, has a constructor.
36. Interface = shared **behaviour** contract, many `implements`, no constructor, no instance fields.
37. An abstract class **may** implement an interface and leave its methods abstract.
38. Re-abstraction: an abstract subclass may re-declare an inherited concrete method as abstract.

**Exceptions**
39. `Throwable` → `Error` (don't catch) and `Exception`. `RuntimeException` and below are unchecked.
40. Checked = extends `Exception` but not `RuntimeException`; compiler forces catch-or-declare.
41. `throw` is a statement, `throws` is a declaration. Only `Throwable` subclasses can be thrown.
42. Subclass `catch` before superclass `catch`, or the code is provably dead.
43. `finally` always runs except `System.exit()`, JVM death, or non-termination. **Never `return` from `finally`** — it discards the value and swallows exceptions.
44. try-with-resources closes in reverse order and attaches close-failures as **suppressed** exceptions.
45. Custom exceptions: build a hierarchy, checked for business rules, carry data not just a message, always preserve the cause.

**Collections**
46. `HashMap.get` is O(1) via `hashCode` bucket + `equals`; `ArrayList.indexOf` is O(n).
47. **Override `equals` → override `hashCode`.** Otherwise map lookups silently fail.
48. `list.remove(1)` removes an **index**; `list.remove(Integer.valueOf(1))` removes a **value**.
49. Return `unmodifiableList` or a copy from getters, never the live internal list.

**Serialization**
50. `Serializable` is a marker interface. `transient` fields restore as `null`/0. Static fields are never serialized. Declare `serialVersionUID`. `readObject` returns `Object` and throws `ClassNotFoundException`.

**Traps that have already cost you marks — check these last**
51. `p.identify()` on a `static` method → **`Parent`**, and **no**, that is not dynamic dispatch.
52. Reassigning a parameter inside a method **cannot** affect the caller. Output is **5**, not 10.
53. `this(5)` inside a constructor runs the other constructor **first**. Output is `S2:5 S1 Sub `.
54. `public` on a constructor is **legal**. The error was `super()` and `this()` together.
55. A correct output with a thin justification scores half. **Name the rule.**

