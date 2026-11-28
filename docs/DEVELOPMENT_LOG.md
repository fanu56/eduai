# Development log

## 2026-11-28 — Student dashboard pages

### Implemented

- Added a shared responsive dashboard shell with navigation for overview, subjects, AI tutor, practice, past papers, progress, chat history, settings, plans, and help.
- Moved the authenticated session check to the dashboard layout so every dashboard route requires a verified Supabase session.
- Added a Cambridge O-Level subject catalog for Mathematics (4024), Physics (5054), Chemistry (5070), Biology (5090), Computer Science (2210), and Economics (2281).
- Added overview and destination pages with explicit empty states where database, AI, licensed content, or billing integrations are still pending.
- Kept the production URL and Site URL unchanged; no plan pricing or payment behavior was introduced.

### Files

- Added `components/dashboard/dashboard-shell.tsx`, `components/dashboard/page-header.tsx`, `components/dashboard/empty-state.tsx`, and `components/dashboard/subject-catalog.tsx`.
- Added `app/dashboard/layout.tsx` and dashboard routes for subjects, tutor, practice, past papers, progress, sessions, settings, upgrade, and help.
- Updated `app/dashboard/page.tsx` and `README.md`.

### Verification

- `npm.cmd run lint`: passed without warnings.
- `npx.cmd tsc --noEmit`: passed.
- `npm.cmd run build`: compiled successfully, then the restricted Windows environment denied a worker spawn (`spawn EPERM`) during the build's TypeScript phase, matching the previously recorded environment limitation.
- Vercel preview has not yet been run for this milestone.
- No database records, AI responses, scores, or subscription data were fabricated.

### Remaining

- Connect subject selection to a secure Supabase schema and enforce the two-subject free-plan cap server-side.
- Add syllabus-backed topic content and assessments.
- Connect the tutor using a server-side AI integration with access, usage, and cost controls.
- Configure a licensed paper source, then implement saved tutoring sessions and progress tracking.
- Finalize premium pricing and payment decisions before enabling checkout.

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
