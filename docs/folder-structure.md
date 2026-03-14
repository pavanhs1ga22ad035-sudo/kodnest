# KodNest LMS - Recommended Monorepo Structure

```text
kodnest/
├─ frontend/                        # Next.js (App Router) + Tailwind UI
│  ├─ app/
│  │  ├─ (marketing)/page.tsx
│  │  ├─ (dashboard)/
│  │  │  ├─ layout.tsx
│  │  │  ├─ page.tsx
│  │  │  ├─ courses/page.tsx
│  │  │  ├─ practice/page.tsx
│  │  │  ├─ placements/page.tsx
│  │  │  └─ community/page.tsx
│  │  ├─ globals.css
│  │  └─ layout.tsx
│  ├─ components/
│  │  ├─ layout/MainLayout.tsx
│  │  ├─ layout/TopNav.tsx
│  │  ├─ cards/
│  │  └─ ui/
│  ├─ lib/
│  │  ├─ api-client.ts
│  │  ├─ auth.ts
│  │  └─ utils.ts
│  ├─ hooks/
│  ├─ types/
│  └─ middleware.ts
│
├─ backend/                         # Node.js + Express API
│  ├─ src/
│  │  ├─ app.ts
│  │  ├─ server.ts
│  │  ├─ config/
│  │  │  ├─ env.ts
│  │  │  └─ db.ts
│  │  ├─ modules/
│  │  │  ├─ auth/
│  │  │  ├─ users/
│  │  │  ├─ courses/
│  │  │  ├─ live-sessions/
│  │  │  ├─ placements/
│  │  │  ├─ progress/
│  │  │  └─ leaves/
│  │  ├─ middlewares/
│  │  ├─ utils/
│  │  └─ validations/
│  ├─ prisma/
│  │  ├─ schema.prisma
│  │  ├─ migrations/
│  │  └─ seed.ts
│  └─ tests/
│
├─ shared/                          # Optional shared types/helpers
│  ├─ types/
│  └─ constants/
│
└─ docs/
   ├─ architecture.md
   └─ folder-structure.md
```

## Notes
- `frontend` and `backend` can be deployed independently.
- Keep all DB-related concerns in `backend/prisma`.
- App Router route groups (`(dashboard)`) keep URLs clean while segmenting layouts.
