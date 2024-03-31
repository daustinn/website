import React from 'react'
import { CardPreview } from 'ui/components/card-preview'
import { Spotlight } from '.'
import { GithubIcon } from 'icons'
import { Spinner } from '..'

export function SpotlightPreview() {
  return (
    <CardPreview
      to="/lab/spotlight"
      className="grid h-[200px] place-content-center"
    >
      <h2 className="text-center text-lg font-semibold mb-4 text-stone-600 dark:text-stone-400">
        <span className="font-bold">Spotlight</span>
      </h2>
      <Spotlight
        hoverClass="dark:bg-black rounded-2xl"
        className="flex flex-wrap justify-center font-semibold dark:text-stone-300"
      >
        <button className="p-4">Button Element</button>
        <a href="#" className="p-4">
          Link Element
        </a>
        <div className="p-4 min-w-max">
          <GithubIcon className="w-5" />
        </div>
        <div className="p-4">
          <Spinner className="w-6" />
        </div>
      </Spotlight>
    </CardPreview>
  )
}
