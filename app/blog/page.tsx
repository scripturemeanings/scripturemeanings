import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'
import { compareDesc } from 'date-fns'

export default function BlogPage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  // DEBUG: Log what slugs we're generating
  console.log('All posts:', posts.map(p => ({ 
    title: p.title, 
    slug: p.slug,
    url: p.url,
    rawPath: p._raw.flattenedPath 
  })))

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post._id} className="border-b pb-8">
            <Link href={post.url} className="group">
              <h2 className="mb-2 text-2xl font-semibold group-hover:text-blue-600">
                {post.title}
              </h2>
              <time className="mb-4 block text-sm text-gray-600">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              {post.description && (
                <p className="text-gray-700">{post.description}</p>
              )}
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}


