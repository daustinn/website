'use client'

import { ExternalIcon } from 'icons'
import React from 'react'

type Props = {
  references?: Array<{
    name: string
    url: string
  }>
}

export function FooterItem({ references }: Props) {
  return (
    <footer className="px-2">
      {references && (
        <div className="mt-3 w-fit rounded-xl">
          <h2 className="font-semibold">References</h2>
          <ul className="space-y-1 dark:text-stone-400 text-stone-600">
            {references.map((reference, index) => (
              <li key={index}>
                <a
                  href={reference.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  {reference.name}
                  <ExternalIcon className="w-5 inline-block" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </footer>
  )
}
