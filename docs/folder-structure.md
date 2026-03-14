# KodNest LMS - Ideal Folder Structure

```text
kodnest/
├── frontend/                                  # Next.js App Router + Tailwind
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── home/page.tsx
│   │   ├── courses/page.tsx
│   │   ├── practice/page.tsx
│   │   ├── placements/page.tsx
│   │   └── community/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── MainLayout.tsx
│   │   │   └── TopNav.tsx
│   │   ├── cards/
│   │   ├── course/
│   │   └── common/
│   ├── lib/
│   │   ├── api-client.ts
│   │   └── helpers.ts
│   ├── hooks/
│   ├── types/
│   └── styles/
│
├── backend/                                   # Node.js + Express + Prisma
│   ├── src/
│   │   ├── app.ts
│   │   ├── server.ts
│   │   ├── config/
│   │   │   ├── env.ts
│   │   │   └── prisma.ts
│   │   ├── middlewares/
│   │   ├── modules/
│   │   │   ├── auth/
│   │   │   ├── users/
│   │   │   ├── courses/
│   │   │   ├── live-sessions/
│   │   │   ├── placements/
│   │   │   ├── progress/
│   │   │   └── leaves/
│   │   ├── routes/
│   │   └── utils/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   ├── migrations/
│   │   └── seed.ts
│   └── tests/
│
└── docs/
    └── folder-structure.md
```
