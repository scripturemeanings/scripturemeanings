'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

export default function Header() {
  const [showCategories, setShowCategories] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current)
      }
    }
  }, [])

  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Scripture Meanings
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">
              Blog
            </Link>
            <div 
              className="relative"
              onMouseEnter={() => {
                // Cancel any pending close
                if (closeTimerRef.current) {
                  clearTimeout(closeTimerRef.current)
                  closeTimerRef.current = null
                }
                setShowCategories(true)
              }}
              onMouseLeave={() => {
                // Add delay before closing
                closeTimerRef.current = setTimeout(() => {
                  setShowCategories(false)
                }, 200)
              }}
            >
              <button
                className="text-gray-600 hover:text-gray-900"
              >
                Categories ▾
              </button>
              {showCategories && (
                <>
                  {/* Invisible bridge - CRITICAL FIX: prevents gap hover issue */}
                  <div 
                    className="absolute top-full left-0 w-full h-2 bg-transparent"
                    onMouseEnter={() => {
                      // Cancel closing when hovering bridge
                      if (closeTimerRef.current) {
                        clearTimeout(closeTimerRef.current)
                        closeTimerRef.current = null
                      }
                      setShowCategories(true)
                    }}
                  />
                  {/* Dropdown menu - NO gap (mt-0 instead of mt-2) */}
                  <div
                    className="absolute top-full left-0 mt-0 w-64 bg-white shadow-lg rounded-lg border border-slate-200 py-2 z-50"
                    onMouseEnter={() => {
                      // Cancel closing when hovering dropdown
                      if (closeTimerRef.current) {
                        clearTimeout(closeTimerRef.current)
                        closeTimerRef.current = null
                      }
                      setShowCategories(true)
                    }}
                  >
                  <Link
                    href="/category/dreams"
                    className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                  >
                    💭 Biblical Dreams
                  </Link>
                  <Link
                    href="/category/numbers"
                    className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                  >
                    🔢 Biblical Numbers
                  </Link>
                  <Link
                    href="/category/bible-answers"
                    className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                  >
                    📖 Bible Answers
                  </Link>
                  <Link
                    href="/category/pre-flood-age"
                    className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                  >
                    ⛰️ Pre-Flood Age
                  </Link>
                  <Link
                    href="/category/biblical-ufo-phenomena"
                    className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                  >
                    🛸 Biblical UFO Phenomena
                  </Link>
                  <div className="border-t border-slate-200 mt-2 pt-2">
                    <Link
                      href="/categories"
                      className="block px-4 py-2 text-blue-600 font-semibold hover:bg-slate-50"
                    >
                      View All Categories →
                    </Link>
                  </div>
                </div>
                </>
              )}
            </div>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            aria-label="Toggle menu"
          >
            {showMobileMenu ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {showMobileMenu && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/blog" 
                className="text-gray-600 hover:text-gray-900 px-4 py-2"
                onClick={() => setShowMobileMenu(false)}
              >
                Blog
              </Link>
              <Link 
                href="/categories" 
                className="text-gray-600 hover:text-gray-900 px-4 py-2"
                onClick={() => setShowMobileMenu(false)}
              >
                Categories
              </Link>
              <Link 
                href="/about" 
                className="text-gray-600 hover:text-gray-900 px-4 py-2"
                onClick={() => setShowMobileMenu(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-600 hover:text-gray-900 px-4 py-2"
                onClick={() => setShowMobileMenu(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
