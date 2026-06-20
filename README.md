# Wizu — Portfolio

Cinematic single-page site. Journey rendered as a blockchain ledger, "what I do" rendered as callable functions, magnetic social dock.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind · Motion (`motion/react`) · GSAP ScrollTrigger · Lenis

## Run

```
npm install
npm run dev
```

Open http://localhost:3000

## Edit content

Everything you'll actually want to change lives in **`lib/content.ts`**:
- `profile` — name, role, status badge
- `socials` — X / Telegram / Instagram handles + URLs
- `ledger` — your journey entries (block / date / tag / description)
- `functions` — the 3 "what I do" cards
- `contact` — footer CTA + email

No component code needs touching for a content update.

## Design tokens

`tailwind.config.ts` — colors (`ink`, `gold`, `teal`, `bone`, `muted`) and fonts. Fonts loaded in `app/layout.tsx` via `next/font` (Space Grotesk / IBM Plex Sans / IBM Plex Mono).

## Deploy

Push to GitHub, import the repo at vercel.com/new. Zero config needed — Next.js is auto-detected.

```
npm i -g vercel
vercel
```

## Notes

- Ledger "tx hash" under each entry is a cosmetic deterministic hash of the block content — not real, just flavor.
- Status badge in the hero (`profile.status`) — flip to `"BOOKED"` when you're not taking clients.
- Reduced-motion is respected (see `globals.css`).
