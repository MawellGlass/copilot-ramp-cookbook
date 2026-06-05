---
title: "Stage 5 · Copilot Studio"
stage: studio
---

# Stage 5 · Copilot Studio

> **Build real agents. The low-code destination of the ramp — production-grade agents with knowledge, actions, MCP tools, publishing, and governance (with Microsoft Foundry as the pro-code frontier beyond).**

**The shift:** from "I built a simple agent" to "I build agents that do real work in production." By the time you arrive here, every earlier stage has made this feel like the obvious next step rather than a cliff — you already think in terms of knowledge, instructions, and delegated tasks. Studio just gives you the full toolbox.

---

## When you're ready for this stage

Your declarative agents are bumping into limits: you need a real action against a system of record, an MCP tool, multiple topics, custom logic, or proper publishing and governance. You're ready to build, test, publish, and manage agents like products.

!!! question "Going the wrong way?"
    Studio is for agents with real actions, multi-topic logic, or org-wide publishing. If yours is just
    **one knowledge source plus instructions** for you and a few teammates, you've overshot —
    [drop back to Agent Builder](../right-sizing.md#studio-to-agent-builder).

## What you need

- Access to Copilot Studio and an environment to build in.
- A knowledge source and at least one concrete action or integration in mind.
- For production: an admin partner for environments, data policies, and monitoring.

---

## Walkthroughs — technical foundations

Build these in order to establish the platform skills all functional agents depend on.

??? note "Core Studio walkthroughs"

    ### [Build your first Studio agent with a knowledge source + topic](../walkthroughs/studio-first-agent.md)
    **Start here.** Go from Agent Builder to a real designed conversation with topics and grounding.

    ### [Give a Studio agent a real action with a connector](../walkthroughs/studio-connector-action.md)
    Let the agent do things, not just answer — look up records, create tickets, trigger workflows.

    ### [Add an MCP tool integration to your Studio agent](../walkthroughs/studio-mcp-tool-integration.md)
    Extend the agent with external tools.

    ### [Connect a Studio agent to a Microsoft Fabric data agent](../walkthroughs/studio-fabric-agent.md)
    Ground the agent on your warehouse and semantic models — answer questions from data, not just documents.

    ### [Trigger a Power Automate flow from inside a Studio agent](../walkthroughs/studio-power-automate-flow.md)
    Connect your agent to real business systems via Power Automate.

    ### [Design a multi-turn conversation with fallback and clarification](../walkthroughs/studio-multi-turn-conversation.md)
    Build an agent that asks what it needs to know and recovers gracefully.

    ### [Configure an autonomous event-triggered agent](../walkthroughs/studio-autonomous-triggers.md)
    Build an agent that acts when something happens — no user prompt required.

    ### [Secure a Studio agent with authentication](../walkthroughs/studio-authentication.md)
    Ensure only the right people can use your agent. For IT/admin.

    ### [Test and evaluate a Studio agent before publishing](../walkthroughs/studio-test-evaluate.md)
    Structured test cases before broad rollout.

    ### [Publish and govern your agent](../walkthroughs/studio-publish.md)
    Ship to Teams and the web with a governance checklist.

    ### [Govern and monitor your agents at scale](../walkthroughs/studio-govern-monitor.md)
    ALM, analytics, and guardrails for a fleet of agents.

    ### [Make the ROI case for your agent](../walkthroughs/studio-roi-business-case.md)
    Tie agent usage to outcomes. For managers and champions.

---

## Walkthroughs — functional use cases

Agents designed for a specific business function. Each pairs with a [Solution Template](../solutions/index.md) you can copy, adapt, and build from directly.

### HR

??? example "HR — Answer employee questions with a policies agent"

    **[HR: Answer employee questions with a policies agent](../walkthroughs/studio-functional-hr-policy-faq.md)**

    Give every employee a 24/7 HR FAQ agent grounded on your policy docs — consistent, cited answers and a structured escalation path for anything that needs a human.

    Pairs with: [Policy FAQ Agent solution template](../solutions/policy-faq-agent.md)

??? example "HR — Guide new starters through a personalised first-week experience"

    **[HR: Guide new starters through a personalised first-week experience](../walkthroughs/studio-functional-hr-onboarding.md)**

    Give every new employee a 24/7 first-week companion that knows their role, team, and start week — adapts the checklist and guidance to who they are, not a generic handbook.

    Pairs with: [Onboarding Buddy Agent solution template](../solutions/onboarding-buddy-agent.md)

### IT

??? example "IT — Triage support requests and answer from the knowledge base"

    **[IT: Triage support requests and answer from the knowledge base](../walkthroughs/studio-functional-it-helpdesk.md)**

    Deflect tier-1 IT tickets with instant KB answers — and for anything that needs a human, collect the right information and raise the ticket automatically.

    Pairs with: [IT Helpdesk Triage Agent solution template](../solutions/it-helpdesk-triage-agent.md)

??? example "IT — Self-service software and hardware access requests"

    **[IT: Self-service software and hardware access requests](../walkthroughs/studio-functional-it-access-request.md)**

    Let employees request software, hardware, and system access through a guided conversation — validated against the approved list and auto-routed to the right IT queue with a complete ticket.

    Pairs with: [IT Access Request Agent solution template](../solutions/it-access-request-agent.md)

### Finance

??? example "Finance — Self-service expense and procurement guidance"

    **[Finance: Self-service expense and procurement guidance](../walkthroughs/studio-functional-finance-expense.md)**

    Give employees instant answers on expense policy and procurement rules — and guide them into the right process rather than leaving them to hunt through the intranet.

    Pairs with: [Finance Expense & Procurement Agent solution template](../solutions/finance-expense-agent.md)

??? example "Finance — Self-service spend and budget Q&A for budget owners"

    **[Finance: Self-service spend and budget Q&A for budget owners](../walkthroughs/studio-functional-finance-budget-qa.md)**

    Give budget owners instant answers on spend position, variance from plan, and the Finance approval process — without waiting for a Finance business partner to respond.

    Pairs with: [Finance Expense & Procurement Agent solution template](../solutions/finance-expense-agent.md)

### Sales

??? example "Sales — Product intel and objection handling"

    **[Sales: Product intel and objection handling for sales reps](../walkthroughs/studio-functional-sales-intel.md)**

    Give every rep instant access to the right product story, competitive positioning, and objection responses — grounded on your actual sales content, available mid-call.

    Pairs with: [Sales Enablement Agent solution template](../solutions/sales-enablement-agent.md)

??? example "Sales — Build proposals and RFP responses with your approved content"

    **[Sales: Build proposals and RFP responses with your approved content](../walkthroughs/studio-functional-sales-proposal.md)**

    Help reps pull together the right content for proposals and RFP responses — grounded on your approved solution library and messaging — so the first draft takes 30 minutes instead of 3 hours.

    Pairs with: [Sales Proposal & RFP Agent solution template](../solutions/sales-proposal-rfp-agent.md)

### Legal & Compliance

??? example "Legal & Compliance — Policy guidance and process navigation"

    **[Legal & Compliance: Policy guidance and process navigation](../walkthroughs/studio-functional-legal-compliance.md)**

    Give employees instant answers on compliance policies and legal processes — with strict scope controls and an unambiguous escalation path for anything that needs a qualified human.

    Pairs with: [Legal & Compliance Guidance Agent solution template](../solutions/legal-compliance-agent.md)

??? example "Legal — Guide employees through contract routing and requirements"

    **[Legal: Guide employees through contract routing and requirements](../walkthroughs/studio-functional-legal-contract.md)**

    Give employees a clear, consistent process for getting contracts reviewed — what type of contract, what Legal needs, and where to submit — without every query landing on the legal intake inbox first.

    Pairs with: [Legal & Compliance Guidance Agent solution template](../solutions/legal-compliance-agent.md)

### Marketing

??? example "Marketing — Turn a campaign brief into asset checklist and draft copy"

    **[Marketing: brief to campaign drafts](../walkthroughs/studio-functional-marketing-campaign.md)**

    Turn a one-paragraph brief into a complete asset checklist and on-brand first-draft copy — so the team starts every campaign from a draft, not a blank page, with unverified claims flagged for review.

    Pairs with: [Marketing Campaign Agent solution template](../solutions/marketing-campaign-agent.md)

### Customer Support

??? example "Customer Support — Deflect common questions and draft agent replies"

    **[Customer Support: deflect and draft, escalate the rest](../walkthroughs/studio-functional-support-deflection.md)**

    The inward-facing cousin of the external Foundry support agent: it answers from approved help content, drafts send-ready replies, deflects the easy ones on self-serve, and escalates the edge cases.

    Pairs with: [Customer Support Deflection Agent solution template](../solutions/support-deflection-agent.md)

### Procurement

??? example "Procurement — Sourcing requests with vendor shortlists and policy gates"

    **[Procurement: request to vendors to policy gates](../walkthroughs/studio-functional-procurement-sourcing.md)**

    Take a purchase request, return a shortlist of approved preferred vendors, and apply the policy gates automatically — so people source fast and stay on contract instead of going off-contract by accident.

    Pairs with: [Procurement Sourcing Agent solution template](../solutions/procurement-sourcing-agent.md)

### Field Service

??? example "Field Service — Triage symptoms to likely cause and dispatch path"

    **[Field Service: symptoms to dispatch path](../walkthroughs/studio-functional-field-service-triage.md)**

    Take a reported symptom or fault code, return the most likely cause, and recommend the right dispatch path — self-fix, remote, or a truck roll with the right parts — behind a hard safety rule.

    Pairs with: [Field Service Triage Agent solution template](../solutions/field-service-triage-agent.md)

### Engineering

??? example "Engineering — Match alerts to runbook steps and escalation"

    **[Engineering: alert to runbook to escalation](../walkthroughs/studio-functional-engineering-oncall.md)**

    Meet the on-call engineer when an alert fires: match it to the right runbook step, guide the fix one step at a time, and know exactly who to escalate to when the runbook runs out — read-first by design.

    Pairs with: [Engineering On-Call Runbook Agent solution template](../solutions/engineering-oncall-runbook-agent.md)

### Workplace & Operations

??? example "Workplace — Plan an internal event end to end"

    **[Workplace: plan an internal event end to end](../walkthroughs/studio-functional-events-coordination.md)**

    Turn "I'm running an all-hands / offsite / team day" into an organised plan — logistics checklist, room and catering bookings, and drafted attendee comms — in one interaction, inside policy and budget.

    Pairs with: [Event Coordination Agent solution template](../solutions/event-coordination-agent.md)

---

## Borrow, don't build

Studio has the deepest first-party learning bench of any stage. The official **Learn docs** are the canonical build-to-govern path, and **Copilot Studio in a Day** is a free hands-on workshop that takes you from first agent to flows.

> **📚 Learn more.**
>
> - [Copilot Studio official docs](https://learn.microsoft.com/en-us/microsoft-copilot-studio/)
> - [Copilot Studio Resources (CAT)](https://aka.ms/copilotstudio/resources)
> - [Copilot Studio & agent samples](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/agent-samples)
> - [Mastering Copilot Studio (Learn Shows)](https://learn.microsoft.com/en-us/shows/mastering-copilot-studio/)
> - [Copilot Studio in a Day](https://aka.ms/CSIAD)
> - [Agent governance whitepaper + Agent 365](https://aka.ms/agent365/resources)

The full curated set for this stage lives in [Resources → Stage 5](../RESOURCES.md).

!!! info "Security at this stage"
    This is where the controls get rich: agents live in **Power Platform environments**, **DLP data
    policies** govern their knowledge, connectors, and channels, maker audit flows into **Microsoft
    Purview** (with Sentinel alerts), and you can add customer-managed keys and Customer Lockbox. See the
    full picture in **[Security & Governance](../empowerment/security.md)**.

---

## Where this leads

Copilot Studio is the destination for most agent-building. But when an agent has to be *engineered* — custom or fine-tuned models, autonomous orchestration, or MCP tools at scale — there's one more frontier beyond low-code. Most people never need it; keep a backlog from the [Use-Case Catalog](../CATALOG.md) and make the [ROI case](../walkthroughs/studio-roi-business-case.md) for the agents that matter.

[→ Stage 6 · Foundry](stage-6-foundry.md)
