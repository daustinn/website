'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ToggleTheme } from './toggle-theme'
import { ExternalIcon } from 'icons'
import { Spotlight } from 'ui/lab'

export function Nav() {
  const pathname = usePathname()
  const items = [
    { name: 'Home', href: '/' },
    { name: 'Lab', href: '/lab' },
    { name: 'Github', href: 'https://github.com/daustinn', isExternal: true },
    {
      name: 'Twitter',
      href: 'https://twitter.com/daustinndev',
      isExternal: true
    }
  ]
  return (
    <header className="fixed bottom-0 pointer-events-none w-full z-30 flex justify-center py-5">
      <Spotlight
        hoverClass="rounded-xl dark:bg-black/60 bg-black/5"
        className="flex p-1.5 shadow-[rgba(0,_0,_0,_0.25)_0px_5px_50px_-12px] pointer-events-auto dark:bg-stone-900 backdrop-blur-md bg-stone-100 font-semibold text-base rounded-2xl border dark:border-stone-800/50 dark:text-stone-300 text-stone-600"
      >
        {items.map((item, index) => {
          const isSelected =
            item.href === '/'
              ? pathname === '/'
              : pathname.startsWith(item.href)

          return (
            <Link
              key={index}
              target={item.isExternal ? '_blank' : undefined}
              title={`Go to page ${item.name}`}
              className="p-2 px-3 rounded-xl data-[active=true]:dark:text-white data-[active=true]:text-black data-[active=true]:font-bold transition-all"
              href={item.href}
              data-active={isSelected}
            >
              {item.name}
              {item.isExternal && <ExternalIcon className="w-6 inline-block" />}
            </Link>
          )
        })}
        <div>
          <ToggleTheme />
        </div>
      </Spotlight>
    </header>
  )
}
