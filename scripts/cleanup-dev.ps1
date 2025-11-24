# Cleanup script for Next.js dev server issues
# Kills Node processes and removes lock files

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

# Clean up .next directory if needed (optional - uncomment if needed)
# Write-Host "Cleaning .next directory..." -ForegroundColor Yellow
# Remove-Item -Path ".next" -Recurse -Force -ErrorAction SilentlyContinue
# Write-Host ".next directory cleaned." -ForegroundColor Green

Write-Host "`nCleanup complete! You can now run 'npm run dev' again." -ForegroundColor Green

