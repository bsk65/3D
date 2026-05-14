@echo off
echo === 3D Bueskydning Build ===

REM Brug altid index.src.html som kilde til Vite
copy index.src.html index.html /Y >nul 2>&1

REM Byg med Vite (bruger nu korrekt index.html)
call npm run build

REM Kopier assets
xcopy dist\assets\* assets\ /E /Y /Q

REM Erstat index.html med den BYGGEDE version
copy dist\index.html index.html /Y >nul

echo === Faerdig - push nu i GitHub Desktop ===
pause
