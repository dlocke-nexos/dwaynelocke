# DwayneLocke.com

A thesis/publication site built with [Astro](https://astro.build). Essays are Markdown
files; the business-dependency assessment is a secondary interactive overlay. Static
output, version-controlled on GitHub, hosted on Netlify.

---

## Run locally

Node.js 20+ required:

```bash
npm install
npm run dev
```

Open **http://localhost:4321**. Production preview:

```bash
npm run build
npm run preview
```

---

## Site map

| Route | What it is |
|-------|------------|
| `/` | Introduction essay (anchor), full text + writing list |
| `/home` | Publication home — hero, research, framework teaser, field notes |
| `/essays/[slug]/` | Individual essays |
| `/frameworks` | Capability framework tool |
| `/es/...` | Spanish mirrors of the above |
| `/admin` | Decap CMS (Netlify Identity + Git Gateway) |

Voice, design tokens, and content rules live in `.cursorrules`.

---

## Add an essay (English)

1. Create `src/content/essays/my-essay.md` (filename = URL slug).
2. Frontmatter:

   ```markdown
   ---
   title: "Essay title"
   description: "One-line summary for cards and meta tags."
   titleEs: "Título en español"          # optional
   descriptionEs: "Resumen en español"   # optional
   pubDate: 2026-07-01
   draft: false
   order: 5
   ---
   ```

3. `draft: true` shows in lists as coming soon; no public page is generated.

For Spanish body copy, add a matching file under `src/content/essaysEs/`. UI strings
and framework data live in `src/i18n/` and `src/components/framework-data/`.

---

## Field Notes (email)

Signup UI is on `/home#field-notes` and at the bottom of essay pages (`FollowStrip`).
The handler is `subscribe()` in `src/components/Assessment.astro` — search for
`TODO(email)` to wire your provider (Buttondown, ConvertKit, Netlify Forms, etc.).

---

## Assessment overlay

`src/components/Assessment.astro` — data-driven dependency score. Edit `TRADES` and
`DEPTS` to add questions; do not hardcode UI per case. Higher score = more owner
dependency. Opens via `openAssessment()` from mid-essay CTAs (English only today).

---

## Deploy (GitHub + Netlify)

`netlify.toml` sets build command `npm run build` and publish directory `dist`.
Push to `main` to redeploy.

1. Commit and push to GitHub.
2. Netlify → Import project → select repo.
3. Set custom domain; `astro.config.mjs` already has `site: 'https://dwaynelocke.com'`.
4. For `/admin`: enable Netlify Identity + Git Gateway — see `docs/ADMIN-SETUP.md`.

---

## Project structure

```
src/
├─ content/essays/          # English essays (one file = one URL)
├─ content/essaysEs/        # Spanish essay bodies
├─ components/
│  ├─ HomePage.astro        # /home sections
│  ├─ PubNav.astro          # site navigation
│  ├─ FieldNotes.astro
│  ├─ Assessment.astro      # overlay + subscribe() placeholder
│  └─ framework-data/       # capability framework content (en + es)
├─ i18n/                    # UI copy (en.ts, es.ts)
├─ layouts/
│  ├─ BaseLayout.astro      # essays, intro
│  └─ HomeLayout.astro      # publication home
├─ pages/
│  ├─ index.astro           # /
│  ├─ home.astro            # /home
│  ├─ frameworks.astro
│  ├─ essays/[slug].astro
│  └─ es/                   # Spanish route mirrors
└─ styles/global.css        # design tokens — edit colors here only
public/                     # favicon, og-image, admin CMS
docs/                       # admin setup, CMS notes, design brief
```
