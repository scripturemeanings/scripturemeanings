import { Post } from 'contentlayer/generated'

/**
 * Safely get hero image from a post
 * Handles both heroImage and coverImage fields
 */
export function getHeroImage(post: Post): string | null {
  // Type-safe access to heroImage (it's optional in the type)
  const heroImage = (post as Post & { heroImage?: string }).heroImage
  const coverImage = post.coverImage
  
  if (heroImage) {
    return heroImage.startsWith('/') ? heroImage : `/${heroImage}`
  }
  
  if (coverImage) {
    return coverImage.startsWith('/') ? coverImage : `/images/${coverImage}`
  }
  
  return null
}

/**
 * Safely get hero alt text from a post
 */
export function getHeroAlt(post: Post): string {
  const heroAlt = (post as Post & { heroAlt?: string }).heroAlt
  return heroAlt || post.title
}

/**
 * Type guard to check if post has hero image
 */
export function hasHeroImage(post: Post): boolean {
  return getHeroImage(post) !== null
}

