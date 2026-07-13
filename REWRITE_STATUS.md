# REWRITE_STATUS — modulær omprogrammering

Status for opsplitningen af `js/main.js` til ES-moduler på branchen
`rewrite-modular`. Opdateres løbende, så en fremtidig session kan samle tråden op.

## Metode (vigtig — følg denne)

- Facit er testsuiten. **De 40 oprindelige tests i `tests/logic.test.js` må
  ALDRIG ændres** og skal blive ved med at bestå. `tests/modules.test.js`
  (17 ekstra tests) supplerer og må gerne udvides.
- `tests/logic.test.js` importerer stadig fra `../js/main.js`. Derfor
  **re-eksporterer main.js** alle test-dækkede funktioner (`export { ... }`)
  selvom de nu bor i moduler.
- Rene moduler (scoring/gps/stats) importerer IKKE Firebase → deres tests
  behøver ingen mock. UI-moduler der importerer `firebase-init.js` kræver
  `import './firebase-mock.js'` i testen.
- **Mønster for UI-moduler:** funktioner der er HTML `onclick`-handlere sætter
  sig selv på `window.*` og importeres som side-effekt (`import './auth.js'`).
  Funktioner som main.js selv kalder (fx render-funktioner) `export`-eres og
  importeres normalt.
- Efter HVER ændring: `npm test` skal vise grønt, og en from-source-build skal
  lykkes. `npm run build` alene virker IKKE (den committede `index.html` er
  produktions-output der peger på et hashet asset). Byg fra kilde med:
  ```sh
  cat > vite.check.mjs <<'CFG'
  import { defineConfig } from 'vite'
  export default defineConfig({ base:'/3D/', build:{ outDir:'dist-check', emptyOutDir:true, rollupOptions:{ input:'index.src.html' } } })
  CFG
  npx vite build --config vite.check.mjs && rm -rf vite.check.mjs dist-check
  ```
  (Der ligger et hjælpe-script `check-build.sh` i repo-roden — gitignoreret.)
- **MÅ IKKE køres:** `build.bat` / `build-dev.bat` (deployer til produktion/test).
- Bevar bilingval feltnavngivning ved skrivning til Firestore (name/yam,
  location/beliggenhed, email/e-mail, private/privat, hidden/skjult osv.).

## Færdige moduler (main.js: 1986 → ~1635 linjer)

| Modul | Indhold | Test |
|-------|---------|------|
| `js/firebase-init.js` | firebaseConfig + init af app/auth/db/storage; re-eksporterer SDK-funktioner. Alle moduler henter Firebase herfra. | — |
| `js/state.js` | Delt `state`-singleton. | — |
| `js/utils.js` | `esc`, `showToast`, `showConfirm`. | esc |
| `js/storage.js` | `lsLoad`/`lsSave` (localStorage-cache, v4-migration). | — |
| `js/scoring.js` | Al ren scoringslogik + `buildOrder`, `SCORE_VALUES`. | ✔ mange |
| `js/gps.js` | `parseRoute`, `haversine`, format-hjælpere, `findNearestTarget` + sporing (`startTracking`/`stopTracking`/`getCurrentPosition`/`toggleGpsPause`). | ✔ |
| `js/stats.js` | `calcAnalyseStats`. | ✔ |
| `js/auth.js` | Login/opret/nulstil/logud + fejlbeskeder (self-registrerende window-handlere). | — |
| `js/friends.js` | Venne-UI: liste, søgning, tilføj/rediger/slet. | — |

Ingen adfærd er ændret; hvert skridt er committet separat med grønne tests+build.

## Mangler (rest i main.js, ~1635 linjer) — foreslået rækkefølge

Alt herunder er DOM/Firebase-tungt UI-lim **uden testdækning** → udtræk
forsigtigt, ét skridt ad gangen, byg+test imellem.

1. **`js/courses.js`** — banelogik: `mapCourseDoc`, `fetchCourses`,
   `renderCoursesList`, `openCourseDetail`, `initCourseMap`, `renderVisits`,
   `renderCourseEditForm`, `saveCourseEdit`, target-CRUD (`updateTargetField`,
   `addTargetToCurrentCourse`, `deleteTargetFromCourse`, `setTargetGps`,
   `uploadTargetPhoto`, `saveAllTargets`), `switchSubtab`, `toggleMyPos`,
   `doDeleteCourse`, approved-users (`renderApprovedChips`,
   `addApprovedEmailToDraft`/`Manual`, `removeApprovedEmail`,
   `searchApprovedUsers`), `openCreateCourseModal`, `doCreateCourse`,
   `updateTargetInFirestore`, `compressImage`, `removeVisitFromCourse`.
   Bruger Leaflet via `window.L`. Størst blok — split evt. i courses + course-edit.
2. **`js/admin.js`** — `renderAdminSection`, `renderAdminsList`, `renderUsersList`,
   `filterUsers`, `doAddAdmin`, `doRemoveAdmin`, `_bowLabels`, `_allUsers`.
   Bemærk: admin-check er `doc.exists()` på `admins/{uid}` (sat i main's
   auth-state-lytter) — bevar.
3. **`js/results.js`** — resultatvisning: `buildDistribution`, `renderResults`,
   `buildResultsTable`, `buildSummaryCards`, `buildActualResults`,
   `showRoundPopup`, `sendResults`, `renderRoundsList`.
4. **`js/analyse.js`** — `renderAnalyse` (stor), `buildCompareHtml`,
   `initGraphPinch`, `analyseRound`. Bruger `calcAnalyseStats` fra stats.js.
5. **`js/round.js`** (aktiv runde) — `startRound`, `updateTopBar`,
   `renderShooters`, `setScore`, nav (`prevTarget`/`nextTarget`/`skipToTarget`/
   `doSkip`), `finishRound`, `abortRound`, `saveActiveRound`, `tryResumeRound`,
   panel-skift, `curTargetIdx`, `getParticipants`, `addParticipant`,
   `updateGpsBar`, `resetScroll`. Kernen — flest afhængigheder; tag til sidst.
6. **`js/app-init.js`** — `DOMContentLoaded`-blokken: auth-state-lytter (kalder
   `onLogin`/`onLogout`), PWA-install-prompt, event-bindinger, wakeLock-hjælpere.

### Ikke-oplagte ting der SKAL bevares
- Aktiv runde auto-genoptages ved reload (`users/{uid}/aktiv/runde`, max 24t) —
  `tryResumeRound` + `saveActiveRound`.
- Service worker har bevidst ingen fetch-handler (ingen offline-cache).
- Wake Lock tages under GPS-sporing.
- `finishRound` skriver runde til egen konto + medskytteres konti + anonym
  `bane_stats/{courseId}/runder/{roundId}` (kun hvis kon+bueklasse er sat).
- Kurser hentes friskt fra Firestore ved login med synligheds-filter
  (skjulte baner kun for `approvedUsers` der matcher brugerens email).

## CSS (inline styles → klasser) — ikke påbegyndt
Meget UI genererer inline `style="..."` i template-strenge (results,
analyse, course-edit). Udtræk til klasser i `css/style.css` **efter** at den
relevante render-funktion er flyttet til sit modul, og verificér visuelt at
udtrykket er uændret. Lav prioritet ift. modul-opsplitningen.

## Hurtig-tjek før commit
```sh
npm test           # 57 tests skal være grønne (40 + 17)
sh check-build.sh  # from-source build skal lykkes
```
