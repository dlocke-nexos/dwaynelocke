# Homepage Design Brief — clarity + trust

The goal for the homepage is **easy to follow** and **trustworthy**. Not a SaaS
marketing funnel. We borrow the *craft* of polished marketing sites (deel.com as a
reference) — hierarchy, spacing, polish, restraint — but **not** their structure
(no logo walls, no invented stats, no testimonials, no product screenshots).

This brief obeys `.cursorrules`. Read that file first; nothing here overrides it.

---

## Palette (keep — do not change to purple)

The existing tokens are intentional: warm cream paper + deep rust. This sits in the
same warm family as the Claude look but stays a shade off, so the site reads as its
own brand rather than a clone. Defined once in `src/styles/global.css`:

- `--paper #f4f1ea` (page background)
- `--ink #1c1a17` (primary text)
- `--accent #b8552f` (rust — the one accent)

Do not introduce purple or shift to Claude's exact coral.

## Typography & hierarchy (biggest lever for "easy to follow")

- Increase contrast between levels. A bigger, more confident masthead headline
  (Fraunces, tight letter-spacing).
- Clear step-down: h1 > section eyebrow > h2/h3 > body.
- Add a small uppercase, letter-spaced "eyebrow" label above each major section so
  the page is scannable at a glance.
- Keep essay reading width ~720px; body ~18px with generous line-height.

## Layout & rhythm

- Sticky nav with a subtle border/blur once the page scrolls.
- Distinct horizontal section bands with generous vertical spacing, so each section
  is a digestible block.
- Subtle, tasteful motion only: fade-up on scroll for sections, gentle hover lifts
  on cards/links. Nothing flashy.

## Trust (truthful only — invent nothing)

Pull facts from the anchor essay; do not fabricate logos, numbers, or testimonials.

- A concise credibility strip near the top: 15 years on ERP implementations,
  enterprise transformation, and technology adoption across consulting firms,
  software companies, universities, and healthcare organizations.
- A short first-person "About" block (2–3 sentences, observational tone) on why
  I'm worth reading on this topic.
- Keep the byline and a clear, consistent footer.

## The page should answer, in order

1. Who this is and what it's about (masthead + standfirst)
2. Why trust me (credibility strip / about)
3. The thinking (the anchor essay)
4. Keep up with it (newsletter)
5. More writing (essay list)

The assessment stays a quiet secondary CTA + overlay — never the headline.

## Do NOT

- No purple, no gradients-as-decoration, no stock-startup look.
- No fabricated social proof (logos, stats, testimonials).
- Don't turn the publication into a conversion landing page.
- Don't break the assessment overlay or the content-collection essay rendering.

---

## Paste-ready prompt for Cursor

> Redesign the homepage (`src/pages/index.astro` + `src/styles/global.css`) to be
> easier to follow and to establish trust, while strictly obeying `.cursorrules`
> and `docs/DESIGN-BRIEF.md`. This is a publication, not a SaaS funnel. Reference
> the *craft* of deel.com (clarity, hierarchy, spacing, polish) — NOT its structure.
> No logo walls, no invented stats, no testimonials, no product screenshots, no purple.
>
> Keep the existing palette (--paper #f4f1ea, --ink #1c1a17, --accent #b8552f).
> Strengthen typographic hierarchy, add per-section uppercase eyebrows, make the nav
> sticky with a subtle scrolled state, give sections generous spacing as distinct
> bands, and add tasteful fade-up-on-scroll + gentle hover motion.
>
> Add a truthful credibility strip and a short first-person About block using my real
> background from the anchor essay (ERP implementations, enterprise transformation,
> technology adoption across consulting firms, software companies, universities, and
> healthcare). Invent nothing.
>
> Order the page: masthead → credibility/about → anchor essay → newsletter → essay
> list. Keep the assessment a quiet secondary CTA + overlay. Refactor shared styles
> using the existing tokens. Work in small batches and don't break the assessment
> overlay or essay rendering.
