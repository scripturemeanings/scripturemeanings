import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    img: (props) => {
      const src = props.src as string
      
      // Handle images/ paths - these are relative to the post
      if (src.startsWith('images/')) {
        // Extract just the filename
        const filename = src.replace('images/', '')
        
        // Use regular img tag to avoid Next.js optimization issues
        return (
          <img
            {...props}
            src={`/images/${filename}`}
            alt={props.alt || ''}
            className="w-full h-auto rounded-lg my-8"
          />
        )
      }
      
      // For other paths, use as-is
      return <img {...props} alt={props.alt || ''} className="rounded-lg my-8" />
    },
  }
}
