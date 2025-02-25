'use client'

import React from 'react'
import { Highlight as HighlightPrism } from 'prism-react-renderer'
import { prismDarkTheme } from 'lib/prism-theme'

export default function Highlight({
  language = 'tsx',
  copyValue,
  title,
  actionChild,
  action,
  info,
  code,
  showCopyButton = true,
  copyButtonTop = true
}: {
  copyValue?: string
  copyButtonTop?: boolean
  title?: string
  info?: string
  actionChild?: React.ReactNode
  action?: () => void
  showCopyButton?: boolean
  code?: string
  language?:
    | 'tsx'
    | 'jsx'
    | 'js'
    | 'md'
    | 'html'
    | 'css'
    | 'json'
    | 'yaml'
    | 'yml'
    | 'sh'
    | 'bash'
    | 'shell'
    | 'diff'
    | 'plaintext'
    | 'text'
    | 'graphql'
    | 'curl'
}) {
  const [coping, setCoping] = React.useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(copyValue ?? code ?? '')
    setCoping(true)
    setTimeout(() => setCoping(false), 2000)
  }
  return (
    <div className="w-full flex flex-col overflow-auto group h-full relative text-stone-100 bg-[#161514] rounded-xl border dark:shadow-[0_0_10px_rgba(0,0,0,.5)] shadow-[0_0_10px_rgba(0,0,0,.2)] border-stone-500/20 text-sm">
      {title && (
        <nav className="border-b border-dashed border-stone-500/20 p-2.5 text-white/40">
          {title}
        </nav>
      )}
      <HighlightPrism
        theme={prismDarkTheme}
        code={code ?? ''}
        language={language}
      >
        {({ tokens, getLineProps, getTokenProps, className, style }) => (
          <pre className={`p-3 px-3 ${className}`} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </HighlightPrism>
      {(info || action) && (
        <div className="pl-3 pr-1 pb-1 text-xs">
          {info && (
            <p className="grow pointer-events-auto text-wrap text-white/40">
              {info}
              {action && (
                <button
                  onClick={action}
                  className="border-2 float-right rounded-full text-white font-medium border-stone-400 p-0.5 px-2 hover:scale-105 transition-transform active:scale-95"
                >
                  {actionChild}
                </button>
              )}
            </p>
          )}
        </div>
      )}
      {showCopyButton && (
        <div
          data-top={copyButtonTop ? '' : undefined}
          className="absolute opacity-0 group-hover:opacity-100 transition-opacity inset-y-0 right-0 p-3 flex items-center data-[top]:items-start pointer-events-none"
        >
          <button
            onClick={handleCopy}
            title="Copy to clipboard"
            className="flex z-[1] hover:text-white text-white/50 text-xs font-medium hover:scale-110 active:scale-95 pointer-events-auto transition-transform ml-auto pl-2 items-center justify-center"
          >
            {coping ? 'Copied!' : 'Copy'}
          </button>
        </div>
      )}
    </div>
  )
}
