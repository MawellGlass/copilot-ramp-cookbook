---
title: IT / admin
hide: [toc]
---

# IT / admin — govern agents safely at scale

> **You own the guardrails.** Security, identity, data boundaries, and making sure agents behave correctly in production — across the whole org, not just one team.

Your path is governance-first. Start by confirming the prerequisites and the agent security model, then move into the controls that matter in Studio: authentication, monitoring, and a publish process with the right approvals. The final step shows you how to see adoption across the org. Use the pace and goal controls to widen or narrow the scope.

<div id="role-path"></div>

<script id="role-path-config" type="application/json">
{
  "persona": "it-admin",
  "variables": ["pace", "goal"],
  "defaults": { "pace": "steady", "goal": "team" },
  "steps": [
    {
      "stage": "Prerequisites",
      "title": "Confirm licensing and tenant prerequisites",
      "href": "../../prerequisites/",
      "why": "Know exactly what has to be true before anyone builds or publishes an agent."
    },
    {
      "stage": "Empowerment",
      "title": "Understand the agent security model",
      "href": "../../empowerment/security/",
      "why": "Identity, data boundary, and governance — the mental model everything else hangs on."
    },
    {
      "stage": "Stage 5 · Copilot Studio",
      "title": "Secure an agent with authentication",
      "href": "../../walkthroughs/studio-authentication/",
      "why": "Make sure agents only see what the signed-in user is allowed to see.",
      "pace": ["steady", "ramp"]
    },
    {
      "stage": "Stage 5 · Copilot Studio",
      "title": "Govern and monitor agents at scale",
      "href": "../../walkthroughs/studio-govern-monitor/",
      "why": "The single most important admin capability — visibility and control across every agent.",
      "weightGoal": { "team": 1 }
    },
    {
      "stage": "Stage 5 · Copilot Studio",
      "title": "Set up a governed publish process",
      "href": "../../walkthroughs/studio-publish/",
      "why": "Decide who can ship what, to which audience, with which approvals.",
      "pace": ["steady", "ramp"]
    },
    {
      "stage": "Stage 2 · First-party agents",
      "title": "See adoption across the org",
      "href": "../../walkthroughs/first-party-workforce-insights/",
      "why": "Tie governance to reality — see where agents are actually being used.",
      "pace": ["ramp"],
      "optional": true,
      "weightGoal": { "build": 1 }
    }
  ]
}
</script>

---

> **Not your path?** [See all roles](../../start-by-role/) &middot; [Take the 2-minute self-check](../../start-here/) to confirm your starting rung.
