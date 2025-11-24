import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Scripture Meanings</h3>
            <p className="text-sm">
              Exploring the deeper meanings of biblical scripture and spiritual insights.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">All Articles</Link></li>
              <li><Link href="/categories" className="hover:text-white transition">Categories</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Popular Topics</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/category/dreams" className="hover:text-white transition">Biblical Dreams</Link></li>
              <li><Link href="/category/numbers" className="hover:text-white transition">Biblical Numbers</Link></li>
              <li><Link href="/category/bible-answers" className="hover:text-white transition">Bible Answers</Link></li>
              <li><Link href="/category/pre-flood-age" className="hover:text-white transition">Pre-Flood Age</Link></li>
              <li><Link href="/category/biblical-ufo-phenomena" className="hover:text-white transition">Biblical UFO Phenomena</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-white transition">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-center">
          <p>© {currentYear} Scripture Meanings. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
