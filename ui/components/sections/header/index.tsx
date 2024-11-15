import { getTranslations } from 'next-intl/server'
import React from 'react'

export default async function Header({ locale }: { locale: string }) {
  const t = await getTranslations({ locale })
  return (
    <>
      <h1 className="font-medium tracking-tight text-xl">Daustinn.</h1>
      <h2 className="text-md opacity-80">{t('header.subtitle')}</h2>
    </>
  )
}
