---
name: ai-compliance-regulatory-architect
description: Map AI Agents to EU AI Act (2024/1689), NIST AI RMF 1.0, ISO 42001, and OWASP LLM Top 10 2.0 compliance frameworks.
---

# AI Regulatory Compliance & Governance Architect Skill

This skill provides comprehensive mapping, scorecard generation, and regulatory readiness audits for AI Agent systems against global AI laws and frameworks.

## 🏛️ Framework Mappings

### 1. EU AI Act (Regulation 2024/1689)
- **Article 9 (Risk Management System):** Requires continuous identification, estimation, and mitigation of risks throughout the AI lifecycle.
- **Article 13 (Transparency):** Mandates clear technical documentation, provenance tracking, and confidence signalling.
- **Article 14 (Human Oversight):** Requires technical mechanisms for human intervention, override gates, and kill switches.

### 2. NIST AI Risk Management Framework (AI RMF 1.0)
- **GOVERN 1.1 / 1.2:** Establishes policies, human oversight, and trustworthy AI characteristics.
- **MAP 3.5 & MANAGE 2.2:** Identifies risk likelihood/magnitude and implements technical controls (tool authorization, non-LLM policy layers).

### 3. ISO/IEC 42001 (Artificial Intelligence Management System)
- **Clause 5.2 (AI Policy):** Enforces organizational rules for AI system operation.
- **Clause 8.2 (AI Risk Assessment):** Structurally separates risk evaluation from model inference.
- **Clause 9.2 (Internal Audit):** Requires verifiable audit logs and decision reproducibility.

### 4. OWASP Top 10 for LLM Applications (v2.0)
- **LLM01 Prompt Injection:** Mitigated via input isolation and strict system prompt boundaries.
- **LLM06 Sensitive Information Disclosure:** Mitigated via PII sanitization and output filters.
- **LLM07 Insecure Plugin Design & LLM08 Excessive Agency:** Mitigated via deterministic tool permission gates.

## 📊 Scorecard Generation
Generate interactive HTML scorecards and JSON compliance artifacts summarizing:
- Overall Grade (A >= 90%, B >= 80%, C >= 70%, D >= 60%, F < 60%)
- Mandatory Minimums Status (B01 Tool Governance, B08 Privilege Escalation, P01 Destruction Resistance)
- Detailed per-control Pass/Fail/Inconclusive verdicts.
