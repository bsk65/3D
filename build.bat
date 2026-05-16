@echo off
echo === 3D Bueskydning Build ===

REM Brug altid index.src.html som kilde til Vite
copy index.src.html index.html /Y >nul 2>&1

REM Byg med Vite
call npm run build
if errorlevel 1 (
  echo FEJL: Build fejlede!
  pause
  exit /b 1
)

REM Ryd gamle assets (undgaar gamle JS/CSS filer)
del assets\index-*.js >nul 2>&1
del assets\index-*.css >nul 2>&1
del assets\manifest-*.json >nul 2>&1

REM Kopier nye assets
xcopy dist\assets\* assets\ /E /Y /Q

REM Erstat index.html med den byggede version
copy dist\index.html index.html /Y >nul

REM Git commit og push
git add index.html assets/
git diff --cached --quiet
if errorlevel 1 (
  git commit -m "Build opdatering"
  git push
  echo === Faerdig - appen er live om 1-2 minutter ===
) else (
  echo === Ingen aendringer at pushe ===
)

pause
