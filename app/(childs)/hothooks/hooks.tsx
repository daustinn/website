'use client'

import React from 'react'

const allHooks = ['use-debounce']

export default function Hooks() {
  const [hooks, setHooks] = React.useState(allHooks)
  return (
    <div>
      {hooks.map((hook, index) => (
        <a key={index} href="">
          {hook}
        </a>
      ))}
    </div>
  )
}
