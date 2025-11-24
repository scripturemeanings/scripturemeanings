import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'

const categoryInfo: Record<string, { title: string; description: string; emoji: string }> = {
  'dreams': {
    title: 'Biblical Dream Interpretations',
    description: 'Explore the biblical meanings of dreams including dragons, pregnancy, receiving gifts, and more.',
    emoji: '💭'
  },
  'numbers': {
    title: 'Biblical Number Meanings',
    description: 'Discover the significance of biblical numbers including 7, 9, 12, 33, and 40 in scripture.',
    emoji: '🔢'
  },
  'bible-answers': {
    title: 'Biblical Questions Answered',
    description: 'Find answers to common biblical questions about symbols, meanings, and interpretations.',
    emoji: '📖'
  },
  'pre-flood-age': {
    title: 'Pre-Flood Biblical Era',
    description: 'Explore the biblical accounts of the pre-flood age including the Nephilim, giants, and ancient figures.',
    emoji: '⛰️'
  },
  'gifts': {
    title: 'Biblical & Christian Gifts',
    description: 'Discover meaningful Christian gifts including jewelry, prayer journals, and biblical books.',
    emoji: '🎁'
  },
  'biblical-ufo-phenomena': {
    title: 'Biblical UFO Phenomena',
    description: 'Explore biblical explanations for UFO encounters, alien abductions, and extraterrestrial phenomena through the lens of Genesis 6, the Nephilim, and end-times prophecy.',
    emoji: '🛸'
  }
}

export const metadata = {
  title: 'Browse All Categories | Scripture Meanings',
  description: 'Explore biblical topics organized by category including dreams, numbers, symbols, and more.',
}

export default function CategoriesPage() {
  // Get all categories with post counts
  const categoryCounts: Record<string, number> = {}
  
  allPosts.forEach(post => {
    post.categories?.forEach(cat => {
      categoryCounts[cat] = (categoryCounts[cat] || 0) + 1
    })
  })

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumbs */}
      <nav className="mb-8 text-sm text-gray-600">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Categories</span>
      </nav>

      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Browse By Category</h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Explore biblical topics organized by category to find exactly what you're looking for.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(categoryInfo).map(([slug, info]) => {
          const count = categoryCounts[slug] || 0
          
          return (
            <Link
              key={slug}
              href={`/category/${slug}`}
              className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition border border-gray-100"
            >
              <div className="text-5xl mb-4">{info.emoji}</div>
              <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition">
                {info.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {info.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {count} {count === 1 ? 'article' : 'articles'}
                </span>
                <span className="text-blue-600 font-semibold group-hover:underline">
                  View articles →
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

