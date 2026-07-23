---
name: multi-agent-memory-patterns
description: >
  Use this skill when designing or implementing workflows that involve multiple agents
  that need to share state, coordinate tasks, or maintain memory across sessions.
  Extracted from Claude Code's internal managed-agents documentation covering memory
  types, task systems, multi-agent coordination, and agent communication patterns.
---

# Multi-Agent Memory & Coordination Patterns

Source: `C:\Users\Administrator\.gemini\antigravity\scratch\system_prompts_leaks\Anthropic\Claude Code\bundled-skills\managed-agents\`

Extracted from Anthropic's internal documentation for Claude Code's managed agents system.

---

## Core Concept: The Task System

Multi-agent coordination is built around a **task system** — a shared state store that all agents can read from and write to.

### Task States
```
Created → In Progress → Completed
                     → Failed
                     → Needs Input
```

### Task Operations
- `TaskCreate` — create a new task with a description and optional parent
- `TaskGet` — read the current state of a task
- `TaskList` — list all tasks (filterable by status, parent)
- `TaskUpdate` — update task state, add notes, mark complete

**Rule:** Workers report their results by updating their task. The coordinator reads task updates to synthesize the final answer.

---

## Memory Types

### 1. In-Context Memory (Ephemeral)
- Lives only within a single agent's active conversation window
- Lost when the agent session ends
- **Use for:** Intermediate computation, scratch work, reasoning steps

### 2. External Memory (Persistent)
- Stored in files, databases, or artifacts outside the agent
- Survives across sessions
- **Use for:** Results that other agents or future sessions need to access

**In Antigravity:** Use artifacts directory at `C:\Users\Administrator\.gemini\antigravity\brain\<conversation-id>\` for persistent external memory.

### 3. Team Stores (Shared Memory)
- Memory explicitly shared between agents in a fleet
- Written by one agent, readable by all
- **Use for:** Search results, discovered facts, shared context that multiple workers need

**Pattern:**
```
1. Explore agent writes findings to a shared artifact
2. All worker agents read from that artifact
3. No need to re-research what's already discovered
```

---

## Agent Communication Protocols

### Direct Messaging (Teammate Agents)
```
SendMessage(to: "agent-name", message: "...")
```
- Used within a running fleet
- Synchronous — sender waits for acknowledgment
- Plain text responses are invisible — MUST use SendMessage

### Report Findings Pattern
For background/worker agents reporting to coordinator:
```
ReportFindings(summary: "one-line", detail: "full content")
```
- Goes to coordinator's context
- Worker continues running after reporting
- Coordinator synthesizes multiple worker reports

### Task-Based Coordination
```
Coordinator:
  task = TaskCreate("Implement feature X")
  TaskUpdate(task, assignee="worker-1")

Worker-1:
  [does work]
  TaskUpdate(task, status="completed", notes="Committed abc123")

Coordinator:
  result = TaskGet(task)  # reads worker's notes
```

---

## Designed Multi-Agent Patterns

### Pattern 1: Map-Reduce
```
Coordinator
├── Worker 1 (processes chunk A)
├── Worker 2 (processes chunk B)
├── Worker 3 (processes chunk C)
└── Synthesizer (merges A+B+C results)
```
Best for: Large file processing, parallel analysis, batch operations

### Pattern 2: Pipeline
```
Stage 1 (Explore) → Stage 2 (Plan) → Stage 3 (Implement) → Stage 4 (Test)
```
Best for: Sequential workflows where each stage depends on the prior

### Pattern 3: Specialist Fleet
```
Coordinator
├── Frontend specialist
├── Backend specialist
├── Database specialist
└── Security specialist
```
Best for: Full-stack feature implementation, where domain expertise matters

### Pattern 4: Verification Consensus
```
Worker (implements)
├── Verifier 1 (checks correctness)
├── Verifier 2 (checks edge cases)
└── Verifier 3 (checks security)
→ All 3 must pass before coordinator accepts
```
Best for: High-stakes code changes, security-sensitive operations

---

## Coordination Anti-Patterns (What to Avoid)

| Anti-pattern | Problem | Fix |
|-------------|---------|-----|
| Workers spawning their own sub-agents | Creates uncontrolled depth, hard to track | Workers should only execute, not orchestrate |
| Agents writing to overlapping files simultaneously | Race conditions, corrupted state | Use task system to assign non-overlapping file sets |
| Coordinator doing all the work | Defeats the purpose of multi-agent | Delegate aggressively; coordinator only synthesizes |
| Workers using `git add .` | Stages unintended files | Workers always stage only their specific changed files |
| Re-researching what another agent already found | Wastes turns and context | Always check shared memory / existing artifacts first |

---

## When to Use Multi-Agent vs Single Agent

**Use single agent when:**
- Task is sequential (each step depends on the last)
- Total work fits in ~50 tool calls
- No parallelizable sub-tasks

**Use multi-agent when:**
- Task has clearly independent sub-tasks
- Fan-out search is needed (5+ search angles)
- Work can be split by file, domain, or type
- Verification / quality checking needed in parallel with implementation
- Total work exceeds comfortable single-agent context

---

## Scheduled Agent Deployments

From `managed-agents-scheduled-deployments.md`:
- Agents can be triggered on a schedule (cron-style)
- Useful for: daily reports, monitoring, recurring maintenance tasks
- Use `/schedule` command in Antigravity to set up recurring tasks

---

## Self-Hosted Sandbox Patterns

From `managed-agents-self-hosted-sandboxes.md`:
- Agents can run in isolated environments for security-sensitive work
- File system, network, and process access can be scoped
- Use for: running untrusted code, executing user-provided scripts, security testing
