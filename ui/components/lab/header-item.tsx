'use client'

import { ExternalIcon } from 'icons'
import React from 'react'
import { Button } from 'ui/lab'

type Props = {
  title: string
  date: string
  dependencies?: Array<{
    name: string
    url: string
  }>
  blurBackground?: string
}

export function HeaderItem({
  title,
  date,
  dependencies,
  blurBackground
}: Props) {
  const getCurrentUrl = () => {
    return typeof window !== 'undefined' ? window.location.href : ''
  }

  const onShare = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=Check this out! ${getCurrentUrl()}`,
      '_blank'
    )
  }
  return (
    <header className="px-2">
      <span
        className={`h-[100%] w-full fixed bg-gradient-to-b from-lime-500/10 to-lime-500/5 dark:from-lime-600/5 dark:to-lime-700/0 select-none pointer-events-none inset-x-0 top-0 ${blurBackground}`}
      />
      <div className="flex items-center">
        <div>
          <h1 className="font-semibold text-lg">{title}</h1>
          <p className="opacity-70">{date}</p>
        </div>
        <Button
          onClick={onShare}
          className="ml-auto border font-semibold p-2 px-5 rounded-full border-stone-300 dark:border-stone-800"
        >
          Share on twitter
        </Button>
      </div>
      {dependencies && (
        <div className="dark:bg-black bg-white mt-3 w-fit rounded-xl p-4">
          <h2 className="font-semibold">Dependencies</h2>
          <ul className="space-y-1 dark:text-stone-400 text-stone-600">
            {dependencies.map((dependency, index) => (
              <li key={index}>
                <a
                  href={dependency.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  {dependency.name}
                  <ExternalIcon className="w-5 inline-block" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
