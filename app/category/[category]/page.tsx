import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { compareDesc } from 'date-fns'
import { getHeroImage, getHeroAlt } from '@/lib/post-helpers'

// Define category metadata
const categoryInfo: Record<string, { 
  title: string; 
  description: string;
  heroTitle?: string;
  heroSubtitle?: string;
  introParagraph?: string;
}> = {
  'dreams': {
    title: 'Biblical Dream Interpretations',
    description: 'Explore the biblical meanings of dreams including dragons, pregnancy, receiving gifts, and more. Understand what your dreams might be telling you from a Christian perspective.'
  },
  'numbers': {
    title: 'Biblical Number Meanings',
    description: 'Discover the significance of biblical numbers including 7, 9, 12, 33, and 40. Learn what these numbers symbolize in scripture and their spiritual meanings.'
  },
  'bible-answers': {
    title: 'Biblical Questions Answered',
    description: 'Find answers to common biblical questions about symbols, meanings, and interpretations. Explore the deeper significance of scripture.'
  },
  'pre-flood-age': {
    title: 'Pre-Flood Biblical Era',
    description: 'Explore the biblical accounts of the pre-flood age including the Nephilim, giants, and ancient biblical figures.'
  },
  'gifts': {
    title: 'Biblical & Christian Gifts',
    description: 'Discover meaningful Christian gifts including jewelry, prayer journals, and biblical books.'
  },
  'biblical-ufo-phenomena': {
    title: 'Biblical UFO Phenomena',
    description: 'Explore biblical explanations for UFO encounters, alien abductions, and extraterrestrial phenomena through the lens of Genesis 6, the Nephilim, and end-times prophecy. Discover how ancient texts illuminate modern mysteries.',
    heroTitle: 'BIBLICAL UFO PHENOMENA',
    heroSubtitle: 'Uncovering the spiritual reality behind alien encounters through Scripture, ancient texts, and end-times prophecy',
    introParagraph: 'What if UFO encounters aren\'t about space travelers, but ancient spirits? This category explores the biblical framework for understanding modern alien phenomena through Genesis 6, the Nephilim, and prophetic warnings about the end times. Discover how demons—the disembodied spirits of the Nephilim—are attempting to recreate their fathers\' work through genetic manipulation and deception.'
  }
}

export async function generateStaticParams() {
  const categories = new Set<string>()
  allPosts.forEach(post => {
    post.categories?.forEach(cat => categories.add(cat))
  })
  return Array.from(categories).map(category => ({ category }))
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const info = categoryInfo[category]
  
  if (!info) return {}
  
  // Custom SEO metadata for specific categories
  const seoMetadata: Record<string, { title: string; description: string }> = {
    'biblical-ufo-phenomena': {
      title: 'Biblical UFO Phenomena | Scripture-Based Explanations for Alien Encounters',
      description: 'Discover the biblical framework for understanding UFOs, alien abductions, and extraterrestrial phenomena through Genesis 6, ancient texts, and end-times prophecy.'
    }
  }
  
  const seo = seoMetadata[category]
  
  return {
    title: seo?.title || info.title,
    description: seo?.description || info.description,
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const info = categoryInfo[category]
  
  if (!info) {
    notFound()
  }
  
  const categoryPosts = allPosts
    .filter(post => post.categories?.includes(category))
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  // Separate pillar articles from regular articles
  const pillarArticles = categoryPosts.filter(post => (post as any).pillar === true)
  const regularArticles = categoryPosts.filter(post => !(post as any).pillar)

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumbs */}
      <nav className="mb-8 text-sm text-gray-600">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{info.title}</span>
      </nav>
      
      {/* Hero Section (if provided) */}
      {info.heroTitle ? (
        <section className="mb-12">
          <div className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16 px-8 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center tracking-tight">
              {info.heroTitle}
            </h1>
            {info.heroSubtitle && (
              <p className="text-xl md:text-2xl text-slate-300 text-center max-w-3xl mx-auto">
                {info.heroSubtitle}
              </p>
            )}
          </div>
          {info.introParagraph && (
            <div className="mt-8 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                {info.introParagraph}
              </p>
            </div>
          )}
        </section>
      ) : (
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{info.title}</h1>
          <p className="text-xl text-gray-700">{info.description}</p>
        </header>
      )}

      {/* Pillar Articles - Featured at Top */}
      {pillarArticles.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Complete Framework</h2>
          <div className="grid md:grid-cols-1 gap-6">
            {pillarArticles.map((post) => {
              const heroImagePath = getHeroImage(post)
              
              return (
                <Link 
                  key={post._id} 
                  href={post.url}
                  className="group block p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl hover:shadow-xl hover:border-blue-400 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white uppercase tracking-wide">
                      Complete Framework
                    </span>
                    <span className="text-sm font-semibold text-blue-700">Hub Article</span>
                  </div>
                  {heroImagePath && (
                    <div className="mb-2 rounded overflow-hidden bg-gray-200">
                      <img
                        src={heroImagePath}
                        alt={getHeroAlt(post)}
                        className="w-full h-6 object-cover group-hover:scale-105 transition"
                      />
                    </div>
                  )}
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-blue-600 transition">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      {post.description}
                    </p>
                  )}
                  <div className="flex items-center text-sm text-gray-600">
                    <time>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span className="mx-2">•</span>
                    <span className="text-blue-600 font-semibold group-hover:underline">
                      Read Complete Framework →
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      )}

      {/* Regular Articles */}
      {regularArticles.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Supporting Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((post) => (
              <Link 
                key={post._id} 
                href={post.url}
                className="group block p-6 bg-slate-50 rounded-lg hover:shadow-lg transition"
              >
                {post.heroImage && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img
                      src={post.heroImage.startsWith('/') ? post.heroImage : `/images/${post.heroImage}`}
                      alt={(post as any).heroAlt || post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition"
                    />
                  </div>
                )}
                {post.coverImage && !post.heroImage && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img
                      src={`/images/${post.coverImage}`}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition"
                    />
                  </div>
                )}
                <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition">
                  {post.title}
                </h2>
                <time className="text-sm text-gray-600 mb-3 block">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                {post.description && (
                  <p className="text-gray-700 line-clamp-3">{post.description}</p>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

