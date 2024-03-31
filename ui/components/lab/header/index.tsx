import React from 'react'
import { BackButton } from './back'

export function HeaderLab() {
  return (
    <header className="max-w-2xl animate-fade-in max-lg:max-w-full justify-between px-10 flex mx-auto w-full items-center pt-3">
      <div className="basis-0 flex flex-grow">
        <BackButton />
      </div>
      <h2 className="text-xl font-semibold drop-shadow-md">Space Lab</h2>
      <span className="basis-0 flex justify-end flex-grow"></span>
    </header>
  )
}
