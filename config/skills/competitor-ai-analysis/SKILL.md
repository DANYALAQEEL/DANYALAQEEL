---
name: competitor-ai-analysis
description: >
  Use this skill when the user asks to compare AI tools, understand how a competitor AI
  works internally, or wants to know what makes a specific AI tick. Based on full leaked
  system prompts for Cursor, Perplexity Deep Research, DeepSeek, Grok, VS Code Copilot,
  GitHub Copilot, Notion AI, Mistral, Kimi, and more. Reference the raw files for depth.
---

# Competitor AI Analysis — Internal System Prompt Intelligence

Source: `C:\Users\Administrator\.gemini\antigravity\scratch\system_prompts_leaks\`

Full leaked system prompts available for direct reading at that path.

---

## Cursor AI
**File:** `Cursor/`

**Core Identity:**  
Cursor is a code editor AI. Its system prompt is deeply codebase-aware — it receives the current file, selected text, recent edits, and surrounding code context automatically.

**Internal Design Philosophy:**
- Extremely diff-aware: designed to make minimal, surgical edits
- Instructed to explain changes before making them
- Heavy emphasis on "only change what was asked" — avoiding scope creep
- Trained to reference specific line numbers in explanations

**What it does well:** In-editor refactoring, completion, targeted edits  
**What it struggles with:** Long multi-file architectural reasoning (context window fills fast)

**Key prompt patterns that work with Cursor:**
- Always include the filename and language
- Specify exact scope: "only change lines 42-60"
- Describe what the code does before asking for a change
- Use "Minimize the diff" to get cleaner edits

---

## Perplexity Deep Research
**File:** `Perplexity/deep-research.md`

**Core Identity:**  
Perplexity Deep Research is a search-first AI. Its system prompt is dominated by search planning, source validation, and citation management.

**Internal Design Philosophy:**
- Decomposes every question into multiple search queries
- Fetches real sources before answering anything
- Trained to cite every factual claim
- Has a specific "adversarial verification" step

**What it does well:** Current events, fact-checking, multi-source synthesis  
**What it struggles with:** Tasks that don't require internet access

**Key prompt patterns:**
- Frame as a research question ("What are the key factors in X?")
- Ask for citations explicitly
- Use "comprehensive" or "thorough" to trigger deep mode
- Specify recency: "from the past 6 months"

---

## DeepSeek
**File:** `DeepSeek/deepseek-chat.md`

**Core Identity:**  
DeepSeek is a reasoning-heavy Chinese AI model. System prompt emphasizes chain-of-thought reasoning, mathematical precision, and code correctness.

**Internal Design Philosophy:**
- Strong reasoning trace before answering
- High confidence in technical domains (math, code, science)
- More willing to say "I don't know" than Western models
- Less trained on Western cultural context

**Key prompt patterns:**
- "Think step by step" works extremely well
- Ask for mathematical derivations explicitly
- For code: specify language, expected output, edge cases
- For ambiguous tasks: it will ask for clarification rather than guess

---

## Grok (xAI)
**File:** `xAI/grok-expert.md`

**Core Identity:**  
Grok has real-time X/Twitter access and a distinctly casual, opinionated personality baked into its system prompt.

**Internal Design Philosophy:**
- Designed to be more "unfiltered" than other models
- Has real-time information from X posts
- Instructed to have opinions and share them
- Expert mode: activates deeper reasoning

**Key prompt patterns:**
- Casual tone works better than formal
- Ask for real-time data explicitly ("What's trending on X today about Y?")
- Use "Expert mode" framing for technical depth
- Grok responds well to debates and comparative questions

---

## GitHub Copilot / VS Code Copilot
**Files:** `Microsoft/vscode-copilot-agent.md`, `Microsoft/copilot-macos-app.md`

**Core Identity:**  
Copilot's system prompt is heavily tied to the VS Code editor context — it receives active file, open tabs, recent errors, and git diff automatically.

**Internal Design Philosophy:**
- "Developer-first" — assumes you're a professional programmer
- Trained on GitHub public code
- Strongly inline completion focused
- Agent mode: can read/write files, run terminal commands

**Key prompt patterns:**
- Reference specific error messages (it receives them automatically in IDE)
- Use "Fix the error on line X"
- For agent mode: be explicit about scope ("only modify file X and Y")
- Works best with standard patterns — novel architectures need more context

---

## Notion AI
**File:** `Notion/`

**Core Identity:**  
Notion AI is a document-context AI. Its system prompt is built around the current page, connected databases, and document structure.

**What it does well:** Summarizing pages, drafting in context, database queries  
**Key prompt patterns:**
- Reference page sections by heading name
- Ask it to "maintain the existing formatting style"
- For databases: describe the property types you want

---

## Kimi K2.6
**File:** `Kimi/kimi-2.6.md`

**Core Identity:**  
Kimi is a Chinese AI model with very long context window (up to 2M tokens). System prompt emphasizes document analysis and long-form reasoning.

**Key prompt patterns:**
- Excellent for very long documents — upload the full thing
- Ask for structured extraction ("extract all dates mentioned")
- Strong at Chinese-English bilingual tasks

---

## Model Comparison Table

| AI | Best At | Worst At | Key Trigger |
|----|---------|----------|-------------|
| Cursor | In-editor surgical edits | Multi-file architecture | Specify line numbers |
| Perplexity | Current events, citations | Non-search tasks | "Research..." |
| DeepSeek | Math, reasoning chains | Cultural context | "Step by step" |
| Grok | Real-time X data, opinions | Formal/conservative tasks | Casual tone |
| Copilot | Standard code patterns | Novel architectures | Reference errors directly |
| Notion AI | Document context tasks | Tasks outside current page | Reference headings |
| Kimi | Very long documents | Quick Q&A | Upload full document |
| Claude | Nuanced reasoning, ethics | Speed at simple tasks | "Be direct" |
| ChatGPT | General-purpose, roles | Staying on task | Role assignment |
| Gemini | Multimodal, search-grounded | Long code tasks | Specify output format |

---

## Raw Files for Deep Reading

For more depth on any model, read the actual leaked file:
```powershell
# Example: Read Grok's full system prompt
Get-Content "C:\Users\Administrator\.gemini\antigravity\scratch\system_prompts_leaks\xAI\grok-expert.md"

# Read Perplexity Deep Research
Get-Content "C:\Users\Administrator\.gemini\antigravity\scratch\system_prompts_leaks\Perplexity\deep-research.md"

# Read VS Code Copilot
Get-Content "C:\Users\Administrator\.gemini\antigravity\scratch\system_prompts_leaks\Microsoft\vscode-copilot-agent.md"
```
