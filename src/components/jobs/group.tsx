import React from 'react'

type Props = {
  year: string
  children: React.ReactNode
}

function GroupJobs({ year, children }: Props) {
  return (
    <div className="flex divide-x max-[400px]:flex-col divide-dotted divide-neutral-700 w-full">
      <div className="p-2">{year}</div>
      <div className="w-full flex flex-col  divide-dashed divide-neutral-700">
        {children}
      </div>
    </div>
  )
}

export default GroupJobs
