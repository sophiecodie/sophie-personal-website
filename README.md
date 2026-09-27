# Sophie Shih — portfolio

Next.js + TypeScript + Tailwind + Framer Motion.

## Run it locally

```
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

Push to a GitHub repo and import at vercel.com/new, or:

```
npm i -g vercel
vercel
```

## What changed this iteration

This pass was about visual design and interaction, not more copy. Three
big structural changes:

1. **Fonts actually changed.** Plus Jakarta Sans (headlines/body — rounder,
   friendlier, visibly different from before) + **VT323** (genuine
   pixel/terminal font) for every small interface detail: numbers, nav
   labels, tags, dates, CTAs. Never for paragraphs. Utility class is
   `font-pixel` (see `tailwind.config.ts` / `app/layout.tsx`).
2. **Selected Works is back on the homepage**, directly under the hero —
   two large cards (`data/projects.ts`, `components/ProjectCard.tsx`),
   each just title + descriptor + one sentence + a big visual + a
   persistent "EXPLORE ↗". Full detail lives behind the click, at
   `/work/neurobiome` and `/work/siim` (still placeholder shells).
3. **Experience is now click-to-expand widgets**, not paragraph cards.
   Collapsed, each entry shows only enough to make someone want to click;
   clicking reveals tags + full description + CTA inline (no modal, no
   navigation) via a Framer Motion height animation.

## Experience widget system

`data/experience.ts` — each entry has a `variant` that controls its
collapsed layout. Same 5, fixed order:

| # | Entry | Variant | Collapsed look |
|---|---|---|---|
| 01 | Mass General Brigham | `feature` | full-width, large title, tiny meta |
| 02 | TheCoderSchool | `motif` | small graphic + short text |
| 03 | Weill Cornell Radiology | `visual` | image-first |
| 04 | MD.ai | `compact` | single horizontal line |
| 05 | Believers | `stat` | large year treatment |

All five share the same background tint, padding scale, and border-radius
(`components/ExperienceCard.tsx` → `spanClass()`), so the variety in size
and composition still reads as one system rather than five different
components. To add a 6th variant, add a case to both `spanClass()` and the
`Collapsed()` switch.

Grid spans (in `spanClass()`): `feature` = full width, `visual`/`compact` =
7/12, `motif`/`stat` = 5/12 — arranged as one full-width row, then two
paired rows, on purpose (not a dense bento grid).

## Outside of Class

- Dance and Reading+Writing (`data/interests.ts` → `primaryInterests`):
  trimmed to title + arrow + a small visual on hover — no paragraph.
  Fully clickable → `/dance`, `/reading-writing`.
- Others (`otherInterests`, rendered by `components/OthersRow.tsx`):
  collapsed to one line ("Tennis · Teaching · Mentoring"), click-to-expand
  into three short blurbs — same interaction language as the Experience
  cards, for consistency.

## Where to edit things

| What | File |
|---|---|
| Hero copy | `components/Hero.tsx` |
| Selected Works (2 cards) | `data/projects.ts` |
| Experience (5 widgets, order + variant + content) | `data/experience.ts` |
| Outside of Class | `data/interests.ts` |
| Contact links + resume | `components/Contact.tsx` |
| Colors | `tailwind.config.ts` |
| Fonts | `app/layout.tsx` (imports) + `tailwind.config.ts` (`font-sans` / `font-pixel`) |

## Judgment calls made this revision

- Dropped the short subtitle lines under "Selected Works" and "Experience"
  headings that existed before — kept only the Outside of Class tagline
  ("Different pursuits, same curiosity") since it's four words and doubles
  as the footer line. Everything else follows "heading is enough."
- The `/dance` and `/reading-writing` placeholder pages still show a full
  paragraph of "coming soon" copy — left those alone since they're
  destination pages, not the skimmable homepage, so the "minimal text"
  direction doesn't really apply there yet.
- "Others" uses the same click-to-expand pattern as Experience cards
  rather than a different interaction, so the whole site's interaction
  vocabulary stays consistent (one way to reveal detail, used everywhere).

## Still placeholder

- All "image" boxes — labeled `div`s, swap for real photos/screenshots
- `/work/neurobiome`, `/work/siim`, `/dance`, `/reading-writing` — shells only
