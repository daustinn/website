'use client'

import React from 'react'

type Props = React.HTMLProps<HTMLPreElement>

export default function Highlight(props: Props) {
  const [coping, setCoping] = React.useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(props.children?.toString() ?? '')
    setCoping(true)
    setTimeout(() => setCoping(false), 2000)
  }
  return (
    <pre
      {...props}
      className="bg-[#141210] mb-4 overflow-auto relative p-3 group [&>code]:bg-transparent rounded-xl border dark:shadow-[0_0_10px_rgba(0,0,0,.5)] shadow-[0_0_10px_rgba(0,0,0,.2)] border-stone-500/20 text-sm"
    >
      {props.children}
      <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity inset-y-0 right-0 p-3 flex items-start pointer-events-none">
        <button
          onClick={handleCopy}
          title="Copy to clipboard"
          className="flex z-[1] hover:text-white text-white/50 text-xs font-medium hover:scale-110 active:scale-95 pointer-events-auto transition-transform ml-auto pl-2 items-center justify-center"
        >
          {coping ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </pre>
  )
}
