'use client'

import { useMDXComponent } from 'next-contentlayer2/hooks'
import { useMDXComponents } from '@/mdx-components'

export default function MDXClient({ code }: { code: string }) {
  const components = useMDXComponents({})
  const MDXContent = useMDXComponent(code)
  
  // Pass components as props to the MDX component
  return <MDXContent components={components} />
}



