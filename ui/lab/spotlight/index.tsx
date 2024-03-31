/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unsafe-optional-chaining */
'use client'

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from 'utils'

const transition = {
  type: 'tween',
  ease: 'easeIn',
  duration: 0.2
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  hoverClass?: string
}

export const Spotlight = ({
  children,
  className,
  hoverClass,
  ...restProps
}: Props) => {
  const [itemRef, setItemRef] = React.useState<Array<HTMLLinkElement | null>>(
    []
  )

  const parentRef = React.useRef<HTMLDivElement>(null)
  const parentRect = parentRef.current?.getBoundingClientRect()
  const [hoveredItem, setHoveredItem] = React.useState<number | null>(null)
  const hoveredRect = itemRef[hoveredItem ?? -1]?.getBoundingClientRect()
  const childItems = React.Children.toArray(children)

  const childs = childItems.map((child) => {
    if (!React.isValidElement(child)) return null
    return child
  })

  React.useEffect(() => {
    setItemRef((prev) => prev.slice(0, childs?.length))
  }, [childs?.length])

  const [x, y, width, height]: [number, number, number, number] =
    hoveredRect && parentRect
      ? [
          hoveredRect.left - parentRect.left - 1,
          hoveredRect.top - parentRect.top - 1,
          hoveredRect.width,
          hoveredRect.height
        ]
      : [0, 0, 0, 0]

  return (
    <div
      ref={parentRef}
      className={cn('relative', className)}
      onPointerLeave={() => setHoveredItem(null)}
      {...restProps}
    >
      {childs?.map((child, i) => {
        const { className, ...props } = child?.props
        return React.cloneElement(child as React.ReactElement<any>, {
          ref: (el: any) => {
            if (el) itemRef[i] = el
          },
          onPointerEnter: () => setHoveredItem(i),
          onFocus: () => setHoveredItem(i),
          className: cn('relative z-[1]', className),
          ...props
        })
      })}

      <AnimatePresence>
        {hoveredRect && parentRect && (
          <motion.div
            className={cn(
              'absolute pointer-events-none z-[0] inset-0 rounded-lg bg-stone-300 dark:bg-stone-800/80',
              hoverClass
            )}
            initial={{
              x,
              y,
              width,
              height,
              opacity: 0
            }}
            animate={{
              x,
              y,
              width,
              height,
              opacity: 1
            }}
            exit={{
              x,
              y,
              width,
              height,
              opacity: 0
            }}
            transition={transition}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
