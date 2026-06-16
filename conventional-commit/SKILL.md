---
name: conventional-commit
description: How to write and validate commit messages using the Conventional Commits v1.0.0 format. Use this skill whenever the user mentions commit messages, Git commits, or wants to enforce commit conventions in their repository. This skill handles validation and formatting guidance.
---

# Conventional Commits Skill

This skill helps you work with [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0) specification for writing commit messages that are easy to read and automate.

## The Specification at a Glance

A Conventional Commit message has this structure:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types You Must Know

| Type | Description |
|------|-------------|
| feat | New feature or significant change |
| fix  | Bug fix for user-facing issue |
| docs | Documentation-only changes |
| style | Code formatting, missing semicolons, etc. |
| refactor | Code change without feature/bug fix |
| perf | Performance improvement |
| test  | Adding/correcting tests |
| build | Build system or dependencies |
| ci    | CI configuration changes |
| chore | Other changes (maintenance, scripts) |
| revert | Revert a previous commit |

### Description Rules (Crucial!)

1. Use **imperative mood** (as if giving a command):
   - ✅ `add feature`, `fix bug`, `update dependency`
   - ❌ `added feature`, `fixed bug`, `fixes bug`

2. Keep it **lowercase** and **no period** at the end

3. Be **clear and concise** (typically under 50 characters)

### Optional Scope

Add parentheses after type when the change affects a specific area:
- `feat(auth): add OAuth2 login`
- `fix(database): correct connection timeout`
- `docs(api): update swagger docs`

### Breaking Changes

A breaking change is indicated by a `!` after the type/scope and a `BREAKING CHANGE:` footer:

```
feat(api)!: remove deprecated endpoints

BREAKING CHANGE: All v1 API endpoints have been removed.
Use v2 endpoints instead.
```

Or simply using `!`:
```
feat(api)!: remove deprecated endpoints
```

### Invalid Commits (Fix These)
| Wrong | Why | Correct |
|-------|-----|---------|
| `feat: Added new feature` | Past tense, capitalized | `feat: add new feature` |
| `fix: fixes the login bug` | Extra words, vague | `fix: correct login validation` |
| `added tests for auth` | No type prefix | `test: add authentication tests` |
| `feat: New Feature` | Capitalized, vague | `feat: add user registration` |

## Converting FAQ to Actionable Instructions

### How do I write my first Conventional Commit?

**Step 1:** Identify the type
- Did you add a feature? → use `feat:`
- Did you fix a bug? → use `fix:`
- Did you only change documentation? → use `docs:`

**Step 2:** Write the description
- Think: "This commit will..." (imperative mood)
- Lowercase, no period, under 50 chars
- Example: "add password reset endpoint" not "added password reset endpoint"

**Step 3:** Add scope if needed
- If your change only affects one area, add it in parentheses
- `feat(api):` or `fix(ui):`

**Step 4:** Check for breaking changes
- Does this break existing code? Add `!` after type/scope
- Include `BREAKING CHANGE:` in body with migration guide

### How do I validate my commits?

**Step 1:** Use the validate script
- Run the bundled validation before pushing
- See `scripts/validate_commits.js` for a ready-to-use validator

### What are common mistakes to avoid?

1. **Wrong tense**: Use imperative, not past tense
2. **Missing type**: Every commit needs one of the 13 types
3. **Vague descriptions**: Be specific about what changed
4. **Missing scope**: Use it when changes are component-specific
5. **Breaking change without footer**: Must include `BREAKING CHANGE:` explanation

## Bundled Resources

### scripts/validate_commits.js
A Node.js script that validates commits against Conventional Commits specification. Run with `node scripts/validate_commits.js --help`.

## Quick Validation Checklist

Before committing, ask yourself:
- [ ] Did I use an imperative verb (add, fix, update)?
- [ ] Is my description lowercase and no period?
- [ ] Did I include the right type prefix?
- [ ] Does this affect a specific scope? Add it!
- [ ] Is this a breaking change? Add `!` and `BREAKING CHANGE:`!
