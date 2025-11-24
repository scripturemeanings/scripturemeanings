import { Post } from 'contentlayer/generated'
import { getHeroImage, getHeroAlt } from '@/lib/post-helpers'

interface HeroImageProps {
  post: Post
  className?: string
}

export default function HeroImage({ post, className = "w-full h-auto rounded-none sm:rounded-lg" }: HeroImageProps) {
  const heroImageSrc = getHeroImage(post)
  const heroAlt = getHeroAlt(post)
  
  if (!heroImageSrc) {
    return null
  }
  
  return (
    <div className="mb-8 -mx-4 sm:mx-0">
      <img
        src={heroImageSrc}
        alt={heroAlt}
        className={className}
        loading="eager"
      />
    </div>
  )
}

