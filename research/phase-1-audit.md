# Phase 1 — Site Audit & Research
**Subject:** therapywithpallavi.com (Pallavi Bhaskar, Counsellor & Psychotherapist)
**Date:** 2026-04-17
**Purpose:** Ground the rebuild. Everything here feeds Phase 2 (brand) and Phase 3 (copy).

---

## TL;DR

The current site is a no-code export (Framer-style). Clean-ish minimal design, strong tree-of-life emblem, good clinical credentials — but body font is browser-default Times, "Client Testimonials" heading has zero testimonials under it, all intake/T&C/contact runs through Google Forms/Gmail/Google Docs (reads amateur for a premium practitioner), and the *person* is invisible. Her single strongest differentiator — **psychology + PGDM (management)** — is buried as a one-line bullet.

Bangalore-based. Online therapy. Sessions 60 minutes (her T&C says 60, her homepage says 55 — inconsistency to fix). Fee is "as per mutual agreement" (no public price). Serious boundaries: upfront payment 24h before, tiered cancellation.

Rebuild target: elevate tone to match her actual clinical depth, surface the corporate-background differentiator, fix the Times font, add real testimonials (need to ask), add blog, replace Google Forms with a proper booking flow (or at least an on-site intake).

---

## 1. Current Site — Verbatim Content

### Hero
- Display: **PALLAVI BHASKAR** (elegant tall serif)
- Subtitle: "counsellor & Psychotherapist" (note: lowercase "c" — typo)
- CTA: "Book a Free 15 min. consultation" → `https://wa.me/message/EIF2EASB2GEXI1`

### About paragraph (4 lines)
> I am a Counsellor & Psychotherapist, and provide a confidential and safe space where clients can freely explore their emotions without fear of judgment or bias.
>
> With more than 8 years of professional experience, I bring a unique blend of psychology and management expertise.
>
> I am trauma-informed and inclusive, and help you navigate through your difficulties with compassion and courage — for both immediate support and long-term growth.
>
> Therapy is not just about overcoming challenges — it's about empowerment. I collaborate with clients, providing tools and strategies to navigate life with confidence and clarity.

### Qualifications
- MA (Clinical Psychology)
- Cognitive Behaviour Therapy (CBT) Practitioner
- NeuroLinguistic Programming (NLP) Practitioner & Level 1 Life Coach
- QPR Trained Crisis Counsellor
- Trained in Internal Family Systems (IFS) Therapy for Trauma
- PGDM

### Concerns (12)
Anxiety · Trauma · Depression · Premarital & Marital concerns · Family-related concerns · Relationship concerns · Workplace related concerns · Low Self-esteem · Low Confidence · Anger issues · Trust Issues · Life Transitions

### Service
> **Individual Therapy (55 mins)** [T&C doc says 60 — conflict]
> - Confidential, safe, judgement-free and supportive space.
> - Personalised and evidence-based approach.
> - Navigate your thoughts and emotions.
> - Identify unhelpful patterns.
> - Challenge thoughts and explore different perspectives.
> - Gain clarity, resilience, and meaningful personal growth.

### Contact & Process (3 steps)
1. Fill the intake form (Google Forms) → `https://forms.gle/1JtNRc9rHWxtHGYN8`
2. WhatsApp or Email for a free 15-minute consultation
3. Get your queries regarding therapy addressed → Book your session

Contact: `therapy.icp@gmail.com` · `+91 91086 94332` (WhatsApp)

### Footer
- Terms & Conditions → Google Doc
- Headings present with no content underneath: **"Client Testimonials"**, **"Start your therapy journey"**

### Meta
- Title: `Pallavi Therapist` (weak — no location, no keywords)
- Description: "Pallavi Bhaskar is a counsellor & psychotherapist offering trauma-informed, inclusive therapy to help individuals heal, grow, and build emotional resilience."
- OG image exists (her portrait)

---

## 2. T&C Document — Key Facts (for rebuild)

### Structure (10 sections)
1. General Information · 2. Goals of Therapy · 3. Confidentiality · 4. Session Details · 5. Fees and Payments · 6. Cancellation Policy · 7. Client–Therapist Relationship · 8. Possible Limitations to Care · 9. Responsibility for Adverse Events · 10. Informed Consent

### Session details (authoritative — trust the T&C, fix the site)
- **60 minutes** per session (not 55)
- Frequency "collaboratively determined based on evolving needs"
- Calendar-based slot selection
- Individual → Couple conversion allowed with 24h notice + additional fee

### Fees
- **"Professional Fee: as per our mutual agreement"** — no fixed public price
- Payment: **24 hours before session**, else slot cancelled
- Methods: UPI (`pal.b91@okicici`) or bank transfer (Bank of Baroda, Sarakki branch, Bangalore)
- Fee revisions "notified prior to scheduled session"

### Cancellation policy
| Notice | Charge |
|---|---|
| 24+ hours | Free (adjusts toward future session, no refund) |
| 12–24 hours | 50% |
| < 12 hours | 100% |
| No-show | 100% |

### Implication
**She's based in Bangalore.** This is usable — lets us add "Based in Bangalore · Online therapy globally" or similar locality signal.

---

## 3. External Signals (what's indexed about her)

From search results (LinkedIn + directory snippets — full pages blocked to logged-out scrapers):
- LinkedIn: https://www.linkedin.com/in/pallavi-bhaskar-b76a9b32/
- Instagram: @therapy.with.pallavi (profile not publicly viewable without login)
- Volunteer counsellor — tele-counselling for people in distress
- Additional phrase attributed to her: *"approach rooted in both science and empathy"*
- Additional claim indexed: *"guided 200+ clients across varying phases of their life journey"* ← **not on her own website but should be**
- Prior/concurrent affiliation: Spring Health (per ZoomInfo)

**Gaps we still need Pallavi/you to fill:**
- Instagram caption samples (her actual day-to-day voice)
- LinkedIn bio (deeper credentials + narrative)
- Intake form questions (what SHE asks prospects — reveals her clinical lens)
- Real testimonials (2–5 would change the site)
- A bio photo that we have formal permission to use on new site

---

## 4. Visual Identity — What's Working

### Assets extracted to `./legacy-assets/`
- `pallavi-portrait.png` — her bio shot (warm smile, dark long hair, pink/cream top, white background). Needs reshoot for a hero setting but usable.
- `tree-of-life-emblem.png` — the signature mark. Circular badge, teal-to-navy gradient, female silhouette inside a stylized tree with leafy mandala canopy and flowing roots. **This is her brand anchor. Keep, elevate, never replace.**
- `og-image.jpg` — social share card.

### Palette (reverse-engineered)
- Deep navy: ~ `#1a2e3a`
- Teal gradient: `#4ea1a8` → `#2f6b78`
- Leaf/accent sage: `#7fb8a5` (in the emblem)
- Cream/off-white background: `#fafaf7`

### Typography (current)
- Display: tall elegant serif, letter-spacing loose (reads like Cinzel, Cormorant, or similar)
- Body: **Times (default) — this is an unforced error. Biggest immediate win.**

### Motifs
- Sun-ray / rising sun line drawing (top of hero)
- Tree-of-life emblem
- Small leaf dingbats scattered throughout

### Mood
Calm · earthy · feminine · spiritual-adjacent (roots/tree/mandala) but balanced by clinical credibility. Good foundation. Don't over-rotate toward flashy.

---

## 5. Positioning Hypothesis (to validate, Phase 2)

### Who she actually serves
**Urban Indian professionals, 28–42, high-performing, quietly struggling.** They have anxiety they can explain away, relationships they can't fix with logic, family dynamics they've outgrown, grief they never processed. They've tried journaling, self-help, maybe a prior therapist they ghosted after three sessions. They want someone *clinically serious* who won't be condescending, won't be purely techniqueological, and who understands that their identity is tangled up with their ambition.

### Why she, specifically
1. **Psychology + PGDM (management).** Almost no Indian therapist has an MBA-equivalent background. She can speak corporate, strategy, systems — *and* inner-world. This is her moat. Must be front-of-site, not a resume line.
2. **Trauma-informed + IFS.** Real clinical weight. IFS is emerging premium in India. Differentiates from pop life-coaching ("I'll give you tools!") and from purely cognitive CBT.
3. **Boundaries-first practice.** 24h payment rule, clear cancellation tiers — signals she takes the work seriously, which attracts clients who will too.
4. **Inclusive.** Quiet but deliberate signal for LGBTQ+, neurodivergent, non-conforming clients — important and underserved in India.

### What a "better client" probably means to her
(hypothesis — confirm with Pallavi)
- Commits to continuity (not drive-by one-off sessions)
- Respects the 24h payment + cancellation norms
- Engages in the work (does between-session reflection)
- Pays without friction at her actual rate
- Probably: the overworked-but-thoughtful professional, not the crisis-only caller

### Current site's biggest positioning failures
1. Buries the management background
2. No testimonials under the heading (lose trust)
3. No *her* — no story, no voice note, no POV on healing
4. Lists 12 concerns flat → looks like a supermarket menu, not a specialist
5. Amateur tooling (Google Docs/Forms/Gmail) undermines premium fee positioning

---

## 6. Rebuild Direction (will shape Phase 5–7)

### Keep
- Tree-of-life emblem as primary brand mark
- Teal/navy/cream palette
- WhatsApp-first conversion (right for India)
- Tiered cancellation discipline (front-load in Services page to filter clients)
- Trauma-informed + inclusive framing

### Elevate
- Swap Times for a pairing like **Cormorant Garamond (display) + Inter (body)** or a warmer humanist body
- Proper H1/H2 semantic hierarchy (SEO baseline)
- Hero that shows her *and* the emblem, not just the emblem floating
- "Who I work with" section that names the urban-professional profile explicitly
- PGDM background front-loaded — a signature sentence like *"I work at the intersection of corporate psychology and inner life."*
- Real testimonials (ask Pallavi for 2–5)
- Blog with seed posts on modalities, common patterns, what-to-expect
- Schema.org `Person` + `MedicalBusiness` markup for SEO

### Replace
- Google Form intake → on-site form that emails her (or writes to Supabase if we want admin dashboard)
- Google Doc T&C → proper /terms page (with her permission)
- Times body font → humanist body
- "Client Testimonials" empty heading → either populate or remove the heading entirely

### Add
- Fees framing (since she won't publish a number: *"Fee is set collaboratively in our first conversation based on your situation"* — positions scarcity, not cagey)
- First-session expectations
- FAQ (modalities explained in plain English)
- Location/online clarity (Bangalore-based, online globally)
- Subtle motion: reveal-on-scroll, parallax on emblem, nothing flashy

### Tone
Quiet authority. Warmth without sentimentality. Clinical precision without clinical coldness. Think: a senior colleague who's been doing this for eight years and has nothing to prove.

---

## 7. Known Inconsistencies (fix during rebuild)

1. **Session length: 55 (homepage) vs 60 (T&C doc).** Trust T&C — 60.
2. **"counsellor" lowercase c** in subtitle.
3. **"Client Testimonials" heading with no testimonials** — either populate or remove.
4. **"Start your therapy journey" heading also appears empty** in scrape — verify.
5. **200+ clients claim** indexed externally but not on her own site — ask Pallavi if true, then include.

---

## 8. Still Needed (action items for next session)

Ask Pallavi (or pull from her sources Evan can access):
- [ ] 3–5 recent Instagram captions (voice samples)
- [ ] Her LinkedIn "About" text (full)
- [ ] Screenshot / text of her intake form (Google Form) questions
- [ ] 2–5 real testimonials (with client-consent for publishing)
- [ ] Formal permission to use her portrait photo
- [ ] Preferred booking flow: keep WhatsApp-only, or add on-site booking?
- [ ] Is "200+ clients" accurate? May we cite it?
- [ ] Location policy: "Bangalore + online" or "online only"?

---

## Appendix: Raw asset inventory

Server-hosted (downloaded):
- `/legacy-assets/pallavi-portrait.png` (800×800, was at `_assets/media/e83c47b5c6e4350aba8a7970e3011bba.png`)
- `/legacy-assets/tree-of-life-emblem.png` (500×500, was at `_assets/media/a247109bb517b799e5d598713513af09.png`)
- `/legacy-assets/og-image.jpg` (social share)

Blob-URL (embedded by the no-code exporter, need Playwright re-extraction in Phase 4):
- 1× sun-ray/mandala line drawing (hero top)
- 12× concern-icon glyphs (65×61 each)
- ~4× decorative leaf/branch illustrations
- ~3× contact-block icons (email, phone, form)
