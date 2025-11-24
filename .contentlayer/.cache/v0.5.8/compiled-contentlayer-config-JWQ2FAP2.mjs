// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
function extractSlug(path) {
  const parts = path.split("/");
  const filename = parts[parts.length - 1];
  if (filename === "index") {
    const parentDir = parts[parts.length - 2];
    return parentDir.replace(/^\d{4}-\d{2}-\d{2}-/, "");
  }
  return filename.replace(/^\d{4}-\d{2}-\d{2}-/, "");
}
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    updated: { type: "date", required: false },
    // NEW: Last updated date
    description: { type: "string" },
    tags: { type: "list", of: { type: "string" } },
    categories: { type: "list", of: { type: "string" } },
    coverImage: { type: "string" },
    heroImage: { type: "string" },
    heroAlt: { type: "string" },
    keywords: { type: "list", of: { type: "string" }, required: false },
    featured: { type: "boolean", required: false },
    pillar: { type: "boolean", required: false },
    wordCount: { type: "number", required: false }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => extractSlug(post._raw.flattenedPath)
    },
    url: {
      type: "string",
      resolve: (post) => `/${extractSlug(post._raw.flattenedPath)}`
    }
  }
}));
var Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: false },
    // Pages have dates too
    description: { type: "string" }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (page) => extractSlug(page._raw.flattenedPath)
    },
    url: {
      type: "string",
      resolve: (page) => `/${extractSlug(page._raw.flattenedPath)}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Page]
});
export {
  Page,
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-JWQ2FAP2.mjs.map
