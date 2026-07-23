# End-of-Document Strategy Section

## 3-Hour Quick Revision Strategy
If you have exactly 3 hours before the NUST Midterm Exam, follow this high-yield timeline:
**Hour 1: Chapters 4 & 5 (High Yield Numericals & Algorithms)**
- *0:00 - 0:30:* Practice 2 Gantt charts for CPU scheduling (SRTF and Round Robin). Ensure you can calculate average waiting turn and turnaround time accurately.
- *0:30 - 0:45:* Review Amdahl's Law and distinguish between Data vs. Task Parallelism.
- *0:45 - 1:00:* Review Multithreading Models (Many-to-One vs. One-to-One) and understand why blocking system calls affect them differently.
**Hour 2: Chapter 3 (The Core Process Mechanisms)**
- *1:00 - 1:30:* Memorize the 5-state Process Model diagram perfectly, and what causes transitions between states (Interrupt vs Event Wait).
- *1:30 - 2:00:* Study the Bounded-Buffer Producer/Consumer pseudo-code. Understand exactly why $n-1$ items is the limit. 
**Hour 3: Chapters 1 & 2 (Definitions & System Structures)**
- *2:00 - 2:20:* Read through the differences between Monolithic, Layered, and Microkernel architectures. Remember "Message Passing" for Microkernels.
- *2:20 - 2:40:* Quickly review the Memory Hierarchy pyramid and the transition between User/Kernel Mode (Traps vs Interrupts).
- *2:40 - 3:00:* Scan the "Rapid Revision" red flag points from Chapters 1-5 to avoid common conceptual traps.

---

## Chapter Weightage Estimation
*(Based on typical relative-grading university OS exams)*
- **Chapter 1 (Introduction):** ~10% (Mostly short definitions and True/False).
- **Chapter 2 (Structures):** ~15% (APIs vs System Calls, OS Design structures).
- **Chapter 3 (Processes):** ~25% (Heavy on IPC mechanisms, State Diagrams, and `fork()` implications).
- **Chapter 4 (Threads):** ~20% (Amdahl's law applications, thread models, concurrency vs parallelism).
- **Chapter 5 (CPU Scheduling):** ~30% (The main long-form numerical question will be from here. Expect Gantt charts and algorithm evaluation).

---

## 25 Predicted Midterm Questions (Mixed Short & Long)

**Very Short Definitions (2-3 Marks Each)**
1. What is a trap, and how does it differ from a standard interrupt?
2. Define the exact purpose of the Process Control Block (PCB).
3. Distinguish between an Orphan process and a Zombie process.
4. What is the difference between concurrency and parallelism?
5. State Amdahl's Law and identify its variables.
6. What is a Thread Pool?
7. Define CPU dispatcher latency.
8. What is the Convoy Effect?
9. Contrast symmetric and asymmetric multiprocessing.
10. What is a Long-Term Scheduler?

**Medium Questions (5 Marks Each)**
11. Draw and neatly label the 5-state process running model.
12. Explain the Transition from User Mode to Kernel Mode using a System Call.
13. Describe the Three methods of passing parameters to a System Call.
14. How does the Bounded Buffer solution for the Producer-Consumer problem work using Shared Memory? Why can it only hold $N-1$ elements?
15. Explain the difference between Data Parallelism and Task Parallelism. Give an example.
16. Discuss the Many-to-One and One-to-One multithreading models. Which one is best for a multicore system and why?
17. How does Aging prevent Starvation in Priority Scheduling? 
18. Compare the overheads of Process Creation versus Thread Creation.
19. What is the difference between a Preemptive and Non-preemptive scheduling kernel?
20. Explain why Shortest Job First is theoretically optimal but practically impossible to implement for CPU Scheduling.

**Long Questions / Numericals (10 Marks Each)**
21. (Numerical) Given four processes $P_1(0, 8)$, $P_2(1, 4)$, $P_3(2, 9)$, $P_4(3, 5)$ where formats are $P(\text{Arrival}, \text{Burst})$. Compute the Average Waiting Time and Turnaround Time using **Preemptive SJF (SRTF)**. Draw the complete Gantt chart.
22. (Numerical) Given three processes $P_1(24)$, $P_2(3)$, $P_3(3)$ all arriving at time 0. Execute them using **Round Robin (Quantum = 4)**. Draw the Gantt chart and compute the average waiting time.
23. (Theoretical) Detail the Microkernel System Structure. How does it improve reliability and security compared to a Monolithic system? Provide a disadvantage.
24. (Theoretical) Differentiate between Direct-Communication Message Passing and Indirect-Communication via Mailboxes.
25. (Comprehensive) Explain the Multilevel Feedback Queue Scheduling algorithm. Why is it considered the most complex but most effective scheduling algorithm? What parameters define it?

*End of Document*
