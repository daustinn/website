'use client'

import React from 'react'
import { CardPreview } from 'ui/components/card-preview'
import { DropDownThreads } from '.'
import { Button } from '..'

export function ThreadDropDownPreview() {
  return (
    <CardPreview
      to="/lab/threads-dropdown"
      className="grid h-[200px] place-content-center"
    >
      <h2 className="text-center text-lg font-semibold mb-4 text-stone-600 dark:text-stone-400">
        <span className="font-bold">Threads DropDown</span>
      </h2>
      <div className="flex justify-center">
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
      </div>
    </CardPreview>
  )
}
