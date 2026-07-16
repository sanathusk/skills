---
name: beercss
description: Provide on-demand BeerCSS documentation by fetching live docs pages. Triggers when styling web pages or projects using BeerCSS, or when the user mentions BeerCSS or Material Design 3 UI components (elements, helpers, layouts, inputs, buttons, cards).
---

# BeerCSS Skill

BeerCSS is a CSS framework based on Material Design 3 that uses semantic HTML elements with optional helper classes. It follows the "Germany Beer Purity Law" principle with 3 ingredients: Settings, Elements, and Helpers.

## How to use this skill

Never guess class names or component patterns from memory.

## Source Reference (Required)
Fetch the LLM-friendly documentation index:

```
read(path="https://raw.githubusercontent.com/beercss/beercss/refs/heads/main/dist/llms.txt")
```

## Key principles

- **1 setting per document**: `<body class="dark">` or `<body class="light">`
- **1 element to N helpers**: `<button class="primary circle">` (not `<button class="button primary">`)
- **1 main element per document**: Use a single `<main>` tag
- **Inline/block elements in block elements**: `<div>` can contain `<div>` and `<span>`, but not vice versa
