'use client'

import React from 'react'
import { TimePicker } from 'ui/lab'

export default function Tumblr() {
  return (
    <div className="h-screen w-full grid place-content-center">
      <span
        className={`h-[100%] w-full fixed bg-gradient-to-b from-lime-500/10 to-lime-500/5 dark:from-lime-600/5 dark:to-lime-700/0 select-none pointer-events-none inset-x-0 top-0`}
      />
      <div className="mx-auto mt-3">
        <div className="flex mt-4 items-center gap-4">
          <TimePicker />
          <TimePicker
            defaultValue={'12:57 AM'} // 12:57 AM | 12:57 PM | Date Format
            defaultType="select" // select | write
            onDateChange={(e) => console.log(`Date: ${e}`)}
            onHourChange={(e) => console.log(`Hour: ${e}`)}
            onChange={(e) => console.log(`Default: ${e.target.value}`)}
            onMinuteChange={(e) => console.log(`Minute: ${e}`)}
            onPeriodChange={(e) => console.log(`Period: ${e}`)}
          />
        </div>
      </div>
    </div>
  )
}
