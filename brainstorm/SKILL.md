---
name: brainstorm
description: Facilitate an interactive brainstorming session with the user and capture the resulting purpose, context, domain modeling, constraints, guidance, actions, outcomes, decisions, open questions, backlog, and optionally considered alternatives in a structured Markdown session document. Use when the user wants to brainstorm, explore an idea, think through a problem, or collaboratively develop a solution.
---

# Brainstorm

Facilitate a structured brainstorming session with the user and persist the result as a Markdown document.

## Purpose and Scope

This session is for brainstorming, gathering requirements, refining ideas, and recording them — nothing more.

- Do not implement, prototype, build, or write any application code during this session.
- Do not be eager to move toward implementation. Resist starting to code, scaffolding, or planning implementation details unless the user explicitly asks.
- Implementation is intentionally deferred to a separate session; the deliverable here is the session document only.

## Workflow

1. **Initialize**
   - Read `assets/session-template.md`.
   - Treat the template as the authoritative structure for the generated session document.
   - Create `better-agents/brainstorm/session/` if it does not exist.
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

4. **Maintain (Realtime)**
   - Keep the session document updated continuously as the session progresses — not only at the end.
   - Write and update the persisted file at `better-agents/brainstorm/session/<session-name>.md` as you go (progressive writes), so the on-disk document always reflects the current session state.
   - Update entries immediately whenever information is discovered, refined, or rectified by the user.
   - Move entries between categories as understanding evolves (e.g., an assumption confirmed as fact becomes Context; an idea accepted by the user becomes a Decision; a rejected alternative moves to Alternatives Considered).
   - Track Open Questions live and remove them as they get resolved.
   - Never leave stale, superseded, or corrected content in the document; rectifications overwrite prior entries immediately.

5. **Structure**
   Organize the final result using these categories:

   | Category | Purpose |
   | --- | --- |
   | **Purpose** | Core objective and rationale for the brainstorming session. |
   | **Context** | Information needed to understand the subject. |
   | **Domain Modeling** | Domain concepts, entities, relationships, schemas, and state models established during the session. |
   | **Constraints** | What is allowed, required, or forbidden. |
   | **Guidance** | How to approach the work. |
   | **Actions** | What one should actually do to achieve the expected outcomes. |
   | **Outcomes** | What resulting state must be achieved. |
   | **Decisions** | Conclusions explicitly accepted during the session. |
   | **Open Questions** | Important questions that remain unresolved. |
   | **Backlog** | Items, features, or questions explicitly deferred for future sessions or implementation. |
   | **Alternatives Considered** | Meaningful alternatives explored and, when applicable, why they were not selected. This section is optional. |

6. **Validate**
   Before finalizing:
   - Ensure Purpose clearly articulates the goal of the session.
   - Ensure Domain Modeling captures domain concepts, entities, and data models without assuming implementation code.
   - Ensure Backlog records anything explicitly deferred during the session.
   - Ensure every important conclusion from the session is represented.
   - Ensure Context contains knowledge rather than instructions.
   - Ensure Constraints contain boundaries rather than general preferences.
   - Ensure Guidance describes approach rather than concrete actions.
   - Ensure Actions contain things one should actually do.
   - Ensure Outcomes describe verifiable resulting states.
   - Ensure Decisions contain only conclusions explicitly accepted during the session.
   - Never infer a Decision from discussion, preference, or an unconfirmed idea.
   - Ensure Open Questions contain only genuinely unresolved matters.
   - Include Alternatives Considered only when meaningful alternatives were actually explored.
   - Remove speculation that was not accepted by the user.
   - Resolve important ambiguities with the user rather than guessing.

7. **Persist**
   - Finalize the continuously-maintained session document:
     - Ensure it still conforms to the template's required sections and ordering.
     - Confirm it reflects the session's final state, including any late refinements or rectifications.
   - Confirm the document is persisted at:
     `better-agents/brainstorm/session/<session-name>.md`
   - Do not modify the template itself.
   - If a session with the same filename already exists, do not overwrite it silently. Ask the user whether to update it, replace it, or create a new session.

8. **Report**
   - Provide the path of the generated Markdown document.
   - Briefly state what was captured.
   - Do not reproduce the entire document unless requested.

## Rules

- The user is the authority on their intent, requirements, and decisions.
- This session is scoped to brainstorming, gathering requirements, refining, and recording. Do not implement, prototype, or write code; implementation happens in a separate session.
- Do not invent requirements, decisions, constraints, or outcomes.
- use `question` tool to Ask questions whenever missing information could materially change the result.
- Brainstorm broadly before converging.
- Keep entries atomic: one distinct piece of knowledge, rule, action, decision, or outcome per entry.
- Prefer precise statements over narrative explanations.
- Capture unresolved questions when they cannot be resolved during the session.
- Keep the session document current in realtime; update it whenever information is discovered, refined, or rectified.
- The final document should represent the result of the conversation, not a transcript.
- Do not force information into a category when it does not belong there.
- Keep optional sections absent when there is nothing meaningful to capture.

## Session Naming

Generate a filesystem-safe, concise kebab-case name from the brainstorming topic.

Examples:
- `payment-service-redesign.md`
- `offline-sync-strategy.md`

## Completion Criteria

A brainstorming session is complete only when:

- the user has had an opportunity to clarify important questions;
- major ideas and meaningful alternatives have been explored;
- accepted decisions are distinguishable from possibilities;
- all required categories are represented according to the template;
- the generated document contains no unsupported assumptions;
- the document was maintained in realtime and reflects the session's final state;
- no implementation, prototyping, or code was started; the session produced only the brainstorm document;
- the Markdown file has been persisted under `better-agents/brainstorm/session/`.
