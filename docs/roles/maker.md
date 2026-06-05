---
title: Maker
hide: [toc]
---

# Maker — build agents that do real work, without code

> **You're ready to build.** Not toys — agents with real knowledge sources, actions, and governance that hold up in production. And you want to do it in low-code, not by writing software.

The maker path is a build sequence: know when to graduate past Agent Builder, stand up your first Studio agent, wire it to a real action, test it honestly, then publish it. The final step swaps to a **ready-made solution template matched to your function** so you finish with something concrete to adapt. Set your function and goal to tune it.

<div id="role-path"></div>

<script id="role-path-config" type="application/json">
{
  "persona": "maker",
  "variables": ["dept", "skill", "goal"],
  "defaults": { "dept": "general", "skill": "some", "goal": "build" },
  "steps": [
    {
      "stage": "Stage 4 → 5",
      "title": "Know when to graduate from Agent Builder to Studio",
      "href": "../../walkthroughs/agent-builder-vs-studio/",
      "why": "Most agents should stop at Agent Builder. Make the jump deliberately, not by default.",
      "skill": ["new", "some"]
    },
    {
      "stage": "Stage 5 · Copilot Studio",
      "title": "Build your first Studio agent",
      "href": "../../walkthroughs/studio-first-agent/",
      "why": "The foundational build — topics, knowledge, and a working conversation end to end."
    },
    {
      "stage": "Stage 5 · Copilot Studio",
      "title": "Give your agent a real action",
      "href": "../../walkthroughs/studio-connector-action/",
      "why": "An agent that only talks is a demo. Wire it to a system so it actually does the work.",
      "deptVariants": {
        "it": { "title": "Trigger a Power Automate flow from your agent", "href": "../../walkthroughs/studio-power-automate-flow/", "why": "Kick off provisioning, ticketing, or approvals straight from the conversation." }
      }
    },
    {
      "stage": "Stage 5 · Copilot Studio",
      "title": "Test and evaluate before publishing",
      "href": "../../walkthroughs/studio-test-evaluate/",
      "why": "Catch the wrong answers in a test harness — not in front of your users.",
      "skill": ["some", "experienced"]
    },
    {
      "stage": "Stage 5 · Copilot Studio",
      "title": "Publish and roll out your agent",
      "href": "../../walkthroughs/studio-publish/",
      "why": "Ship it to the right channel and audience, with the guardrails in place.",
      "weightGoal": { "build": 1 }
    },
    {
      "stage": "Solution template",
      "title": "Adapt the Policy FAQ agent",
      "href": "../../solutions/policy-faq-agent/",
      "why": "A complete, governed blueprint you can clone and make your own.",
      "deptVariants": {
        "hr": { "title": "Adapt the Onboarding Buddy agent", "href": "../../solutions/onboarding-buddy-agent/", "why": "A complete HR onboarding agent — clone it and point it at your content." },
        "it": { "title": "Adapt the IT Helpdesk Triage agent", "href": "../../solutions/it-helpdesk-triage-agent/", "why": "A production-shaped IT triage agent ready to adapt to your queue." },
        "finance": { "title": "Adapt the Finance Expense agent", "href": "../../solutions/finance-expense-agent/", "why": "A finance expense-policy agent you can clone and tune to your rules." },
        "sales": { "title": "Adapt the Sales Enablement agent", "href": "../../solutions/sales-enablement-agent/", "why": "A sales enablement blueprint wired for your collateral and CRM." },
        "legal": { "title": "Adapt the Legal Compliance agent", "href": "../../solutions/legal-compliance-agent/", "why": "A compliance-aware legal agent with the escalation guardrails built in." }
      },
      "weightGoal": { "build": 2 }
    }
  ]
}
</script>

---

> **Not your path?** [See all roles](../../start-by-role/) &middot; [Browse every solution template](../../solutions/) to start from a finished blueprint.
