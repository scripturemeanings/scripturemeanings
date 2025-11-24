/**
 * Validation script to check hero image fields in articles
 * Run with: node scripts/validate-hero-images.js
 */

const fs = require('fs')
const path = require('path')
const { glob } = require('glob')

async function validateHeroImages() {
  const postsDir = path.join(process.cwd(), 'content/blog/posts')
  const mdxFiles = await glob('**/index.mdx', { cwd: postsDir })
  
  const issues = []
  const valid = []
  
  for (const file of mdxFiles) {
    const filePath = path.join(postsDir, file)
    const content = fs.readFileSync(filePath, 'utf-8')
    
    // Extract frontmatter
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/)
    if (!frontmatterMatch) continue
    
    const frontmatter = frontmatterMatch[1]
    const fileIssues = []
    
    // Check for wrong field names
    if (frontmatter.includes('heroImageAlt:')) {
      fileIssues.push('Uses heroImageAlt instead of heroAlt')
    }
    
    // Check for quoted heroAlt (can cause YAML parsing issues)
    const heroAltMatch = frontmatter.match(/heroAlt:\s*"([^"]+)"/)
    if (heroAltMatch) {
      fileIssues.push('heroAlt has unnecessary quotes (may cause YAML parsing issues)')
    }
    
    // Check if heroImage exists but heroAlt is missing
    if (frontmatter.includes('heroImage:') && !frontmatter.includes('heroAlt:')) {
      fileIssues.push('Has heroImage but missing heroAlt')
    }
    
    // Check if heroImage path is valid
    const heroImageMatch = frontmatter.match(/heroImage:\s*(.+)/)
    if (heroImageMatch) {
      const imagePath = heroImageMatch[1].trim().replace(/^["']|["']$/g, '')
      if (!imagePath.startsWith('/images/')) {
        fileIssues.push(`heroImage path should start with /images/: ${imagePath}`)
      }
    }
    
    if (fileIssues.length > 0) {
      issues.push({ file, issues: fileIssues })
    } else if (frontmatter.includes('heroImage:')) {
      valid.push(file)
    }
  }
  
  console.log('\n=== Hero Image Validation Report ===\n')
  
  if (issues.length === 0) {
    console.log('✅ All hero images are valid!')
  } else {
    console.log(`❌ Found ${issues.length} file(s) with issues:\n`)
    issues.forEach(({ file, issues: fileIssues }) => {
      console.log(`📄 ${file}`)
      fileIssues.forEach(issue => console.log(`   - ${issue}`))
      console.log('')
    })
  }
  
  console.log(`\n✅ ${valid.length} file(s) with valid hero images`)
  
  return issues.length === 0
}

if (require.main === module) {
  validateHeroImages().then(success => {
    process.exit(success ? 0 : 1)
  })
}

module.exports = { validateHeroImages }

