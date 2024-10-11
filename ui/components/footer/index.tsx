import React from 'react'
import { ToggleTheme } from './theme'
import { getTranslations } from 'next-intl/server'

export const Footer = async ({ locale }: { locale: string }) => {
  const t = await getTranslations({ locale })
  return (
    <footer className="border-t dark:border-neutral-800">
      <div className="max-w-2xl mx-auto flex justify-between items-center w-full px-4 py-4">
        <p className="text-sm opacity-60">
          {t('footer.deployed_on')}{' '}
          <a
            target="_blank"
            className="hover:underline"
            rel="noopener noreferrer"
            href="https://vercel.com"
            title="Deploy your website in Vercel"
          >
            Vercel
          </a>
          .
        </p>
        <ToggleTheme />
      </div>
    </footer>
  )
}
