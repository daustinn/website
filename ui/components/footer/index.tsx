import React from 'react'
import { ToggleTheme } from './theme'
import Language from './language'
// import { Skills } from '../sections/skills'

export const Footer = () => {
  return (
    <>
      {/* <section className="lg:pt-14 pt-14 px-2 lg:px-5 w-full">
        <Skills />
      </section> */}
      <footer className="border-t lg:mt-6 mt-4 dark:border-neutral-800">
        <div className="px-4 lg:px-10 max-w-3xl mx-auto w-full">
          <div className="flex justify-between py-4 items-center w-full">
            <Language />
            <ToggleTheme />
          </div>
        </div>
      </footer>
    </>
  )
}
