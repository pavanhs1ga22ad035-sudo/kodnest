# kodnest

KodNest LMS clone with a lightweight backend and Vercel-ready API routes.

## Run locally

```bash
node server.js
```

Then open `http://127.0.0.1:4173`.

## API endpoints

- `GET /api/profile`
- `GET /api/dashboard`

## Deploy on Vercel

1. Push this repository to GitHub.
2. Import the repo in Vercel.
3. Deploy (no extra build settings needed).

The static frontend is served from root files and backend endpoints are served from `api/profile.js` and `api/dashboard.js`.
