---
name: ai-context-compression
description: >
  Use this skill when a conversation is getting very long and context window is filling up,
  or when you need to hand off context to another agent efficiently. Extracted from Claude Code's
  internal compact and session management slash commands. Teaches how to compress, summarize,
  and restore conversational context without losing critical information.
---

# AI Context Compression & Session Management

Source: `C:\Users\Administrator\.gemini\antigravity\scratch\system_prompts_leaks\Anthropic\Claude Code\slash-commands\compact.md`
Source: `C:\Users\Administrator\.gemini\antigravity\scratch\system_prompts_leaks\Anthropic\Claude Code\slash-commands\compact-continuation-message.md`
Source: `C:\Users\Administrator\.gemini\antigravity\scratch\system_prompts_leaks\Anthropic\Claude Code\slash-commands\compact-rewind-summarization.md`
Source: `C:\Users\Administrator\.gemini\antigravity\scratch\system_prompts_leaks\Anthropic\Claude Code\slash-commands\recap.md`

---

## When Context Compression Is Needed

Apply this skill when:
- Conversation has gone on for many turns (50+ tool calls)
- You notice yourself re-reading earlier files unnecessarily
- A task is being handed off to a new agent/session
- User asks "can you summarize what we've done so far?"
- Context window usage is near limit

---

## The Compact Summary Structure

Claude Code's internal compact format preserves the following:

```markdown
## Session Summary

### Goal
[One sentence: what the user was trying to achieve overall]

### Completed Work
- [Task 1]: [what was done, file paths, commit hashes]
- [Task 2]: [what was done]
...

### Current State
- [What exists now that didn't before]
- [Current branch, any uncommitted changes]
- [Tests passing / failing status]

### In Progress
- [What was being worked on when context was compacted]
- [Which files are open/relevant]
- [Next immediate step]

### Key Decisions Made
- [Decision 1]: [rationale]
- [Decision 2]: [rationale]

### Files Modified
- `path/to/file1.ts` — [what changed]
- `path/to/file2.py` — [what changed]

### Known Issues / Follow-ups
- [Issue 1]: [description]
- [Follow-up 1]: [description]

### Environment State
- Working directory: [path]
- Key environment variables set: [list]
- Services running: [list]
```

---

## Continuation Message Pattern

When resuming work in a new session after compacting, always start with:

```
Resuming session. Context summary:
[paste the compact summary above]

Continuing from: [exact last action]
Next step: [first thing to do]
```

This primes the new session with all critical context without re-reading conversation history.

---

## Rewind Summarization

When you need to summarize what happened at a specific point in the past (not just the current state):

```
From [timestamp/step] to [timestamp/step]:
- Started with: [state]
- Actions taken: [numbered list]
- Result: [final state]
- Key learnings: [any important discoveries]
```

---

## Recap Pattern (Session Title + Insights)

Used to generate a meaningful session title and key insights:

**Session Title:** [verb phrase that captures the main accomplishment]
- Good: "Implemented Redis caching for user sessions"
- Bad: "Worked on the project"

**Key Insights from this session:**
1. [Non-obvious discovery that future sessions should know]
2. [Pattern identified in the codebase]
3. [Gotcha or warning for future work]

---

## Context Efficiency Rules

1. **Don't re-read files you've already read** — summarize key info in your context instead
2. **Prune intermediate reasoning** — only keep conclusions, not the path to get there
3. **Commit completed work** — once code is committed, you only need the commit hash, not the full diff
4. **Use artifacts for large outputs** — write long outputs to files; reference by path, don't repeat in context
5. **Delegate noisy searches to subagents** — keep only the findings, not the search process, in main context

---

## Agent Handoff Protocol

When handing off an in-progress task to a new agent:

```
Task handoff to [agent type]:

CONTEXT:
[compact summary]

YOUR TASK:
[specific, scoped instruction]

CONSTRAINTS:
- [What to NOT touch]
- [What approach to use]
- [When to stop and report back vs. proceed]

EXPECTED OUTPUT:
[what you want back]
```
