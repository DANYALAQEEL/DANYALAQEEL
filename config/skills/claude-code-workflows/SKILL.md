---
name: claude-code-workflows
description: >
  Official Claude Code internal slash-command workflows, memory system taxonomy, 
  multi-agent patterns, and verification protocols — extracted directly from Claude Code's 
  own bundled skills. Use this when you want to understand how Claude Code was DESIGNED 
  to work, or when replicating its workflows in Antigravity. Includes: /btw (side question), 
  /simplify (4-agent cleanup), /verify (runtime observation), /recap, /insights,
  and the complete 4-type memory taxonomy.
---

# Claude Code Workflows — Official Internal Reference

Source files:
- `Anthropic/Claude Code/slash-commands/btw.md`
- `Anthropic/Claude Code/slash-commands/recap.md`
- `Anthropic/Claude Code/slash-commands/insights.md`
- `Anthropic/Claude Code/bundled-skills/debug.md`
- `Anthropic/Claude Code/bundled-skills/simplify.md`
- `Anthropic/Claude Code/bundled-skills/verify.md`
- `Anthropic/Claude Code/bundled-skills/security-review.md`
- `Anthropic/Claude Code/bundled-skills/memory-types.md`

---

## `/btw` — Side Question Pattern

**Mechanism:** A separate lightweight agent is spawned to answer a side question without interrupting the main agent.

**Key constraints of the btw agent:**
- Has NO tools — cannot read files, run commands, or search
- One-off response only — no follow-up turns
- NEVER says "Let me try...", "I'll now...", "Let me check..."
- If it doesn't know: says so — does NOT offer to look it up
- Does NOT reference being interrupted

**Design insight:** This is how Claude Code achieves non-blocking side questions. The main agent continues; a fresh lightweight instance answers immediately from context only.

**Replication pattern:** When someone asks a quick question mid-task, spawn a fresh instance with NO tools to answer just from context. Don't pause the main work.

---

## `/recap` — Re-engagement Summary

**Exact prompt (verbatim):**
> "The user stepped away and is coming back. Recap in under 40 words, 1-2 plain sentences, no markdown. Lead with the overall goal and current task, then the one next action. Skip root-cause narrative, fix internals, secondary to-dos, and em-dash tangents."

**Template output:** `[overall goal] → [current task] → [one next action]`

---

## `/simplify` — 4-Agent Parallel Code Cleanup

**Phase 0:** Get the diff via `git diff @{upstream}...HEAD`

**Phase 1:** Launch **4 independent review agents in parallel**, each reviewing one dimension:

| Agent | Focus | What to flag |
|-------|-------|-------------|
| **Reuse** | Re-implemented existing code | Name the existing helper to call instead |
| **Simplification** | Unnecessary complexity | Redundant state, copy-paste, deep nesting, dead code |
| **Efficiency** | Wasted work | Redundant computation, sequential independent ops, blocking startup code |
| **Altitude** | Wrong depth of fix | Bandaids on shared infrastructure vs generalizing the mechanism |

**Phase 2:** Wait for all 4 → dedup overlapping findings → apply fixes directly. Skip if fix changes intended behavior or is outside scope. Finish with brief summary.

**Anti-patterns NOT covered by /simplify:** Correctness bugs → use `/code-review` for those.

---

## `/verify` — Runtime Observation Protocol

**Core principle (verbatim):**
> "Verification is runtime observation. You build the app, run it, drive it to where the changed code executes, and capture what you see. That capture is your evidence. Nothing else is."

**Critical prohibitions:**
- ❌ DO NOT run tests — "proves you can run CI, not that the change works"
- ❌ DO NOT typecheck
- ❌ DO NOT `import { foo }` and call it in isolation — that's a unit test you wrote

**Surface mapping:**
| Change reaches | Surface | Action |
|----------------|---------|--------|
| CLI/TUI | terminal | Type the command, capture output |
| Server/API | socket | Send the request, capture response |
| GUI | pixels | Playwright/xvfb, screenshot |
| Library | package boundary | `import pkg` through public export |
| Prompt/agent config | the agent | Run the agent, capture behavior |
| CI workflow | Actions | Dispatch it, read the run |

---

## `/security-review` — Security-Focused Diff Analysis

**Role identity:** Senior security engineer reviewing changes on current branch

**Critical Rules:**
- Only flag issues where >80% confident of actual exploitability
- Skip theoretical/style/low-impact findings
- **DO NOT report:** DoS vulnerabilities, secrets on disk, rate limiting/resource exhaustion

**Security Categories (complete checklist):**

**Input Validation:**
- SQL injection via unsanitized input
- Command injection in system calls/subprocesses
- XXE injection in XML parsing
- Template injection in templating engines
- NoSQL injection
- Path traversal in file operations

**Auth & Authorization:**
- Authentication bypass logic
- Privilege escalation paths
- Session management flaws

---

## Claude Code Memory System — Complete 4-Type Taxonomy

### Type 1: `user` memories
**Purpose:** Who the user is, their role, expertise level, preferences
**When to save:** Any time you learn about their role, preferences, responsibilities, knowledge
**How to write:** Tailor future behavior — "senior Go engineer, new to React"
**Key rule:** Never write negative judgements about the user

### Type 2: `feedback` memories
**Purpose:** How the user wants you to work — corrections AND confirmations
**When to save:** User corrects your approach ("don't", "stop X") OR confirms ("yes exactly", "perfect")
**Critical:** Save BOTH corrections AND confirmations — drift from validated approaches is as bad as repeating mistakes
**Format:** `[Rule itself] → Why: [reason] → How to apply: [when/where]`

**Examples:**
```
"Integration tests must hit real database, not mocks. 
Why: Prior incident where mock/prod divergence masked broken migration."

"This user wants terse responses with no trailing summaries."
```

### Type 3: `project` memories
**Purpose:** Ongoing work, goals, initiatives, bugs, deadlines — not derivable from code/git
**When to save:** Who, what, why, by when — convert relative dates to absolute
**Format:** `[Fact/decision] → Why: [motivation/constraint] → How to apply: [effect on suggestions]`
**Note:** Project memories decay fast — the "why" lets future you judge if still load-bearing

**Example:**
```
"Merge freeze begins 2026-03-05 for mobile release cut. 
Flag any non-critical PR work scheduled after that date."
```

### Type 4: `reference` memories
**Purpose:** Where to find things in external systems
**When to save:** Learn about resources in external systems and their purpose
**Examples:**
```
"Pipeline bugs tracked in Linear project 'INGEST'"
"grafana.internal/d/api-latency is oncall latency dashboard — check it when editing request-path code"
```

---

## Design Principles Derived from These Workflows

1. **Parallelism is default** — 4 agents simultaneously reviewing one codebase = 4x faster
2. **Runtime beats static analysis** — always prove the change works by running it
3. **Memory is categorized** — user profile, feedback loops, project state, and references are separate
4. **Side questions are non-blocking** — spawn a no-tools agent for instant answers
5. **Recaps are ultra-compressed** — 40 words max, goal + current task + next action only
6. **Security review skips noise** — >80% confidence threshold, no DoS/secrets/rate-limiting
