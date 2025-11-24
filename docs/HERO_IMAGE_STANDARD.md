# Hero Image Standard

## Field Names

**Always use these exact field names in frontmatter:**

- `heroImage` - Path to the hero image (required if you want a hero image)
- `heroAlt` - Alt text for the hero image (required if heroImage is set)

**DO NOT use:**
- ❌ `heroImageAlt` (wrong field name)
- ❌ `coverImage` for hero images (use heroImage instead)
- ❌ Quotes around heroAlt values (causes YAML parsing issues)

## Format

### heroImage
- Must start with `/images/`
- Example: `/images/biblical-ufo-phenomena/article-hero.webp`

### heroAlt
- No quotes needed (YAML handles strings automatically)
- Keep it descriptive but concise
- Example: `Ancient scrolls with Hebrew text visible, ethereal UFO craft hovering above`

## Example Frontmatter

```yaml
---
title: "Article Title"
date: 2025-11-17
heroImage: "/images/category/article-hero.webp"
heroAlt: Descriptive alt text for the hero image
---
```

## Usage in Code

Always use the `HeroImage` component:

```tsx
import HeroImage from '@/components/HeroImage'

<HeroImage post={post} />
```

Or use the helper functions:

```tsx
import { getHeroImage, getHeroAlt, hasHeroImage } from '@/lib/post-helpers'

const imageSrc = getHeroImage(post)
const altText = getHeroAlt(post)
if (hasHeroImage(post)) {
  // render image
}
```

## Validation

Run the validation script to check all articles:

```bash
node scripts/validate-hero-images.js
```

## Troubleshooting

**Hero image not displaying?**
1. Check that `heroImage` field exists (not `heroImageAlt`)
2. Verify image path starts with `/images/`
3. Ensure image file exists in `public/images/`
4. Check that `heroAlt` has no quotes
5. Restart dev server to regenerate contentlayer

**YAML parsing errors?**
- Remove quotes from `heroAlt` field
- Ensure proper YAML indentation
- Check for special characters that need escaping

