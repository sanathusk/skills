---
name: record-discussion
description: Capture the raw discussion, debate history, and resolved decisions from the current conversation and save it under wiki/sessions/. Use when the user requests to persists/save/archive a discussion session.
---

This skill extracts the raw conversation context, debate history, and resolved topics from the chat transcript and persists them in a chronological session log.

## Process

1. **Locate the Conversation Transcript:**
   - Scan the system logs in `<appDataDir>/brain/<conversation-id>/.system_generated/logs/transcript.jsonl` to extract the raw conversation history.
   
2. **Identify Concluded Decisions & Rejected Options:**
   - Note the specific alternatives that were discussed (e.g., Average Cost vs. FIFO, or local storage vs. Supabase).
   - Capture key quotes or summaries of why the user preferred one over the other.

3. **Format the Session Log:**
   - Create a file under `wiki/sessions/YYYY-MM-DD-session-topic.md` (e.g., `wiki/sessions/2026-05-25-core-product-and-database.md`).
   - Use the markdown template below.

<session-template>
# Session: [Topic Title]

- **Date:** [YYYY-MM-DD]
- **Participants:** User, AI Assistant (Antigravity)
- **Primary Goal:** [1-2 sentences summarizing the focus of this session]

## Discussion Ledger & Raw Context

### [Topic Area, e.g., FIFO PnL vs Average Cost]
- **Proposed Alternatives:** [Brief description of options considered]
- **User Inputs / Decisions:** 
  > [Raw quote or summary of the user's instruction/preference]
- **Rationale:** [Why this option was chosen and why others were rejected]

### [Next Topic Area]
...

## Concluded Decisions Summary
- [ ] **[Decision Title]**: [Brief summary of the resolved decision]
</session-template>
