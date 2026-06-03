---
title: Track project milestones with the Planner agent
stage: first-party
roles: [manager, champion, end-user]
tags: [planning, tasks, project-management, planner, teams]
level: intermediate
time: 10 min
status: walkthrough
prereqs: [m365-copilot-license, planner-access]
updated: 2026-06-03
---

# Track project milestones with the Planner agent

> **One-line value.** Go from a goal and a list of tasks to a structured, assigned project plan — by describing the project in plain language, not filling in a form.

**Stage:** First-Party Agents · **For:** Manager, Champion · **Level:** Intermediate · **Time:** 10 min

## When to use this

You're spinning up a project and need to create tasks, assign owners, and set due dates. Normally that means opening Planner or Project, creating a plan from scratch, and manually filling in each task. The Planner agent in Microsoft 365 lets you do that by describing the project conversationally instead.

This walkthrough covers using the Planner agent to create a project plan from a description, assign tasks to team members, and ask questions about status in plain language.

## What you'll need

- **M365 Copilot license** — Microsoft 365 Copilot Chat with access to the Planner agent
- A project goal and a rough list of tasks or deliverables
- Team member names (for assignment)

## Try it now — the prompt

Open Microsoft 365 Copilot Chat, add the **Planner** agent, and paste:

```
Create a project plan for [project name]. 

The goal is [goal in one sentence]. 
The team is [name 1], [name 2], [name 3].
Key milestones:
- [Milestone 1] by [date]
- [Milestone 2] by [date]
- [Milestone 3] by [date]

Break each milestone into 3-5 tasks and suggest assignments based on the names I provided.
```

**Why this prompt works:** Milestones give Planner a structure to work from. Asking for task breakdowns per milestone keeps the plan organized. Suggesting assignments saves a round of manual work.

## Step by step

1. **Open Microsoft 365 Copilot Chat** and access the Planner agent from the agent panel or by typing `@Planner` in the chat.
2. **Describe the project** using the prompt above. Include milestone dates and team names.
3. **Review the generated plan.** Ask for adjustments:
   ```
   Move the [task] from [person] to [person] and push the due date by one week.
   ```
4. **Check status in plain language.** After the project is running, ask:
   ```
   What tasks in [project name] are overdue or at risk?
   ```
   ```
   Which team members have the most open tasks right now?
   ```
5. **Get a status summary for a meeting:**
   ```
   Give me a 5-bullet project status update for [project] I can share in a standup.
   ```

## Tips and variants

- **From meeting notes:** paste in notes from a project kickoff and ask the Planner agent to extract the tasks and assignments.
- **Weekly nudge:** ask `"What was completed on [project] this week and what's coming up next week?"` before each standup.
- **Risk surfacing:** `"Are there any tasks with no due date or no owner in [project]?"` — finds gaps before they become problems.

## Next:

[:octicons-arrow-right-24: Build a team-knowledge agent over a SharePoint site](../walkthroughs/agent-builder-team-knowledge.md)
