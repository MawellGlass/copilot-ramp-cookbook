---
title: Manager
hide: [toc]
---

# Manager — run your team with less manual lift

> **You lead people and projects** and want to run meetings better, delegate effectively, and keep work on track without drowning in prep. Your path leans into the moments that repeat: 1:1s, weekly planning, briefings, onboarding.

The biggest manager win isn't a flashy demo — it's reclaiming the 30 minutes of prep that sits in front of every recurring meeting. Start in Chat, graduate to **Cowork** for multi-step work, then build one agent that does your recurring prep for you. Set your function and goal to tune the path.

<div id="role-path"></div>

<script id="role-path-config" type="application/json">
{
  "persona": "manager",
  "variables": ["dept", "pace", "goal"],
  "defaults": { "dept": "general", "pace": "steady", "goal": "team" },
  "steps": [
    {
      "stage": "Stage 1 · Chat",
      "title": "Prep for a 1:1 in two minutes",
      "href": "../../walkthroughs/chat-prep-1on1/",
      "why": "Walk in knowing what changed, what's blocked, and what to ask — every time.",
      "deptVariants": {
        "sales": { "why": "Walk into a rep 1:1 already across their pipeline movement and at-risk deals." },
        "it": { "why": "Walk into a 1:1 already across the engineer's open incidents and on-call load." }
      }
    },
    {
      "stage": "Stage 1 · Chat",
      "title": "Plan your week from your calendar and inbox",
      "href": "../../walkthroughs/chat-plan-week/",
      "why": "Turn a cluttered week into a ranked, intentional plan in one prompt."
    },
    {
      "stage": "Stage 1 · Chat",
      "title": "Draft an exec briefing from background materials",
      "href": "../../walkthroughs/chat-exec-briefing/",
      "why": "Get the up-the-chain summary written for you, grounded in the real docs.",
      "goal": ["team", "build"]
    },
    {
      "stage": "Stage 3 · Cowork",
      "title": "Draft a 30/60/90-day onboarding plan",
      "href": "../../walkthroughs/cowork-onboarding-plan/",
      "why": "Hand a new hire a real plan on day one — Cowork assembles it across sources.",
      "pace": ["steady", "ramp"],
      "deptVariants": {
        "hr": { "why": "Generate a role-specific onboarding plan you can reuse across every new hire." },
        "sales": { "why": "Stand up a ramp plan that gets new reps to first deal faster." }
      }
    },
    {
      "stage": "Stage 3 · Cowork",
      "title": "Build a deck from your rough notes",
      "href": "../../walkthroughs/cowork-deck-from-notes/",
      "why": "Go from bullet points to a presentable first draft without starting from a blank slide.",
      "pace": ["steady", "ramp"]
    },
    {
      "stage": "Stage 4 · Agent Builder",
      "title": "Build a meeting-prep agent for recurring 1:1s",
      "href": "../../walkthroughs/agent-builder-meeting-prep-agent/",
      "why": "Stop re-prompting — package your prep routine into an agent that runs itself.",
      "pace": ["steady", "ramp"],
      "weightGoal": { "build": 2 }
    },
    {
      "stage": "Stage 5 · Copilot Studio",
      "title": "Build the ROI business case",
      "href": "../../walkthroughs/studio-roi-business-case/",
      "why": "When you're championing a rollout, this turns adoption into a number leadership trusts.",
      "pace": ["ramp"],
      "optional": true,
      "goal": ["build"],
      "weightGoal": { "build": 1 }
    }
  ]
}
</script>

---

> **Not your path?** [See all roles](../../start-by-role/) &middot; [Take the 2-minute self-check](../../start-here/) to confirm your starting rung.
