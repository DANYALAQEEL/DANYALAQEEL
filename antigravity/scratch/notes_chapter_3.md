# Chapter 3: Processes

## A. Ultra-Clear Conceptual Explanation
A **Process** is loosely defined as a program in execution. While a program is a passive entity (a file stored on disk), a process is an active entity, with a program counter specifying the next instruction to execute and a set of associated resources.

As a process executes, it changes **state** (New, Ready, Running, Waiting, Terminated). The OS manages all this using a data structure called the **Process Control Block (PCB)**, which acts as the repository for any information that may vary from process to process (like CPU registers, state, memory limits, and open files).

When the CPU switches to another process, the OS must perform a **Context Switch**—saving the state of the old process into its PCB and loading the saved state for the new process from its PCB.

Processes may either be **independent** or **cooperating**. Cooperating processes can affect or be affected by other processes, requiring an **Interprocess Communication (IPC)** mechanism. The two fundamental IPC models are **Shared Memory** and **Message Passing**.

---

## B. Bullet-Point Revision Notes
- **Process Memory Layout:**
  - *Text section:* Executable code.
  - *Data section:* Global variables.
  - *Heap:* Memory dynamically allocated during run time (grows upward).
  - *Stack:* Temporary data like function parameters, return addresses, and local variables (grows downward).
- **Process States:**
  1. *New:* Process is being created.
  2. *Running:* Instructions are being executed.
  3. *Waiting:* Waiting for some event to occur (e.g., I/O completion).
  4. *Ready:* Waiting to be assigned to a processor.
  5. *Terminated:* Finished execution.
- **Process Scheduling Queues:**
  - *Job queue:* All processes in the system.
  - *Ready queue:* Set of all processes in main memory, ready to execute.
  - *Device queue:* Set of processes waiting for an I/O device.
- **Schedulers:**
  - *Long-term (Job Scheduler):* Selects which processes should be brought into the ready queue. Controls the **degree of multiprogramming**. (Slow, infrequent).
  - *Short-term (CPU Scheduler):* Selects which process should execute next from the ready queue. (Very fast, highly frequent).
  - *Medium-term Scheduler:* Swapping out processes from memory to disk to reduce multiprogramming, and swapping them back in later.
- **Context Switch:** The core overhead of multiprogramming. Very hardware-dependent. No useful work gets done while switching.
- **Process Creation:**
  - `fork()` system call creates a new process (child) which is an exact duplicate of the parent.
  - `exec()` heavily used after `fork()` to replace the process' memory space with a new program.
  - `wait()` used by parent to wait until the child terminates. Child process returns its termination status to parent via `exit()`.
- **Zombie vs Orphan process:**
  - *Zombie:* A process that has terminated, but whose parent has not yet called `wait()`.
  - *Orphan:* A child process whose parent terminated without invoking `wait()`. `init` or `systemd` adopts orphans.

---

## C. Solved Examples (Step-by-Step)
**Problem: Bounded-Buffer Producer-Consumer using Shared Memory.**
Assume a buffer size of `n=5`. How do the producer and consumer use it?
**Step 1:** An array `buffer[5]` is created in shared memory. Variables `in = 0` and `out = 0`.
**Step 2 (Producer):** 
Before placing an item, check if buffer is full: `while (((in + 1) % 5) == out);` // do nothing
If not full, place item: `buffer[in] = next_produced; in = (in + 1) % 5;`
**Step 3 (Consumer):**
Before consuming, check if buffer is empty: `while (in == out);` // do nothing
If not empty, consume item: `next_consumed = buffer[out]; out = (out + 1) % 5;`
**Conclusion:** This array-based cyclic buffer successfully holds at most `n-1` (i.e., 4) elements at a time to differentiate between "full" and "empty".

---

## D. Important Diagrams (Explained Properly)
1. **Process State Diagram:**
   *Navigation:* New -> Admitted -> Ready -> Scheduler Dispatch -> Running. 
   From Running -> Interrupt -> Ready.
   From Running -> I/O or Event Wait -> Waiting -> I/O Completion -> Ready.
   From Running -> Exit -> Terminated.
2. **Context Switching:**
   *Explanation:* Process $P_0$ is running. Trap/Interrupt occurs. CPU stops $P_0$. OS pushes $P_0$'s state to $PCB_0$. OS loads $P_1$'s state from $PCB_1$. $P_1$ resumes execution. Later, trap occurs, state saved to $PCB_1$, load from $PCB_0$, $P_0$ resumes.
3. **Process Creation Hierarchy (e.g., Linux):**
   *Structure:* It forms a tree. `systemd` (pid=1) is the root, from which `sshd`, `login`, and `kthreadd` spawn. Every process has exactly one parent except the root.

---

## E. Comparison Tables

| Feature | Shared Memory IPC | Message Passing IPC |
| :--- | :--- | :--- |
| **Concept** | Processes share a common region of memory. | Processes communicate by exchanging messages. |
| **Speed** | Very fast (memory speeds). | Slower (requires system calls per message). |
| **OS Intervention** | Only needed to establish the shared memory. Not needed during data transfer. | Required for every `send()` and `receive()`. |
| **Best Used For** | Large amounts of data. | Small amounts of data (avoids conflict). |

| Feature | Direct Communication | Indirect Communication |
| :--- | :--- | :--- |
| **Addressing** | Processes name each other explicitly: `send(P, msg)` | Messages directed to mailboxes (ports): `send(A, msg)` |
| **Link Association** | Links exactly 1 pair of processes. | Can link many processes to 1 mailbox. |

---

## F. Key Formulas
- **Cyclic Buffer Calculation:**
  To wrap pointers around the end of the array to the beginning:
  `in = (in + 1) % BUFFER_SIZE`

---

## G. Possible 5-Mark Questions
1. **Define a Context Switch and why it is considered pure overhead.**
   *Answer Hint:* Explain saving state to PCB of old process and loading state from PCB of new process. Pure overhead because the system does no useful computational work while switching. Its speed is heavily dependent on memory speed, number of registers, and hardware support (like multiple register sets).
2. **Differentiate between a Zombie process and an Orphan process.**
   *Answer Hint:* Zombie = Child died, parent hasn't `wait()`ed. Orphan = Parent died, child still running. Modern OS re-parents orphans to the `init` process (`systemd`).
3. **What is the degree of multiprogramming? Which scheduler controls it?**
   *Answer Hint:* The number of processes currently in memory. Controlled by the Long-Term Scheduler (Job Scheduler). It strives for a good process mix of I/O-bound and CPU-bound jobs.

---

## H. Possible 10-Mark Questions
1. **Explain the 5 process states with a neatly labeled diagram. Describe the roles of the three different types of CPU Schedulers (Long, Medium, Short-term).**
   *Answer Hint:* Describe New, Ready, Running, Waiting, Terminated. (Use the transition descriptions from Section D). Long-term controls degree of multiprogramming; short-term selects next process for CPU (must be fast); medium-term handles swapping to disk to free up memory.
2. **Discuss Interprocess Communication (IPC). Compare Shared Memory and Message Passing techniques, and provide a pseudo-code outline of the Producer-Consumer problem using Shared Memory.**
   *Answer Hint:* Use the comparison table provided in Section E. Provide the cyclic array mechanism `(in + 1) % N` to avoid buffer overrun. Explain that IPC is required for cooperating processes.

---

## I. Short Questions Bank (Definitions-Based)
1. **PCB:** Process Control Block. A data structure serving as the repository for any information that varies from process to process.
2. **Daemon Process:** A background process, common in Linux/UNIX, that handles periodic service requests (e.g., `sshd`, `httpd`).
3. **I/O-bound Process:** Spends more time doing I/O than computations, many short CPU bursts.
4. **CPU-bound Process:** Spends more time doing computations; very few, very long CPU bursts.
5. **Mailbox (Port):** An object into which messages can be placed by processes and from which messages can be removed, used in Indirect Message Passing.

---

## J. Rapid Revision Section (1 Page)
> **🚨 EXAM FAVORITES & CONCEPTUAL TRAPS:**
> - **Program vs. Process:** Program is passive (on disk), Process is active (in memory, executing). A single program (like a web browser) can be multiple processes!
> - **Buffer Limit in Shared Memory:** Remember that a buffer of size $N$ can only hold $N-1$ items! Why? If it held $N$ items, `in == out` would be true when it's FULL and also when it's EMPTY, making it impossible to distinguish between the two states. This is a massive distinction trap!
> - **`fork()` Return Values:** It returns double! To the parent, `fork()` returns the PID of the child. To the newly created child process, `fork()` returns zero. If it fails, it returns a negative value.
> - **Context Switch Cost:** A context switch times ranges from a few milliseconds to microseconds. Keep in mind it is considered 100% pure overhead.

*End of Chapter 3 Notes*
