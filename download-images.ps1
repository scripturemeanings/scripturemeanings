# Get all image files referenced in posts
$images = @()

Get-ChildItem -Path "content/blog" -Filter "*.mdx" -Recurse | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    
    if ($content -match 'coverImage:\s*["'']?([^"'']+)["'']?') {
        $images += $matches[1]
    }
    
    $regexMatches = [regex]::Matches($content, '!\[.*?\]\((?:\.\/)?images\/([^)]+)\)')
    foreach ($match in $regexMatches) {
        $images += $match.Groups[1].Value
    }
}

$images = $images | Select-Object -Unique

Write-Host "Found $($images.Count) unique images to download"
Write-Host ""

New-Item -ItemType Directory -Force -Path "public/images" | Out-Null

$downloaded = 0
$failed = 0

# Try all year/month combinations
$yearMonths = @()
2023..2025 | ForEach-Object {
    $year = $_
    1..12 | ForEach-Object {
        $month = $_.ToString("00")
        $yearMonths += "$year/$month"
    }
}

foreach ($image in $images) {
    $destination = "public/images/$image"
    
    # Skip if already exists and has content
    if ((Test-Path $destination) -and (Get-Item $destination).Length -gt 0) {
        Write-Host "Already exists: $image [OK]" -ForegroundColor Green
        $downloaded++
        continue
    }
    
    $success = $false
    
    foreach ($yearMonth in $yearMonths) {
        $url = "https://scripturemeanings.com/wp-content/uploads/$yearMonth/$image"
        
        try {
            Invoke-WebRequest -Uri $url -OutFile $destination -ErrorAction Stop
            
            $fileInfo = Get-Item $destination
            if ($fileInfo.Length -gt 0) {
                Write-Host "Downloaded: $image from $yearMonth [OK] ($($fileInfo.Length) bytes)" -ForegroundColor Green
                $downloaded++
                $success = $true
                break
            }
        }
        catch {
            # Silent fail, will try next path
        }
    }
    
    if (-not $success) {
        Write-Host "Failed: $image [FAILED]" -ForegroundColor Red
        $failed++
    }
}

Write-Host ""
Write-Host "Download complete!" -ForegroundColor Cyan
Write-Host "Successfully downloaded: $downloaded" -ForegroundColor Green
Write-Host "Failed: $failed" -ForegroundColor Red
