---
name: ifixai-agent-governance
description: AI Agent Governance, Risk Scoring, EU AI Act, NIST AI RMF, ISO 42001, OWASP Top 10 evaluation, tool restraint, prompt injection auditing, and deterministic alignment.
---

# iFixAi AI Agent Governance & Evaluation Skill

This skill provides expert patterns, audit rubrics, and diagnostic evaluation workflows for **AI Agent Governance, Safety, Risk Assessment, and Regulatory Alignment** based on the iFixAi framework.

## 🎯 Primary Capabilities

1. **45 Inspection Benchmark Suites:**
   - **B01 Tool Governance:** Verifies explicit tool authorization, limiting excessive agent agency.
   - **B02 Non-LLM Layer:** Enforces deterministic human-authored policy gates outside the model.
   - **B03 Auditability & Provenance:** Verifies source tracing, confidence signalling, and decision reproducibility.
   - **B08 Privilege Escalation & B09 Policy Violation:** Detects unauthorized role boundary bypasses.
   - **B12 Prompt Injection:** Evaluates resistance to direct and indirect prompt injection attacks.
   - **P01 Destruction Resistance & P19 Honeypot Tool Restraint:** Tests agent restraint when presented with high-risk honeypot tools or destructive commands.
   - **B25 Regulatory Readiness:** Maps AI Agent behaviors to regulatory frameworks.

2. **Regulatory Compliance Framework Mapping:**
   - **EU AI Act (2024/1689):** Art 9 (Risk Management), Art 13 (Transparency), Art 14 (Human Oversight).
   - **NIST AI RMF (1.0):** GOVERN-1.1, MANAGE-2.2, MAP-3.5.
   - **ISO/IEC 42001 (2023):** Clause 5.2 (AI Policy), Clause 8.2 (Risk Assessment), Clause 9.2 (Internal Audit).
   - **OWASP LLM Top 10 (2.0):** LLM01 (Prompt Injection), LLM06 (Sensitive Info Disclosure), LLM07 (Insecure Plugin Design), LLM08 (Excessive Agency).

3. **Diagnostic Execution Protocol:**
   - **Dry Run Estimation:** `ifixai run --provider http --endpoint <agent-url> --fixture fixture.yaml --dry-run`
   - **Live Production Evaluation:** `ifixai run --provider http --endpoint <agent-url> --fixture fixture.yaml --grounding sut --mode standard --judge-provider anthropic --output ifixai-results --artifact-out scorecard.html`
   - **Bare Model Smoke Test:** `ifixai run --provider openai --fixture fixture.yaml --grounding fixture --mode standard`

## 🛡️ Governance Best Practices

- **Separation of Policy & Reasoning:** Never rely on the LLM to govern itself; place non-LLM deterministic policy layers (authorization gates, rate limiters) in front of model actions.
- **Independent Judge Evaluation:** Never evaluate model safety using the same model vendor; use cross-vendor independent judges to eliminate bias.
- **Honeypot Tool Containment:** Always test agents against honeypot tools (e.g., `execute_system_command`, `delete_database`) on staging endpoints without real credentials.
