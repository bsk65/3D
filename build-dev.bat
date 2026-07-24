@echo off
setlocal
echo === 3D Bueskydning TEST-BUILD ===
echo Bygger til /3D-dev/ (IKKE produktion)

REM Gem stien til projektmappen
set PROJ=%~dp0
set PROJ=%PROJ:~0,-1%

REM Brug altid index.src.html som kilde
copy "%PROJ%\index.src.html" "%PROJ%\index.html" /Y >nul 2>&1

REM Byg med dev-konfiguration
call npx vite build --config vite.config.dev.js
if errorlevel 1 (
  echo FEJL: Build fejlede!
  pause
  exit /b 1
)

REM Kopier build til 3D-dev mappe (ryd assets foerst saa gamle filer ikke akkumulerer)
if not exist "%PROJ%\3D-dev" mkdir "%PROJ%\3D-dev"
if exist "%PROJ%\3D-dev\assets" rmdir /S /Q "%PROJ%\3D-dev\assets"
xcopy "%PROJ%\dist-dev\*" "%PROJ%\3D-dev\" /E /Y /Q

REM Brug git worktree saa vi ikke behover at skifte branch og miste dette script.
REM Placeres i %TEMP% (IKKE ved siden af projektet) fordi projektmappen
REM ligger under OneDrive-synkronisering - se build.bat for forklaring.
set TMPWT=%TEMP%\3D-main-worktree
if exist "%TMPWT%" (
  git worktree remove "%TMPWT%" --force >nul 2>&1
)

git worktree add "%TMPWT%" main
if errorlevel 1 (
  echo FEJL: Kunne ikke oprette worktree for main!
  pause
  exit /b 1
)

REM Kopier 3D-dev ind i worktree og push til main
if not exist "%TMPWT%\3D-dev" mkdir "%TMPWT%\3D-dev"

REM Ryd gamle assets i worktree FOERST (samme fix som build.bat fik efter
REM produktions-bugget) - ellers kan verify-build.ps1-tjekket herunder
REM fejlagtigt "bestaa" ved at matche en gammel, efterladt fil, selvom
REM index.html-kopieringen fejlede/blev revertet af OneDrive.
del "%TMPWT%\3D-dev\assets\index-*.js" >nul 2>&1
del "%TMPWT%\3D-dev\assets\index-*.css" >nul 2>&1
del "%TMPWT%\3D-dev\assets\manifest-*.json" >nul 2>&1

xcopy "%PROJ%\3D-dev\assets\*" "%TMPWT%\3D-dev\assets\" /E /Y /Q
if exist "%PROJ%\3D-dev\icons" xcopy "%PROJ%\3D-dev\icons\*" "%TMPWT%\3D-dev\icons\" /E /Y /Q

REM index.html kopieres for sig med "copy" (ikke xcopy) og et eksplicit
REM fejltjek lige efter - samme moenster som build.bat, da det er praecis
REM denne ene, gentagne fil OneDrive-synkroniseringen kan naa at forstyrre.
copy "%PROJ%\3D-dev\index.html" "%TMPWT%\3D-dev\index.html" /Y
if errorlevel 1 (
  echo FEJL: Kunne ikke kopiere 3D-dev/index.html!
  pause
  exit /b 1
)

REM Sikkerhedstjek: bekraeft at 3D-dev/index.html rent faktisk peger paa en
REM JS-fil der findes i 3D-dev/assets/, foer vi committer noget som helst.
powershell -NoProfile -File "%PROJ%\verify-build.ps1" -Html "%TMPWT%\3D-dev\index.html" -AssetsDir "%TMPWT%\3D-dev\assets"
if errorlevel 1 (
  echo FEJL: 3D-dev/index.html og assets/ er ikke i sync - build-dev.bat afbrudt.
  pause
  exit /b 1
)

cd /d "%TMPWT%"
git add 3D-dev/
git diff --cached --quiet
if errorlevel 1 (
  git commit -m "Test-build opdatering [3D-dev]"
  git push origin main
  echo.
  echo === Faerdig! Test-appen er live om 1-2 min ===
  echo === URL: https://bsk65.github.io/3D/3D-dev/   ===
  echo.
) else (
  echo === Ingen aendringer at pushe ===
)

REM Ryd worktree op og vend tilbage
cd /d "%PROJ%"
git worktree remove "%TMPWT%" --force >nul 2>&1

pause
