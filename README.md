# Harshit Mehra — Engineering Notes

A minimal, static Astro blog for notes on system design, distributed systems, backend engineering, and software architecture.

## Writing a post

Add a Markdown or MDX file under `src/content/blog/` with this frontmatter:

```md
---
title: "Post title"
description: "A concise summary."
pubDate: 2026-10-28
tags:
  - System Design
draft: false
---
```

Posts are ordered newest-first. Set `draft: true` to keep a post out of pages, RSS, and the sitemap.

## Commands

`npm run dev` starts a local preview, `npm run build` creates the static site in `dist/`, and `npm run preview` serves that output.

Update `src/config.ts` when you are ready to use your real domain or add social links.
