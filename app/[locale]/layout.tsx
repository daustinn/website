import '../globals.css'
import { ThemeProvider } from 'providers/theme'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Metadata } from 'next'
import { Footer } from 'ui/components/footer'

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
      'More than 3 years creating beautiful and minimalist websites and applications with the latest technologies.',
    images: {
      hash: 'og-image-home',
      host: 'https://daustinn.com',
      pathname: '/favicon.webp',
      hostname: 'daustinn.com',
      href: 'https://daustinn.com/favicon.webp',
      origin: 'https://daustinn.com',
      protocol: 'https:',
      searchParams: new URLSearchParams(),
      url: 'https://daustinn.com/favicon.webp',
      alt: 'Daustinn',
      height: 630,
      secureUrl: 'https://daustinn.com/favicon.webp',
      type: 'image/webp',
      width: 1200
    }
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
      <body className="dark:bg-[#0a0908] dark:text-stone-100 flex flex-col min-h-svh bg-white text-black">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <main className="flex flex-col flex-grow max-w-3xl mx-auto w-full lg:px-10 px-4">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
