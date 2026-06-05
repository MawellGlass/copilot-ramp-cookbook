---
title: Solution Templates
hide: [toc]
---

# Solution Templates

Ready-to-build agent designs. Each template gives you everything needed to go from zero to a deployed agent — and they come in two flavors depending on how far up the ramp the job pushed you.

- **Studio templates** are low-code specs: a copy-paste system prompt, knowledge source guidance, topics to configure, starter prompts, a test case table, and a deployment checklist. A maker can build any of them in a half-day on Copilot Studio's low-code canvas.
- **Foundry templates** are pro-code blueprints: a representative code scaffold, an evaluation gate, and a deployment checklist for developers. Reach for these only when a Studio agent genuinely can't carry the job.

**Most teams should start in Studio.** Climb to a Foundry template only when you hit a real ceiling.

---

## Studio templates (low-code)

Grouped by functional area. Start with the cross-functional **Policy FAQ Agent** — it adapts to any team with a document library — then add the function-specific agents your org needs.

### Cross-functional

| Template | Best for | Time to build |
|---|---|---|
| [Policy FAQ Agent](policy-faq-agent.md) | Any team with a policy or process doc library — HR, IT, Finance, Legal | 2–3 hours |

### Human Resources

| Template | Best for | Time to build |
|---|---|---|
| [Onboarding Buddy Agent](onboarding-buddy-agent.md) | HR and people teams wanting a personalised first-week guide for new starters | 3–4 hours |

### IT

| Template | Best for | Time to build |
|---|---|---|
| [IT Helpdesk Triage Agent](it-helpdesk-triage-agent.md) | IT teams looking to deflect tier-1 tickets and automate ticket creation | 4–5 hours |
| [IT Access Request Agent](it-access-request-agent.md) | IT teams wanting guided software, hardware, and permissions requests with automatic ITSM ticket creation | 4–5 hours |

### Finance

| Template | Best for | Time to build |
|---|---|---|
| [Finance Expense & Procurement Agent](finance-expense-agent.md) | Finance and ops teams wanting self-service answers on expense policy, procurement rules, and approval thresholds | 3–4 hours |

### Sales

| Template | Best for | Time to build |
|---|---|---|
| [Sales Enablement Agent](sales-enablement-agent.md) | Sales teams needing instant competitive intel, case studies, and talk tracks | 3–4 hours |
| [Sales Proposal & RFP Agent](sales-proposal-rfp-agent.md) | Sales teams needing approved proposal content, RFP responses, and case studies assembled on demand | 3–4 hours |

### Legal & Compliance

| Template | Best for | Time to build |
|---|---|---|
| [Legal & Compliance Guidance Agent](legal-compliance-agent.md) | Legal and compliance teams wanting to deflect routine process questions with strict escalation controls | 3–4 hours |

### Marketing

| Template | Best for | Time to build |
|---|---|---|
| [Marketing Campaign Agent](marketing-campaign-agent.md) | Marketing teams turning a campaign brief into an asset checklist and on-brand first-draft copy | 3–4 hours |

### Customer Support

| Template | Best for | Time to build |
|---|---|---|
| [Customer Support Deflection Agent (internal)](support-deflection-agent.md) | Support teams answering from approved help content, drafting replies, and deflecting common questions | 3–4 hours |

### Procurement

| Template | Best for | Time to build |
|---|---|---|
| [Procurement Sourcing Agent](procurement-sourcing-agent.md) | Procurement teams giving requesters a compliant vendor shortlist with policy gates and approval routing | 3–4 hours |

### Field Service

| Template | Best for | Time to build |
|---|---|---|
| [Field Service Triage Agent](field-service-triage-agent.md) | Field service teams triaging symptoms to likely cause and the right dispatch path, safely | 4–5 hours |

### Engineering

| Template | Best for | Time to build |
|---|---|---|
| [Engineering On-Call Runbook Agent](engineering-oncall-runbook-agent.md) | Engineering teams matching alerts to runbook steps and knowing the escalation path under pressure | 4–5 hours |

### Workplace & Operations

| Template | Best for | Time to build |
|---|---|---|
| [Event Coordination Agent](event-coordination-agent.md) | Workplace and ops teams planning internal events — rooms, catering, comms — within policy | 3–4 hours |

---

## Foundry templates (pro-code)

Reach for these only when a Studio agent genuinely can't carry the job — custom code, your own evaluation gate, and identity you own.

| Template | Best for | Time to build |
|---|---|---|
| [Pro-Code Grounded Q&A Agent](foundry-knowledge-agent.md) | Developers whose grounded Q&A workload outgrew Studio — custom retrieval, an evaluation gate, code-owned identity | 1–2 days |
| [Multi-Agent Workflow Orchestrator](foundry-orchestrator-agent.md) | Developers automating a multi-step process across specialist agents and tools, with deterministic control and a workflow-level eval gate | 2–4 days |
| [High-Volume Document Processing Agent](foundry-document-processing-agent.md) | Ops, finance, or legal teams extracting structured data from documents at scale, with schema validation and a precision/recall gate | 2–4 days |
| [Customer-Facing Support Agent](foundry-support-agent.md) | Developers building an external, action-taking support agent with strict guardrails, content safety, and continuous evaluation | 3–5 days |

---

!!! info "More templates coming"
    This library grows as new patterns are validated in the field. Each template starts as a walkthrough, gets tested with real customers, and graduates here when the pattern is repeatable. Have one to contribute? Open an issue on GitHub.
