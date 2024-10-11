import React from 'react'
import { Language } from './language'
import { getTranslations } from 'next-intl/server'

export async function Header({ locale }: { locale: string }) {
  const t = await getTranslations({ locale })
  return (
    <header className="border-stone-300 max-w-2xl mx-auto w-full p-4 flex justify-between items-center">
      <nav className="flex flex-grow text-lg basis-0">
        <h1 className="font-medium text-nowrap tracking-tight">
          Daustinn
          <span className="font-normal opacity-50 inline-block pl-1">
            {t('home.banner')}
          </span>
        </h1>
      </nav>
      <nav className="flex items-center">{/* <a href="">Nanui</a> */}</nav>
      <nav className="flex flex-grow justify-end basis-0 gap-4">
        <Language />
      </nav>
      {/* <div>
          <h2 className="font-semibold text-lg dark:text-white">
            David Bendezú (Daustinn)
          </h2>
          <p className="max-w-[50ch] dark:text-stone-400 text-stone-700">
            Full Stack Developer
          </p>
        </div> */}
    </header>
  )
}
