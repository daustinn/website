'use client'

import React from 'react'
import { AnimatePresence, motion, useDragControls } from 'framer-motion'
import { XmarkIcon } from 'icons'
import { Portal, Button } from 'ui/lab'
const transition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.25
}
type ReturnTypeChild = {
  open: boolean
  setOpen: (open: boolean) => void
}
type Props = {
  children?: React.ReactNode | ((r: ReturnTypeChild) => React.ReactNode)
  trigger: React.ReactNode | ((r: ReturnTypeChild) => React.ReactNode)
}
export const Drawer = (props: Props) => {
  const handlerRef = React.useRef<HTMLDivElement>(null)
  const contentRef = React.useRef<HTMLDivElement>(null)

  const [open, setOpen] = React.useState<boolean>(false)
  const [offsetHeight, setOffsetHeight] = React.useState<number>(0)

  const dragControls = useDragControls()

  React.useEffect(() => {
    if (contentRef.current) setOffsetHeight(contentRef.current.offsetHeight)
  }, [open])

  const finalChild =
    typeof props.children === 'function'
      ? props.children({
          open,
          setOpen
        })
      : props.children

  const finalTrigger =
    typeof props.trigger === 'function'
      ? props.trigger({ open, setOpen })
      : props.trigger

  return (
    <>
      {React.cloneElement(finalTrigger as React.ReactElement, {
        onClick: () => setOpen(true)
      })}

      <AnimatePresence>
        {open && (
          <Portal>
            <>
              <motion.div
                className="fixed inset-0 bg-stone-800/60 dark:bg-black/60 z-20"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={transition}
              />

              <motion.div
                role="dialog"
                ref={contentRef}
                className="fixed shadow-lg max-h-[90svh] rounded-t-2xl bottom-0 inset-x-0 bg-white w-full z-30 flex flex-col dark:bg-stone-900"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                drag="y"
                dragConstraints={{ top: 0 }}
                dragListener={false}
                dragControls={dragControls}
                dragTransition={{ bounceDamping: 20, max: 10 }}
                dragElastic={{ top: 0.05, bottom: 1 }}
                transition={transition}
                whileTap={{ boxShadow: '0px 0px 15px rgba(0,0,0,0.2)' }}
                onDragEnd={(e, a) => {
                  if (a.offset.y > offsetHeight / 3) setOpen(false)
                }}
              >
                <div
                  className="select-none px-2 py-5 dark:border-stone-700"
                  ref={handlerRef}
                  draggable="false"
                  onPointerDown={(event) => dragControls.start(event)}
                >
                  <div className="flex-shrink-0 rounded-full mx-auto w-16 h-1.5 bg-gray-300 dark:bg-stone-700" />
                  <div className="absolute max-md:hidden top-4 z-[1] right-4">
                    <Button
                      className="bg-stone-200 w-8 rounded-full p-1.5 dark:bg-stone-600 dark:hover:bg-stone-700 dark:text-black"
                      onClick={() => setOpen(false)}
                    >
                      <XmarkIcon />
                    </Button>
                  </div>
                </div>
                {finalChild}
                <div className="fixed top-full w-full h-[200px] bg-inherit pointer-events-none" />
              </motion.div>
            </>
          </Portal>
        )}
      </AnimatePresence>
    </>
  )
}
