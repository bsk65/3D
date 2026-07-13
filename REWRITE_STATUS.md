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

## Færdige moduler (main.js: 1986 → ~1178 linjer)

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
| `js/courses.js` | Bane-CRUD (`mapCourseDoc`, `fetchCourses`, `renderCoursesList`), banedetalje (`openCourseDetail`, `initCourseMap`, `renderVisits`, `renderCourseEditForm`), mål-CRUD, godkendte-brugere (approved-users chips), opret/slet bane (`doCreateCourse`/`doDeleteCourse`), `updateTargetInFirestore`, `compressImage`, `removeVisitFromCourse`. Ét samlet modul (ikke splittet i courses+course-edit — se note nedenfor). | — |
| `js/admin.js` | `renderAdminSection` (kaldes af switchTab('friends')), `renderAdminsList`, `renderUsersList`, `filterUsers`, `doAddAdmin`, `doRemoveAdmin`. Admin-check (`doc.exists()` på `admins/{uid}`) forbliver i main.js' auth-state-lytter. | — |

Ingen adfærd er ændret; hvert skridt er committet separat med grønne tests+build.

### Note om courses.js: hvorfor ikke splittet i to filer
REWRITE_STATUS foreslog oprindeligt at splitte i `courses.js` + `course-edit.js`.
Det blev fravalgt: `openCourseDetail` (liste→detalje) kalder `renderCourseEditForm`
(redigering), og redigerings-handlere (`saveCourseEdit`/`doCreateCourse`/
`doDeleteCourse`) kalder tilbage til `renderCoursesList` — en ægte cirkulær
afhængighed mellem de to ansvarsområder. Fremfor at indføre cirkulære ES-imports
(risikabelt i utestet UI-kode) blev alt samlet i ét `js/courses.js`.

### Nyt bro-mønster: `window.populateCourseDropdown`
`populateCourseDropdown` (runde-opsætningens bane-dropdown) bor fortsat i
`main.js`, men `courses.js` skal kunne kalde den efter `fetchCourses`/
`doCreateCourse`/`doDeleteCourse`. Løst ved at main.js sætter
`window.populateCourseDropdown = populateCourseDropdown` (samme mønster som
`friends.js` kalder `window.addParticipant`) — undgår cirkulær import mellem
main.js og courses.js.

## Mangler (rest i main.js, ~1178 linjer) — foreslået rækkefølge

Alt herunder er DOM/Firebase-tungt UI-lim **uden testdækning** → udtræk
forsigtigt, ét skridt ad gangen, byg+test imellem.

1. **`js/results.js`** — resultatvisning: `buildDistribution`, `renderResults`,
   `buildResultsTable`, `buildSummaryCards`, `buildActualResults`,
   `showRoundPopup`, `sendResults`, `renderRoundsList`. Bemærk: `renderRoundsList`
   kalder `removeVisitFromCourse` (nu i `js/courses.js`) — importér normalt.
   `showRoundPopup`/`renderVisits`-kæden bruger også `window.showVisitResults`
   (stadig i main.js, tæt koblet til runde/resultat-visning — flyt evt. med
   hertil eller lad blive, vurdér ved udtræk) og `window.showRouteOnMap`
   (bruger `state.courseMap` fra courses.js, kaldes via `window.switchSubtab`).
2. **`js/analyse.js`** — `renderAnalyse` (stor), `buildCompareHtml`,
   `initGraphPinch`, `analyseRound`. Bruger `calcAnalyseStats` fra stats.js.
3. **`js/round.js`** (aktiv runde) — `startRound`, `updateTopBar`,
   `renderShooters`, `setScore`, nav (`prevTarget`/`nextTarget`/`skipToTarget`/
   `doSkip`), `finishRound`, `abortRound`, `saveActiveRound`, `tryResumeRound`,
   panel-skift, `curTargetIdx`, `getParticipants`, `addParticipant`,
   `updateGpsBar`, `resetScroll`, samt `openEditTarget`/`saveEditTarget`/
   `editGps` (target-redigering under aktiv runde — bruger
   `updateTargetInFirestore` fra courses.js, allerede importeret normalt).
   Kernen — flest afhængigheder; tag til sidst.
4. **`js/app-init.js`** — `DOMContentLoaded`-blokken: auth-state-lytter (kalder
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
