# KodNest Monorepo Structure (Foundation)

```txt
kodnest/
├── frontend/                         # Next.js App Router + Tailwind UI
│   ├── app/
│   │   ├── (marketing)/
│   │   │   └── page.tsx
│   │   ├── (dashboard)/
│   │   │   ├── courses/
│   │   │   ├── practice/
│   │   │   ├── placements/
│   │   │   └── community/
│   │   ├── api/                      # Next.js route handlers (BFF if needed)
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components/
│   │   ├── layout/                   # App shell (navbar/sidebar/footer)
│   │   ├── cards/                    # Shared card components
│   │   ├── course/
│   │   ├── live-session/
│   │   ├── placement/
│   │   └── ui/                       # Buttons, inputs, badges, modals
│   ├── lib/
│   │   ├── api-client.ts             # Axios/fetch wrappers
│   │   ├── auth.ts
│   │   └── constants.ts
│   ├── hooks/
│   ├── types/
│   ├── public/
│   ├── tailwind.config.ts
│   ├── postcss.config.js
│   ├── next.config.ts
│   └── package.json
│
├── backend/                          # Node.js + Express REST API
│   ├── src/
│   │   ├── app.ts
│   │   ├── server.ts
│   │   ├── config/                   # env, db, logger config
│   │   ├── modules/
│   │   │   ├── auth/
│   │   │   ├── users/
│   │   │   ├── courses/
│   │   │   ├── live-sessions/
│   │   │   ├── placements/
│   │   │   └── progress/
│   │   ├── middlewares/
│   │   ├── utils/
│   │   └── validations/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   ├── tests/
│   └── package.json
│
├── prisma/
│   └── schema.prisma                 # shared canonical schema for foundation
├── docs/
│   └── folder-structure.md
└── README.md
```

## Why this split works

- `frontend/` remains purely product UI + client interactions.
- `backend/` owns domain logic, auth, and database orchestration.
- `prisma/` at the repo root keeps the initial schema visible and shareable during early architecture.
- Feature-based module organization in `backend/src/modules/*` scales better than controller/service folders at root.
