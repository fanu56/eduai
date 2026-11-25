# Development log

## 2026-11-25 — Authentication foundation

### Implemented

- Added Supabase session refresh through the Next.js 16 `proxy.ts` convention.
- Completed email confirmation callback handling for authorization codes and token hashes, with internal-only redirect validation.
- Added login, logout, forgot-password, and password-reset flows.
- Added a server-protected student dashboard with honest empty states and no fabricated progress data.
- Updated signup to send confirmation links to the callback route and handle failures safely.
- Replaced build-time Google Font downloads with local system font stacks.

### Files

- Updated `app/layout.tsx`, `app/globals.css`, `app/page.tsx`, `app/signup/page.tsx`, and `app/auth/callback/route.ts`.
- Added `proxy.ts`, `app/login/`, `app/forgot-password/`, `app/update-password/`, `app/auth/signout/`, and `app/dashboard/`.
- Added `.env.example` and this log.

### Verification

- `npm run lint`: passed.
- `npx tsc --noEmit`: passed.
- `npm run build`: compiled successfully, then stopped when the restricted environment denied a worker spawn (`spawn EPERM`). The original Google Fonts network fetch was removed; the remaining build-stage failure is environmental.
- Supabase email delivery, callback allowlist settings, expired-link handling, and signed-in flows have not been tested against a live Supabase project.

### Git and deployment

- Work is on local feature branch `codex/auth-foundation`.
- No commit, push, pull request, or Vercel preview has been created yet.

### Remaining

- Run the production build in a runner that permits Next.js worker processes.
- Verify confirmation, login, logout, and password reset with Supabase and the configured callback allowlist.
- Push the feature branch and review its Vercel preview before merging.
