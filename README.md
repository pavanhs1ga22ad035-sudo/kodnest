# KodNest Neo LMS

A beautiful LMS dashboard inspired by your uploaded dark/orange design language, with a unique layout and full frontend + backend flow.

## Features

- Modern LMS dashboard UI
- Backend-powered data APIs
- Course library with **Play Class** support
- YouTube embedded class player

## Run locally

```bash
node server.js
```

Open: `http://127.0.0.1:4173`

## API endpoints

- `GET /api/profile`
- `GET /api/dashboard`
- `GET /api/courses`

## Vercel deploy

1. Push this repo to GitHub.
2. Import the repository in Vercel.
3. Click **Deploy**.

Static UI files are at root, and Vercel functions are in `api/`.
