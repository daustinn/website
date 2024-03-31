import React from 'react'
import { CardPreview } from 'ui/components/card-preview'
import { Spinner } from '.'

export function SpinnerPreview() {
  return (
    <CardPreview
      to="/lab/spinner"
      className="grid h-[300px] place-content-center"
    >
      <h2 className="text-center text-lg font-semibold mb-4 text-stone-500">
        <span className="font-bold">Spinner</span>
      </h2>
      <div className="scale-125 space-y-3 flex flex-col">
        <Spinner className="w-7 mx-auto" />
      </div>
    </CardPreview>
  )
}
