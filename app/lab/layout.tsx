import React from 'react'
import { Connect } from 'ui/components'
import { HeaderLab } from 'ui/components/lab/header'

type Props = {
  children: React.ReactNode
}

export default function LabLayout({ children }: Props) {
  return (
    <React.Fragment>
      <HeaderLab />
      <div className="max-w-2xl max-lg:max-w-full px-10 mx-auto w-full pt-5">
        {children}
      </div>
      <Connect />
    </React.Fragment>
  )
}
