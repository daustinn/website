import { GithubIcon, LinkedinIcon, SpotifyIcon } from 'icons'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <header className="w-full flex items-center gap-3">
      <div
        role="presentation"
        className="rounded-full w-[35px] min-w-[35px] h-[35px] overflow-hidden"
      >
        <Image
          width={35}
          height={35}
          className="w-full h-full object-cover"
          src="/daustinn.webp"
          alt="Daustinn profile site web"
        />
      </div>
      <div className="border-l pl-3 border-dashed border-neutral-700/80">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold tracking-tighter">
            David Bendezú
          </h1>
          <h2 className="text-neutral-500 pt-1">Daustinn</h2>
        </div>
      </div>
      <div className="text-neutral-300 ml-auto flex items-center gap-3">
        <a
          href="https://github.com/daustinn"
          data-noline
          target="_blank"
          rel="noreferrer"
          referrerPolicy="no-referrer"
          className="hover:text-neutral-200"
        >
          <GithubIcon className="w-8" />
        </a>
      </div>
    </header>
  )
}

export default Header
