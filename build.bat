@echo off
setlocal
echo === 3D Bueskydning PROD-BUILD ===
echo Bygger til produktion (main-branch)

set PROJ=%~dp0
set PROJ=%PROJ:~0,-1%

REM Brug altid index.src.html som kilde til Vite
copy "%PROJ%\index.src.html" "%PROJ%\index.html" /Y >nul 2>&1

REM Byg med Vite
call npm run build
if errorlevel 1 (
  echo FEJL: Build fejlede!
  pause
  exit /b 1
)

REM Brug git worktree saa vi ikke behover at skifte branch.
REM Placeres i %TEMP% (IKKE ved siden af projektet) fordi projektmappen
REM ligger under OneDrive-synkronisering: naar "git worktree add" skriver
REM tusindvis af filer paa en gang, kan OneDrive naa at gribe ind i den
REM efterfoelgende index.html-kopiering og stille og roligt revertere den
REM til en gammel version foer "git commit" naar at se den - det gav en
REM produktions-bug hvor index.html pegede paa en slettet JS-fil.
set TMPWT=%TEMP%\3D-prod-worktree
if exist "%TMPWT%" (
  git worktree remove "%TMPWT%" --force >nul 2>&1
)

git worktree add "%TMPWT%" main
if errorlevel 1 (
  echo FEJL: Kunne ikke oprette worktree for main!
  pause
  exit /b 1
)

REM Ryd gamle assets i worktree
del "%TMPWT%\assets\index-*.js" >nul 2>&1
del "%TMPWT%\assets\index-*.css" >nul 2>&1
del "%TMPWT%\assets\manifest-*.json" >nul 2>&1

REM Kopier byggede filer til worktree
xcopy "%PROJ%\dist\assets\*" "%TMPWT%\assets\" /E /Y /Q
if exist "%PROJ%\dist\icons" xcopy "%PROJ%\dist\icons\*" "%TMPWT%\icons\" /E /Y /Q
copy "%PROJ%\dist\index.html" "%TMPWT%\index.html" /Y
if errorlevel 1 (
  echo FEJL: Kunne ikke kopiere index.html!
  pause
  exit /b 1
)

REM Sikkerhedstjek: bekraeft at index.html rent faktisk peger paa en
REM JS-fil der findes i assets/, foer vi committer noget som helst.
REM Fanger den "gammel hash overlevede kopiering"-fejl fra en gang for alle.
powershell -NoProfile -File "%PROJ%\verify-build.ps1" -Html "%TMPWT%\index.html" -AssetsDir "%TMPWT%\assets"
if errorlevel 1 (
  echo FEJL: index.html og assets/ er ikke i sync - build.bat afbrudt for at undgaa en 404-produktion.
  pause
  exit /b 1
)

REM Commit og push fra main worktree
cd /d "%TMPWT%"
git add index.html assets/ css/style.css icons/
git diff --cached --quiet
if errorlevel 1 (
  git commit -m "Prod-build opdatering"
  git push origin main
  echo.
  echo === Faerdig! Appen er live om 1-2 min ===
  echo === URL: https://bsk65.github.io/3D/ ===
  echo.
) else (
  echo === Ingen aendringer at pushe ===
)

REM Ryd worktree op og vend tilbage
cd /d "%PROJ%"
git worktree remove "%TMPWT%" --force >nul 2>&1

pause
