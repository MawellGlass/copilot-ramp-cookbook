---
title: Developer
hide: [toc]
---

# Developer — build agents as software, on Azure

> **You've outgrown low-code.** You build agents the way you build software: custom or fine-tuned models, autonomous orchestration, evaluation pipelines, and MCP tools at scale — in **Microsoft Foundry**, on Azure.

The fastest mistake here is starting in Foundry when Studio would have done. So the path opens with the graduation decision, then moves through the pro-code build loop: first agent, MCP tools, evaluation and monitoring, autonomous orchestration, and the governance/security model. It ends on a **Foundry solution template** matched to what you're building. Tune by goal and comfort.

<div id="role-path"></div>

<script id="role-path-config" type="application/json">
{
  "persona": "developer",
  "variables": ["goal", "skill"],
  "defaults": { "goal": "build", "skill": "experienced" },
  "steps": [
    {
      "stage": "Stage 5 → 6",
      "title": "Graduate from Studio to Foundry",
      "href": "../../walkthroughs/foundry-graduate-from-studio/",
      "why": "Confirm you actually need pro-code — and bring your Studio agent's design with you."
    },
    {
      "stage": "Stage 6 · Foundry",
      "title": "Build your first Foundry agent",
      "href": "../../walkthroughs/foundry-first-agent/",
      "why": "The engineered baseline — code, models, and an agent you run like a service."
    },
    {
      "stage": "Stage 6 · Foundry",
      "title": "Add MCP tools to your agent",
      "href": "../../walkthroughs/foundry-mcp-tools/",
      "why": "Give the agent real capabilities through the Model Context Protocol.",
      "weightGoal": { "build": 1 }
    },
    {
      "stage": "Stage 6 · Foundry",
      "title": "Evaluate and monitor in production",
      "href": "../../walkthroughs/foundry-evaluate-monitor/",
      "why": "Treat quality as an engineering discipline — measure it, don't guess at it.",
      "skill": ["some", "experienced"]
    },
    {
      "stage": "Stage 6 · Foundry",
      "title": "Run autonomous orchestration",
      "href": "../../walkthroughs/foundry-autonomous-orchestration/",
      "why": "Multi-agent and triggered execution for work that runs without a human in the loop.",
      "skill": ["experienced"],
      "optional": true,
      "weightGoal": { "build": 2 }
    },
    {
      "stage": "Stage 6 · Foundry",
      "title": "Govern and secure your agents",
      "href": "../../walkthroughs/foundry-govern-secure/",
      "why": "Identity, data boundaries, and the controls that let this run in production safely."
    },
    {
      "stage": "Solution template",
      "title": "Start from the Orchestrator agent",
      "href": "../../solutions/foundry-orchestrator-agent/",
      "why": "A multi-agent orchestration blueprint to fork and extend.",
      "deptVariants": {
        "finance": { "title": "Start from the Document Processing agent", "href": "../../solutions/foundry-document-processing-agent/", "why": "An ingestion-and-extraction pipeline blueprint for document-heavy work." },
        "legal": { "title": "Start from the Document Processing agent", "href": "../../solutions/foundry-document-processing-agent/", "why": "An ingestion-and-extraction pipeline blueprint for document-heavy work." }
      },
      "weightGoal": { "build": 2 }
    }
  ]
}
</script>

---

> **Not your path?** [See all roles](../../start-by-role/) &middot; [Browse the Foundry solution templates](../../solutions/) to fork a finished blueprint.
