---
name: opencode-help
description: Provides information and instructions related to OpenCode (https://github.com/anomalyco/opencode) using DeepWiki MCP. Use this skill for ANY question about OpenCode, including: install, config, CLI commands, agents, TUI, MCP integration, skills system, providers, models, troubleshooting, session management, LSP, desktop app, or any OpenCode feature. Trigger even if the user doesn't explicitly ask for "docs" or "help" — any OpenCode-related query qualifies.
---

## Workflow
1. **Preferred**: Use `deepwiki_ask_question` with `repoName: "anomalyco/opencode"` and the user's exact question.
2. **Fallback**: If the answer is insufficient:
   a. Run `deepwiki_read_wiki_structure` for `anomalyco/opencode` to list pages.
   b. Read relevant pages via `deepwiki_read_wiki_contents`.
3. **Output**: Only answer the user's specific question. No extra overviews. Mention DeepWiki section names if referencing specific docs.

## Notes
- If the query isn't covered by DeepWiki, state that clearly.
