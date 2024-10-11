import type { Metadata } from 'next'
import '../globals.css'
import { ThemeProvider } from 'providers/theme'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://daustinn.com',
    languages: {
      es: 'https://daustinn.com/es',
      en: 'https://daustinn.com'
    },
    types: { html: 'text/html' }
  },
  category: 'Front-End Developer and UI Designer',
  creator: 'David Bendezú',
  icons: './favicon.svg',
  authors: {
    name: 'David Bendezú',
    url: 'https://daustinn.com'
  },
  metadataBase: {
    hash: 'daustinn',
    host: 'https://daustinn.com',
    hostname: 'daustinn.com',
    href: 'https://daustinn.com',
    origin: 'https://daustinn.com',
    password: 'daustinn',
    pathname: '/',
    port: '443',
    protocol: 'https:',
    search: '',
    toJSON: () => 'https://daustinn.com',
    toString: () => 'https://daustinn.com',
    username: 'daustinn',
    searchParams: new URLSearchParams()
  }
}

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="dark:bg-[#0b0b0b] dark:text-stone-100 bg-white text-black">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
