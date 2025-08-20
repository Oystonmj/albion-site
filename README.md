# Albion — Replace the Expansion Cartel

A minimal Next.js 14 + TypeScript + Tailwind build that implements the “Albion vs. The Expansion Cartel” page.

## Quick start (local)

1) Install **Node.js 20 LTS** (or 18.17+).
2) Install dependencies:

```bash
npm install
# or
pnpm install
# or
yarn
```

3) Run the dev server:

```bash
npm run dev
```

4) Open http://localhost:3000

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Accept defaults. On push to `main`, Vercel will build and deploy.

## Notes

- Light/Dark tokens are in `app/globals.css` and toggled via adding/removing the `dark` class on `<html>`.
- Content lives in `content/albion.json` and is consumed by server components.
- CTAs ship with `data-*` attributes for analytics wiring (`lib/metrics.ts`).