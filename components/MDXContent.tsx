'use client'

import { useMDXComponent } from 'next-contentlayer2/hooks'

const components = {
  // Add custom components for MDX elements
  h1: ({ children }: any) => (
    <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
  ),
  h2: ({ children }: any) => (
    <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>
  ),
  h3: ({ children }: any) => (
    <h3 className="text-2xl font-bold mt-6 mb-3">{children}</h3>
  ),
  h4: ({ children }: any) => (
    <h4 className="text-xl font-bold mt-4 mb-2">{children}</h4>
  ),
  p: ({ children }: any) => (
    <p className="mb-4 leading-7">{children}</p>
  ),
  ul: ({ children }: any) => (
    <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
  ),
  ol: ({ children }: any) => (
    <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
  ),
  li: ({ children }: any) => (
    <li className="ml-4">{children}</li>
  ),
  blockquote: ({ children }: any) => (
    <blockquote className="border-l-4 border-blue-500 bg-blue-50 pl-4 py-2 my-4 italic">
      {children}
    </blockquote>
  ),
  strong: ({ children }: any) => (
    <strong className="font-bold">{children}</strong>
  ),
  em: ({ children }: any) => (
    <em className="italic">{children}</em>
  ),
  a: ({ href, children }: any) => (
    <a
      href={href}
      className="text-blue-600 hover:text-blue-800 underline"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  img: ({ src, alt }: any) => (
    <img
      src={src}
      alt={alt}
      className="rounded-lg my-8 w-full"
    />
  ),
  hr: () => <hr className="my-8 border-gray-300" />,
}

export default function MDXContent({ code }: { code: string }) {
  const Component = useMDXComponent(code)
  
  return <Component components={components} />
}
