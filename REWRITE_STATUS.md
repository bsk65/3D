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

## Færdige moduler (main.js: 1986 → ~35 linjer, ren facade)

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
| `js/results.js` | Resultatvisning: `buildDistribution`, `renderResults`, `buildResultsTable`, `buildSummaryCards`, `buildActualResults`, `renderRoundsList`, `showRoundPopup`, `sendResults`. `renderResults`/`renderRoundsList`/`showRoundPopup` eksporteres normalt (kaldes af main.js' `finishRound`/`onLogin`/`tryOpenPendingRound`/`showVisitResults`). `renderRoundsList` kalder `window.analyseRound` (bro til analyse.js). | — |
| `js/analyse.js` | Analyse-fanen: `initGraphPinch`, `analyseRound` (self-registrerer `window.analyseRound`), `buildCompareHtml`, `window.renderAnalyse`. Importeret som ren side-effekt (`import './analyse.js'`) i main.js — intet herfra kaldes direkte af main.js (kun via `window.renderAnalyse`/`window.switchTab`). | — |
| `js/round.js` | Aktiv runde — kernen: `startRound`, `updateTopBar`, `renderShooters`, `setScore`, nav (`prevTarget`/`nextTarget`/`skipToTarget`/`doSkip`), `finishRound`, `abortRound`, `saveActiveRound`, `tryResumeRound`, `tryOpenPendingRound`, panelskift, `curTargetIdx`, `getParticipants`, `addParticipant`, `updateGpsBar`, `resetScroll`, wake lock (`acquireWakeLock`/`releaseWakeLock`), samt `showVisitResults`/`showRouteOnMap` og target-redigering under aktiv runde (`openEditTarget`/`saveEditTarget`/`editGps`). `tryOpenPendingRound`/`tryResumeRound`/`curTargetIdx`/`updateTopBar`/`releaseWakeLock` eksporteres normalt (kaldes af app-init.js' DOMContentLoaded/onLogin/onLogout). Importerer fra courses.js (`updateTargetInFirestore`) og results.js (`renderRoundsList`/`renderResults`/`showRoundPopup`) — ingen cirkulær import (round.js er "top" af afhængighedsgrafen sammen med app-init.js). | — |
| `js/app-init.js` | Opstarts-/auth-flow-lim: `DOMContentLoaded`, `onLogin`/`onLogout`, `autoSelectNearestCourse`, `populateCourseDropdown` (+ `window.populateCourseDropdown`-bro), `updateStartTargetDropdown`, `import './auth.js'`, samt sidste små window-handlere (`saveProfilModal`, `toggleLang`, `switchTab`, `showQR`, `openGuestModal`/`addGuest`, `toggleGpsPause`, `parseRoute`). Importeres som ren side-effekt fra main.js. | — |

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

## Modulopsplitning: FÆRDIG

`js/round.js` var oprindeligt sidste/riskiest punkt, men gik problemfrit.
`window.showVisitResults`/`window.showRouteOnMap` flyttede med til round.js
(afhænger af `showRoundPopup`/`state.courseMap`, ikke reelt "aktiv
runde"-logik, men uden et bedre naturligt hjem — se kommentar i round.js).

Det sidste punkt — om resten af main.js skulle have sit eget
`app-init.js`-modul — er nu afgjort: **udtrukket** (commit
"Udtræk opstarts-/auth-flow-lim til js/app-init.js"). `js/app-init.js`
indeholder nu:

- `DOMContentLoaded`-blokken: warn-slider-init, auth-state-lytter (kalder
  `onLogin`/`onLogout`), PWA-install-prompt, target-count/photo-input
  event-bindinger, modal-baggrunds-klik.
- `onLogin`/`onLogout`, `autoSelectNearestCourse`, `populateCourseDropdown`
  (inkl. `window.populateCourseDropdown`-broen til courses.js),
  `updateStartTargetDropdown`.
- Små window-handlere: `saveProfilModal`, `toggleLang`, `switchTab`, `showQR`,
  `openGuestModal`/`addGuest`, samt `window.toggleGpsPause`/`window.parseRoute`
  (rene onclick-bindinger, flyttet fra main.js for at gøre main.js til en ren
  facade).
- `import './auth.js'` (side-effekt) flyttede med, da den hører naturligt
  sammen med `onAuthStateChanged`-lytteren.

`js/main.js` er nu **kun** (~35 linjer): `import './app-init.js'`
(side-effekt) + re-eksporterne til `tests/logic.test.js`
(esc/scoring/gps/stats). I samme ombæring blev et par reelt ubrugte imports
i main.js fjernet (`SCORE_VALUES`, `deleteObject`, `renderResults`,
`showRoundPopup` — levn fra tidligere udtræk, aldrig brugt i main.js selv).

Verificeret: `npm test` grønt (57/57) og `sh check-build.sh` lykkes efter
udtrækket.

### Ikke-oplagte ting der SKAL bevares
- Aktiv runde auto-genoptages ved reload (`users/{uid}/aktiv/runde`, max 24t) —
  `tryResumeRound` + `saveActiveRound`.
- Service worker har bevidst ingen fetch-handler (ingen offline-cache).
- Wake Lock tages under GPS-sporing.
- `finishRound` skriver runde til egen konto + medskytteres konti + anonym
  `bane_stats/{courseId}/runder/{roundId}` (kun hvis kon+bueklasse er sat).
- Kurser hentes friskt fra Firestore ved login med synligheds-filter
  (skjulte baner kun for `approvedUsers` der matcher brugerens email).

## CSS (inline styles → klasser)

### Status: FÆRDIG — både Del 1 (JS-genereret HTML) og Del 2 (index.src.html) er udtrukket

### Del 1: admin.js, friends.js, round.js, courses.js, results.js og analyse.js
Rækkefølgen blev valgt efter antal `style="..."`-forekomster (mindst risiko
først): `admin.js` (7) → `friends.js` (1) → `round.js` (6) → `courses.js`
(35) → `results.js` (49) → `analyse.js` (119, størst og sidst). Metode for
hvert modul:
1. Læs hele filen, notér hvert `style="..."`-attribut og om værdien er
   **statisk** (samme hver gang) eller **dynamisk** (indeholder `${...}`
   beregnet fra JS-variable, fx en farve der afhænger af et sammenlignings-
   resultat).
2. Statiske blokke: tilføj en beskrivende klasse i `css/style.css` med
   **nøjagtig** de samme egenskaber/værdier (ingen konsolidering eller
   "forbedring"). Klassenavne er kontekst-specifikke (fx `.cmp-pil-lbl`,
   `.stat-val-28-good`) og følger den eksisterende kebab-case-stil i filen.
   Hvor to steder i *samme* funktion/sektion har et **byte-for-byte
   identisk** style-attribut, genbruges én klasse (fx `.card-mb16` bruges
   >15 steder på tværs af results.js/analyse.js — det er ikke
   "konsolidering af forskellige stilarter", bare navngivning af en allerede
   identisk gentagelse).
3. Dynamiske blokke (farve beregnet i JS) **er bevidst efterladt inline** —
   se liste nedenfor.
4. Efter hvert modul: `npm test` (57/57 grønt) + `sh check-build.sh`, derefter
   separat commit.

Der er **ingen visuel diff-verifikation** i dette miljø (ingen browser).
Alle udtræk er derfor rene mekaniske 1:1-oversættelser af egenskab→værdi;
intet er omdesignet. Vær opmærksom: under results.js-udtrækket blev en reel
fejl fanget og rettet undervejs (to "dist-row"-blokke der lignede hinanden,
men hvor kun den ene havde `font-weight:700` — endte med to klasser
`.dist-row-total`/`.dist-row-border` i stedet for én). Hvis dette arbejde
fortsættes, dobbelttjek altid at "identiske"-udseende style-blokke rent
faktisk er identiske tegn-for-tegn, før de får samme klasse.

### Bevidst efterladt inline (dynamisk værdi, ikke mekanisk udtrækbar)
- `js/analyse.js:72` og `:80` — `buildCompareHtml`'s `pilRow`/`targetRow`
  hjælpefunktioner tager en `col`-parameter (farve) som argument; farven er
  forskellig alt efter hvilken skytte der vises (`var(--acc)` vs `#f0c030`).
- `js/analyse.js:125` — lagkage-sammenligningens zone-farve `zColors[z]`
  (opslag i et objekt, varierer pr. zone).
- `js/analyse.js:396` — "DIFFERENCE"-tallets farve `diffColor`, beregnet ud
  fra om brugeren er bedre/dårligere end andre skytter (grøn/rød/grå).
- `js/courses.js:132` — `#edit-capproved-wrap`'s
  `style="display:${course.hidden?'':'none'}"`. Denne er dobbelt dynamisk:
  værdien afhænger af `course.hidden` ved render, OG elementet får sin
  `.style.display` sat direkte igen af en `onchange`-handler på
  `#edit-cvisibility` (`this.value==='hidden'?'':'none'`) — en
  klassebaseret omskrivning ville kræve at ændre selve toggle-logikken, ikke
  bare flytte statisk CSS, og er derfor udenfor "ren udtræk"-scope.

Alle moduler med `style="..."`-forekomster ved sessionens start er nu
gennemgået. `js/gps.js`, `js/auth.js`, `js/main.js`, `js/app-init.js`,
`js/state.js`, `js/storage.js`, `js/scoring.js`, `js/stats.js`,
`js/firebase-init.js` havde 0 inline styles fra start (ingen HTML-rendering
i disse). Kør `grep -o 'style="' js/*.js | wc -l` pr. fil for at
genbekræfte status ved en fremtidig session — kun de 5 dynamiske blokke
listet ovenfor bør give hits.

### Del 2: `index.src.html` (statisk markup) — FÆRDIG
Alle 77 `style="..."`-forekomster i den statiske HTML (`index.src.html`
selv — modaler, paneler, faner, PWA-banner osv., til forskel fra Del 1's
JS-genererede HTML) er nu udtrukket til klasser i `css/style.css`. Samme
metode som Del 1: ren mekanisk 1:1-oversættelse, ingen redesign, genbrug af
byte-for-byte identiske blokke (både nye og allerede eksisterende klasser
fra Del 1, fx `.custom-count-field`, `.edit-approved-chips-wrap`,
`.edit-approved-add-btn`).

Rækkefølge (fulgte filens naturlige sektioner, committet separat efter hver
med grønne tests+build): auth-skærm → setup-panel (scoring) → active-panel +
results-panel → analyse-fanen → baner-fanen → venner/admin-fanen →
resterende modaler (profil/QR/fullscreen/confirm/PWA-banner).

**Dynamisk/JS-manipuleret markup i index.src.html — vurderet, IKKE dobbelt-
dynamisk, derfor trygt udtrukket (til forskel fra `#edit-capproved-wrap` i
courses.js, som forbliver inline):**
- `#pbar` — `round.js` sætter kun `.style.width` (fremgangs-bjælke). Statiske
  egenskaber (height/background/border-radius/transition) + initial
  `width:0%` ligger nu i `.pbar-fill`; JS's inline `.style.width=...` vinder
  altid over klassen ved næste opdatering (ingen `!important` i konflikt).
- `#target-count-custom` / `#new-course-targets-custom` — kun ét
  toggle-punkt hver (hhv. `app-init.js`'s changelistener og en inline
  `onchange` i samme HTML), ikke to uafhængige datakilder som
  `edit-capproved-wrap`. Delt klasse `.custom-count-field`.
- `#new-course-approved-wrap` — kun `display` sat direkte (inline `onchange`
  + to reset-steder i `courses.js`, alle til samme værdi-logik). Klassen
  `.new-course-approved-wrap-style` har bevidst IKKE `!important`, så JS's
  `.style.display=...` fortsat vinder normalt over cascade.
- `#analyse-runde-wrap` / `-wrap-2` / `#analyse-runde-lbl` — `analyse.js`
  sætter kun `.style.display` ud fra filterValget, initial værdi i markup
  var allerede `display:none` (samme som første render). Klasser uden
  `!important`.
- `#pwa-banner` — `app-init.js` sætter kun `.style.display='flex'/'none'`.
  Klasse `.pwa-banner-style` uden `!important`.
- `#active-panel` — style-attributten var kombineret med `class="hidden"`;
  toggles sker udelukkende via `classList.add/remove('hidden')` i
  `round.js` (ikke `.style.display` direkte), så `.hidden`s `!important`
  fortsat styrer synlighed uændret. Ny klasse `.active-panel-flex` holder de
  statiske flex-egenskaber.
- `#fs-img` — det statiske `<style>#fs-img{transform-origin:center;
  transition:transform 0.1s;}</style>`-blok i `<head>` er flyttet ind i den
  nye `.fs-img-style`-klasse (sammen med de tidligere inline egenskaber på
  selve `<img>`-tagget). Pinch-zoom-scriptet i bunden af `index.src.html`
  sætter fortsat kun `img.style.transform` direkte — uændret adfærd.

**Reelt overflødig inline style fjernet (ikke en design-ændring):** `.trow`
på kort-fanens "Vis min position"-række havde `style="padding:8px 0;"` —
byte-identisk med hvad `.trow`-klassen allerede sætter. Fjernet uden
erstatning (var et no-op).

**Verifikation:** `grep -c 'style=' index.src.html` → 0. `npm test` grønt
(57/57) og `sh check-build.sh` grønt efter hvert commit. Ingen browser i
miljøet — sidste tjek var en engangs `vite.preview.mjs`-build (ryddet op
igen efter brug, ikke committet) hvor det byggede `dist-preview/`-output
blev stikprøvekontrolleret for at bekræfte 0 tilbageværende
`style="..."`-attributter og at de nye klassenavne rent faktisk optræder i
den bundlede CSS.

**Intet tilbage inline i `index.src.html`** — alle 77 oprindelige
forekomster er væk. De 5 bevidst-inline dynamiske blokke fra Del 1
(`js/analyse.js` x3, `js/courses.js`'s `edit-capproved-wrap`) er JS-genereret
markup og ligger uden for dette dokuments "index.src.html"-scope; de er
fortsat korrekt efterladt inline af de grunde, der er beskrevet ovenfor.

## Samlet status for hele omprogrammerings-indsatsen

| Del | Status |
|-----|--------|
| Modulopsplitning (`js/main.js` 1986 linjer → 14 moduler + ~35-linjers facade) | ✅ Færdig, testet (57/57), **menneske-verificeret** via lokal preview-build |
| CSS-oprydning Del 1 (inline styles i JS-genererede render-funktioner) | ✅ Færdig (admin/friends/round/courses/results/analyse.js), testet, **menneske-verificeret** |
| CSS-oprydning Del 2 (inline styles i `index.src.html`s statiske markup) | ✅ Færdig denne session — testet (57/57) + build grønt efter hvert skridt. **Ikke menneske-verificeret endnu** (ingen browser i denne session, kun mekanisk/strukturel sanity-check af build-output) |

**Hvad er IKKE lavet / bør overvejes før merge til `dev`:**
- Menneskelig visuel gennemgang af Del 2's ændringer (samme niveau som Del 1
  og modulopsplitningen fik). Ændringerne er rent mekaniske 1:1-udtræk, men
  ingen browser har renderet dem i denne session.
- Ingen nye automatiserede tests er tilføjet for CSS/markup (giver ikke
  mening for ren CSS-flytning — de 57 eksisterende tests dækker JS-logik,
  ikke visuel gengivelse).
- Selve mergen til `dev` (og senere `main`) er bevidst IKKE udført af denne
  session — det er en beslutning ejeren af projektet skal tage, jf.
  opgavebeskrivelsen.

Konklusion: branchen `rewrite-modular` er, så vidt en agent kan afgøre uden
browser, klar til menneskelig visuel test (fx via `build-dev.bat` →
`https://bsk65.github.io/3D-dev/`) og herefter evt. merge til `dev`. Ingen
kendte åbne tråde i selve omprogrammeringen ud over den manglende visuelle
verifikation af denne sessions ændringer.

## Hurtig-tjek før commit
```sh
npm test           # 57 tests skal være grønne (40 + 17)
sh check-build.sh  # from-source build skal lykkes
```
