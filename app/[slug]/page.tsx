import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import MDXContent from '@/components/MDXContent'
import Breadcrumbs from '@/components/Breadcrumbs'
import CommentForm from '@/components/CommentForm'
import HeroImage from '@/components/HeroImage'
import { generateArticleSchema } from '@/lib/schema'

export const revalidate = 86400 // Revalidate every 24 hours (in seconds)

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = allPosts.find((post) => post.slug === slug)
  
  if (!post) return {}
  
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      images: post.coverImage ? [`/images/${post.coverImage}`] : [],
    },
  }
}

// FAQ data for Elioud post
const elioudFaqs = [
  {
    question: "What does Elioud mean in the Bible?",
    answer: "Elioud (meaning 'mighty ones' or 'offspring') doesn't appear in the canonical Bible but is found in the Book of Enoch. It refers to the second-generation offspring of the Nephilim - the children born when the giant hybrids (Nephilim) reproduced with humans. They represent a further corruption of humanity before the flood."
  },
  {
    question: "Who were the Elioud?",
    answer: "The Elioud were the children of the Nephilim according to ancient Jewish texts like the Book of Enoch. They were considered a second generation of human-angelic hybrid beings - still possessing supernatural strength and size, but to a lesser degree than their Nephilim parents. They contributed to the violence and corruption that led to the flood."
  },
  {
    question: "Are the Elioud mentioned in the Bible?",
    answer: "The term 'Elioud' is not found in canonical Scripture. However, Genesis 6:4's phrase 'and also after that' is interpreted by some ancient Jewish writers as referring to these second-generation beings. The concept helps explain the continued presence of giants and the severity of pre-flood corruption."
  },
  {
    question: "What happened to the Elioud?",
    answer: "According to the Book of Enoch and consistent with Genesis, the Elioud were destroyed in the great flood along with the Nephilim and all other corrupt beings. Only Noah and his family survived. The flood was God's judgment on the corrupted world, including these hybrid beings who had spread violence and wickedness."
  },
  {
    question: "Are there still Elioud today?",
    answer: "No. According to both biblical and extra-biblical accounts, all Elioud (and Nephilim) were destroyed in Noah's flood. While giants like Goliath appeared after the flood, they are not identified as Elioud. The post-flood giants likely had different origins or were simply large humans from certain genetic lines."
  },
  {
    question: "What powers did the Elioud have?",
    answer: "According to the Book of Enoch, the Elioud possessed supernatural strength, great height (though less than the Nephilim), extended lifespans, and access to forbidden knowledge. They were described as mighty warriors who spread violence and corruption. Their abilities came from their mixed angelic-human heritage."
  },
  {
    question: "How do Elioud relate to the Nephilim?",
    answer: "The Elioud were the children of the Nephilim. While the Nephilim were the direct offspring of fallen angels (Watchers) and human women, the Elioud represented the next generation - born when Nephilim reproduced with humans. They were one step further removed from angelic origins but still possessed supernatural characteristics."
  },
  {
    question: "What's the difference between Nephilim and Elioud?",
    answer: "The Nephilim were the first generation—direct offspring of fallen angels (Watchers) and human women. The Elioud were the second generation—children born when Nephilim reproduced with human women. Each generation became progressively more human and less supernatural. The Nephilim possessed the greatest size and power, while the Elioud, though still giants, were smaller and more cunning than their parents."
  },
  {
    question: "Did the three races of giants fight each other?",
    answer: "Yes, according to the Book of Jubilees 7:22. The text describes horrific violence: 'the Giants slew the Naphil, and the Naphil slew the Eljo, and the Eljo mankind, and one man another.' This suggests internal warfare and even cannibalism among the hybrid beings, with violence escalating down the generational chain."
  },
  {
    question: "What happened to the spirits of the Elioud after they died?",
    answer: "According to 1 Enoch 15:8-12, when the physical bodies of the Elioud died, their spirits became 'evil spirits upon the earth.' Since their bodies were mortal but their spirits were immortal, these disembodied spirits couldn't return to heaven or die naturally. Early Jewish and Christian tradition held that these became what we call demons."
  }
]

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = allPosts.find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  // Check if this is the Elioud post and add FAQs
  const isElioudPost = slug === 'elioud-in-the-bible-ancient-lineage-explored-in-sacred-texts'
  const faqs = isElioudPost ? elioudFaqs : undefined

  // Generate comprehensive schema using helper function
  const schema = generateArticleSchema({
    title: post.title,
    description: post.description || '',
    date: post.date,
    updated: post.updated,
    slug: slug,
    categories: post.categories || [],
    coverImage: post.heroImage || post.coverImage,
    tags: post.tags || [],
    wordCount: (post as any).wordCount
  }, faqs)

  // Build breadcrumb items
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
  ]

  // Add category if exists
  if (post.categories && post.categories.length > 0) {
    const primaryCategory = post.categories[0]
    breadcrumbItems.push({
      label: primaryCategory.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      href: `/category/${primaryCategory}`
    })
  }

  // Add current post
  breadcrumbItems.push({
    label: post.title,
    href: ''
  })

  return (
    <>
      {/* Comprehensive Schema Markup (Article + FAQs + Breadcrumbs) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      {/* Add overflow and width constraints */}
      <article className="w-full max-w-4xl mx-auto px-4 py-12 overflow-x-hidden">
        <Breadcrumbs items={breadcrumbItems} />
        
        <header className="mb-8">
          <h1 className="mb-2 text-3xl sm:text-4xl font-bold wrap-break-word">
            {post.title}
          </h1>
          
          <div className="text-sm text-gray-600 mb-6">
            <time dateTime={post.date}>
              Published: {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            {post.updated && (
              <>
                {' • '}
                <time dateTime={post.updated}>
                  Updated: {new Date(post.updated).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </>
            )}
          </div>
          
          <HeroImage post={post} />
        </header>
        
        {/* Add width constraint to prose */}
        <div className="prose prose-lg max-w-none w-full overflow-x-hidden">
          <MDXContent code={post.body.code} />
        </div>
        
        {post.categories && post.categories.length > 0 && (
          <div className="mt-8 pt-8 border-t">
            <p className="text-sm text-gray-600 mb-2">Categories:</p>
            <div className="flex flex-wrap gap-2">
              {post.categories.map((category) => (
                <span
                  key={category}
                  className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        )}

        <CommentForm postSlug={slug} />
      </article>
    </>
  )
}