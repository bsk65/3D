@echo off
echo === 3D Bueskydning Build ===

REM Gem kilde index.html
copy index.html index.src.html /Y >nul

REM Byg med Vite
call npm run build

REM Kopier assets
xcopy dist\assets\* assets\ /E /Y /Q

REM Gendan kilde index.html (VIGTIGT - ikke dist versionen)
copy index.src.html index.html /Y >nul

echo === Faerdig - push nu i GitHub Desktop ===
pause
