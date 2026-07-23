# Chapter 4: Threads & Concurrency

## A. Ultra-Clear Conceptual Explanation
A **Thread** is a basic unit of CPU utilization, comprising a thread ID, a program counter, a register set, and a stack. Traditional processes contain a single thread of control. If a process has multiple threads, it can perform more than one task at a time.

Multi-threading is crucial for modern applications. For example, a web browser might have one thread display images while another fetches data from the network. 

Threads within the same process share the process's text section (code), data section (global variables), and operating-system resources (like open files and signals). This sharing makes thread creation and context switching much faster than process creation and context switching.

With the rise of multicore processors, we move from **Concurrency** (tasks making progress at the same time by interleaving CPU time) to true **Parallelism** (tasks executing simultaneously on different cores).

---

## B. Bullet-Point Revision Notes
- **Benefits of Multithreading:**
  1. *Responsiveness:* Interactive applications remain responsive even if part of it is blocked or doing a lengthy operation.
  2. *Resource Sharing:* Threads share the memory and resources of the process to which they belong by default.
  3. *Economy:* Allocating memory and resources for a new process is costly. Creating and context-switching threads is much more economical.
  4. *Scalability:* Threads can run in parallel on different processing cores in a multiprocessor architecture.
- **Concurrency vs. Parallelism:**
  - *Concurrency:* Supports more than one task making progress (can happen on a single-core system via time-slicing).
  - *Parallelism:* Supports more than one task acting simultaneously (requires multi-core systems).
- **Types of Parallelism:**
  - *Data parallelism:* Distributes subsets of the same data across multiple cores, performing the same operation on each.
  - *Task parallelism:* Distributes threads (tasks) across cores, where each thread performs a unique operation.
- **User Threads vs Kernel Threads:**
  - *User Threads:* Implemented by a thread library at the user level (e.g., POSIX Pthreads, Win32 threads, Java threads). The OS kernel is unaware of them.
  - *Kernel Threads:* Supported and managed directly by the OS.
- **Multithreading Models:**
  - *Many-to-One:* Many user threads mapped to a single kernel thread. Blocked system calls block all threads. Not parallel on multicore!
  - *One-to-One:* Each user thread maps to a kernel thread. Creating a user thread creates a kernel thread. (Used by Windows and Linux).
  - *Many-to-Many:* Multiplexes many user-level threads to a smaller or equal number of kernel threads. Allows OS to create sufficient kernel threads.
  - *Two-Level Model:* Similar to Many-to-Many, except it also allows a user thread to be strictly bound to one kernel thread.
- **Implicit Threading:**
  Transferring the creation and management of threads from developers to compilers and run-time libraries. Examples:
  - *Thread Pools:* Create a number of threads at start-up that wait for work. Faster than creating a thread for every request.
  - *OpenMP:* Compiler directives and an API for C, C++, FORTRAN.
  - *Grand Central Dispatch (GCD):* Apple's technology to dynamically allocate threads to available cores.

---

## C. Solved Examples (Step-by-Step)
**Problem: Applying Amdahl's Law.**
Assume an application has a serial portion of 25%, and 75% can be run in parallel. What is the maximum speedup on a system with 4 processing cores?
**Step 1:** State Amdahl's Law: $Speedup \le \frac{1}{S + \frac{1-S}{N}}$
where $S$ is the serial portion (0.25) and $N$ is the number of cores (4).
**Step 2:** Plug in the values: $\frac{1}{0.25 + \frac{0.75}{4}}$
**Step 3:** Calculate the denominator: $0.25 + 0.1875 = 0.4375$
**Step 4:** Invert the denominator: $1 / 0.4375 = 2.28$
**Conclusion:** The maximum speedup achievable with 4 cores is **2.28 times** the single-core speed.

---

## D. Important Diagrams (Explained Properly)
1. **Single-threaded vs Multithreaded Process:**
   *Explanation:* A single-threaded process has one Register set and one Stack. A multithreaded process with 3 threads has 3 Register sets and 3 Stacks, but they all share the overarching Code, Data, and Files sections.
2. **Multithreading Models Visualized:**
   - *Many-to-One:* User threads funnel into one Kernel Thread.
   - *One-to-One:* Straight lines linking each User Thread to a unique Kernel Thread.
   - *Many-to-Many:* User threads connect to a pool of Kernel Threads via a multiplexer.

---

## E. Comparison Tables

| Feature | Process | Thread |
| :--- | :--- | :--- |
| **Creation Overhead** | Heavy (requires allocating isolated memory and resources). | Light (re-uses process memory and resources). |
| **Context Switch Time** | Slower (requires switching memory management structures, e.g., page tables). | Faster (only requires saving/restoring registers and stack pointers). |
| **Isolation** | High (memory is protected from other processes). | Low (a rogue thread can crash the entire process). |

| Feature | Concurrency | Parallelism |
| :--- | :--- | :--- |
| **Concept** | Interleaving tasks so they both appear to run "at once". | Running tasks truly simultaneously. |
| **Hardware Requirement** | Can be achieved on a single-core CPU (time-slicing). | Strictly requires a multi-core (or multi-processor) system. |

---

## F. Key Formulas
- **Amdahl's Law:** Determines the maximum performance gain from adding additional cores.
  $$Speedup \le \frac{1}{S + \frac{(1-S)}{N}}$$
  $S$ = fraction of application that must be run serially.
  $N$ = number of processing cores.

---

## G. Possible 5-Mark Questions
1. **Explain the benefits of multithreaded programming.**
   *Answer Hint:* List and briefly explain the 4 benefits from Section B: Responsiveness, Resource Sharing, Economy, and Scalability.
2. **Contrast the Many-to-One and One-to-One multithreading models. Which one is used by modern Linux and Windows?**
   *Answer Hint:* Many-to-one maps many user threads to one kernel thread (efficient but blocks the whole process if one thread blocks, no parallelism). One-to-one maps 1 user to 1 kernel thread (allows parallelism and avoids blocking, but has higher overhead). Modern Linux and Windows use the One-to-One model.
3. **What is a Thread Pool and what are its advantages?**
   *Answer Hint:* Creating a set of threads at process startup that sit in a pool waiting for work. Advantages: Servicing a request with an existing thread is usually faster than waiting to create a new thread, and it places a bound on the maximum number of threads concurrently active (saving memory/CPU).

---

## H. Possible 10-Mark Questions
1. **Discuss the challenges of multicore programming. Differentiate between Data Parallelism and Task Parallelism.**
   *Answer Hint:* Explain the 5 areas of challenge: Identifying tasks (finding what can run concurrently), Balance (ensuring tasks perform equal work of equal value), Data Splitting (dividing the data for the cores), Data Dependency (synchronizing when one task depends on another), and Testing/Debugging (much harder due to non-deterministic execution). Then define Data vs Task parallelism using the definitions in Section B.
2. **Explain the concept of Thread Cancellation and Signal Handling in a multithreaded environment.**
   *Answer Hint:* Outline *Asynchronous cancellation* (cancels thread immediately, risk of resource leak) vs *Deferred cancellation* (target thread periodically checks if it should terminate, safer). For signals, explain the 4 options: Deliver the signal to the thread to which it applies, deliver to every thread, deliver to certain assigned threads, or have a specific thread handle all signals for the process.

---

## I. Short Questions Bank (Definitions-Based)
1. **LWP (Lightweight Process):** Discovered in many-to-many models, an intermediate data structure between user and kernel threads that appears to the thread library as a virtual processor.
2. **Thread-Local Storage (TLS):** Memory that is specific to a thread, providing it with its own copy of data (different from local variables, which exist only during a single function invocation). TLS persists across function calls.
3. **Scheduler Activation:** A scheme for communication between the user-thread library and the kernel. The kernel provides an LWP, and the application schedules user threads onto the LWP. An **upcall** occurs when the kernel informs the library of an event.
4. **Pthreads:** Refers to the POSIX standard defining an API for thread creation and synchronization (it is a specification, not an implementation).

---

## J. Rapid Revision Section (1 Page)
> **🚨 EXAM FAVORITES & CONCEPTUAL TRAPS:**
> - **Amdahl's Law Limit:** Notice that as $N \rightarrow \infty$, the speedup approaches $1/S$. If an app is 50% serial, you can NEVER get more than a 2x speedup, no matter how many cores you have!
> - **Shared vs Not Shared:**
>   - *Shared by threads in a process:* Code, Data, Open Files.
>   - *NOT Shared (Unique to each thread):* Registers, Stack, Program Counter (PC).
> - **`fork()` in threads:** If a thread calls `fork()`, does it duplicate ONLY the calling thread or ALL threads? Some UNIX systems provide two versions of `fork()` for this exact reason. Usually, if `exec()` is called immediately after, only duplicating the calling thread makes sense.

*End of Chapter 4 Notes*
