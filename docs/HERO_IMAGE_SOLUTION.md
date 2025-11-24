# Hero Image Solution - Preventing Future Issues

## Problem Summary

We were experiencing recurring issues with hero images not displaying due to:
1. **Inconsistent field names** - Sometimes `heroImageAlt` vs `heroAlt`
2. **TypeScript type issues** - Using `as any` type assertions everywhere
3. **YAML parsing errors** - Quotes in heroAlt causing parsing failures
4. **No centralized logic** - Hero image logic duplicated across files

## Solution Implemented

### 1. Centralized Helper Functions (`lib/post-helpers.ts`)

Created type-safe helper functions that handle all hero image logic:
- `getHeroImage(post)` - Safely gets hero image path, handles both heroImage and coverImage
- `getHeroAlt(post)` - Safely gets alt text with fallback to title
- `hasHeroImage(post)` - Type-safe check if post has hero image

### 2. Reusable Component (`components/HeroImage.tsx`)

Created a `<HeroImage>` component that:
- Handles all rendering logic
- Automatically returns null if no image
- Type-safe and reusable

### 3. Updated All Usage Points

- `app/[slug]/page.tsx` - Now uses `<HeroImage>` component
- `app/category/[category]/page.tsx` - Uses helper functions

### 4. Documentation & Standards

- `docs/HERO_IMAGE_STANDARD.md` - Clear standards for hero images
- Validation script (planned) - To catch issues early

## Benefits

✅ **Type Safety** - No more `as any` assertions  
✅ **Consistency** - Single source of truth for hero image logic  
✅ **Maintainability** - Change logic in one place, affects everywhere  
✅ **Error Prevention** - Centralized validation and fallbacks  
✅ **Documentation** - Clear standards prevent mistakes  

## Usage Going Forward

### In Article Frontmatter

```yaml
---
title: "Article Title"
heroImage: "/images/category/article-hero.webp"
heroAlt: Descriptive alt text without quotes
---
```

### In Code

**Option 1: Use Component (Recommended)**
```tsx
import HeroImage from '@/components/HeroImage'

<HeroImage post={post} />
```

**Option 2: Use Helpers**
```tsx
import { getHeroImage, getHeroAlt } from '@/lib/post-helpers'

const imageSrc = getHeroImage(post)
const altText = getHeroAlt(post)
```

## Preventing Future Issues

1. **Always use `heroImage` and `heroAlt`** - Never `heroImageAlt`
2. **No quotes in heroAlt** - YAML handles strings automatically
3. **Use the helpers/components** - Don't access fields directly
4. **Run validation** - Check articles before committing

## Quick Checklist

When adding/editing hero images:
- [ ] Field name is `heroImage` (not `heroImageAlt`)
- [ ] Field name is `heroAlt` (not `heroImageAlt`)
- [ ] `heroAlt` has no quotes
- [ ] Image path starts with `/images/`
- [ ] Image file exists in `public/images/`
- [ ] Code uses `<HeroImage>` component or helper functions

