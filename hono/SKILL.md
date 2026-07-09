---
name: hono
description: Provides on-demand Hono.js framework documentation by fetching live docs pages. Use when writing, debugging, or reviewing Hono.js applications — including routing, middleware, helpers, JSX, RPC, validation, WebSocket, or deploying to any Hono-supported runtime (Cloudflare Workers, Bun, Deno, Node.js, AWS Lambda, Vercel, etc.).
---

# Hono.js Skill

Hono is a small, fast web framework built on Web Standards that runs on Cloudflare Workers, Bun, Deno, Node.js, AWS Lambda, Vercel, Netlify, and more.

## How to use this skill

Never guess API signatures or middleware options from memory. Instead, fetch the relevant doc page on demand:

```
read(path="https://hono.dev/docs/<section>/<page>")
```

For broad orientation, fetch the full or tiny doc bundle first:

```
read(path="https://hono.dev/llms-full.txt")   # complete docs, no examples
read(path="https://hono.dev/llms-small.txt")  # core-only, smallest
```

## Fetch strategy

1. **Identify the topic** the user is working on (routing, CORS, JWT, RPC, etc.).
2. **Look up the matching URL** in [references/urls.md](references/urls.md) — read that file when unsure which section applies.
3. **Fetch the doc page** with `read(path=<url>)`.
4. Answer using the fetched content. Do not rely on training-time knowledge for specifics; Hono evolves quickly.

## Common starting points

| Task | Fetch |
|---|---|
| New project / setup | `https://hono.dev/docs/getting-started/basic` + runtime page |
| Routing & handlers | `https://hono.dev/docs/api/routing` |
| Middleware authoring | `https://hono.dev/docs/guides/middleware` |
| CORS / Auth / Security | relevant URL from Built-in Middleware section in references/urls.md |
| Type-safe RPC client | `https://hono.dev/docs/guides/rpc` |
| JSX / SSR | `https://hono.dev/docs/guides/jsx` |
| Testing | `https://hono.dev/docs/guides/testing` |
| Validation | `https://hono.dev/docs/guides/validation` |
| Streaming / WebSocket | `https://hono.dev/docs/helpers/streaming` or `/helpers/websocket` |

## Reference

Full categorized URL list: [references/urls.md](references/urls.md)

Read it when:
- You need a specific middleware or helper URL not in the table above.
- The user asks about a runtime not listed here (Fastly, Azure, WASI, etc.).
