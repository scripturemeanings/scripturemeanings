import Link from 'next/link'

export const metadata = {
  title: 'Contact Us | Scripture Meanings',
  description: 'Have questions about biblical topics or Scripture Meanings? Feel free to reach out to us.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 pt-8">
        <nav className="text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Contact</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="bg-linear-to-b from-slate-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Have questions about biblical topics or Scripture Meanings? Feel free to reach out.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-lg text-gray-700 mb-8">
              Have questions about biblical topics or Scripture Meanings? Feel free to reach out.
            </p>
            
            <div className="bg-slate-50 p-8 rounded-lg not-prose">
              <p className="text-gray-800 mb-4 text-lg">
                Email us at:
              </p>
              <a 
                href="mailto:contact@scripturemeanings.com"
                className="text-2xl font-semibold text-blue-600 hover:text-blue-700 hover:underline transition"
              >
                contact@scripturemeanings.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

