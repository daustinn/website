import { ExternalIcon } from 'icons'
import React from 'react'

type Props = {
  title: string
  description?: string
  link: string
  className?: string
  tags: string[]
  type: 'proyect' | 'job'
}

function Job({ title, description, link, tags, type }: Props) {
  const displayType = type === 'proyect' ? 'Proyect' : 'Experience'
  return (
    <div className="group relative space-y-1 p-3 w-full">
      <h2 className="mt-auto group-hover:underline underline-offset-4 flex gap-2 text-lg leading-5 tracking-tight font-bold">
        {title}
        <span className="opacity-40 font-medium tracking-normal">
          {displayType}
        </span>
      </h2>
      <p className="text-neutral-300 text-pretty pt-1">{description}</p>
      <div className="flex flex-wrap gap-1 pt-1">
        {tags?.map((tag) => (
          <span
            className="p-1 px-2 rounded-lg bg-neutral-800 border border-neutral-700  text-xs text-neutral-400"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
      <ExternalIcon className="w-5 text-blue-600 transition-all absolute top-3 right-3 scale-50 group-hover:scale-100 opacity-0 group-hover:opacity-100" />
      <a
        data-noline
        href={link}
        title={title}
        target="_blank"
        referrerPolicy="no-referrer"
        className="absolute inset-0"
      />
    </div>
  )
}

export default Job
