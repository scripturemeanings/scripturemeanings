import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'
import { compareDesc } from 'date-fns'

export default function HomePage() {
  const recentPosts = allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 6)

  // Get top posts by category based on Search Console data
  const featuredByCategory = {
    dreams: allPosts.find(p => p.slug.includes('dragon')),
    numbers: allPosts.find(p => p.slug.includes('number-9')),
    'bible-answers': allPosts.find(p => p.slug.includes('black-feather')),
    'biblical-ufo-phenomena': allPosts.find(p => p.slug.includes('demons-disembodied-nephilim-spirits')),
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-linear-to-b from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Scripture Meanings
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Discover the deeper meanings behind biblical scripture, numbers, dreams, and symbols
          </p>
          <Link 
            href="/blog" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold inline-block transition"
          >
            Explore Articles
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Explore By Topic</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Dreams Category */}
            <Link 
              href="/category/dreams"
              className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">💭</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition">
                Biblical Dreams
              </h3>
              <p className="text-gray-600 mb-4">
                Explore the biblical meanings of dreams including dragons, pregnancy, receiving gifts, and more.
              </p>
              <span className="text-blue-600 font-semibold group-hover:underline">
                View all dream interpretations →
              </span>
            </Link>

            {/* Numbers Category */}
            <Link 
              href="/category/numbers"
              className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">🔢</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition">
                Biblical Numbers
              </h3>
              <p className="text-gray-600 mb-4">
                Discover the significance of biblical numbers including 7, 9, 12, 33, and 40 in scripture.
              </p>
              <span className="text-blue-600 font-semibold group-hover:underline">
                View all number meanings →
              </span>
            </Link>

            {/* Bible Answers Category */}
            <Link 
              href="/category/bible-answers"
              className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition">
                Bible Answers
              </h3>
              <p className="text-gray-600 mb-4">
                Find answers to biblical questions about symbols, meanings, and spiritual interpretations.
              </p>
              <span className="text-blue-600 font-semibold group-hover:underline">
                View all bible answers →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Posts from Top Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Popular Articles</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {Object.entries(featuredByCategory).map(([category, post]) => {
              if (!post) return null
              
              return (
                <Link 
                  key={post._id}
                  href={post.url}
                  className="group block bg-slate-50 rounded-lg overflow-hidden hover:shadow-lg transition"
                >
                  {post.coverImage && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={`/images/${post.coverImage}`}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="text-xs font-semibold text-blue-600 uppercase mb-2">
                      {category.split('-').join(' ')}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition">
                      {post.title}
                    </h3>
                    {post.description && (
                      <p className="text-gray-700 line-clamp-3">{post.description}</p>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="text-center">
            <Link 
              href="/categories" 
              className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
            >
              Browse All Categories →
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Link 
                key={post._id} 
                href={post.url}
                className="group block p-6 bg-white rounded-lg hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition">
                  {post.title}
                </h3>
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
          <div className="text-center mt-12">
            <Link 
              href="/blog" 
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              View All Articles →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
