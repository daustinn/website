import React from 'react'
import { ToggleTheme } from './theme'
import Language from './language'

export const Footer = () => {
  return (
    <div className="flex justify-between py-3 items-center w-full">
      <Language />
      <ToggleTheme />
    </div>
  )
}
