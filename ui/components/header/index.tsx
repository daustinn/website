import Image from 'next/image'
import React from 'react'

export function Header() {
  return (
    <header className="border-stone-300 animate-fade-in-down">
      <div className="max-w-2xl max-lg:max-w-full px-10 flex mx-auto w-full items-center gap-4">
        <div className="w-16 border dark:border-stone-800 border-stone-200 rounded-full overflow-hidden aspect-square">
          <Image
            width={64}
            height={64}
            src="/profile.webp"
            className="w-full h-full object-cover"
            alt="David Bendezú profile picture"
            title="David Bendezú profile picture"
          />
        </div>

        <div>
          <h2 className="font-semibold text-lg dark:text-white">
            David Bendezú (Daustinn)
          </h2>
          <p className="max-w-[50ch] dark:text-stone-400 text-stone-700">
            Front-End Developer and UI Designer
          </p>
        </div>
      </div>
    </header>
  )
}
