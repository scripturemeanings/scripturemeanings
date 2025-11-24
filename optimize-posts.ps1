# Script to optimize posts for AI search following Microsoft best practices

function Optimize-Post {
    param(
        [string]$PostPath,
        [hashtable]$Optimization
    )
    
    Write-Host "Optimizing: $PostPath" -ForegroundColor Cyan
    
    $content = Get-Content $PostPath -Raw -Encoding UTF8
    
    # Extract frontmatter and body
    if ($content -match '(?s)^---\r?\n(.*?)\r?\n---\r?\n(.*)$') {
        $frontmatter = $matches[1]
        $body = $matches[2]
        
        # Update description if provided
        if ($Optimization.Description) {
            if ($frontmatter -match 'description:.*') {
                $frontmatter = $frontmatter -replace 'description:.*', "description: `"$($Optimization.Description)`""
            } else {
                $frontmatter += "`ndescription: `"$($Optimization.Description)`""
            }
        }
        
        # Add Key Takeaways section if it doesn't exist
        if ($Optimization.KeyTakeaways -and $body -notmatch '## Key Takeaways') {
            $takeawaysList = $Optimization.KeyTakeaways | ForEach-Object { "- $_" }
            $takeawaysSection = "`n## Key Takeaways`n`n" + ($takeawaysList -join "`n") + "`n"
            
            # Insert after first paragraph
            $body = $body -replace '(^.*?\n\n)', "`$1$takeawaysSection"
        }
        
        # Add FAQ section if provided
        if ($Optimization.FAQs) {
            $faqSection = "`n## Frequently Asked Questions`n`n"
            foreach ($faq in $Optimization.FAQs) {
                $faqSection += "### $($faq.Question)`n`n$($faq.Answer)`n`n"
            }
            
            # Add before the end
            $body += "`n$faqSection"
        }
        
        # Rebuild the file
        $newContent = "---`n$frontmatter`n---`n$body"
        Set-Content $PostPath -Value $newContent -NoNewline -Encoding UTF8
        
        Write-Host "  [OK] Updated" -ForegroundColor Green
    } else {
        Write-Host "  [FAILED] Could not parse frontmatter" -ForegroundColor Red
    }
}

# Define optimizations for top posts based on Search Console data
$optimizations = @{
    'black-feather' = @{
        Description = 'Discover the biblical meaning of black feathers, their spiritual significance in scripture, and what finding a black feather symbolizes. Includes biblical verses and interpretations.'
        KeyTakeaways = @(
            'Black feathers in the Bible symbolize divine messages, protection, and spiritual guidance'
            'Psalm 91:4 describes God covering us with His feathers as protection'
            'Black feathers can represent mourning, wisdom, or transformation across different cultures'
            'They often signify the presence of guardian angels and divine care'
        )
        FAQs = @(
            @{
                Question = 'What does a black feather mean in the Bible?'
                Answer = 'In the Bible, black feathers symbolize divine protection and Gods watchful care over believers. Psalm 91:4 describes God covering us with His feathers, offering shelter and protection during difficult times.'
            },
            @{
                Question = 'Is finding a black feather a good sign?'
                Answer = 'Yes, finding a black feather is generally considered a positive sign in Christian tradition. It can represent divine protection, the presence of guardian angels, or a message of comfort during times of mourning or darkness.'
            },
            @{
                Question = 'What do black feathers symbolize spiritually?'
                Answer = 'Spiritually, black feathers symbolize protection, wisdom, transformation, and divine guidance. They remind believers of Gods care and the presence of angels watching over them during challenging times.'
            }
        )
    }
    'dragon-dreams' = @{
        Description = 'Explore the biblical meaning of dragons in dreams, their symbolism in scripture, and how to interpret dragon dreams from a Christian perspective. Includes biblical references and spiritual guidance.'
        KeyTakeaways = @(
            'Dragons in the Bible often represent evil, chaos, or spiritual warfare'
            'Dreaming of dragons may symbolize facing spiritual battles or overcoming challenges'
            'Biblical dragons appear in Revelation as symbols of Satan and opposition to God'
            'Dragon dreams can be a call to spiritual vigilance and faith'
        )
        FAQs = @(
            @{
                Question = 'What does dreaming of a dragon mean biblically?'
                Answer = 'Biblically, dreaming of a dragon often represents spiritual warfare, evil forces, or challenges that require faith to overcome. Dragons in scripture symbolize chaos and opposition to God, particularly in the book of Revelation.'
            },
            @{
                Question = 'Are dragons mentioned in the Bible?'
                Answer = 'Yes, dragons are mentioned in the Bible, particularly in Revelation 12 where the dragon represents Satan. The term is also used in translations of Hebrew words describing sea monsters or serpents in the Old Testament.'
            },
            @{
                Question = 'What should I do if I dream about dragons?'
                Answer = 'If you dream about dragons, consider it an invitation to examine areas of spiritual battle in your life. Pray for protection, seek spiritual wisdom, and remember that God gives believers authority over evil forces through faith.'
            }
        )
    }
    'number-9' = @{
        Description = 'Discover the biblical meaning and significance of the number 9, including its symbolism of divine completeness, judgment, and spiritual fruit in scripture. Includes key biblical references.'
        KeyTakeaways = @(
            'The number 9 in the Bible represents divine completeness and finality'
            'There are 9 fruits of the Holy Spirit listed in Galatians 5:22-23'
            'Jesus died at the 9th hour, symbolizing the completion of salvation'
            'The number 9 often appears in contexts of judgment and harvest in scripture'
        )
        FAQs = @(
            @{
                Question = 'What does the number 9 mean in the Bible?'
                Answer = 'In the Bible, the number 9 symbolizes divine completeness, finality, and judgment. It represents the fullness of Gods purposes and appears in significant contexts like the 9 fruits of the Spirit and Jesus death at the 9th hour.'
            },
            @{
                Question = 'Why is 9 significant in the Bible?'
                Answer = 'The number 9 is significant because it appears at crucial moments representing completion and judgment. Jesus died at the 9th hour (3 PM), completing the work of salvation. The Holy Spirit produces 9 fruits in believers lives, representing complete spiritual maturity.'
            },
            @{
                Question = 'What are the 9 fruits of the Spirit?'
                Answer = 'The 9 fruits of the Spirit, listed in Galatians 5:22-23, are: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control. These represent the complete character transformation the Holy Spirit produces in believers.'
            }
        )
    }
}

# Map optimization keys to actual folder name patterns
$postPatterns = @{
    'black-feather' = '*black-feather*'
    'dragon-dreams' = '*dragons-in-dreams*'
    'number-9' = '*number-9-in-the-bible*'
}

# Find and optimize posts
Write-Host "Starting post optimization..." -ForegroundColor Yellow
Write-Host ""

foreach ($key in $optimizations.Keys) {
    $pattern = $postPatterns[$key]
    
    if (-not $pattern) {
        Write-Host "No pattern defined for: $key" -ForegroundColor Yellow
        continue
    }
    
    # Find matching directories
    $postDirs = Get-ChildItem -Path "content/blog/posts" -Directory -Recurse | Where-Object { $_.Name -like $pattern }
    
    if ($postDirs) {
        foreach ($dir in $postDirs) {
            $mdxFile = Join-Path $dir.FullName "index.mdx"
            if (Test-Path $mdxFile) {
                Optimize-Post -PostPath $mdxFile -Optimization $optimizations[$key]
            }
        }
    } else {
        Write-Host "Could not find post matching: $pattern" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "Optimization complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Review the optimized posts"
Write-Host "2. Restart your dev server"
Write-Host "3. Check how the posts look"
