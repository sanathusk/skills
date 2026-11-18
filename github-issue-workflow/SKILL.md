---
name: github-issue-workflow
description: Standardized procedure to search for duplicates via GitHub hybrid search, format, and draft GitHub issues or discussions following repository guidelines before explicit approval and publishing.
---

# GitHub Issue & Discussion Creation Workflow

Follow this procedure whenever creating a GitHub Issue, Feature Request, or Discussion.

## 1. Repository Resolution Order
When the user mentions a repository:
1. **Memory Topic Notes**: Check `memory/<repo-name>.md` and `MEMORY.md`.
2. **Raindrop Bookmarks**: Look for bookmarks prefixed with `GH ` if connected.
3. **Web Search**: Fall back to web search if not found in memory or bookmarks.
4. **Confirm**: Confirm with the user if the target repository is ambiguous.

## 2. Guideline & Convention Lookup
1. Use `deepwiki` MCP tools to inspect public repository documentation, guidelines, contributing docs (`CONTRIBUTING.md`), and issue templates.
2. Determine whether the repository accepts feature requests as **Issues** or requires them in **Discussions**.
3. Identify required templates, checklist items, and expected fields.

## 3. Duplicate & Similarity Check (Hybrid / Semantic Search)
Always perform a duplicate and similarity check before drafting or creating:

### For Issues:
Run `gh search issues` with `--search-type hybrid` to capture both keyword and conceptual matches across open and closed issues:
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
- If similar issues or discussions are found, present them to the user in a clear table:
  - Number / ID
  - Title
  - State (Open / Closed / Answered)
  - URL
- Ask the user if any of these match their request or if they wish to proceed with a new submission.

## 4. Submission Type & Draft Preparation
If the user confirms to proceed:
1. Determine the appropriate submission type:
   - **Bug Report** (Issues)
   - **Feature Request** (Issues or Discussions depending on repo rules)
   - **Discussion / Question / RFC** (Discussions)
2. Prepare a complete draft adhering strictly to the repository's issue template or conventions.
3. Present the draft in chat for user review.

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
