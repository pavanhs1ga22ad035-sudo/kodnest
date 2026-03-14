# KodNest LMS

This repository hosts the KodNest LMS codebase.

## Why you saw 404
The Next.js app lives inside `frontend/`. Running commands from repo root without targeting `frontend` (or deploying root without config) can return 404.

## Local run

```bash
npm run install:frontend
npm run dev
```

Then open:
- `http://localhost:3000/` (auto-redirects to `/home`)
- `http://localhost:3000/home`

## Vercel deploy
`vercel.json` is configured to build the Next.js app from `frontend/package.json`.
