# Backend & content editing

## What the "backend" is

There isn't one — by design. This is a **static site**:

- Your essays are Markdown files in `src/content/essays/`.
- On every push to `main`, Netlify runs `npm run build` once, turning those files
  into plain HTML.
- That HTML is served from Netlify's CDN. Nothing runs between requests.

No database, no server, no login. That's why it's fast, free to host, and has
almost no security surface. This is the opposite of WordPress (PHP + MySQL on every
request) and it matches `.cursorrules`: "no CMS, no database, no auth."

## How content is already configurable (no code required)

The homepage essay list ("the writing") is generated automatically from the files in
`src/content/essays/`. You control everything from each file's frontmatter:

```markdown
---
title: "Essay title"
description: "One-line summary shown in the list + meta tags."
pubDate: 2026-07-01
draft: false   # true = shows as "coming soon", no public page
order: 5       # lower number = higher in the list
---
```

- **Add a post:** add a new `.md` file. The filename becomes the URL.
- **Control what shows up:** change `draft` and `order`. Nothing else to touch.

So adding posts and reordering the list is already a two-line edit — no rebuild
config, no admin panel needed.

## If you want an Elementor-style editing UI (without WordPress)

Add a **Git-based CMS** on top of the same Markdown. It gives you a friendly admin
screen with form fields + a rich-text editor; on save it writes back to the Markdown
files and commits to Git. The architecture does not change.

Recommended for this stack:

- **Keystatic** (recommended) — cleanest Astro integration, polished editing UI,
  runs as an admin page on your own site (e.g. `/keystatic`). Best if it's mainly you.
- **TinaCMS** — pick this if you want true *visual, click-on-the-page* editing
  (closest to the Elementor feel). Heavier to set up.
- **Decap CMS** (old Netlify CMS) — works, but the editor has aged; not the first
  choice in 2026.

Note: a Git-based CMS gives a clean **content** form, not free-form drag-the-boxes
page design. Free-form visual layout is Webflow/Framer/WordPress territory — and it
conflicts with keeping this a calm, consistent publication.

## Why not WordPress / Elementor

It would replace a clean static setup with a database to back up, plugins to update,
paid hosting, and a security surface to maintain — to gain drag-and-drop page design
you don't need for an essay publication. For these goals it's a step backward.

## Recommended path

Keep Cursor/code as the primary tool. If you want a softer door into editing, add
**Keystatic** — same Markdown underneath, nicer UI on top.

### Keystatic setup (high level)

1. Install: `npx astro add react` then add `@keystatic/core` and
   `@keystatic/astro`.
2. Add the Keystatic integration in `astro.config.mjs` and switch output to support
   the admin route (hybrid/server for the editing UI; the public site stays static).
3. Create `keystatic.config.ts` defining an `essays` collection that maps to
   `src/content/essays/` with fields: title, description, pubDate, draft, order, body.
4. Visit `/keystatic` locally to edit; saves commit to Git, which triggers a Netlify
   rebuild.

(Exact steps depend on current package versions — see https://keystatic.com/docs.)
