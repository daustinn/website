'use client'

import React from 'react'
import { CardPreview } from 'ui/components/card-preview'
import { Switch } from '..'
import { MoonIcon, SunIcon } from 'icons'

export function SwitchPreview() {
  return (
    <CardPreview
      to="/lab/switch"
      className="grid h-[200px] place-content-center"
    >
      <h2 className="text-center text-lg font-semibold mb-4 text-stone-600 dark:text-stone-400">
        <span className="font-bold ">Switch</span>
      </h2>
      <div className="scale-125 mx-auto space-y-3 flex flex-col">
        <Switch />
        <Switch
          value={true}
          thumbIcon={(e) =>
            e === true ? (
              <MoonIcon className="p-1" />
            ) : (
              <SunIcon className="p-1" />
            )
          }
        />
      </div>
    </CardPreview>
  )
}
