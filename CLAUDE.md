# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

3D Bueskydning is a Danish-language PWA for 3D archery scoring and course management. It supports multi-player rounds, GPS route tracking, course administration, and statistics. Hosted at base path `/3D/`.

## Commands

```bash
npm run dev       # Start Vite dev server (localhost:5173/3D/)
npm run build     # Build to /dist
npm run preview   # Preview production build
build.bat         # Full Windows build → git push to produktion (/3D/)
build-dev.bat     # Test-build → git push til dev-branch (/3D/3D-dev/)
```

The `build.bat` script is the production deployment path — it copies `index.src.html` to `index.html` before building. Edit `index.src.html`, not `index.html`.

**Workflow:** Lav ændringer på `dev`-branchen og test via `build-dev.bat` på `https://bsk65.github.io/3D/3D-dev/` (bemærk: `/3D/` foran `3D-dev/` — `vite.config.dev.js` sætter `base:'/3D/3D-dev/'`, så `https://bsk65.github.io/3D-dev/` uden det indledende `/3D/` giver 404). Når alt virker, merge til `main` og kør `build.bat`.

## Architecture

**Stack:** Vanilla JS + Vite + Firebase 10 (modular SDK) + Leaflet maps. No framework.

**State** lives entirely in a single `state` object in `js/main.js` (~1440 lines). This file is the monolithic core: auth listeners, UI rendering, Firebase subscriptions, and business logic all coexist here.

**Key modules:**

| File | Responsibility |
|------|---------------|
| `js/main.js` | **Eneste live fil.** Al app-logik: state, auth, UI, Firebase, GPS. Alt eksponeres via `window.*` til HTML onclick-handlers. |
| `js/firebase-instance.js` | Firebase singleton — importeres IKKE af main.js (dead code, bevaret til reference) |
| `js/legacy/` | Gamle moduler (app.js, auth.js, courses.js, gps.js, friends.js, scoring.js) — bruges ikke, flyttet hertil for at undgå forvirring |

**Vigtig note:** Vite bundler kun `js/main.js`. Alle andre js/-filer er ikke en del af produktionsbuildet.

## Data Storage

- **Firestore** (`courses`, `users`, `admins`): courses, user profiles, admin list
- **Firebase Storage**: course target images (`courses/{courseId}/target_{idx}.jpg`)
- **localStorage** (`archery_v5`): friends, rounds og courses — lokalt cache

**Bemærk:** Gamle collection-navne (`kurser`, `brugere`, `administratorer`) er legacy fra tidligere version og bruges ikke i den nuværende kode. De live collection-navne er `courses`, `users`, `admins`.

## Key Data Structures

**Scores** are stored as 2D arrays per shooter: `scores[targetIndex] = [arrow1, arrow2]` where values are `11 | 10 | 8 | 5 | 'M' | null`. Serialized to Firestore as strings: `"11,10;8,5;M,M"`.

**Round traversal:** `buildOrder(startIdx, numTargets)` creates a circular path from the chosen start target. The `traversalOrder` array holds target indices; `traversalPos` tracks current position.

**Firestore fields use bilingual naming** (English + Danish, e.g. `name`/`yam`, `location`/`beliggenhed`, `targets`/`mål`) — legacy from app migration. Always write both when creating/updating documents.

## Non-Obvious Behaviors

- **Active rounds auto-resume** on page reload from Firestore (`users/{uid}/aktiv/runde`, max 24h lifecycle).
- **Service worker has no fetch handler** — intentionally no offline caching to avoid stale data.
- **Wake Lock** is requested during GPS tracking to keep screen on.
- **Admin check** is `doc.exists()` on `admins/{uid}` — no role claims in Auth token.
- Firebase config is hardcoded in `main.js` — no `.env` file.
- Firestore uses persistent local cache with multi-tab sync manager.
- Courses are cached in localStorage and fetched fresh from Firestore on login.
- Friends and rounds are primary-local (localStorage), with Firestore as backup/sync.

## Firestore Collections

| Collection | Notes |
|-----------|-------|
| `courses` | Baner — læsbar af alle auth-brugere, skrives kun af admins |
| `users` | Brugerprofiler — hver bruger læser/skriver eget doc |
| `admins` | Admin-liste — `doc.exists()` afgør `state.isAdmin` |
| `users/{uid}/rounds` | Runde-backup i Firestore (primary er localStorage) |
| `users/{uid}/friends` | Venne-backup i Firestore (primary er localStorage) |
| `users/{uid}/aktiv/runde` | Igangværende runde — slettes ved finish/abort |

## fix_*.mjs Scripts

The repo root contains one-off Firestore migration/fix scripts (`fix_rounds_firestore.mjs`, `fix_analyse2.mjs`, etc.). These are standalone Node scripts for data migrations — not part of the app build.
