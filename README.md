# DwayneLocke.com

A thesis/publication site built with [Astro](https://astro.build). Essays are Markdown
files; the business-dependency assessment is one interactive island. Static output,
version-controlled on GitHub, hosted on Netlify.

---

## Run it locally (host while you edit)

You need [Node.js](https://nodejs.org) 20+ installed. Then, from this folder:

```bash
npm install     # first time only — downloads dependencies
npm run dev      # starts the local server with live reload
```

Open the URL it prints (usually **http://localhost:4321**). Edit any file and save —
the browser refreshes automatically. Stop the server with `Ctrl+C`.

To preview the real production build locally:

```bash
npm run build    # outputs the static site to ./dist
npm run preview  # serves ./dist exactly as it will deploy
```

---

## Add a new essay

1. Create a new Markdown file in `src/content/essays/`, e.g. `my-new-essay.md`.
   The filename becomes the URL: `/essays/my-new-essay/`.
2. Start it with frontmatter:

   ```markdown
   ---
   title: "Your Essay Title"
   description: "One-line summary shown in the essay list and meta tags."
   pubDate: 2026-07-01
   draft: false       # true = shows as "coming soon", no page generated
   order: 5           # controls position in the list (lower = higher up)
   ---

   Your first paragraph becomes the lede (larger, lighter).

   ## A section heading

   Regular paragraphs, **bold**, _italic_, and lists all work.

   > A blockquote renders as a rust pull-quote.
   ```

3. Save. In dev it appears immediately. Set `draft: false` to publish it; `draft: true`
   keeps it in the list as "— coming soon" without a live page.

That's the whole workflow — **adding an essay is adding a file.** Never edit a monolith.

---

## The assessment

Lives in `src/components/Assessment.astro` and opens as a full-screen overlay from any
"Take the assessment" / "Assessment" trigger (nav, footer, mid-essay CTA). It is
**data-driven**: edit the `TRADES` and `DEPTS` objects to add a business type or
question — don't hardcode UI per case. The score is a *dependency* score (higher = more
runs through the owner = worse).

---

## Two integrations still to wire (currently TODOs)

Both are placeholders on purpose — search the code for `TODO(email)`:

1. **Newsletter signup** (`subscribe()` in `src/components/Assessment.astro`) → your
   email provider's form/embed or API endpoint.
2. **Assessment results capture** (`A.plan()` in the same file) → capture the visitor's
   email, send their results, add them to the **same** provider.

Tell whoever is wiring these which provider you use (Beehiiv, ConvertKit, Substack,
Mailchimp, etc.) and they can replace both placeholders.

---

## Deploy: GitHub + Netlify

### 1. Put it on GitHub
From this folder (after creating an empty repo on github.com):

```bash
git init
git add .
git commit -m "Initial commit: DwayneLocke.com"
git branch -M main
git remote add origin https://github.com/<your-username>/dwaynelocke.com.git
git push -u origin main
```

### 2. Connect Netlify
- Log in to [Netlify](https://app.netlify.com) → **Add new site → Import an existing project**.
- Pick the GitHub repo. Netlify reads `netlify.toml` and auto-fills:
  - Build command: `npm run build`
  - Publish directory: `dist`
- Deploy. Every push to `main` redeploys automatically.

> **Ship ugly first.** Get this live on the Netlify pipeline before polishing. The
> anchor essay being public + newsletter capture working is the launch bar. Everything
> else is refinement you can do while it's already live.

---

## Project structure

```
dwaynelocke.com/
├─ astro.config.mjs        # Astro config (set your real domain in `site`)
├─ netlify.toml            # Netlify build settings
├─ .cursorrules            # voice + design rules (read before editing content)
├─ src/
│  ├─ content/
│  │  ├─ config.ts         # essay frontmatter schema
│  │  └─ essays/           # ← your essays live here, one file each
│  ├─ components/
│  │  ├─ Assessment.astro  # the interactive assessment (data-driven)
│  │  ├─ Newsletter.astro  # signup section
│  │  ├─ Nav.astro
│  │  └─ Footer.astro
│  ├─ layouts/
│  │  └─ BaseLayout.astro  # shared shell (fonts, nav, footer, assessment)
│  ├─ pages/
│  │  ├─ index.astro       # homepage: masthead + anchor essay + list
│  │  └─ essays/[slug].astro  # generated essay pages
│  └─ styles/
│     └─ global.css        # design tokens + all styles (edit tokens here)
└─ public/                 # static assets (favicon, images) — served as-is
```
