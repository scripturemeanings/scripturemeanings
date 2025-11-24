# Cleanup and start dev server script
# Usage: npm run dev:clean or .\scripts\dev-clean.ps1

Write-Host "Cleaning up Next.js dev server..." -ForegroundColor Yellow

# Kill all Node.js processes
$nodeProcesses = Get-Process -Name "node" -ErrorAction SilentlyContinue
if ($nodeProcesses) {
    Write-Host "Found $($nodeProcesses.Count) Node.js process(es), killing them..." -ForegroundColor Yellow
    $nodeProcesses | Stop-Process -Force
    Start-Sleep -Seconds 1
    Write-Host "Node.js processes killed." -ForegroundColor Green
} else {
    Write-Host "No Node.js processes found." -ForegroundColor Green
}

# Remove Next.js lock files
$lockFiles = @(
    ".next\dev\lock",
    ".next\build\lock",
    ".next\cache\lock"
)

foreach ($lockFile in $lockFiles) {
    if (Test-Path $lockFile) {
        Write-Host "Removing lock file: $lockFile" -ForegroundColor Yellow
        Remove-Item -Path $lockFile -Force -ErrorAction SilentlyContinue
        Write-Host "Lock file removed." -ForegroundColor Green
    }
}

Write-Host "`nStarting dev server..." -ForegroundColor Green
npm run dev

