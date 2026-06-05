---
title: Team champion
hide: [toc]
---

# Team champion — make the habit stick and scale what works

> **You're driving adoption** for your team or org. Your job isn't to use Copilot the most — it's to build the habit in others, surface the wins, and turn one-off magic into a repeatable routine.

Champions succeed by making Copilot *visible* and *low-friction*. The path below gives you a recurring ritual (Prompt of the Day), a way to see where adoption is actually landing, and the first shared agents that encode your team's knowledge so nobody starts from a blank box. Tune the controls to your function and goal.

<div id="role-path"></div>

<script id="role-path-config" type="application/json">
{
  "persona": "champion",
  "variables": ["dept", "pace", "goal"],
  "defaults": { "dept": "general", "pace": "steady", "goal": "team" },
  "steps": [
    {
      "stage": "Stage 1 · Chat",
      "title": "Run a \"Prompt of the Day\" for your team",
      "href": "../../walkthroughs/chat-prompt-of-the-day/",
      "why": "The single highest-leverage adoption ritual — one prompt, shared daily, builds the habit."
    },
    {
      "stage": "Stage 2 · First-party agents",
      "title": "See where Copilot is landing",
      "href": "../../walkthroughs/first-party-workforce-insights/",
      "why": "Lead with data — find the teams adopting fast and the ones who need a nudge.",
      "pace": ["steady", "ramp"]
    },
    {
      "stage": "Stage 4 · Agent Builder",
      "title": "Build a team-knowledge agent over SharePoint",
      "href": "../../walkthroughs/agent-builder-team-knowledge/",
      "why": "Turn the questions your team keeps asking into an agent that answers them.",
      "deptVariants": {
        "hr": { "why": "Encode your HR policies and FAQs into an agent the whole org can self-serve." },
        "it": { "why": "Put your runbooks and how-tos behind an agent so the queue gets shorter." },
        "finance": { "why": "Make policy, approval limits, and process answerable without a ticket." },
        "legal": { "why": "Give the business a first-line answer on standard policy questions, with a clean escalation path." }
      }
    },
    {
      "stage": "Stage 4 · Agent Builder",
      "title": "Build an FAQ agent for a recurring process",
      "href": "../../walkthroughs/agent-builder-faq-agent/",
      "why": "Kill the most-repeated question in your team's inbox once and for all.",
      "pace": ["steady", "ramp"]
    },
    {
      "stage": "Stage 3 · Cowork",
      "title": "Build a Cowork recipe library for your org",
      "href": "../../walkthroughs/cowork-recipe-library/",
      "why": "Capture the multi-step workflows that work so anyone can reuse them.",
      "pace": ["ramp"],
      "optional": true,
      "weightGoal": { "team": 1 }
    },
    {
      "stage": "Empowerment",
      "title": "Build your AI empowerment team",
      "href": "../../empowerment/",
      "why": "Scaling beyond your team? This is how you stand up the people side of the program.",
      "pace": ["ramp"],
      "optional": true,
      "goal": ["build"],
      "weightGoal": { "build": 2 }
    }
  ]
}
</script>

---

> **Not your path?** [See all roles](../../start-by-role/) &middot; [Take the 2-minute self-check](../../start-here/) to confirm your starting rung.
