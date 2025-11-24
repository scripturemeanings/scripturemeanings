type Post = {
  title: string
  description: string
  date: string
  updated?: string
  slug: string
  categories: string[]
  coverImage?: string
  tags?: string[]
  wordCount?: number
}

export function generateArticleSchema(post: Post, faqs?: Array<{question: string, answer: string}>) {
  const baseUrl = 'https://scripturemeanings.com'
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${baseUrl}/${post.slug}/#article`,
        "headline": post.title,
        "description": post.description,
        "datePublished": post.date,
        "dateModified": post.updated || post.date,
        "author": {
          "@type": "Person",
          "name": "Marcus"
        },
        "publisher": {
          "@type": "Organization",
          "name": "ScriptureMeanings.com",
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/logo.png`
          }
        },
        "mainEntityOfPage": `${baseUrl}/${post.slug}`,
        ...(post.coverImage && {
          "image": {
            "@type": "ImageObject",
            "url": post.coverImage.startsWith('http') ? post.coverImage : `${baseUrl}${post.coverImage}`,
            "width": 1200,
            "height": 630
          }
        }),
        "articleSection": post.categories[0],
        "keywords": post.tags && post.tags.length > 0 
          ? post.tags.join(", ") 
          : post.categories.join(", "),
        ...(post.wordCount && { "wordCount": post.wordCount })
      },
      // Add FAQ schema if provided
      ...(faqs && faqs.length > 0 ? [{
        "@type": "FAQPage",
        "@id": `${baseUrl}/${post.slug}/#faq`,
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }] : []),
      // Breadcrumb
      {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/${post.slug}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": baseUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": post.categories[0],
            "item": `${baseUrl}/category/${post.categories[0]}`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": `${baseUrl}/${post.slug}`
          }
        ]
      }
    ]
  }
  
  return articleSchema
}

