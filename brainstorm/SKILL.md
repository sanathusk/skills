---
name: brainstorm
description: Facilitate an interactive brainstorming session with the user and capture the resulting context, constraints, guidance, actions, outcomes, decisions, open questions, and optionally considered alternatives in a structured Markdown session document. Use when the user wants to brainstorm, explore an idea, think through a problem, or collaboratively develop a solution.
---

# Brainstorm

Facilitate a structured brainstorming session with the user and persist the result as a Markdown document.

## Workflow

1. **Initialize**
   - Read `assets/session-template.md`.
   - Treat the template as the authoritative structure for the generated session document.
   - Create `better-ones/brainstorm/session/` if it does not exist.
   - Determine a concise session name from the user's topic.

2. **Understand**
   - Ask focused questions to understand what the user is trying to explore.
   - Do not prematurely converge on a solution.
   - Identify ambiguity, missing information, assumptions, competing ideas, and unresolved decisions.
   - Propose alternatives when useful and ask the user to evaluate them.
   - Prefer one focused question at a time when the answer materially affects the direction of the brainstorm.

3. **Brainstorm**
   - Explore ideas collaboratively with the user.
   - Challenge assumptions where useful.
   - Surface trade-offs, dependencies, risks, and implications.
   - Distinguish clearly between:
     - facts provided or confirmed by the user
     - ideas or possibilities
     - decisions
     - unresolved questions
   - Never present an assumption as a user-confirmed fact.

4. **Structure**
   Organize the final result using these categories:

   | Category | Purpose |
   | --- | --- |
   | **Context** | Information an one needs to understand the subject. |
   | **Constraints** | What is allowed, required, or forbidden. |
   | **Guidance** | How an one should approach the work. |
   | **Actions** | What an one should do to achieve the expected outcomes. |
   | **Outcomes** | What resulting state must be achieved. |
   | **Decisions** | Conclusions explicitly accepted during the session. |
   | **Open Questions** | Important questions that remain unresolved. |
   | **Alternatives Considered** | Meaningful alternatives explored and, when applicable, why they were not selected. This section is optional. |

5. **Validate**
   Before finalizing:
   - Ensure every important conclusion from the session is represented.
   - Ensure Context contains knowledge rather than instructions.
   - Ensure Constraints contain boundaries rather than general preferences.
   - Ensure Guidance describes approach rather than concrete actions.
   - Ensure Actions contain things an one should actually do.
   - Ensure Outcomes describe verifiable resulting states.
   - Ensure Decisions contain only conclusions explicitly accepted during the session.
   - Never infer a Decision from discussion, preference, or an unconfirmed idea.
   - Ensure Open Questions contain only genuinely unresolved matters.
   - Include Alternatives Considered only when meaningful alternatives were actually explored.
   - Remove speculation that was not accepted by the user.
   - Resolve important ambiguities with the user rather than guessing.

6. **Persist**
   - Populate `assets/session-template.md`.
   - Write the completed document to:
     `better-ones/brainstorm/session/<session-name>.md`
   - Preserve the template's required sections and ordering.
   - Do not modify the template itself.
   - If a session with the same filename already exists, do not overwrite it silently. Ask the user whether to update it, replace it, or create a new session.

7. **Report**
   - Tell the user the brainstorming session is complete.
   - Provide the path of the generated Markdown document.
   - Briefly state what was captured.
   - Do not reproduce the entire document unless requested.

## Rules

- The user is the authority on their intent, requirements, and decisions.
- Do not invent requirements, decisions, constraints, or outcomes.
- Ask questions whenever missing information could materially change the result.
- Brainstorm broadly before converging.
- Keep entries atomic: one distinct piece of knowledge, rule, action, decision, or outcome per entry.
- Prefer precise statements over narrative explanations.
- Capture unresolved questions when they cannot be resolved during the session.
- The final document should represent the result of the conversation, not a transcript.
- Do not force information into a category when it does not belong there.
- Keep optional sections absent when there is nothing meaningful to capture.

## Session Naming

Generate a filesystem-safe, concise kebab-case name from the brainstorming topic.

Examples:

- `payment-service-redesign.md`
- `one-knowledge-model.md`
- `offline-sync-strategy.md`

If the topic cannot be determined reliably, ask the user for a session name.

## Completion Criteria

A brainstorming session is complete only when:

- the user has had an opportunity to clarify important questions;
- major ideas and meaningful alternatives have been explored;
- accepted decisions are distinguishable from possibilities;
- all required categories are represented according to the template;
- optional Alternatives Considered is included only when applicable;
- the generated document contains no unsupported assumptions;
- the Markdown file has been persisted under `better-ones/brainstorm/session/`.
