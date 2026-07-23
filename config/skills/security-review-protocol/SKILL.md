---
name: security-review-protocol
description: >
  Use this skill when reviewing code for security vulnerabilities — whether the user shares
  code directly, asks for a PR review, or asks "is this code secure?". Implements the exact
  3-phase security review methodology extracted verbatim from Claude Code's internal
  security-review skill, including false-positive filtering rules used by Anthropic's
  senior security engineers.
---

# Security Review Protocol — Extracted from Claude Code Internal Skill

Source: `C:\Users\Administrator\.gemini\antigravity\scratch\system_prompts_leaks\Anthropic\Claude Code\bundled-skills\security-review.md`

This is the exact security review workflow Anthropic's Claude Code uses internally. It is designed by senior security engineers to minimize false positives while catching high-confidence, exploitable vulnerabilities.

---

## Objective

Identify **HIGH-CONFIDENCE security vulnerabilities** with real exploitation potential.

> This is NOT a general code review. Focus ONLY on security implications.  
> Only flag issues where you're **>80% confident** of actual exploitability.

---

## What to EXCLUDE (Hard Rules)

Never report the following — they are automatic exclusions:

| Category | Why excluded |
|----------|-------------|
| Denial of Service (DoS) | Handled by separate processes |
| Secrets stored on disk (if otherwise secured) | Separate secret scanning process |
| Rate limiting / resource exhaustion | Out of scope |
| Memory consumption / CPU exhaustion | Out of scope |
| Input validation on non-security-critical fields | No proven security impact |
| Missing hardening measures | Code isn't expected to implement all best practices |
| Race conditions that are theoretical | Only report if concretely problematic |
| Outdated third-party libraries | Managed separately |
| Memory safety issues in Rust/memory-safe languages | Impossible by design |
| Unit test files | Not production attack surface |
| Log spoofing / un-sanitized output to logs | Not a vulnerability |
| SSRF where only path is controlled (not host/protocol) | Not exploitable |
| User-controlled content in AI system prompts | Not a vulnerability |
| Regex injection | Not a vulnerability |
| Regex DoS | Not a vulnerability |
| Findings in markdown / documentation files | Not executable |
| Missing audit logs | Not a vulnerability |

---

## Security Categories TO Examine

### Input Validation
- SQL injection via unsanitized user input
- Command injection in system calls / subprocesses
- XXE injection in XML parsing
- Template injection in templating engines
- NoSQL injection in database queries
- Path traversal in file operations

### Authentication & Authorization
- Authentication bypass logic
- Privilege escalation paths
- Session management flaws
- JWT token vulnerabilities
- Authorization logic bypasses

### Crypto & Secrets
- Hardcoded API keys, passwords, tokens
- Weak cryptographic algorithms
- Improper key storage or management
- Cryptographic randomness issues
- Certificate validation bypasses

### Injection & Code Execution
- Remote code execution via deserialization
- Pickle injection (Python)
- YAML deserialization vulnerabilities
- Eval injection in dynamic code execution
- XSS (reflected, stored, DOM-based) — **except** React/Angular unless using `dangerouslySetInnerHTML`

### Data Exposure
- Sensitive data logging (PII, secrets, passwords — **not** URLs or non-PII)
- API endpoint data leakage
- Debug information exposure in production

---

## 3-Phase Analysis Methodology

### Phase 1: Repository Context Research
- Identify existing security frameworks and libraries in use
- Find established secure coding patterns in the codebase
- Examine existing sanitization and validation patterns
- Understand the project's security model and threat model

### Phase 2: Comparative Analysis
- Compare new code changes against existing security patterns
- Identify deviations from established secure practices
- Look for inconsistent security implementations
- Flag code that introduces new attack surfaces

### Phase 3: Vulnerability Assessment
- Examine each modified file for security implications
- Trace data flow from user inputs to sensitive operations
- Look for privilege boundaries being crossed unsafely
- Identify injection points and unsafe deserialization

---

## False Positive Filtering

For each candidate finding, apply this confidence score:

| Score | Meaning |
|-------|---------|
| 9-10 | Certain exploit path, tested |
| 8-9 | Clear vulnerability pattern with known exploitation |
| 7-8 | Suspicious pattern requiring specific conditions |
| **Below 7** | **Don't report — too speculative** |

**Key precedents:**
- Logging secrets in plaintext = vulnerability. Logging URLs = safe.
- UUIDs = unguessable, no need to validate
- Environment variables and CLI flags = trusted, not attack vectors
- React/Angular = XSS-safe unless using `dangerouslySetInnerHTML` or `bypassSecurityTrustHtml`
- Client-side JS/TS lacking auth checks = NOT a vulnerability (server handles it)
- Shell scripts with command injection = only report if untrusted input can concretely reach them

---

## Required Output Format

```markdown
# Vuln 1: [Category]: `file.py:linenum`

* Severity: High / Medium / Low
* Confidence: [0.7-1.0]
* Description: [What the vulnerability is and where]
* Exploit Scenario: [Specific attack path — what attacker does, what they gain]
* Recommendation: [Specific fix with code example if possible]
```

**Severity guidelines:**
- **HIGH** — Directly exploitable → RCE, data breach, authentication bypass
- **MEDIUM** — Requires specific conditions but significant impact (only include if obvious and concrete)
- **LOW** — Defense-in-depth issues, lower impact

**Report only HIGH and MEDIUM.** Better to miss theoretical issues than flood with false positives.

---

## Parallel Sub-Task Pattern (for large codebases)

For comprehensive reviews:
1. Spawn a sub-agent to identify all candidate vulnerabilities
2. For each candidate, spawn a parallel sub-agent to filter false positives using the rules above
3. Keep only findings where confidence ≥ 0.8
4. Synthesize the final markdown report

---

## Notes

- You do NOT need to run commands to reproduce — read-only code analysis
- Even local-network-only exploitability can be HIGH severity
- Focus on what's newly introduced, not pre-existing issues
