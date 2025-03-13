/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MDXComponents } from 'mdx/types'
import Link from 'node_modules/next/link'
import Highlight from 'ui/commons/highlight'
import { H1 as h1 } from 'ui/components/h1'
import { H2 as h2 } from 'ui/components/h2'
import { H3 as h3 } from 'ui/components/h3'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1,
    h2,
    h3,
    p: (props) => (
      <p className="text-stone-900 dark:text-stone-300 mb-4" {...props} />
    ),
    a: (props) => {
      const isExternal = props?.href?.startsWith('http')
      return (
        <Link
          href={props.href ?? '#'}
          className="text-[#139973] underline dark:text-[#b4e2d5] hover:dark:text-[#b8f6e4] hover:underline"
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          {...props}
        />
      )
    },
    ul: (props) => (
      <ul
        className="list-disc text-stone-700 dark:text-stone-300 ml-5 mb-4"
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        className="list-decimal text-stone-700 dark:text-stone-300 ml-5 mb-4"
        {...props}
      />
    ),
    li: (props) => <li className="mt-1" {...props} />,
    blockquote: (props) => (
      <blockquote
        className="border-l-4 border-stone-500 dark:border-stone-400 pl-4 italic text-stone-600 dark:text-stone-300 my-4"
        {...props}
      />
    ),
    code: (props) => (
      <code
        className="bg-stone-200/80 dark:bg-stone-800 text-stone-800 dark:text-stone-300 rounded p-px px-1"
        {...props}
      />
    ),
    pre: (props: any) => (
      <Highlight
        language={props?.children?.props?.className?.replace(/language-/, '')}
        code={props?.children?.props?.children.trim()}
      />
    ),
    table: (props) => <table className="w-full text-sm" {...props} />,
    thead: (props) => (
      <thead
        className="border-b text-left border-stone-200 dark:border-stone-700/70"
        {...props}
      />
    ),
    tbody: (props) => (
      <tbody
        className="divide-y divide-stone-300 dark:divide-stone-700/70"
        {...props}
      />
    ),
    tr: (props) => <tr className="" {...props} />,
    th: (props) => (
      <th className="px-3 py-2 text-left font-semibold" {...props} />
    ),
    td: (props) => <td className="px-3 py-1.5" {...props} />,
    input: (props) => (
      <input
        className="form-checkbox h-5 w-5 text-blue-600 dark:text-blue-400 border-stone-300 dark:border-stone-700 focus:ring-blue-500"
        {...props}
      />
    )
  }
}
