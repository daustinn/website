import { ArrowNextIcon } from 'icons'
import Link from 'next/link'
import React from 'react'
import { AmbientModePreview, TimePickerPreview } from 'ui/lab'

export function LatestLab() {
  return (
    <section className="mt-10 px-10 space-y-10 max-w-2xl max-lg:max-w-full mx-auto w-full">
      <article className="space-y-6 animate-fade-in-down [animation-delay:100ms]">
        <div className="flex items-center pr-4">
          <h2 className="font-semibold text-xl">Latest from Lab</h2>
          <Link
            href="/lab"
            className="ml-auto text-sm hover:underline block group"
          >
            View all{' '}
            <ArrowNextIcon className="w-5 inline-block group-hover:translate-x-2 transition-all" />
          </Link>
        </div>
        <TimePickerPreview />
        <AmbientModePreview />
        <div className="text-center">
          <Link
            href="/lab"
            className="text-lg w-fit mx-auto font-semibold hover:underline block group"
          >
            View all lab{' '}
            <ArrowNextIcon className="w-5 inline-block group-hover:translate-x-2 transition-all" />
          </Link>
        </div>
      </article>
    </section>
  )
}
