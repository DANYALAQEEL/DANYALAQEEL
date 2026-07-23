# Chapter 5: CPU Scheduling

## A. Ultra-Clear Conceptual Explanation
In a system with a single CPU core, only one process can run at a time. Multi-programming aims to have some process running at all times to maximize CPU utilization. 
**CPU Scheduling** is the basis of multi-programmed operating systems. By switching the CPU among processes, the OS makes the computer more productive.

Execution of a process consists of an alternating cycle of CPU execution and I/O wait. Processes alternate between **CPU bursts** (doing math/computation) and **I/O bursts** (waiting for disk/network).
- **CPU-bound program:** Has a few very long CPU bursts.
- **I/O-bound program:** Has many short CPU bursts.

The **Short-Term Scheduler** selects from among the processes in the Ready Queue and allocates the CPU to one of them.
Scheduling decisions may take place when a process:
1. Switches from running to waiting state (Non-preemptive).
2. Switches from running to ready state (Preemptive).
3. Switches from waiting to ready state (Preemptive).
4. Terminates (Non-preemptive).

A **Dispatcher** is the module that actually gives control of the CPU to the process selected by the short-term scheduler (involves context switch, switching to user mode, jumping to proper location).

---

## B. Bullet-Point Revision Notes
- **Scheduling Criteria (How we judge an algorithm):**
  - *CPU utilization:* Keep the CPU as busy as possible.
  - *Throughput:* Number of processes that complete their execution per time unit.
  - *Turnaround time:* Amount of time to execute a particular process (from submission to completion).
  - *Waiting time:* Amount of time a process has been waiting in the ready queue.
  - *Response time:* Amount of time from when a request was submitted until the first response is produced.
- **Scheduling Algorithms:**
  - *First-Come, First-Served (FCFS):* Non-preemptive. Simple, but suffers from the **Convoy Effect** (short processes stuck waiting behind a long process).
  - *Shortest-Job-First (SJF):* Non-preemptive. Gives the minimum average waiting time. Difficult to know the length of the next CPU burst in advance (usually predicted using exponential averaging).
  - *Shortest-Remaining-Time-First (SRTF):* The preemptive version of SJF.
  - *Round Robin (RR):* Preemptive. Each process gets a small unit of CPU time (time quantum `q`). If it doesn't finish, it gets preempted and put at the back of the ready queue. Performance depends heavily on the size of `q`.
  - *Priority Scheduling:* A priority number is assigned to each process. CPU is allocated to the highest priority (smallest integer = highest priority). Can be preemptive or non-preemptive. Suffers from **Starvation**. Solution: **Aging**.
  - *Multilevel Queue:* Ready queue is partitioned into separate queues (e.g., foreground and background). Each queue has its own scheduling algorithm.
  - *Multilevel Feedback Queue:* A process can move between the various queues. If a process uses too much CPU time, it is moved to a lower-priority queue (aging is built-in).
- **Multiprocessor Scheduling Approaches:**
  - *Asymmetric multiprocessing:* One master processor handles all scheduling.
  - *Symmetric multiprocessing (SMP):* Each processor is self-scheduling.
  - *Processor Affinity:* A process has an affinity for the processor on which it is currently running (to keep cache warm). *Soft affinity* (tries to keep it there) vs *Hard affinity* (guarantees it stays there).
  - *Load Balancing:* Push migration and Pull migration.

---

## C. Solved Examples (Step-by-Step) 🚨 VERY IMPORTANT FOR EXAMS

### 1. First-Come, First-Served (FCFS)
**Processes (Arrival Time = 0):** $P_1$ (Burst: 24), $P_2$ (Burst: 3), $P_3$ (Burst: 3)
*Order:* $P_1$ -> $P_2$ -> $P_3$
*Gantt Chart:* `| P1 (0-24) | P2 (24-27) | P3 (27-30) |`
*Waiting Time:* $P_1 = 0$, $P_2 = 24$, $P_3 = 27$
*Average Waiting Time:* $(0 + 24 + 27) / 3 = 17$

### 2. Preemptive Shortest-Job-First (SRTF)
**Processes (Arrival Time, Burst Time):** $P_1 (0, 8)$, $P_2 (1, 4)$, $P_3 (2, 9)$, $P_4 (3, 5)$
*Step-by-step:*
- $t=0$: Only $P_1$ is available. $P_1$ runs.
- $t=1$: $P_2$ arrives (burst 4). $P_1$ has 7 remaining. $P_2 < P_1$. **Preempt!** $P_2$ runs.
- $t=2$: $P_3$ arrives (burst 9). $P_2$ has 3 remaining. $P_2$ continues.
- $t=3$: $P_4$ arrives (burst 5). $P_2$ has 2 remaining. $P_2$ continues.
- $t=5$: $P_2$ finishes. Remaining: $P_1(7), P_3(9), P_4(5)$. $P_4$ is shortest. $P_4$ runs.
- $t=10$: $P_4$ finishes. Remaining: $P_1(7), P_3(9)$. $P_1$ is shortest. $P_1$ runs.
- $t=17$: $P_1$ finishes. $P_3$ runs until $t=26$.
*Gantt Chart:* `| P1 (0-1) | P2 (1-5) | P4 (5-10) | P1 (10-17) | P3 (17-26) |`
*Waiting Time (Turnaround - Burst):* 
$P_1 = (17 - 0) - 8 = 9$
$P_2 = (5 - 1) - 4 = 0$
$P_3 = (26 - 2) - 9 = 15$
$P_4 = (10 - 3) - 5 = 2$
*Average Waiting Time:* $(9 + 0 + 15 + 2) / 4 = 6.5$

### 3. Round Robin (RR) with Time Quantum $q=4$
**Processes (Arrival Time = 0):** $P_1(24), P_2(3), P_3(3)$
- $t=0-4$: $P_1$ runs (Remaining: 20)
- $t=4-7$: $P_2$ runs and finishes.
- $t=7-10$: $P_3$ runs and finishes.
- $t=10-30$: $P_1$ runs in slices of 4 until finished.
*Gantt Chart:* `| P1(0-4) | P2(4-7) | P3(7-10) | P1(10-14)... P1(26-30) |`
*Waiting Time:* $P_1 = 6$ (waited from 4 to 10), $P_2 = 4$, $P_3 = 7$.
*Average Waiting Time:* $(6+4+7)/3 = 5.66$

---

## D. Important Diagrams (Explained Properly)
1. **Alternating Sequence of CPU and I/O Bursts:**
   *Structure:* Histogram showing frequency of burst durations.
   *Explanation:* Shows that there are a HUGE number of short CPU bursts and very few long CPU bursts. This shapes the logic behind SJF.
2. **Multilevel Feedback Queue Matrix:**
   *Structure:* Queue 0 ($q=8$) -> Queue 1 ($q=16$) -> Queue 2 (FCFS).
   *Explanation:* A new process enters Q0. If it doesn't finish in 8ms, it is demoted to Q1. If it doesn't finish in 16ms, it is demoted to Q2 (FCFS). This provides extreme preference to short, interactive jobs while slowly handling heavy batch jobs.

---

## E. Comparison Tables

| Feature | Preemptive Scheduling | Non-Preemptive Scheduling |
| :--- | :--- | :--- |
| **Logic** | OS can forcibly remove a running process from the CPU. | Once a process has the CPU, it keeps it until it blocks or terminates. |
| **Hardware** | Requires a hardware timer to interrupt the CPU. | Does not strictly require a timer for scheduling. |
| **Overhead** | Higher overhead (due to frequent context switches). | Lower context-switching overhead. |

| Feature | FCFS | Round Robin (RR) |
| :--- | :--- | :--- |
| **Preemption** | Non-preemptive | Preemptive |
| **Best For** | Batch systems | Time-sharing / Interactive systems |
| **Drawback** | Convoy effect | Too many context switches if $q$ is too small |

---

## F. Key Formulas
- **Waiting Time:**
  $W_T = \text{Turnaround Time} - \text{Burst Time}$
- **Turnaround Time:**
  $T_T = \text{Completion Time} - \text{Arrival Time}$
- **Exponential Averaging (Predicting next CPU burst for SJF):**
  $\tau_{n+1} = \alpha t_n + (1 - \alpha) \tau_n$
  Where $t_n$ is actual length of $n^{th}$ burst, $\tau_n$ is past predicted value, and $\alpha$ determines the weight of recent history (usually 0.5).

---

## G. Possible 5-Mark Questions
1. **Explain the Convoy Effect.**
   *Answer Hint:* Occurs in FCFS. When one huge CPU-bound process takes the CPU, all other short I/O-bound processes wait in the ready queue. This results in lower CPU and device utilization and very high average waiting times.
2. **What is Starvation and how does Aging solve it?**
   *Answer Hint:* Starvation happens in Priority Scheduling when low-priority processes completely fail to run because a steady stream of high-priority processes monopolizes the CPU. Aging solves this by gradually increasing the priority of processes that wait in the system for a long time.
3. **How does the size of the time quantum $q$ affect the performance of Round Robin?**
   *Answer Hint:* If $q$ is extremely large, RR degrades to FCFS. If $q$ is extremely small, it results in processor sharing but produces massive overhead from too many context switches. Rule of thumb: 80% of CPU bursts should be shorter than $q$.

---

## H. Possible 10-Mark Questions
1. **Given a table of Arrival Times and Burst Times, calculate Average Waiting Time and Average Turnaround Time for FCFS, Non-Preemptive SJF, and Preemptive SJF (SRTF).**
   *Answer Hint:* (See Section C for the methodology. Always draw Gantt charts in exams securely tracing the timeline. Note that SRTF almost always produces the lowest average waiting time).
2. **Describe Multilevel Feedback Queue scheduling. Why is it considered the most general and complex scheduling algorithm?**
   *Answer Hint:* Explain the queues, the flow of demotion (if a process uses too much CPU) and the flow of promotion (aging). Mention it requires defining: number of queues, scheduling algorithm for each queue, method to upgrade a process, method to demote a process, and method to determine which queue a process enters initially.

---

## I. Short Questions Bank (Definitions-Based)
1. **Dispatcher:** The module that gives control of the CPU to the process selected by the short-term scheduler (handles context switch, user mode swap, jumping to PC).
2. **Dispatch Latency:** The time it takes for the dispatcher to stop one process and start another running.
3. **Hard Real-Time System:** A system where a critical task MUST be guaranteed to finish within an exact, strict deadline.
4. **Soft Real-Time System:** A system where critical processes receive priority over others, but no absolute deadline guarantees are made.
5. **Processor Affinity:** The tendency of a process to stay on the processor it is currently running on, to avoid the cost of invalidating and repopulating processor caches.

---

## J. Rapid Revision Section (1 Page)
> **🚨 EXAM FAVORITES & CONCEPTUAL TRAPS:**
> - **SJF Optimality Trap:** Shortest Job First is **provably optimal** for minimizing average waiting time. However, it cannot be implemented at the short-term scheduling level because there is no way to know the length of the next CPU burst! (We can only *estimate* it using exponential averaging).
> - **Turnaround vs Response Time:** Turnaround is submission to completion. Response time is submission to the *first* response. Time-sharing systems (like Windows/Linux UI) care about minimizing Response Time (which RR does well), not Turnaround Time!
> - **Preemptive vs Non-Preemptive Priority Trap:** Both exist! If a new process arrives with a strictly higher priority than the currently running process, a preemptive kernel will boot the current one off. A non-preemptive kernel will simply put the new process at the head of the ready queue.

*End of Chapter 5 Notes*
