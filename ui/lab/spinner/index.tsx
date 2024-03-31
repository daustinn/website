import React from 'react'
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
