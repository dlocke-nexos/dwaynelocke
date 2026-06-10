# Agent handoff — context not obvious from the repo

Read `.cursorrules` first. Use `docs/ADMIN-SETUP.md` for CMS login steps and
`docs/DESIGN-BRIEF.md` for homepage design intent. **This file** is tribal
knowledge: routing quirks, recent fixes, deployment reality, and decisions made
in conversation that are not spelled out elsewhere.

Last updated after commit `e4a49e6` (June 2026).

---

## Repos, hosting, and deploy

| Item | Value |
|------|--------|
| GitHub | `dlocke-nexos/dwaynelocke`, branch `main` |
| Netlify site | `dwaynelocke-com` → https://dwaynelocke-com.netlify.app |
| Build | `npm run build` → `dist/` (see `netlify.toml`) |
| Local dev | `npm run dev` → http://localhost:4321 |
| `astro.config.mjs` `site` | `https://dwaynelocke.com` (custom domain target) |
| Local path | `~/code/dwaynelocke.com` (this repo on Dwayne's machine) |

**Cowork / agent folder access:** A Cowork agent starts each session with **no** file
access and must be granted this folder before it can read or edit. That approval prompt
is a per-session security gate — it can't be disabled from inside a doc, so expect to
approve `~/code/dwaynelocke.com` once at the start of each session. Recording the path
here just removes the guesswork.

**Deploy gotchas (lived experience):**

- Netlify **build minutes / credits** have run out before. When auto-deploy from
  GitHub stalls, production can serve an **old build** (e.g. desktop nav without
  mobile fixes). Fix: add credits or run a manual production deploy:
  `npx netlify-cli deploy --prod --build`
- Pushing to `main` and manual CLI deploy can both update production; if the live
  site looks stale, hard-refresh and check the latest deploy in the Netlify dashboard.
- **Custom domain** `dwaynelocke.com` was not fully healthy in session (526 from
  Cloudflare/origin at one point). The `.netlify.app` URL was the reliable check.
  DNS/SSL is a dashboard + registrar task, not in repo.

**Do not commit or push unless the user asks.**

---

## Page map (easy to misunderstand)

The site has **two “homes”** in English:

| URL | What it is |
|-----|------------|
| `/` | Anchor essay landing (`index.astro`, `BaseLayout`) — long-form intro + essay list |
| `/home` | Publication home (`home.astro`, `HomeLayout`, `HomePage.astro`) — hero, carousels, framework teaser, Field Notes |

Spanish mirrors: `/es/`, `/es/home`, `/es/frameworks`, `/es/essays/[slug]`.

**Nav links** (`PubNav.astro`, via `src/i18n/index.ts`):

- **Introduction** → `/` (or `/es/`) — not `/home`
- **Research** → `/home#research` when off-home; `#research` when already on `/home`
- **Frameworks** → `/frameworks` (dedicated page; **not** `#framework` on home)

The homepage still has `id="framework"` for the **teaser card** only. Full
interactive framework lives on `/frameworks`.

---

## Layouts and shared UI

| Layout | Used on | Includes |
|--------|---------|----------|
| `BaseLayout` | `/`, essays, `/es/` essay index | `PubNav`, `HomeFooter`, `Assessment` overlay |
| `HomeLayout` | `/home`, `/frameworks`, Spanish equivalents | Same shell as above |

There is no separate `HomeNav` anymore — everything uses `PubNav`.

**Assessment** (`Assessment.astro`): site-wide overlay, data-driven trades/questions.
Score = **dependency** (higher = worse). Included from both layouts.

**Newsletter / Field Notes form**: `subscribe()` in `Assessment.astro` is still a
**placeholder** — shows success copy only; does not send email. Wiring to a
provider is an open TODO.

---

## Capability Framework (important for maintenance)

| Piece | Location |
|-------|----------|
| Page | `src/pages/frameworks.astro`, `src/pages/es/frameworks.astro` |
| UI component | `src/components/MaturityFramework.astro` |
| Data | `src/components/framework-data/` (`en.ts`, `es.ts`, `index.ts`) — **not** a single `framework-data.ts` (stale path in `ADMIN-SETUP.md`) |
| Copy strings | `src/i18n/en.ts` / `es.ts` → `frameworkTool` |

**Bug that broke `/frameworks` in dev:** Astro `define:vars` inlining large objects
with apostrophes and special characters produced a **JavaScript syntax error**. The
page HTML rendered but interactivity died; the detail panel looked empty.

**Fix (keep this pattern):** framework payload in
`<script type="application/json" id="fw-framework-data">` + `JSON.parse()` in a
normal `<script>`. Default intersection content is also **server-rendered** so the
panel is never blank before JS runs.

**Do not** put large i18n/framework string blobs back into `define:vars`.

To add a function or stage: edit data under `framework-data/`, not the Astro markup.

---

## Design decisions agreed in session (not all in DESIGN-BRIEF)

- **Field Notes** (`FieldNotes.astro`): main page background `--paper`, content in a
  centered `--card` panel. It should **not** repeat the full-width `--paper-2` band
  used by the Capability Framework teaser on `/home`.
- **Capability Framework teaser** on `/home`: stays `--paper-2` with card; links to
  `/frameworks` for the full tool.
- **Section gutters**: carousels and full-bleed sections use a `wide` wrapper pattern
  in `HomePage.astro` so horizontal scroll aligns with page padding (mobile fix in
  `e3e170c`).

`docs/DESIGN-BRIEF.md` still describes an older `/`-only homepage vision. Much of
the “publication home” work landed on **`/home`**, not `/`. Treat the brief as
craft guidance, not an exact sitemap.

---

## CMS reality vs older docs

- **`docs/CMS-AND-BACKEND.md`** recommends Keystatic as the primary path. The repo
  **actually ships Decap CMS** at `/admin` (`public/admin/`). Follow
  `docs/ADMIN-SETUP.md` for Identity + Git Gateway.
- Decap edits **essays** and **`src/data/site.json`**. It does **not** edit
  framework data, layout, or i18n strings.
- Essay Spanish titles/descriptions: optional `titleEs` / `descriptionEs` in
  frontmatter (see `public/admin/config.yml`).

---

## i18n

- UI copy: `src/i18n/en.ts`, `src/i18n/es.ts`
- Path helpers: `src/i18n/index.ts` (`homePath`, `frameworksPath`, `anchorPath`,
  `essayPath`, `switchLocalePath`)
- Essay meta can use `src/i18n/essay-meta.ts` for localized title/description

Adding a new routed page usually means **both** `src/pages/...` and
`src/pages/es/...` plus strings in both locale files.

---

## Author photo assets

| File | Use |
|------|-----|
| `public/images/dwayne-locke-portrait.jpg` | **Active** — face-centered square crop for circular frames (essays, home featured, `/`) |
| `public/images/DwayneLockeHeadshot_2026.png` | **Hi-res original** (2752×1536) — source of truth for re-cropping |
| `public/images/dwayne-locke-featured.jpg` | Older 1024px web version of the same shot |

**The portrait MUST be face-centered in the square.** The frame is 1:1 (circle over a
square box), so `object-fit: cover` with a square source does **no cropping** —
`object-position` has *zero* effect. Whatever is off-center in the JPG is off-center
on the page. A face sitting in the left of the square = a face sitting in the left of
the circle, with dead background on the right. Do **not** try to fix centering with
CSS; fix the image.

**Regenerate the portrait (face-centered) from the wide original:**

```bash
cd public/images
convert DwayneLockeHeadshot_2026.png -crop 1240x1240+825+20 +repage -resize 800x800 -quality 92 dwayne-locke-portrait.jpg
```

`+825+20` centers the 1240×1240 window on his face within the 2752×1536 original. Re-check
by eye after any new photo — the offset is specific to this shot.

**Dark-mode background:** the photo keeps its light studio backdrop, which would glow as a
bright disc at night. Handled in `global.css` with a dark-only radial vignette
(`.author-thumb::before`, `.pub-featured-photo::before`) that fades the circle's rim into
`--paper` while leaving the face bright, plus a stronger `--photo-filter` in the dark token
block. Light mode keeps the vignette at `opacity:0`.

**Undo to the old wide-image behavior:** In `AuthorPhoto.astro`, set `PHOTO_SRC` to
`/images/dwayne-locke-featured.jpg`; in `global.css`, set `.author-thumb img` and
`.pub-featured-photo img` `object-position` back to `42% 22%`. (That hack only works
because the wide image is non-square and therefore *is* cropped by `cover`.)

**Live vs. source when verifying:** `npm run dev` / `localhost:4321` renders the
working tree, so it shows uncommitted image swaps immediately. **Production can lag** —
Netlify may serve an old build if credits ran out (see deploy gotchas). If the live
site still shows the off-center or placeholder image after a fix, it's a deploy/build
issue, not a code issue.

---

## Misc paths agents stumble on

- `src/pages/preview/software.astro` — internal/preview UI mock; not part of public nav.
- Favicons / `og-image.png` live under `public/`; wired in layouts.
- Anchor essay on `/` is the **lowest `order` published** essay (`draft: false`).
  Control via frontmatter / CMS, not hardcoded slug in the page.

---

## Verify after framework or home layout changes

```bash
npm run dev
# http://localhost:4321/frameworks — tabs switch, hover/click updates detail panel
# http://localhost:4321/home — Frameworks nav → /frameworks; Field Notes is card-on-paper
npm run build
```

If `/frameworks` “doesn’t work”: open browser console. Empty detail + no hovers
almost always means the framework script failed to parse — check
`fw-framework-data` JSON and do not revert to `define:vars`.

---

## One-line summary for a new agent

Publication site on Astro + Netlify; `/` is the anchor essay, `/home` is the main
marketing home, `/frameworks` is the interactive tool (JSON script data, not
`define:vars`); Decap CMS at `/admin` for essays only; obey `.cursorrules` voice;
don’t commit without being asked.
