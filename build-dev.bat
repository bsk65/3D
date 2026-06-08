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

REM Kopier build til 3D-dev mappe
if not exist "%PROJ%\3D-dev" mkdir "%PROJ%\3D-dev"
xcopy "%PROJ%\dist-dev\*" "%PROJ%\3D-dev\" /E /Y /Q

REM Brug git worktree saa vi ikke behover at skifte branch og miste dette script
set TMPWT=%PROJ%\..\3D-main-worktree
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
xcopy "%PROJ%\3D-dev\*" "%TMPWT%\3D-dev\" /E /Y /Q

cd /d "%TMPWT%"
git add 3D-dev/
git diff --cached --quiet
if errorlevel 1 (
  git commit -m "Test-build opdatering [3D-dev]"
  git push origin main
  echo.
  echo === Faerdig! Test-appen er live om 1-2 min ===
  echo === URL: https://bsk65.github.io/3D-dev/   ===
  echo.
) else (
  echo === Ingen aendringer at pushe ===
)

REM Ryd worktree op og vend tilbage
cd /d "%PROJ%"
git worktree remove "%TMPWT%" --force >nul 2>&1

pause
