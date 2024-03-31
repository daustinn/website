'use client'

import React from 'react'
import * as Popover from '@radix-ui/react-popover'
import { Transition, motion } from 'framer-motion'

const transition: Transition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.25
}

type ReturnTypeChild = {
  open: boolean
  setOpen: (open: boolean) => void
}

interface Props extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  children?: React.ReactNode | ((r: ReturnTypeChild) => React.ReactNode)
  trigger: React.ReactNode | ((r: ReturnTypeChild) => React.ReactNode)
  sencible?: boolean
}

export function DropDownThreads({
  children,
  trigger,
  sencible,
  ...rest
}: Props) {
  const [open, setOpen] = React.useState(false)

  const finalChild =
    typeof children === 'function'
      ? children({
          open,
          setOpen
        })
      : children

  const finalTrigger =
    typeof trigger === 'function' ? trigger({ open, setOpen }) : trigger

  const childrenArray = React.Children.map(finalChild, (child) => {
    const reactElement = child as React.ReactElement
    return React.cloneElement(reactElement, {
      onClick: () => {
        reactElement.props?.onClick?.()
        sencible && setOpen(false)
      }
    })
  })

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>{finalTrigger}</Popover.Trigger>
      {open && (
        <Popover.Portal>
          <Popover.Content sideOffset={10} align="center" asChild {...rest}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={transition}
              className="z-20 w-48 border flex flex-col divide-y dark:divide-[rgba(255,_255,_255,_0.15)] bg-white dark:border-[rgba(255,_255,_255,_0.04)] dark:bg-stone-800 rounded-3xl shadow-[rgba(0,_0,_0,_0.25)_0px_5px_50px_-12px]"
            >
              {childrenArray}
            </motion.div>
          </Popover.Content>
        </Popover.Portal>
      )}
    </Popover.Root>
  )
}
