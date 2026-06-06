# Agent Skills Repository

A curated repository of AI Agent Skills designed to enhance coding assistants (such as Claude Code, Cursor, OpenCode, and others) with standardized instructions and capabilities.

## Available Skills

This repository contains the following skills:

- **[gh-cli](./gh-cli/SKILL.md)**: Comprehensive reference for GitHub CLI (`gh`) command operations (pull requests, issues, API requests, workflows, and more).
- **[ask-mode](./ask-mode/SKILL.md)**: Read-only, non-mutating configurations for Q&A, explanations, and safe code analysis.
- **[ask-skill](./ask-skill/SKILL.md)**: Alternative read-only explore/explain/analyze agent instruction template.
- **[behavioral-guidelines](./behavioral-guidelines/SKILL.md)**: Standardized rules to reduce common LLM coding mistakes, bias towards caution, surgical edits, and verification.
- **[opencode-help](./opencode-help/SKILL.md)**: Instructions and workflows for retrieving documentation related to OpenCode via DeepWiki MCP.

## Installation using the `skills` CLI

The [`skills`](https://www.npmjs.com/package/skills) CLI tool by Vercel Labs allows you to add specific skills directly to your project or user environment.

### 1. View Available Skills
Before adding a skill, you can list the skills available in this repository:
```bash
npx skills add sanathusk/skills --list
```
*Alternatively, use the full repository URL:*
```bash
npx skills add https://github.com/sanathusk/skills --list
```

### 2. Install a Specific Skill
To install a specific skill (for example, `gh-cli`), run the following command:

#### Project-level Installation (Recommended)
This installs the skill inside your current project directory (typically in `.claude/skills/` or similar):
```bash
npx skills add sanathusk/skills --skill gh-cli
```
*Or using the full repository URL:*
```bash
npx skills add https://github.com/sanathusk/skills --skill gh-cli
```

#### Global Installation
To make the skill available globally to your agent across all of your projects, add the `-g` or `--global` flag:
```bash
npx skills add sanathusk/skills --skill gh-cli -g
```

### 3. Install All Skills
If you want to install all the skills in this repository:
```bash
npx skills add sanathusk/skills --all
```
