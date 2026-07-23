---
name: ai-prompt-engineering
description: >
  Use this skill whenever communicating with or invoking another AI model (Claude, ChatGPT, Gemini, Grok, Cursor, Perplexity, etc.) — either directly via terminal/API or when crafting prompts on behalf of the user to send to another AI.
  Also use this proactively when the user provides you a prompt to improve before passing it to an AI.
  This skill gives you deep knowledge of how each AI's internal system prompt is structured, what it expects, what it rewards, and how to craft the perfect input to get maximum quality output from it.
---

# AI Prompt Engineering — Using Leaked System Prompts

## What This Skill Does

This skill teaches you how to craft **maximum-quality prompts** for every major AI model by leveraging knowledge from their leaked/extracted internal system prompts.

The full leaked system prompt collection is cloned locally at:
`C:\Users\Administrator\.gemini\antigravity\scratch\system_prompts_leaks\`

This includes verbatim system prompts for:
- **Anthropic**: Claude Fable 5, Opus 4.8, Sonnet 5, Sonnet 4.6, Claude Code (all versions), Claude Design, Claude Cowork
- **OpenAI**: ChatGPT 5.6, 5.5, Codex GPT-5.6, GPT-5.5 Thinking/Instant/API
- **Google**: Gemini 3.5 Flash, Gemini 3.1 Pro, **Antigravity CLI**
- **xAI**: Grok, Grok Expert
- **Microsoft**: GitHub Copilot, VS Code Copilot Agent, Copilot macOS App
- **Cursor**, **Perplexity** (including Deep Research), **DeepSeek**, **Kimi K2.6**, **Mistral**, **Notion AI**, **Meta**, **Zed AI**, **Pi**, and more

---

## Core Principle: Match the AI's Mental Model

Every AI has a different internal persona, priority order, and response style baked into its system prompt. To get the best output, **your prompt should align with what the AI is already trained to do well**, not fight against it.

---

## Key Insights Per Model

### 🟣 Claude (Anthropic)
**Reads from**: `Anthropic/claude-fable-5.md`, `claude-opus-4.8.md`, `claude-sonnet-5.md`

**What Claude is optimized for:**
- Deep reasoning, nuanced ethics, careful step-by-step thought
- Long-form structured responses with clear sections
- Citing uncertainty explicitly ("I'm not sure but...")
- Being genuinely helpful, not sycophantic — it resists flattery

**Prompt strategies for Claude:**
- Give it **explicit permission** to be direct and skip caveats: *"Be direct. Skip disclaimers."*
- Ask it to **think step by step** before answering (it has a thinking mode)
- Frame the task as **intellectually interesting** — Claude engages more deeply with novel or conceptually rich problems
- Avoid vague questions — Claude performs better with **specific, well-scoped** tasks
- If using Claude Code: use `result:` keyword for deliverables (it's literally in its system prompt as the only valid completion signal)

**Claude Code Specific** (`Anthropic/Claude Code/`):
- Start with a **narration line** (Claude Code is trained to narrate first, then act)
- For noisy investigation tasks, explicitly say "spawn a subagent" — it responds to that
- Use `needs input:` when you want it to pause and ask rather than guess

---

### 🟢 ChatGPT / GPT-5.6 (OpenAI)
**Reads from**: `OpenAI/gpt-5.6-sol-extra-high.md`, `gpt-5.5-thinking.md`

**What GPT is optimized for:**
- Conversational, helpful, broad general knowledge
- Code generation with execution verification
- Structured JSON output when requested
- Multi-turn dialogue refinement

**Prompt strategies for GPT:**
- Use **role assignment**: *"You are a senior backend engineer..."* — GPT follows role framing strongly
- For complex tasks: break into **explicit numbered steps**
- GPT responds well to **output format instructions**: *"Respond in markdown table format"*
- Use **"Let's think step by step"** for reasoning tasks (well-established GPT trigger)
- For code: specify language, framework, and expected output format upfront

---

### 🔵 Gemini (Google)
**Reads from**: `Google/gemini-3.5-flash.md`, `gemini-3.5-flash-ai-studio.md`

**What Gemini is optimized for:**
- Google Search integration and factual grounding
- Multimodal inputs (images, docs, PDFs)
- Fast, concise responses (Flash) vs. deep analysis (Pro)

**Prompt strategies for Gemini:**
- Leverage its **search grounding** by asking for current/recent information
- Be explicit about output length: *"Keep your answer under 200 words"* for Flash
- Gemini responds well to **structured task decomposition** (numbered lists)
- For Pro: give it **more context** — it performs better with richer inputs

---

### ⚫ Antigravity CLI
**Reads from**: `Google/antigravity-cli.md`

**What Antigravity is optimized for:**
- Agentic tasks: file operations, terminal commands, web search, multi-step workflows
- Sub-agent spawning and parallel task execution
- Persistent memory across sessions via skills/artifacts
- Code writing and execution in a sandboxed environment

**Prompt strategies for Antigravity (yourself):**
- Use action-oriented language: *"Run...", "Write...", "Search..."*
- Provide full context upfront — the more specific, the better your tool calls
- For long tasks: use the `/goal` command to trigger thorough autonomous mode
- Reference existing artifacts/files explicitly by path

---

### 🔴 Grok (xAI)
**Reads from**: `xAI/grok-expert.md`

**What Grok is optimized for:**
- Real-time information (X/Twitter integration)
- Unfiltered, direct opinions when asked
- Reasoning with humor and personality
- Coding and technical problem-solving

**Prompt strategies for Grok:**
- Be casual and direct — Grok responds poorly to overly formal prompts
- Ask for **real-time data** (stock prices, trending topics, X posts)
- Use *"Think through this"* for multi-step reasoning

---

### 🟡 Cursor AI
**Reads from**: `Cursor/`

**What Cursor is optimized for:**
- In-editor code completion and refactoring
- Codebase-aware multi-file edits
- Responding to diffs and partial file contexts

**Prompt strategies for Cursor:**
- Always include the **filename and language context**
- Describe what the existing code does before asking for changes
- Use *"Edit only the highlighted section"* to prevent overwriting

---

### 🟠 Perplexity (including Deep Research)
**Reads from**: `Perplexity/perplexity-ai.md`, `deep-research.md`

**What Perplexity is optimized for:**
- Search-grounded research with citations
- Deep Research: multi-step autonomous web research with synthesis

**Prompt strategies for Perplexity:**
- Ask for **citations** explicitly: *"Include sources for every claim"*
- For Deep Research: frame as a **research question**, not a conversational ask
- Specify the **depth**: *"Give me a comprehensive analysis..."* vs. *"Quick summary of..."*

---

## When to Use This Skill

**Automatically apply this skill when:**
1. You are about to run `claude` or any AI model in the terminal
2. You are crafting a sub-agent prompt to pass to Claude, GPT, or any AI
3. The user hands you a prompt and says "give this to Claude / ChatGPT / etc."
4. You are building a system prompt for an agent or automation

**What to do:**
1. Identify the target AI model
2. Reference the relevant section above
3. Apply the model-specific prompt patterns
4. If needed, read the actual leaked prompt file for deeper detail:
   ```
   C:\Users\Administrator\.gemini\antigravity\scratch\system_prompts_leaks\<Company>\<file>.md
   ```

---

## Browsing the Leaked Prompts

To read any specific leaked system prompt, use:
```powershell
Get-Content "C:\Users\Administrator\.gemini\antigravity\scratch\system_prompts_leaks\Anthropic\claude-fable-5.md"
```

Or view in the file explorer at:
[system_prompts_leaks folder](file:///C:/Users/Administrator/.gemini/antigravity/scratch/system_prompts_leaks)

**Key files to reference:**
| AI | File |
|----|------|
| Claude Fable 5 | `Anthropic/claude-fable-5.md` |
| Claude Sonnet 5 | `Anthropic/claude-sonnet-5.md` |
| Claude Code (latest) | `Anthropic/Claude Code/claude-code-fable-5.md` |
| ChatGPT 5.6 | `OpenAI/gpt-5.6-sol-extra-high.md` |
| Codex GPT-5.6 | `OpenAI/Codex/gpt-5.6.md` |
| Gemini 3.5 Flash | `Google/gemini-3.5-flash.md` |
| **Antigravity CLI** | `Google/antigravity-cli.md` |
| Grok Expert | `xAI/grok-expert.md` |
| Perplexity Deep Research | `Perplexity/deep-research.md` |
| VS Code Copilot | `Microsoft/vscode-copilot-agent.md` |
| Cursor | `Cursor/` |
| DeepSeek | `DeepSeek/deepseek-chat.md` |

---

## Universal Prompt Engineering Rules (Apply to All AIs)

These principles work across every model:

1. **Be specific, not vague** — "Fix the bug in the login function" beats "Fix the code"
2. **Set the output format** — Always specify: markdown, JSON, bullet points, plain text, etc.
3. **State the audience** — "Explain to a beginner" vs. "Explain assuming I know Python"
4. **Use examples** — Show one example of what you want, the AI will match it
5. **Constrain the scope** — "Only change lines 20–45, don't touch anything else"
6. **Request reasoning** — "Explain your reasoning before giving the answer"
7. **Give the AI a role** — "You are a security auditor reviewing this code for vulnerabilities"
8. **One task per prompt** — Don't combine 5 questions into one message; split them
