---
name: codebase-exploration-patterns
description: >
  Use this skill when you need to navigate, map, or understand an unfamiliar codebase.
  Extracted from Claude Code's internal Explore agent and code-walkthrough bundled skill.
  Applies optimal search strategies, parallel tool usage, and systematic exploration patterns
  to find anything in any codebase efficiently.
---

# Codebase Exploration Patterns — Extracted from Claude Code

Source: `C:\Users\Administrator\.gemini\antigravity\scratch\system_prompts_leaks\Anthropic\Claude Code\agents\Explore.md`
Source: `C:\Users\Administrator\.gemini\antigravity\scratch\system_prompts_leaks\Anthropic\Claude Code\bundled-skills\code-walkthrough.md`

---

## Core Philosophy

> "Be smart about how you search for files and implementations. Spawn multiple parallel tool calls for grepping and reading files."

The goal is **maximum information in minimum turns** by leveraging parallelism aggressively.

---

## Search Breadth Levels

Always choose a breadth level before starting exploration:

| Level | When to use | How many searches |
|-------|-------------|-------------------|
| `quick` | Single targeted lookup — you know roughly where to look | 1-2 searches |
| `medium` | Moderate exploration — a few possible locations | 3-5 searches |
| `very thorough` | Multiple locations, naming conventions, and patterns | 8+ parallel searches |

---

## Exploration Strategies by Task

### "Find where X is defined"
```
1. grep for the exact symbol name (function, class, variable)
2. grep for common import patterns ("from X import", "require('X')", "import X")
3. If not found, try variations: camelCase, snake_case, UPPER_CASE
4. Check index files (index.ts, index.py, __init__.py, mod.rs)
```

### "Understand how feature Y works"
```
1. grep for Y's entry point (API route, CLI command, event handler)
2. Trace the call stack: read the entry point, find what it calls
3. Find the data model: grep for related types/schemas
4. Find tests: grep in test/ or __tests__ directories
5. Read 1-2 representative tests to understand expected behavior
```

### "Find all files that reference Z"
```
1. grep -r "Z" with file pattern filters (*.ts, *.py, etc.)
2. Check for indirect references (via aliases, re-exports, interfaces)
3. Check config files that might reference Z
```

### "Understand the project structure"
```
1. List top-level directories and their purposes
2. Read README.md and any ARCHITECTURE.md or docs/
3. Find the entry point (main.ts, app.py, index.js, Cargo.toml)
4. Read the package.json / pyproject.toml / Cargo.toml for dependencies
5. Find the routing file (for web apps)
6. Find the database schema (migrations/, schema.prisma, models.py)
```

---

## Parallel Search Patterns

**Rule:** Never run searches sequentially when they're independent. Always group independent searches into a single parallel batch.

**Example: Finding all auth-related code**
```
Instead of:
  1. grep for "login" → wait
  2. grep for "authenticate" → wait
  3. grep for "jwt" → wait
  4. grep for "session" → wait

Do this:
  Parallel batch:
  - grep for "login"
  - grep for "authenticate"  
  - grep for "jwt"
  - grep for "session"
  → wait for all 4 → merge results
```

---

## What to Read vs. What to Skim

**Read fully:**
- Entry points (main file, router, app config)
- Files that directly implement the feature you're exploring
- Type definitions / interfaces related to the task
- Test files for the feature (show intended behavior)

**Skim (first 50-100 lines):**
- Large utility files (take what's relevant)
- Files that only reference the feature tangentially

**Skip:**
- Build output directories (`dist/`, `build/`, `.next/`, `target/`)
- Lock files (`package-lock.json`, `Cargo.lock`)
- Generated files (`.generated.ts`, `*.pb.go`)
- Node modules, vendor directories

---

## Read Window Awareness

The Explore agent reads **excerpts**, not whole files. This means:

- Content past the read window may be missed
- For large files, target specific line ranges rather than reading the whole file
- Use grep to find the exact line number, then read ±50 lines around it
- For cross-file consistency checks or full audits — use the main agent, not Explore

---

## Reporting Findings

Always structure exploration output as:

```
## Findings

### [Symbol/Feature] Location
- `path/to/file.ts:L42` — [brief description of what's there]

### Relevant Files
- `path/to/main.ts` — entry point, routes all requests through middleware
- `path/to/auth.ts` — authentication logic, JWT handling
- `path/to/types.ts` — core type definitions

### Key Patterns Observed
- [Pattern 1]: [description]
- [Pattern 2]: [description]

### Unanswered Questions
- [Anything you couldn't find / would need deeper investigation]
```

---

## Common Gotchas

| Gotcha | Solution |
|--------|---------|
| Symbol not found by exact name | Try case variations, abbreviations, plural forms |
| Import not found | Check barrel exports (index.ts), path aliases (tsconfig paths) |
| File seems relevant but behavior unclear | Read the tests for that file |
| Multiple files with same name | Check directory context — which package/module owns it? |
| Dead code | Check if the file is referenced anywhere before spending time on it |
