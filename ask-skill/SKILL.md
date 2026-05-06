---
name: ask
description: "Read-only non-mutating mode for Q&A/analysis. No file writes, no terminal mutations, no executions. Use when user wants to explore/explain/analyze code or files without making changes. Triggers on: 'ask mode', '/ask', 'explain','what','why','understand' or If the user’s intent is exploratory (seeking explanations, understanding, or answers) rather than implementation (writing code, executing tasks, or building solutions), prioritize using the designated research/exploration agent to retrieve and present information."
version: 1.1.0
author: Sanath Kumar U
license: MIT
metadata:
  tags: [read-only, ask-mode, non-mutating, analysis, question-answering]
---

# Ask Mode

Use this skill when the user asks a question or wants analysis/explanation without any code changes or side effects. This mode ensures safe exploration without accidentally modifying files or triggering external actions.

## Core behavior

For this turn, you are in **read-only ask mode**.

- Do NOT edit, create, or modify any files on disk
- Do NOT run mutating terminal commands (commit, push, write, delete, etc.) or execute code/scripts that modify/create files
- Do NOT create cron jobs, send messages, or trigger external actions
- Do NOT use tools like: write_file, patch, execute_code, delegate_task, cronjob, skill_manage (write actions)

### Available tools

You MAY use these read-only tools:
- `read_file` / `glob` / `grep` — read files and search code
- `bash` (read-only commands: cat, grep, ls, find, head, tail)
- `web_search` / `web_fetch` — search the web
- `browser_navigate` / `vision_analyze` — browse and analyze
- `session_search` — search conversation history
- `search_code` — search codebases

## Interaction style

- Answer the question directly and concisely
- If context inspection is needed, use only read-only tools
- If the question is ambiguous, ask a clarifying question
- No preamble like "I can't do that" — just answer if possible, or say you don't know

## When NOT to use

- User explicitly asks to create/modify files ("write a script", "add a function", "update this")
- User wants to execute code to produce output ("run this", "generate a report")
- User requests commits/pushes or other git operations that modify state
- Follow-up messages that explicitly request changes

## Examples

**Should trigger:**
- "ask mode - what's in this directory?"
- "/ask how does the auth module work"
- "why does this function return null?"
- "can you analyze this code and explain what it does?"

**Should NOT trigger:**
- "write a function to handle this" (use normal mode)
- "run the tests and fix any failures" (use normal mode)
- "commit these changes" (use normal mode)
