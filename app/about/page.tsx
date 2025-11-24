import Link from 'next/link'

export const metadata = {
  title: 'About Scripture Meanings | Our Mission and Story',
  description: 'Learn about Scripture Meanings, our mission to help people discover deeper biblical understanding through scripture, numbers, dreams, and symbols.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 pt-8">
        <nav className="text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">About</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="bg-linear-to-b from-slate-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Scripture Meanings</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Helping people discover deeper biblical understanding through scripture, numbers, dreams, and symbols.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-6 text-lg">
              Scripture Meanings exists to help believers and seekers alike explore the rich symbolism and deeper meanings found throughout the Bible. We believe that understanding biblical symbols, numbers, and patterns can enrich your faith journey and provide profound insights into God's word.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12">What We Cover</h2>
            
            <div className="grid md:grid-cols-3 gap-8 my-8 not-prose">
              <div className="bg-slate-50 p-6 rounded-lg">
                <div className="text-4xl mb-4">💭</div>
                <h3 className="text-xl font-bold mb-3">Biblical Dreams</h3>
                <p className="text-gray-700">
                  Explore the meanings of dreams from a biblical perspective, including symbolism of dragons, pregnancy, gifts, and more.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <div className="text-4xl mb-4">🔢</div>
                <h3 className="text-xl font-bold mb-3">Biblical Numbers</h3>
                <p className="text-gray-700">
                  Discover the significance of numbers in scripture, from the perfection of 7 to the completeness of 40.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <div className="text-4xl mb-4">📖</div>
                <h3 className="text-xl font-bold mb-3">Symbols & Meanings</h3>
                <p className="text-gray-700">
                  Uncover the meanings behind biblical symbols including colors, animals, and objects throughout scripture.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Our Approach</h2>
            <p className="text-gray-700 mb-6 text-lg">
              We take a thoughtful, research-based approach to biblical interpretation. Our articles are:
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-gray-700"><strong>Scripture-based:</strong> We ground our interpretations in biblical text and context</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-gray-700"><strong>Well-researched:</strong> We explore multiple perspectives and scholarly sources</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-gray-700"><strong>Accessible:</strong> We explain complex concepts in clear, understandable language</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-gray-700"><strong>Respectful:</strong> We honor different traditions while focusing on biblical truth</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 mt-12">Popular Topics</h2>
            <p className="text-gray-700 mb-6 text-lg">
              Some of our most-read articles explore:
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 not-prose">
              <ul className="space-y-2 list-disc list-outside ml-6">
                <li className="text-gray-700">The biblical meaning of black feathers and divine protection</li>
                <li className="text-gray-700">Dragon symbolism in dreams and spiritual warfare</li>
                <li className="text-gray-700">The significance of the number 9 in scripture</li>
                <li className="text-gray-700">Understanding biblical numbers like 7, 12, 33, and 40</li>
                <li className="text-gray-700">Pre-flood biblical accounts including the Nephilim and giants</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Join Our Community</h2>
            <p className="text-gray-700 mb-6 text-lg">
              Whether you're a lifelong believer, a curious seeker, or a student of scripture, we invite you to explore the depths of biblical meaning with us. Our growing library of articles continues to expand as we uncover new insights and address questions from our readers.
            </p>
          </div>

          {/* Contact CTA Box - Outside prose container to avoid style conflicts */}
          <div className="bg-slate-900 text-white p-8 rounded-lg mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Have a Question?</h3>
            <p className="mb-6 text-slate-300">
              We'd love to hear from you. Share your questions, insights, or article suggestions.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
