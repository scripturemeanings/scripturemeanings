import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import MDXClient from '@/components/MDXClient'
import HeroImage from '@/components/HeroImage'

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = allPosts.find((post) => post._raw.flattenedPath === slug)
  if (!post) return {}
  
  return {
    title: post.title,
    description: post.description,
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = allPosts.find((post) => post._raw.flattenedPath === slug)

  if (!post) {
    console.log('Available posts:', allPosts.map(p => p._raw.flattenedPath))
    console.log('Looking for slug:', slug)
    notFound()
  }

  return (
    <article className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <h1 className="mb-2 text-4xl font-bold">{post.title}</h1>
        <time className="text-sm text-gray-600">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        <HeroImage post={post} />
      </header>
      <div className="prose prose-lg max-w-none">
        <MDXClient code={post.body.code} />
      </div>
    </article>
  )
}


