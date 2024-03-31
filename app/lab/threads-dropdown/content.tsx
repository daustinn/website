'use client'

import React from 'react'
import { Button, DropDownThreads } from 'ui/lab'
import { BlockCode } from 'ui/components'

const codeBlock = `'use client'

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
`

const codeBlockPreview = `import { DropDownThreads } from '...your path here'

export const Component = (): JSX.Element  => (
    <>
      <DropDownThreads
        sencible
        trigger={({ open }) => (
          <Button
            className={\`w-7 aspect-square space-y-1.5 hover:text-black dark:hover:text-white block text-stone-500 \${
              open ? 'dark:text-white text-black' : ''
            }\`}
          >
            <span className="block w-full h-[3px] bg-current rounded-full" />
            <span className="block w-[80%] h-[3px] bg-current rounded-full ml-auto" />
          </Button>
        )}
      >
        {[
          'Appareance',
          'Setting',
          'Saved',
          'Your likes',
          'Report a Problem'
        ].map((item, index) => (
          <a
            href="#"
            key={index}
            className="p-3 block first:rounded-t-[inherit] last:rounded-b-[inherit] font-semibold"
          >
            {item}
          </a>
        ))}
        <Button
          className="p-3 text-left block first:rounded-t-[inherit] last:rounded-b-[inherit] font-semibold"
          onClick={() => window.alert('Log out')}
        >
          Log out
        </Button>
      </DropDownThreads>
      <DropDownThreads
        sencible
        trigger={({ open }) => (
          <Button
            className={\`w-10 p-1 hover:dark:bg-stone-800/50 rounded-full aspect-square space-y-1.5 hover:text-black dark:hover:text-white block text-stone-500 \${
              open ? 'dark:text-white text-black dark:bg-stone-800/50' : ''
            }\`}
          >
            <svg
              aria-label="More"
              role="img"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <circle cx="12" cy="12" r="1.5"></circle>
              <circle cx="6" cy="12" r="1.5"></circle>
              <circle cx="18" cy="12" r="1.5"></circle>
            </svg>
          </Button>
        )}
      >
        {['Save', 'Hide', 'Mute', 'Block', 'Report'].map((item, index) => (
          <Button
            key={index}
            className="p-3 text-left block first:rounded-t-[inherit] last:rounded-b-[inherit] font-semibold"
            onClick={() => window.alert(item)}
          >
            {index === 3 || index === 4 ? (
              <span className="text-red-600">{item}</span>
            ) : (
              item
            )}
          </Button>
        ))}
      </DropDownThreads>
    </>
)
`

export function Content() {
  return (
    <div className="mt-4 space-y-10">
      <div className="rounded-3xl flex dark:bg-stone-900 bg-white justify-center gap-10 p-10 animate-fade-in relative shadow-[rgba(0,_0,_0,_0.25)_0px_5px_50px_-12px]">
        <DropDownThreads
          sencible
          trigger={({ open }) => (
            <Button
              className={`w-7 aspect-square space-y-1.5 hover:text-black dark:hover:text-white block text-stone-500 ${
                open ? 'dark:text-white text-black' : ''
              }`}
            >
              <span className="block w-full h-[3px] bg-current rounded-full" />
              <span className="block w-[80%] h-[3px] bg-current rounded-full ml-auto" />
            </Button>
          )}
        >
          {[
            'Appareance',
            'Setting',
            'Saved',
            'Your likes',
            'Report a Problem'
          ].map((item, index) => (
            <a
              href="#"
              key={index}
              className="p-3 block first:rounded-t-[inherit] last:rounded-b-[inherit] font-semibold"
            >
              {item}
            </a>
          ))}
          <Button
            className="p-3 text-left block first:rounded-t-[inherit] last:rounded-b-[inherit] font-semibold"
            onClick={() => window.alert('Log out')}
          >
            Log out
          </Button>
        </DropDownThreads>
        <DropDownThreads
          sencible
          trigger={({ open }) => (
            <Button
              className={`w-10 p-1 hover:dark:bg-stone-800/50 rounded-full aspect-square space-y-1.5 hover:text-black dark:hover:text-white block text-stone-500 ${
                open ? 'dark:text-white text-black dark:bg-stone-800/50' : ''
              }`}
            >
              <svg
                aria-label="More"
                role="img"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <circle cx="12" cy="12" r="1.5"></circle>
                <circle cx="6" cy="12" r="1.5"></circle>
                <circle cx="18" cy="12" r="1.5"></circle>
              </svg>
            </Button>
          )}
        >
          {['Save', 'Hide', 'Mute', 'Block', 'Report'].map((item, index) => (
            <Button
              key={index}
              className="p-3 text-left block first:rounded-t-[inherit] last:rounded-b-[inherit] font-semibold"
              onClick={() => window.alert(item)}
            >
              {index === 3 || index === 4 ? (
                <span className="text-red-600">{item}</span>
              ) : (
                item
              )}
            </Button>
          ))}
        </DropDownThreads>
      </div>
      <BlockCode fileName="page.tsx" codeBlock={codeBlockPreview} />
      <BlockCode fileName="ThreadDropDown.tsx" codeBlock={codeBlock} />
    </div>
  )
}
