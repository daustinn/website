/** @type {import('next').NextConfig} */

import createMDX from '@next/mdx'
import createNextIntlPlugin from 'next-intl/plugin'

import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import remarkSmartypants from 'remark-smartypants'
import remarkHeadingId from 'remark-heading-id'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkToc from 'remark-toc'
import remarkEmoji from 'remark-emoji'
import remarkDirective from 'remark-directive'

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkBreaks,
      remarkSmartypants,
      remarkHeadingId,
      rehypeAutolinkHeadings,
      remarkToc,
      remarkEmoji,
      remarkDirective
    ],
    rehypePlugins: []
  }
})

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(withMDX(nextConfig))
