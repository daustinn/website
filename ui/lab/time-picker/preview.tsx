'use client'

import React from 'react'
import { CardPreview } from 'ui/components/card-preview'
import { TimePicker } from '.'

export function TimePickerPreview() {
  return (
    <CardPreview to="/lab/time-picker">
      <h2 className="text-center text-lg font-semibold mb-4 text-stone-500">
        <span className="font-bold">Material Design - Time Picker</span>
      </h2>
      <div className="flex flex-col items-center gap-5 justify-center">
        <TimePicker />
      </div>
    </CardPreview>
  )
}
