'use client'

import { useEffect, useRef, useState } from 'react'

interface CommentsProps {
  repo: string // Format: "owner/repo"
  repoId: string // Giscus repo ID
  category: string // Giscus category
  categoryId: string // Giscus category ID
  mapping?: string // Mapping strategy (default: "pathname")
  term?: string // Search term (default: page pathname)
  reactionsEnabled?: string // "1" or "0" (default: "1")
  emitMetadata?: string // "1" or "0" (default: "0")
  theme?: string // Theme (default: "light")
  lang?: string // Language (default: "en")
}

export default function Comments({
  repo,
  repoId,
  category,
  categoryId,
  mapping = 'pathname',
  term,
  reactionsEnabled = '1',
  emitMetadata = '0',
  theme = 'light',
  lang = 'en',
}: CommentsProps) {
  const commentsRef = useRef<HTMLDivElement>(null)
  const [currentTheme, setCurrentTheme] = useState(theme)

  // Detect dark mode if theme is set to auto
  useEffect(() => {
    if (theme === 'auto' || !theme) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const updateTheme = () => {
        setCurrentTheme(mediaQuery.matches ? 'dark' : 'light')
      }
      updateTheme()
      mediaQuery.addEventListener('change', updateTheme)
      return () => mediaQuery.removeEventListener('change', updateTheme)
    } else {
      setCurrentTheme(theme)
    }
  }, [theme])

  useEffect(() => {
    if (!commentsRef.current) return

    // Remove any existing script
    const existingScript = commentsRef.current.querySelector('script')
    if (existingScript) {
      existingScript.remove()
    }

    // Create and configure the Giscus script
    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('data-repo', repo)
    script.setAttribute('data-repo-id', repoId)
    script.setAttribute('data-category', category)
    script.setAttribute('data-category-id', categoryId)
    script.setAttribute('data-mapping', mapping)
    if (term) {
      script.setAttribute('data-term', term)
    }
    script.setAttribute('data-reactions-enabled', reactionsEnabled)
    script.setAttribute('data-emit-metadata', emitMetadata)
    script.setAttribute('data-theme', currentTheme)
    script.setAttribute('data-lang', lang)
    script.setAttribute('crossorigin', 'anonymous')
    script.async = true

    commentsRef.current.appendChild(script)

    // Cleanup function
    return () => {
      if (commentsRef.current && script.parentNode) {
        script.remove()
      }
    }
  }, [
    repo,
    repoId,
    category,
    categoryId,
    mapping,
    term,
    reactionsEnabled,
    emitMetadata,
    currentTheme,
    lang,
  ])

  return (
    <div className="mt-12 pt-12 border-t">
      <h2 className="text-2xl font-bold mb-6">Comments</h2>
      <div ref={commentsRef} className="giscus" />
    </div>
  )
}

