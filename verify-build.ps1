param(
  [Parameter(Mandatory=$true)][string]$Html,
  [Parameter(Mandatory=$true)][string]$AssetsDir
)

if (-not (Test-Path $Html)) {
  Write-Host "FEJL: $Html findes ikke"
  exit 1
}

$match = Select-String -Path $Html -Pattern 'assets/(index-[A-Za-z0-9]+\.js)' | Select-Object -First 1
if (-not $match) {
  Write-Host "FEJL: fandt ingen JS-reference i $Html"
  exit 1
}

$ref = $match.Matches[0].Groups[1].Value
$target = Join-Path $AssetsDir $ref
if (-not (Test-Path $target)) {
  Write-Host "FEJL: $Html peger paa '$ref' som ikke findes i $AssetsDir"
  exit 1
}

Write-Host "OK: $Html peger korrekt paa $ref"
exit 0
