# Seablings

> A minimal solidarity platform connecting Southeast Asia through acts of kindness and shared awareness.

Seablings is a single-page community site celebrating the ten ASEAN member nations. Visitors land on a hero, see all ten national flags slowly scroll by, browse a live news ticker sourced via Google Gemini, and find ways to contribute.

The project started as a Vite + React app and was migrated to Next.js 15 with full SEO infrastructure, server-side AI integration, and a PWA manifest.

## Features

- **ASEAN flag ribbon** — all ten member nation flags scroll continuously (SVG from Wikimedia Commons)
- **Curated news ticker** — 10 hand-picked headlines, one per ASEAN country, from `data/news.json`
- **Submission form** — visitors can submit stories, volunteer inquiries, or partnership requests, stored in Postgres (Neon)
- **SEO-ready** — sitemap, robots.txt, Open Graph image, Twitter cards, JSON-LD organization markup, canonical URL
- **PWA manifest** — installable, themed for light and dark
- **Self-hosted fonts** — Inter via `next/font/google`
- **Accessible** — semantic HTML, ARIA labels, `prefers-reduced-motion` respected, keyboard-friendly

## Tech stack

| Layer       | Choice                              |
| ----------- | ----------------------------------- |
| Framework   | Next.js 15 (App Router)             |
| Runtime     | React 19, TypeScript                |
| Styling     | Tailwind CSS 3 (custom palettes)    |
| Icons       | lucide-react                        |
| AI          | `@google/genai` (Gemini 2.5 Flash)  |
| Fonts       | `next/font/google` (Inter)          |

## Getting started

### Prerequisites

- Node.js 20 or newer
- npm 10+ (pnpm or yarn also work)

### Install

```bash
npm install
```

### Configure

Copy the example env file and add your Gemini API key:

```bash
cp .env.local.example .env.local
```

`.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
GEMINI_API_KEY=your_gemini_api_key_here
DATABASE_URL=postgresql://user:password@host.neon.tech/dbname?sslmode=require
```

Get a Gemini key at <https://aistudio.google.com/apikey>. For the database, create a free project at <https://neon.tech> and copy the **pooled** connection string.

### Database setup

Run the schema once in the Neon SQL editor before going live:

```bash
psql "$DATABASE_URL" -f db/schema.sql
```

or paste the contents of `db/schema.sql` into the Neon console.

### Develop

```bash
npm run dev      # http://localhost:3000
```

### Build

```bash
npm run build
npm start
```

## Project layout

```
.
├── app/                       # Next.js App Router
│   ├── api/news/route.ts      # Gemini news endpoint (unused — kept for future live data)
│   ├── api/submissions/route.ts # Stores form submissions in Postgres
│   ├── icon.tsx               # 64x64 favicon (SEA wordmark)
│   ├── apple-icon.tsx         # 180x180 Apple touch icon
│   ├── opengraph-image.tsx    # 1200x630 OG card
│   ├── layout.tsx             # Root layout, metadata, JSON-LD
│   ├── page.tsx               # Homepage
│   ├── globals.css            # Tailwind directives + custom CSS
│   ├── manifest.ts            # PWA manifest
│   ├── robots.ts              # robots.txt
│   └── sitemap.ts             # sitemap.xml
├── components/                # React components
│   ├── Hero.tsx               # "use client" — onClick scroll handler
│   ├── FlagRibbon.tsx         # Scrolling ASEAN flag ribbon
│   ├── HowItWorks.tsx
│   ├── CommunityFeed.tsx
│   ├── Contribute.tsx         # Hosts the submission form
│   ├── SubmissionForm.tsx     # "use client" — controlled form, posts to /api/submissions
│   ├── Footer.tsx             # "use client" — Date hydration
│   └── JsonLd.tsx
├── data/
│   └── news.json              # 10 curated ASEAN news items
├── db/
│   └── schema.sql             # Postgres schema — run once in Neon SQL editor
├── lib/
│   └── db.ts                  # Singleton Neon serverless client
├── public/flags/              # 10 ASEAN member flag SVGs
├── services/
│   └── geminiService.ts       # server-only Gemini fetcher
├── types.ts                   # Shared TypeScript types
├── tailwind.config.ts         # sea/kelp palette, animations
└── next.config.mjs
```

## Environment variables

| Name                   | Required   | Purpose                                                          |
| ---------------------- | ---------- | ---------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Yes (prod) | Public site URL — drives canonical, sitemap, OG, JSON-LD         |
| `DATABASE_URL`         | For forms  | Neon pooled Postgres connection — backs the submission form      |
| `GEMINI_API_KEY`       | Optional   | Currently unused (news now reads from `data/news.json`)          |

Without `DATABASE_URL`, the submission form returns a 500 error (visible to the user); the rest of the site works fine.

## Deployment

### Vercel (recommended)

Import the GitHub repo in Vercel. Add `NEXT_PUBLIC_SITE_URL` and `GEMINI_API_KEY` under Environment Variables. Vercel auto-detects Next.js — no extra config needed.

### Other hosts

Any Node.js host with Next.js support will work. Run `npm run build && npm start`.

## Customizing

- **Brand colors** — `tailwind.config.ts` defines `sea` and `kelp` palettes; tweak hex values to rebrand
- **ASEAN flags** — drop new SVGs into `public/flags/` and add entries to `ASEAN_FLAGS` in `components/FlagRibbon.tsx`
- **Metadata** — `app/layout.tsx` exports a `Metadata` object; `app/sitemap.ts` and `app/robots.ts` read `NEXT_PUBLIC_SITE_URL`

## Scripts

| Command          | What it does                  |
| ---------------- | ----------------------------- |
| `npm run dev`    | Dev server with HMR           |
| `npm run build`  | Production build              |
| `npm start`      | Serve the production build    |
| `npm run lint`   | Next.js + ESLint              |

## Attribution

- Flag SVGs sourced from [Wikimedia Commons](https://commons.wikimedia.org/) under their respective licenses
- AI news headlines generated by [Google Gemini](https://aistudio.google.com/) — verify before publishing
- Inter font self-hosted via `next/font/google`

## License

Open source. Non-profit community initiative.
