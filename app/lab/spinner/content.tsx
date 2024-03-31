'use client'

import React from 'react'
import { Spinner } from 'ui/lab'
import { BlockCode } from 'ui/components'

const codeBlock = `import React from 'react'
import { cn } from 'utils'
import './style.css'

export function Spinner({
  // eslint-disable-next-line react/prop-types
  className,
  ...rest
}: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      className={cn(
        'w-6 aspect-square relative text-stone-600 dark:text-neutral-400',
        className
      )}
      viewBox="0 0 66 66"
      fill="none"
      {...rest}
    >
      <rect x="29" width="8" height="21" rx="4" fill="currentColor" />
      <rect
        fillOpacity={0.8}
        x="7"
        y="12.6569"
        width="8"
        height="21"
        rx="4"
        transform="rotate(-45 7 12.6569)"
        fill="currentColor"
      />
      <rect
        fillOpacity={0.7}
        y="37"
        width="8"
        height="21"
        rx="4"
        transform="rotate(-90 0 37)"
        fill="currentColor"
      />
      <rect
        fillOpacity={0.6}
        x="21.8491"
        y="39"
        width="8"
        height="21"
        rx="4"
        transform="rotate(45 21.8491 39)"
        fill="currentColor"
      />
      <rect
        fillOpacity={0.5}
        x="29"
        y="45"
        width="8"
        height="21"
        rx="4"
        fill="currentColor"
      />
      <rect
        fillOpacity={0.3}
        x="38"
        y="43.6569"
        width="8"
        height="21"
        rx="4"
        transform="rotate(-45 38 43.6569)"
        fill="currentColor"
      />
      <rect
        fillOpacity={0.1}
        x="45"
        y="37"
        width="8"
        height="21"
        rx="4"
        transform="rotate(-90 45 37)"
        fill="currentColor"
      />
      <rect
        fillOpacity={0}
        x="53.8491"
        y="7"
        width="8"
        height="21"
        rx="4"
        transform="rotate(45 53.8491 7)"
        fill="currentColor"
      />
    </svg>
  )
}
`
const codeBlockCSS = `svg rect {
  animation: lds-spinner 0.8s infinite;
  fill-opacity: 0;
}

svg rect:nth-child(1) {
  animation-delay: 0.8s;
}

svg rect:nth-child(2) {
  animation-delay: 0.7s;
}

svg rect:nth-child(3) {
  animation-delay: 0.6s;
}

svg rect:nth-child(4) {
  animation-delay: 0.5s;
}

svg rect:nth-child(5) {
  animation-delay: 0.4s;
}

svg rect:nth-child(6) {
  animation-delay: 0.3s;
}

svg rect:nth-child(7) {
  animation-delay: 0.2s;
}

svg rect:nth-child(8) {
  animation-delay: 0.1s;
}

@keyframes lds-spinner {
  0% {
    fill-opacity: 1;
  }
  100% {
    fill-opacity: 0;
  }
}
`

const codeBlockPreview = `import { Spinner } from '...your path here'

export const Component = (): JSX.Element  => (
    <>
      <Spinner className="w-36" />
      <Spinner className="dark:text-blue-500 w-10 text-blue-600" />
      <Spinner />
      <Spinner className="dark:text-rose-500 w-4 text-rose-600" />
    </>
)
`

export function Content() {
  return (
    <div className="mt-4 space-y-10">
      <div className="rounded-3xl animate-fade-in relative bg-white dark:bg-stone-900/80 shadow-[rgba(0,_0,_0,_0.25)_0px_5px_50px_-12px]">
        <div className="mx-auto py-6 px-7 gap-9 flex justify-center items-center">
          <Spinner className="w-36" />
          <Spinner className="dark:text-blue-500 w-10 text-blue-600" />
          <Spinner />
          <Spinner className="dark:text-rose-500 w-4 text-rose-600" />
        </div>
        <BlockCode fileName="page.tsx" codeBlock={codeBlockPreview} />
      </div>
      <BlockCode fileName="spinner.tsx" codeBlock={codeBlock} />
      <BlockCode fileName="style.css" codeBlock={codeBlockCSS} />
    </div>
  )
}
