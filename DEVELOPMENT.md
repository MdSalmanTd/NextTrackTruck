# Development Guide

## Setup

```bash
npm install
copy env.example .env.local
npm run dev
```

Edit `.env.local` with your MySQL credentials before using the app.

## Commands

```bash
npm run dev          # Start local development
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript only
npm run build        # Build for production
npm start            # Start production server
```

## Adding A Page

1. Create a route in `app/`.
2. Create the actual screen in `features/`.
3. Keep shared UI in `components/`.

Example:

```txt
app/reports/page.tsx
features/reports/ReportsScreen.tsx
```

## Adding An API Route

Create route handlers under `app/api`.

```txt
app/api/reports/route.ts
```

Use shared helpers from `lib/` for database, auth, and API utilities.

## Important Notes

- `@/` resolves to the project root.
- Auth cookies use the `token` cookie name.
- Next.js 16 uses `proxy.ts` for request redirects instead of `middleware.ts`.
- Feature-specific screens belong in `features/`, not `components/`.
