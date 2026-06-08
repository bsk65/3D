@echo off
echo === 3D Bueskydning TEST-BUILD ===
echo Bygger til /3D-dev/ pa main (IKKE produktion)

REM Brug altid index.src.html som kilde
copy index.src.html index.html /Y >nul 2>&1

REM Byg med dev-konfiguration
call npx vite build --config vite.config.dev.js
if errorlevel 1 (
  echo FEJL: Build fejlede!
  pause
  exit /b 1
)

REM Opret 3D-dev mappe
if not exist "3D-dev" mkdir "3D-dev"
xcopy dist-dev\* 3D-dev\ /E /Y /Q

REM Skift til main, kopier testmappen derover, push, vend tilbage
git stash
if errorlevel 1 (
  echo ADVARSEL: git stash fejlede - fortsaetter alligevel
)

git checkout main
if errorlevel 1 (
  echo FEJL: Kunne ikke skifte til main!
  git stash pop
  pause
  exit /b 1
)

REM Kopieer 3D-dev mappen fra dev-branchen
git checkout dev -- 3D-dev/
git add 3D-dev/
git diff --cached --quiet
if errorlevel 1 (
  git commit -m "Test-build opdatering [3D-dev]"
  git push origin main
  echo === Faerdig - test-appen er live om 1-2 min ===
  echo === URL: https://bsk65.github.io/3D-dev/ ===
) else (
  echo === Ingen aendringer at pushe ===
)

REM Tilbage til dev
git checkout dev
git stash pop >nul 2>&1

pause
