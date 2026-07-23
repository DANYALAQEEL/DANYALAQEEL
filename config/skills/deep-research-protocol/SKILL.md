---
name: deep-research-protocol
description: >
  Use this skill when the user asks for a deep, multi-source, fact-checked research report
  on any topic. Implements the exact 5-phase research workflow used internally by Claude Code
  and Perplexity Deep Research. Apply before answering any research question that requires
  more than a surface-level search.
---

# Deep Research Protocol — Extracted from Claude Code & Perplexity

Source: `C:\Users\Administrator\.gemini\antigravity\scratch\system_prompts_leaks\Anthropic\Claude Code\bundled-skills\deep-research\`

This is the exact multi-phase research workflow used internally by top AI research tools. Apply it whenever the user needs a comprehensive, well-sourced answer.

---

## When to Apply This Skill

✅ Apply when the user says:
- "Research X for me"
- "Find out everything about Y"
- "Give me a comprehensive analysis of Z"
- "I need a detailed report on..."
- Any question where a single web search is clearly insufficient

❌ Do NOT apply for:
- Quick factual lookups ("What year was X founded?")
- Simple code questions
- Conversational responses

---

## Pre-Research Gate: Scope Check

**Before starting research, ask yourself:**

Is the question specific enough to research directly?

**Underspecified examples** (ask 2-3 clarifying questions first):
- "What car should I buy?" → Need: budget, use-case, region, preferences
- "Tell me about AI" → Need: which aspect, what depth, what purpose
- "Research marketing" → Need: what product, what market, what goal

**Sufficiently specified** (research directly):
- "What are the best open-source vector databases for production use in 2026?"
- "Compare Rust vs Go for systems programming performance benchmarks"

---

## The 5-Phase Research Workflow

### Phase 1: SCOPE — Decompose the Question
Break the research question into **5 distinct search angles** that together give complete coverage.

**Example question:** "What are the best practices for LLM security in production?"

**5 angles:**
1. Input validation and prompt injection defenses
2. Output filtering and content moderation approaches
3. Access control and authentication patterns for LLM APIs
4. Model jailbreak techniques and mitigations
5. Compliance and regulatory requirements (GDPR, AI Act)

**Rule:** Angles must be non-overlapping and collectively exhaustive.

---

### Phase 2: SEARCH — 5 Parallel Web Searches
Run **5 simultaneous searches**, one per angle.

- Use varied query formulations — don't repeat the same phrasing
- Prioritize: academic papers, official docs, authoritative blogs, recent (within 12 months) sources
- Collect 3-5 URLs per angle (15-25 total)
- De-duplicate overlapping URLs across angles

---

### Phase 3: FETCH — Extract Falsifiable Claims
From the top 15 sources (after de-duplication):

For each source, extract:
- **Falsifiable claims** — statements that can be verified or refuted
- **Data points** — numbers, dates, statistics
- **Consensus views** — what multiple sources agree on
- **Contradictions** — where sources disagree

**Mark each claim with its source URL.**

---

### Phase 4: VERIFY — Adversarial Verification
For each major claim, apply **3-vote adversarial verification**:

1. **Confirm vote** — does evidence support this claim?
2. **Challenge vote** — what evidence contradicts or weakens it?
3. **Context vote** — is this claim time-limited, context-specific, or misrepresented?

**Threshold:** A claim is killed (removed from report) if 2 of 3 votes refute it.

**Confidence scoring:**
- ✅ **High confidence** — 3 sources agree, no contradictions found
- ⚠️ **Medium confidence** — 2 sources agree, minor contradictions
- ❌ **Low confidence** — conflicting evidence, don't include in report

---

### Phase 5: SYNTHESIZE — Build the Cited Report
Merge findings into a structured report:

**Report structure:**
```markdown
# [Research Topic]

## Executive Summary
[3-5 sentence overview of key findings]

## Key Findings

### [Finding 1 — High Confidence]
[Explanation] — Source: [URL]

### [Finding 2 — High Confidence]
[Explanation] — Source: [URL]

...

## Areas of Debate / Uncertainty
[Where sources disagree or evidence is mixed]

## Recommendations
[Actionable takeaways based on findings]

## Sources
1. [URL 1] — [brief description]
2. [URL 2] — [brief description]
...
```

---

## Quality Rules

1. **No unsourced claims** — every factual statement must have a URL
2. **Recency bias** — prefer sources from the last 12 months unless historical context is needed
3. **No hallucination** — if you can't find a source, say so explicitly
4. **Transparent uncertainty** — use language like "evidence suggests", "most sources indicate", "unclear/debated"
5. **Source diversity** — don't rely on a single domain or author for major claims

---

## Fast Mode (When Time Is Short)

For quick but still multi-source research:
1. Decompose into 3 angles (not 5)
2. Search each angle
3. Fetch top 5 sources total
4. Skip adversarial verification — just note confidence level
5. Synthesize into a shorter report (executive summary + key findings only)
