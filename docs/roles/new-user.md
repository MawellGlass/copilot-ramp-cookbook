---
title: New user
hide: [toc]
---

# New user — your first two weeks with Copilot

> **You are new to Copilot** and want quick wins that fit your existing day — no building, no setup. This is the shortest line from "I have a license" to "I can't work without it."

Most people who stall with Copilot stall because they treat it like a search box. The path below builds a **daily habit** instead: five Chat moves you'll repeat every week, then a gentle look at the agents that already ship in your apps. Adjust the controls to match how *you* work — the steps reshape to fit.

<div id="role-path"></div>

<script id="role-path-config" type="application/json">
{
  "persona": "new-user",
  "variables": ["dept", "pace", "skill", "goal"],
  "defaults": { "dept": "general", "pace": "steady", "skill": "new", "goal": "personal" },
  "steps": [
    {
      "stage": "Stage 1 · Chat",
      "title": "Turn a meeting into tracked follow-ups",
      "href": "../../walkthroughs/chat-meeting-followups/",
      "why": "The fastest first win — and something you'll reach for every week.",
      "skill": ["new", "some"],
      "deptVariants": {
        "hr": { "why": "Capture interview-debrief actions and candidate next steps without re-watching the recording." },
        "it": { "why": "Turn an incident review into owned action items the moment the call ends." },
        "finance": { "why": "Pull decisions and owners out of a budget review while they're still fresh." },
        "sales": { "why": "Capture next steps from a customer call before you've even left the room." },
        "legal": { "why": "Track obligations and follow-ups from a matter review without missing a detail." }
      }
    },
    {
      "stage": "Stage 1 · Chat",
      "title": "Get up to speed on a long document fast",
      "href": "../../walkthroughs/chat-document-catch-up/",
      "why": "Walk into any doc-heavy conversation already knowing the key points.",
      "skill": ["new", "some"]
    },
    {
      "stage": "Stage 1 · Chat",
      "title": "Catch up on a Teams thread in seconds",
      "href": "../../walkthroughs/chat-catch-up-thread/",
      "why": "Skim a noisy channel and know exactly what actually needs you."
    },
    {
      "stage": "Stage 1 · Chat",
      "title": "Draft a status update from your week",
      "href": "../../walkthroughs/chat-weekly-status/",
      "why": "Let Copilot assemble the update from what you actually did.",
      "goal": ["personal", "team"]
    },
    {
      "stage": "Stage 1 · Chat",
      "title": "Rewrite an email for the right tone",
      "href": "../../walkthroughs/chat-rewrite-email/",
      "why": "Same message, sharper delivery — in a single pass.",
      "skill": ["new", "some"]
    },
    {
      "stage": "Stage 2 · First-party agents",
      "title": "Meet the built-in agents",
      "href": "../../walkthroughs/first-party-agents-overview/",
      "why": "You don't have to build anything — capable agents already ship inside the apps you use.",
      "pace": ["steady", "ramp"]
    },
    {
      "stage": "Stage 4 · Agent Builder",
      "title": "Try your first no-code agent",
      "href": "../../walkthroughs/agent-builder-starter-prompts/",
      "why": "Once the habit sticks, this is the gentle on-ramp to building your own.",
      "pace": ["ramp"],
      "optional": true,
      "goal": ["team", "build"],
      "weightGoal": { "build": 2 }
    }
  ]
}
</script>

---

> **Not your path?** [See all roles](../../start-by-role/) &middot; [Take the 2-minute self-check](../../start-here/) to confirm your starting rung.
