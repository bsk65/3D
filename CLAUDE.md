# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

3D Bueskydning is a Danish-language PWA for 3D archery scoring and course management. It supports multi-player rounds, GPS route tracking, course administration, and statistics. Hosted at base path `/3D/`.

## Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # Build to /dist
npm run preview   # Preview production build
build.bat         # Full Windows build: copies index.src.html → index.html, builds, and git pushes
```

The `build.bat` script is the production deployment path — it copies `index.src.html` to `index.html` before building. Edit `index.src.html`, not `index.html`.

## Architecture

**Stack:** Vanilla JS + Vite + Firebase 10 (modular SDK) + Leaflet maps. No framework.

**State** lives entirely in a single `state` object in `js/main.js` (~1440 lines). This file is the monolithic core: auth listeners, UI rendering, Firebase subscriptions, and business logic all coexist here.

**Key modules:**

| File | Responsibility |
|------|---------------|
| `js/main.js` | All app state, UI rendering, event handling, Firestore listeners |
| `js/firebase-instance.js` | Firebase singleton (auth, db, storage) — import from here |
| `js/auth.js` | Login/signup/logout/password reset |
| `js/scoring.js` | Score values (11/10/8/5/M), totals, averages, serialization |
| `js/courses.js` | Course CRUD, image upload/compression (400px max, 65% JPEG) |
| `js/gps.js` | Geolocation watch, Haversine distance, route serialization |
| `js/friends.js` | Local friends list, admin status check via Firestore |

## Data Storage

- **Firestore** (`kurser`, `brugere`, `administratorer`): courses, user profiles, admin list
- **Firebase Storage**: course target images
- **localStorage** (`archery_v5`): friends and rounds — local only, not synced to Firestore

## Key Data Structures

**Scores** are stored as 2D arrays per shooter: `scores[targetIndex] = [arrow1, arrow2]` where values are `11 | 10 | 8 | 5 | 'M' | null`. Serialized to Firestore as strings: `"11,10;8,5;M,M"`.

**Round traversal:** `buildOrder(startIdx, numTargets)` creates a circular path from the chosen start target. The `traversalOrder` array holds target indices; `traversalPos` tracks current position.

**Firestore fields use bilingual naming** (English + Danish, e.g. `name`/`yam`, `location`/`beliggenhed`, `targets`/`mål`) — legacy from app migration. Always write both when creating/updating documents.

## Non-Obvious Behaviors

- **Active rounds auto-resume** on page reload from localStorage (max 24h lifecycle).
- **Service worker has no fetch handler** — intentionally no offline caching to avoid stale data.
- **Wake Lock** is requested during GPS tracking to keep screen on.
- **Admin check** is a simple `doc.exists()` on `administratorer/{uid}` — no role claims in Auth token.
- Firebase config is hardcoded in both `main.js` and `firebase-instance.js` — no `.env` file.
- Firestore uses persistent local cache with multi-tab sync manager.

## Firestore Collections

| Collection | Notes |
|-----------|-------|
| `kurser` | Courses — readable by all authenticated users, writable by admins only |
| `brugere` | User profiles — each user reads/writes their own doc |
| `administratorer` | Admin emails — checked on login to set `state.isAdmin` |

## fix_*.mjs Scripts

The repo root contains one-off Firestore migration/fix scripts (`fix_rounds_firestore.mjs`, `fix_analyse2.mjs`, etc.). These are standalone Node scripts for data migrations — not part of the app build.
