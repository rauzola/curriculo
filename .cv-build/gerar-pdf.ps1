# Gera o PDF do curriculo a partir do site (mantem o design online).
# Uso: clicar com botao direito > "Executar com PowerShell", ou rodar:  ./gerar-pdf.ps1
$ErrorActionPreference = "Stop"
$proj = "D:\www\curriculo"
$port = 3210
$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$saidaCompleto = "$proj\Raul-Sigoli-Curriculo.pdf"
$saidaCompacto = "$proj\Raul-Sigoli-Curriculo-Compacto.pdf"

Set-Location $proj
Write-Host "1/3  Build do site..." -ForegroundColor Cyan
pnpm build | Out-Null

Write-Host "2/3  Subindo servidor na porta $port..." -ForegroundColor Cyan
$job = Start-Job -ScriptBlock {
  param($p, $port)
  $env:PORT = $port
  Set-Location $p
  pnpm start
} -ArgumentList $proj, $port

# espera o servidor responder
for ($i = 0; $i -lt 30; $i++) {
  try { Invoke-WebRequest "http://localhost:$port/" -UseBasicParsing -TimeoutSec 2 | Out-Null; break } catch { Start-Sleep 1 }
}

Write-Host "3/3  Imprimindo PDFs (completo + compacto)..." -ForegroundColor Cyan
& $chrome --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=12000 --run-all-compositor-stages-before-draw --print-to-pdf="$saidaCompleto" "http://localhost:$port/"
& $chrome --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=12000 --run-all-compositor-stages-before-draw --print-to-pdf="$saidaCompacto" "http://localhost:$port/compacto"

Stop-Job $job; Remove-Job $job
Write-Host "Pronto:" -ForegroundColor Green
Write-Host "  $saidaCompleto" -ForegroundColor Green
Write-Host "  $saidaCompacto" -ForegroundColor Green
