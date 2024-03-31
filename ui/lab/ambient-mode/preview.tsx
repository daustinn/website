import React from 'react'
import { CardPreview } from 'ui/components/card-preview'
import { AmbientModeVideo } from '.'
import { ToggleTheme } from 'ui/components/nav/toggle-theme'

export function AmbientModePreview() {
  return (
    <CardPreview
      to="/lab/ambient-mode"
      className="grid py-20 place-content-center dark:bg-black overflow-hidden"
    >
      <span className="mx-auto">
        <ToggleTheme />
      </span>
      <h2 className="text-center text-lg font-semibold mb-4 text-stone-600 dark:text-stone-400">
        <span className="font-bold">Ambient mode only Dark mode</span>
      </h2>
      <div className="flex items-center justify-center">
        <AmbientModeVideo
          controls={false}
          autoPlay
          style={{
            width: 300
          }}
          src="/lab/ambient.mp4"
        />
      </div>
    </CardPreview>
  )
}
