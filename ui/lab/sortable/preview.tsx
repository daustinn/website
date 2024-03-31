'use client'

import React from 'react'
import { CardPreview } from 'ui/components/card-preview'
import { Sortable, SortableItem } from '.'

export function SortablePreview() {
  const [items, setItems] = React.useState(['1', '2', '3'])
  const [imgs, setImgs] = React.useState([
    '/lab/01.webp',
    '/lab/02.webp',
    '/lab/03.webp',
    '/lab/04.webp'
  ])

  return (
    <CardPreview
      to="/lab/sortable"
      className="grid aspect-square place-content-center"
    >
      <h2 className="text-center text-lg font-semibold mb-4 text-stone-600 dark:text-stone-400">
        <span className="font-bold">Sortable</span>
      </h2>
      <div className="divide-y gap-4 grid dark:divide-stone-800">
        <Sortable
          onChange={setItems}
          className="flex flex-wrap gap-2 justify-center font-semibold"
        >
          {items.map((e) => (
            <SortableItem
              className="w-28 aspect-square bg-gradient-to-br from-rose-500 to-yellow-500 grid place-content-center rounded-3xl"
              key={e}
              id={e}
            >
              {e}
            </SortableItem>
          ))}
        </Sortable>
        <Sortable
          onChange={setImgs}
          className="flex flex-wrap pt-4 gap-2 font-semibold"
        >
          {imgs.map((e, i) => (
            <SortableItem
              className="w-28 aspect-square overflow-hidden rounded-3xl"
              key={i}
              id={e}
            >
              <img
                loading="lazy"
                src={e}
                className="w-full h-full object-cover"
                alt=""
              />
            </SortableItem>
          ))}
        </Sortable>
      </div>
    </CardPreview>
  )
}
