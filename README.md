# EduAI

EduAI is a learning platform for Cambridge O-Level students. The current milestone provides the public landing page and Supabase-backed account flows.

## Stack

- Next.js App Router and TypeScript
- Tailwind CSS
- Supabase Auth and PostgreSQL

## Local setup

1. Install Node.js and npm.
2. Install dependencies with `npm ci`.
3. Copy `.env.example` to `.env.local` and add the Supabase project URL and publishable key.
4. Start the development server with `npm run dev`.

The authentication pages are `/signup`, `/login`, `/forgot-password`, and `/update-password`. Email confirmation and password reset use `/auth/callback`. Configure those callback URLs in Supabase Auth URL settings for each environment you use. Keep `.env.local` out of version control.

## Checks

- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`

## Project notes

See [docs/DEVELOPMENT_LOG.md](docs/DEVELOPMENT_LOG.md) for implemented milestones and verification results. Student progress is not shown until it is backed by recorded student activity.
