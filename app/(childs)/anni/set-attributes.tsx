'use client'

import {
  DATA_GRADIENTS_KEY,
  DATA_HEADER_KEY,
  DATA_LANGUAGE_KEY,
  DATA_THEME_KEY
} from '~const'
import React from 'react'

export default function SetAtributes() {
  React.useEffect(() => {
    if (typeof window === 'undefined') return
    document?.documentElement?.setAttribute(
      DATA_HEADER_KEY,
      'text-brown-800 max-md:bg-oasis-200'
    )
    document?.documentElement?.setAttribute(
      DATA_GRADIENTS_KEY,
      'from-transparent'
    )
    document?.documentElement?.setAttribute(DATA_LANGUAGE_KEY, 'hidden')
    document?.documentElement?.setAttribute(DATA_THEME_KEY, 'hidden')

    return () => {
      document?.documentElement?.removeAttribute(DATA_HEADER_KEY)
      document?.documentElement?.removeAttribute(DATA_GRADIENTS_KEY)
      document?.documentElement?.removeAttribute(DATA_LANGUAGE_KEY)
      document?.documentElement?.removeAttribute(DATA_THEME_KEY)
    }
  }, [])
  return null
}
