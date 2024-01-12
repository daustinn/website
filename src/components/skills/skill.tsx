import React from 'react'

type Props = {
  title: string
  icon: JSX.Element
}

function Skill({ icon, title }: Props) {
  return (
    <figure
      title={title}
      className="group transition-all text-neutral-400 hover:text-white"
    >
      <div className="w-10 mx-auto">{icon}</div>
      <div className="text-center group-hover:opacity-90 transition-opacity opacity-0 text-neutral-400 text-sm tracking-tight py-3">
        {title}
      </div>
    </figure>
  )
}

export default Skill
