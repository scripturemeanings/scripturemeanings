import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

function extractSlug(path: string): string {
  const parts = path.split('/')
  const filename = parts[parts.length - 1]
  
  if (filename === 'index') {
    const parentDir = parts[parts.length - 2]
    return parentDir.replace(/^\d{4}-\d{2}-\d{2}-/, '')
  }
  
  return filename.replace(/^\d{4}-\d{2}-\d{2}-/, '')
}

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    updated: { type: 'date', required: false }, // NEW: Last updated date
    description: { type: 'string' },
    tags: { type: 'list', of: { type: 'string' } },
    categories: { type: 'list', of: { type: 'string' } },
    coverImage: { type: 'string' },
    heroImage: { type: 'string' },
    heroAlt: { type: 'string' },
    keywords: { type: 'list', of: { type: 'string' }, required: false },
    featured: { type: 'boolean', required: false },
    pillar: { type: 'boolean', required: false },
    wordCount: { type: 'number', required: false },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => extractSlug(post._raw.flattenedPath),
    },
    url: {
      type: 'string',
      resolve: (post) => `/${extractSlug(post._raw.flattenedPath)}`,
    },
  },
}))

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `pages/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: false }, // Pages have dates too
    description: { type: 'string' },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (page) => extractSlug(page._raw.flattenedPath),
    },
    url: {
      type: 'string',
      resolve: (page) => `/${extractSlug(page._raw.flattenedPath)}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Page],
})
