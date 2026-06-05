---
title: "Stage 6 · Foundry"
stage: foundry
---

# Stage 6 · Foundry

> **The pro-code frontier. When a low-code agent can't reach far enough — custom models, autonomous orchestration, evaluation, and MCP tools at scale — you cross into Microsoft Foundry.**

**The shift:** from "I build agents in a designer" to "I engineer agents as software." Most people never need this stage, and that's by design — Stages 1–5 solve the overwhelming majority of real work. But when an agent has to run pro-code logic, call custom or fine-tuned models, or operate as part of an engineered system, Foundry is where it belongs.

!!! warning "A different kind of stage — for developers"
    Foundry is a **pro-code, developer-owned platform**, not a low-code designer. It lives in Azure, not the
    Microsoft 365 admin center, and it assumes engineering skills (SDKs, CI/CD, Azure resources). Treat this
    stage as a *signpost to the frontier* rather than a click-by-click walkthrough — and verify everything
    against the official Microsoft docs, which move fast.

---

## When you're ready for this stage

You've outgrown low-code. A Copilot Studio agent can't express what you need: you require a **custom or fine-tuned model**, **autonomous multi-agent orchestration**, **rigorous evaluation and monitoring**, or **MCP tools and integrations at engineering scale**. You have developers, an Azure subscription, and a deployment pipeline — and the problem justifies building like software.

!!! question "Going the wrong way?"
    Foundry is the easiest place to over-engineer. If you're writing **glue code for a single linear
    task** or rebuilding a connector Studio already ships, you've overshot —
    [drop back to Studio](../right-sizing.md#foundry-to-studio).

## What you need

- An **Azure subscription** and a **Microsoft Foundry project** to build in.
- **Developer skills** — SDKs (Python/.NET/JS), source control, and CI/CD.
- An **engineering owner** for the Azure resources, identity, and networking behind the agent.
- A clear reason you couldn't solve it in [Stage 5 · Copilot Studio](stage-5-studio.md). If you *could*, start there.

---

## Walkthroughs — the pro-code frontier

Unlike earlier stages, these are **developer walkthroughs**: representative SDK/CLI patterns and the
decisions behind them, not click-by-click product tours. Foundry moves fast — each page links the
authoritative Microsoft docs to verify against. Build them roughly in order.

??? note "Core Foundry walkthroughs"

    ### [Build your first pro-code agent with the Foundry Agent Service](../walkthroughs/foundry-first-agent.md)
    **Start here.** Create an agent from the SDK, run a turn, and prove your project, identity, and plumbing work.

    ### [Graduate a Copilot Studio agent into pro-code Foundry](../walkthroughs/foundry-graduate-from-studio.md)
    The usual on-ramp — re-platform a proven low-code agent that hit a real ceiling.

    ### [Give a Foundry agent custom tools and MCP integrations](../walkthroughs/foundry-mcp-tools.md)
    Turn a talking agent into a doing agent with function tools and standards-based MCP.

    ### [Evaluate and continuously monitor a Foundry agent](../walkthroughs/foundry-evaluate-monitor.md)
    Score quality on a dataset before you ship, and watch it in production. For developers and IT/admin.

    ### [Orchestrate multiple agents and autonomous runs](../walkthroughs/foundry-autonomous-orchestration.md)
    Move from one agent to a system of agents that hand off work and run when triggered.

    ### [Secure and govern Foundry agents in production](../walkthroughs/foundry-govern-secure.md)
    Tenant-isolated data, least-privilege identity, and the governance plane. For IT/admin and developers.

??? note "Production engineering walkthroughs — models, cost, and safety"

    These go past building an agent to **operating** one as production software: swapping models safely,
    keeping it affordable, and proving it's hard to break. Reach for them once an agent is real and busy.

    ### [Fine-tune a domain model and serve it from a Foundry agent](../walkthroughs/foundry-fine-tune-serve.md)
    The last lever when prompting and retrieval hit their ceiling — train the behaviour in, then serve it behind an agent.

    ### [A/B and shadow-deploy a model swap behind a Foundry agent](../walkthroughs/foundry-ab-shadow-deploy.md)
    Adopt a new or tuned model the way you ship risky code — shadow, canary, then promote on the numbers.

    ### [Token-budgeting and cost optimization for a production agent](../walkthroughs/foundry-cost-optimization.md)
    Make tokens a metric you watch, then cut spend at scale without quietly cutting quality.

    ### [Build a red-team / safety eval harness](../walkthroughs/foundry-red-team-eval.md)
    Try to break your own agent — repeatably — so adversarial regressions fail the build, not reach users.

!!! tip "Pro-code solution templates"
    These walkthroughs pair with copy-and-adapt **[Foundry solution templates](../solutions/index.md#foundry-templates-pro-code)** —
    including the signature pro-code patterns: NL-to-SQL analytics, browser-using (computer-use) agents,
    voice / contact-center IVR, private-repo code review, and multi-modal document classification at scale.

---

## Borrow, don't build

Foundry is a deep, fast-moving developer platform — there's no value in re-documenting it here. Lean on
Microsoft's own authoritative material, which stays current with the product.

> **📚 Learn more.**
>
> - [Microsoft Foundry docs](https://learn.microsoft.com/en-us/azure/ai-foundry/) — the canonical front door: build, evaluate, deploy.
> - [Foundry Agent Service](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/) — build, deploy, and run agents with tools and orchestration.
> - [Standard agent setup (your data stays in your tenant)](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/concepts/standard-agent-setup) — bring-your-own Azure resources for project-level data isolation.
> - [Role-based access control in Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/concepts/rbac-azure-ai-foundry) — least-privilege built-in roles and Entra ID auth.
> - [Extend Microsoft 365 Copilot — options compared](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/) — where custom-engine (Foundry) agents fit next to declarative ones.
> - [Agent samples (low-code → pro-code)](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/agent-samples) — Microsoft-owned and community starting points.

The full curated set for this stage lives in [Resources → Stage 6](../RESOURCES.md).

!!! info "Security at this stage"
    Foundry agents run on **Azure** with **Entra ID authentication and Azure RBAC**, and the standard setup
    keeps agent data in **your own single-tenant Azure resources** (Storage, Cosmos DB, AI Search, Key Vault).
    Microsoft Purview classifies them as **Enterprise AI apps**, and Agent 365 can govern them alongside your
    low-code agents. See the full picture in **[Security & Governance](../empowerment/security.md)**.

---

## You've reached the frontier

There's no Stage 7. From Chat to Foundry, the ramp has taken you from a daily habit to engineered, governed
agents — pick the **lowest** stage that solves each problem, and only climb when the work demands it. Keep a
backlog of agents worth building from the [Use-Case Catalog](../CATALOG.md).

[→ Back to the full Use-Case Catalog](../CATALOG.md)
