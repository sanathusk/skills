---
name: github-issue-workflow
description: Standardized procedure to search for duplicates via GitHub hybrid search, inspect repo guidelines/templates, and draft GitHub issues or discussions strictly matching repo template schema before explicit approval and publishing.
---

# GitHub Issue & Discussion Creation Workflow

Follow this procedure whenever creating a GitHub Issue, Feature Request, or Discussion.
Source: https://github.com/sanathusk/skills/tree/main/github-issue-workflow

## 1. Repository Resolution Order
When the user mentions a repository:
1. **Memory Topic Notes**: Check `memory/<repo-name>.md` and `MEMORY.md`.
2. **Raindrop Bookmarks**: Look for bookmarks prefixed with `GH ` if connected.
3. **Web Search**: Fall back to web search if not found in memory or bookmarks.
4. **Confirm**: Confirm with the user if the target repository is ambiguous.

## 2. Repo Convention, Template & Discussion Checks (MANDATORY BEFORE PROPOSING)
Before drafting or proposing anything:
1. **Check repo settings for Issues & Discussions**:
   Query GitHub API to see if Discussions or Issues are enabled:
   ```bash
   gh api repos/<owner>/<repo> --jq '{has_discussions: .has_discussions, has_issues: .has_issues}'
   ```
2. **Fetch exact Issue & Discussion templates**:
   Check `.github/ISSUE_TEMPLATE` or `.github/discussion_template`:
   ```bash
   gh api repos/<owner>/<repo>/contents/.github/ISSUE_TEMPLATE
   ```
   Download and parse the exact `.yml` or `.md` template corresponding to the submission type (e.g., `feature_request.yml`, `bug_report.yml`).
3. **Determine strict submission destination**:
   - If feature requests are directed to Discussions in `CONTRIBUTING.md` or template config, use Discussions.
   - If a dedicated issue template exists (e.g. `feature_request.yml`), adhere strictly to its schema and fields.

## 3. Duplicate & Similarity Check (Hybrid / Semantic Search)
Always perform a duplicate and similarity check before drafting or creating:

### For Issues:
Run `gh search issues` with `--search-type hybrid` across open and closed issues:
```bash
gh search issues "<topic or keywords>" --repo <owner>/<repo> --search-type hybrid --limit 5 --json number,title,state,url
```

### For Discussions:
Run a GraphQL search query via `gh api`:
```bash
gh api graphql -f query='{
  search(query: "repo:<owner>/<repo> <keywords>", type: DISCUSSION, first: 5) {
    nodes {
      ... on Discussion {
        number
        title
        url
        closed
        answer { id }
      }
    }
  }
}'
```

### Display Findings to User:
- If similar issues or discussions are found, present them in a clear table:
  - Number / ID
  - Title
  - State (Open / Closed / Answered)
  - URL
- If no duplicates are found, explicitly state that a hybrid duplicate search found 0 matching issues/discussions.

## 4. Submission Draft Formatting (STRICT TEMPLATE COMPLIANCE)
When presenting the draft to the user:
1. **Match Template 1:1**: The draft body MUST follow the exact sections, headings, dropdowns, and checkboxes required by the target repository's template (e.g., `### Before filing`, `### Area`, `### Problem`, `### Proposal`, `### Alternatives considered`).
2. **Do Not Ask If It Follows Template**: The bot MUST verify against the fetched template first so the user never has to ask whether the draft follows the template.
3. Clearly label:
   - Target Repo: `<owner>/<repo>`
   - Target Type: Issue (with labels/template name) or Discussion (with category)
   - Title
   - Markdown Body (exact template format)

## 5. Explicit Approval Gate
**Never publish without explicit user approval.**
- Wait for the user's clear confirmation or requested edits.

## 6. Publish via GitHub CLI
After approval is granted:
- **Issue**:
  ```bash
  gh issue create --repo <owner>/<repo> --title "<title>" --body "<body-content>"
  ```
- **Discussion**:
  Use the GitHub GraphQL API `createDiscussion` mutation.
- Return the direct link to the newly created issue or discussion.
