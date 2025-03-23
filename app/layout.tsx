import './globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Metadata } from 'next'
import { themeEffect } from './theme-effect'
import { UiProviders } from '~providers/ui'

export const metadata: Metadata = {
  title: 'Daustinn - Fullstack Developer',
  description:
    'Fullstack Developer based in Lima, Perú with a passion for web development and open source software.',
  keywords: [
    'David Bendezú',
    'Daustinn',
    'Fullstack Developer',
    'Developer',
    'UI Designer',
    'Web Developer',
    'Open Source',
    'React',
    'Next.js',
    'Node.js',
    'JavaScript',
    'TypeScript',
    'CSS',
    'HTML',
    'Web Development',
    'Frontend Development',
    'Backend Development',
    'Fullstack Development',
    'Lima',
    'Perú'
  ],
  category: 'Front-End Developer and UI Designer',
  icons: './favicon.webp',
  abstract:
    'Fullstack Developer based in Lima, Perú with a passion for web development and open source software.',
  openGraph: {
    type: 'website',
    title: 'Daustinn',
    description:
      'More than 3 years creating beautiful and minimalist websites and applications with the latest technologies.'
  }
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const messages = await getMessages()

  return (
    <html suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})();`
          }}
        />
      </head>
      <body className="dark:bg-[#141210] dark:text-stone-100 flex flex-col min-h-svh bg-[#fcfcfc] text-black">
        <NextIntlClientProvider messages={messages}>
          <UiProviders>
            <main className="flex flex-col flex-grow">{children}</main>
          </UiProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
