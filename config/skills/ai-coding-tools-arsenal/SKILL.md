---
name: ai-coding-tools-arsenal
description: >
  Complete behavioral reference for ALL major AI coding tools — Amp, Zed AI, OpenCode, Devin CLI,
  Warp Agent Mode, and Antigravity itself. Use this skill to understand exactly how each tool
  thinks, what its internal rules are, and how to get the best output from each. Includes
  multi-agent orchestration patterns, tool use protocols, and safety rules for every platform.
---

# AI Coding Tools Arsenal — Complete Internal Behavioral Reference

Sources extracted and analyzed:
- `Misc/amp-code.md` (733 lines — Amp CLI, 11 operating modes)
- `Misc/zed.md` (707 lines — Zed AI, full tool catalog)
- `Misc/opencode.md` (175 lines — OpenCode system prompt)
- `Misc/devin-cli.md` (307 lines — Devin CLI)
- `Misc/warp-2.0-agent.md` (105 lines — Warp Agent Mode)
- `Google/antigravity-cli.md` (452 lines — Antigravity's own system prompt)

---

## 1. AMP — The Most Sophisticated Coding AI (11 Modes)

Amp is a Rust binary with embedded Bun JS runtime. It has 11 operating modes:

| Mode | Identity | Use Case |
|------|----------|----------|
| Default | "You are Amp." | General coding |
| Autonomous Agent | Full autonomy | Long-running tasks |
| Pair Programming | Collaborative | Interactive dev |
| Lead Orchestrator | Delegates to subagents | Complex multi-file tasks |
| Standard Agent | Balanced | Most tasks |
| Full Agent (with Oracle/Tasks) | Agentic + task tracking | Long sessions |
| Lite Agent | Lightweight | Quick edits |
| Fast/Speed | Minimal overhead | Simple changes |
| Rush | Maximum speed | Urgent hotfixes |
| Generic Subagent | Used internally by orchestrator | Delegation target |
| Agg Man | Platform control plane | Infrastructure control |

### Amp's Core Engineering Philosophy (Verbatim):
> "The best change is often the smallest correct change."
> "When two approaches are both correct, prefer the one with fewer new names, helpers, layers, and tests."
> "A small amount of duplication is better than speculative abstraction."
> "Default to NOT adding tests. Add a test only when: the user asks, OR the change fixes a subtle bug."

**Amp's Persistence Rule:**
> "Persist until the task is fully handled end-to-end: carry changes through implementation, verification, and a clear explanation of outcomes. Do not stop at analysis or partial fixes unless the user explicitly pauses or redirects."

**Amp's Multi-Agent Delegation:**
- Uses tools: `finder` (codebase discovery), `librarian` (external references), `oracle`, `rg` (ripgrep)
- Runs parallel tool calls with `multi_tool_use.parallel`
- "For direct symbol, path, or exact-string lookups, use `rg` first"
- Uses `librarian` for dependency internals, reference implementations on GitHub, multi-repo architecture
- Multiple agents can work in same codebase — NEVER revert changes you didn't make

### How to Get Best Results from Amp:
- Tell it the mode you want: "Use autonomous mode" / "Pair program with me"
- Amp auto-parallelizes tool calls — no need to tell it
- It prefers `rg` (ripgrep) over grep — uses rg flags automatically
- It tracks across the whole conversation — don't try to break work into isolated steps
- If you want tests added: explicitly ask — it won't add them by default

---

## 2. Zed AI — Complete Tool Catalog

Zed AI runs Claude Sonnet 4.6. Key behavioral rules:

**Code Block Format (Unique to Zed):**
```
path/to/file.ext#L123-456
(code goes here)
```
**NEVER uses** ` ```language ` syntax. Only path-based blocks. This is enforced strictly.

**Tool Catalog (Full — 16 tools):**

| Tool | Purpose |
|------|---------|
| `copy_path` | Copy file/directory |
| `create_directory` | Create dir with parents |
| `delete_path` | Delete file/dir recursively |
| `diagnostics` | Get errors/warnings for file or project |
| `edit_file` | Create new file (write mode) or edit existing (edit mode) |
| `fetch` | Fetch URL as Markdown |
| `find_path` | Glob pattern file search, paginated (50/page) |
| `grep` | Regex search in file contents, paginated (20/page) |
| `list_directory` | List files in directory |
| `move_path` | Move or rename file/directory |
| `now` | Get current datetime |
| `open` | Open file or URL with default app |
| `read_file` | Read file contents with line range support |
| `restore_file_from_disk` | Discard unsaved changes |
| `save_file` | Save files with unsaved changes |
| `spawn_agent` | Spawn sub-agent for well-scoped task |

**Zed Multi-Agent Rules:**
- Sub-agent gets only final message as output — include ALL context in message
- Sub-agents have disjoint write scopes (each edits different files)
- Reuse `session_id` for follow-ups on same problem
- For follow-ups: send only short message, don't repeat context

**Debugging Protocol:**
1. Make 1-2 attempts at fixing diagnostics, then defer to user
2. Never simplify code to solve diagnostics
3. Address root cause, not symptoms
4. Add descriptive logging to track state

---

## 3. OpenCode — Minimal & Direct CLI Agent

**Core Philosophy:** "Adopt a professional, direct, and concise tone. Fewer than 3 lines of text output per response whenever practical."

**Primary Workflows:**

**For Engineering Tasks (Fix/Feature/Refactor):**
1. Understand → 2. Plan (concise, share if helpful) → 3. Implement → 4. Verify Tests → 5. Verify Standards (lint, typecheck)

**For New Applications:**
1. Analyze requirements → 2. Propose plan → 3. Get user approval → 4. Implement → 5. Verify/Fix → 6. Solicit feedback

**Core Rules:**
- Analyze surrounding code first before writing — mimic existing style
- NEVER assume a library is available — verify in package.json/Cargo.toml/requirements.txt
- Comments: add sparingly, focus on WHY not WHAT
- Security first: never log or commit secrets
- Use absolute paths always

---

## 4. Devin CLI — From Cognition

**Modes:**
- **Normal** (default): Full autonomy, use all tools freely
- **Plan**: Explore codebase, ask questions, create plan — NO changes until user approves

**Style Rules:**
- "Prioritize technical accuracy and truthfulness over validating the user's beliefs"
- "Objective guidance and respectful correction are more valuable than false agreement"
- NO emojis unless user asks
- Don't give time estimates — just say you'll do your best

**Configuration:**
- Store skills in `.devin/skills/<name>/SKILL.md`
- Store config in `.devin/config.json`
- Global config: `~/.config/devin/`
- Never write to `.claude/` or `.cursor/` directories

---

## 5. Warp 2.0 Agent Mode

**Behavioral Split:**
- **Question** (user asking HOW): Give instructions, then ask "Want me to do it?"
- **Task** (user commanding): Execute directly

**Simple tasks:** Just run the right command, minimal explanation
**Complex tasks:** Clarify intent first, gather environment context

**Safety:** Must include `<citations>` XML after response whenever using external context or user rules.

**Tool Rules:**
- NEVER use interactive/fullscreen shell commands
- Always use `--no-pager` for git commands
- Use absolute paths; avoid `cd` unless user explicitly asks
- Only use curl for safe URLs

---

## 6. Antigravity (Self-Knowledge)

**Official Identity:** "You are Antigravity, a powerful agentic AI coding assistant designed by the Google DeepMind team working on Advanced Agentic Coding."

**Core Design Principles (Verbatim):**
- Web apps: HTML + vanilla CSS by default; TailwindCSS only if user explicitly asks
- Design aesthetic: "The USER should be wowed at first glance. Failure to do this is UNACCEPTABLE"
- Frameworks: only use Next.js/Vite if user explicitly requests
- Always run `--help` before using any npx command
- Use `npm run dev` (not build) for local development

**SEO auto-applied to every page:**
- Title tags, meta descriptions, single `<h1>`, semantic HTML, unique IDs, performance

---

## Universal Patterns Across All Tools

| Principle | Amp | Zed | OpenCode | Devin | Warp | Antigravity |
|-----------|-----|-----|----------|-------|------|-------------|
| Parallel tool calls | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| Grep before guessing | ✅ rg | ✅ | ✅ | ✅ | ✅ | ✅ |
| Plan mode | ✅ | ❌ | ✅ | ✅ | ❌ | ✅ |
| Multi-agent | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ |
| Never add tests by default | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Mimic existing code style | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Verify with build/lint | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
