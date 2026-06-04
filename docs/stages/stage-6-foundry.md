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

## What you need

- An **Azure subscription** and a **Microsoft Foundry project** to build in.
- **Developer skills** — SDKs (Python/.NET/JS), source control, and CI/CD.
- An **engineering owner** for the Azure resources, identity, and networking behind the agent.
- A clear reason you couldn't solve it in [Stage 5 · Copilot Studio](stage-5-studio.md). If you *could*, start there.

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
