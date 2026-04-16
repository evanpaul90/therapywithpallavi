# therapywithpallavi.com

Website for **Pallavi Bhaskar**, counsellor and psychotherapist (Bangalore · online globally).

## Stack

- Next.js 16 (App Router) + React 19
- Tailwind CSS 4
- Framer Motion (installed; current animation is CSS-driven for SSR/SEO safety)
- TypeScript strict
- Deployed on Netlify (Phase 8)
- TinaCMS for inline content editing (Phase 7 — pending)

## Local development

```bash
npm install
npm run dev    # http://localhost:3000
npm run typecheck
npm run build
```

## Project structure

```
src/
  app/                  # App Router pages
    page.tsx            # Home (assembles all home sections)
    about/              # /about
    how-i-work/         # /how-i-work
    contact/            # /contact (intake form)
    journal/            # /journal + /journal/[slug]
    terms/              # /terms
    api/intake/         # POST endpoint for the contact form
  components/
    site-nav.tsx
    site-footer.tsx
    tree-emblem.tsx
    fade-in.tsx
    intake-form.tsx
    home/               # Section components for the homepage
  lib/
    posts.ts            # Journal post data (will move to TinaCMS in Phase 7)
public/
  assets/               # Brand assets (portrait, emblem, og image)
research/               # Phase 1-3 deliverables — site audit, brand, copy deck
```

## Design system

Documented in `research/phase-2-brand.md` and reflected in `src/app/globals.css`:

- **Display:** EB Garamond (Google Fonts via next/font)
- **Body:** Inter
- **Palette:** cream `#fafaf7` background · deep teal `#2f6b78` primary · sage · ochre · navy
- **Mood:** editorial-literary — Aeon, NYRB, Rizzoli. No wellness-app aesthetic.

Strict guardrails (banned phrases, banned visual patterns) live in `research/phase-2-brand.md`.

## Content editing

Today: edit `src/lib/posts.ts` for journal entries; edit copy directly in component files.

Phase 7 will wire TinaCMS so Pallavi can edit inline at `/admin` without touching code.
