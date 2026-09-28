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

1. **One pixel font everywhere.** Pixelify Sans replaces both Plus Jakarta
   Sans and VT323 — headings, nav, cards, body. Hierarchy comes from size,
   weight and uppercase. `font-sans` and `font-pixel` both point at it
   (`app/layout.tsx`, `tailwind.config.ts`).
2. **Selected Works is a sliding tray in the hero** (`components/SelectedWorks.tsx`).
   It's a native scroll container with scroll-snap — vertical on desktop,
   horizontal swipe on phones — plus click-and-drag for mouse users. Each
   widget (`components/ProjectCard.tsx`) shows only number, title,
   descriptor, a visual and `OPEN ↗`.
3. **Project detail pages** — one dynamic route, `app/work/[slug]/page.tsx`
   (`/work/neurobiome`, `/work/agent00hl7`, `/work/dreamteam`), rendered by
   `components/ProjectDetail.tsx` from `detail` in `data/projects.ts`.
   Add a project to that array and its page exists. `/work/siim` redirects
   to `/work/agent00hl7` (`next.config.mjs`). Empty lists (process, links, …) are hidden;
   empty `screenshots` shows placeholder frames.
4. **Experience cards are cream paper** (`#FFFBEA`, thin border, no
   shadow). Collapsed: organization, role, dates, a one-line `descriptor`
   and (feature card) one tag. Click expands inline. Hover lifts the card,
   nudges the title and arrow, and fades in `VIEW`.

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

All five share the same cream fill, border, padding scale, and border-radius
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
| Selected Works (tray widgets + detail pages) | `data/projects.ts` |
| Experience (5 widgets, order + variant + content) | `data/experience.ts` |
| Skills (groups, larger "major" tags, hover notes) | `data/skills.ts` |
| Outside of Class (Dance / Reading / Writing rows) | `data/interests.ts` |
| Bookshelf (`/reading`) | `data/books.ts` — optional cover, rating, quote, review, dateRead, tags |
| Writing (`/writing`) | `data/writing.ts` — shows "portfolio coming soon." while empty |
| Images | `lib/images.ts` (imports from `/imgs`) |
| Contact links + resume | `components/Contact.tsx` |
| Colors | `tailwind.config.ts` |
| Font | `app/layout.tsx` (Pixelify Sans import) + `tailwind.config.ts` |

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

- Images still missing: Agent00HL7 widget, Dance row — add to `/imgs`, then `lib/images.ts`
- `/work/*` — screenshots (all), Neurobiome process + links: TODO in `data/projects.ts`
- Experience links — RSNA abstract, MD.ai paper + video: empty `href`s in `data/experience.ts` (hidden until filled)
- `/dance` — shell only (`/reading-writing` now redirects to `/reading`)
