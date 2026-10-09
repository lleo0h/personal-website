import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LocaleProvider, LocaleSwitch } from '@/components/locale'
import { InvestigateCommand, InvestigateProvider } from '@/components/investigate'
import { defaultLocale, isLocale } from '@/i18n/locales'
import { getLocale } from 'next-intl/server'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {}

export default async function RootLayout({ children }: LayoutProps<'/'>) {
  const cookieLocale = await getLocale()
  const locale = isLocale(cookieLocale) ? cookieLocale : defaultLocale

  return (
    <html lang={locale} className={`site-shell ${inter.className} h-full antialiased`}>
      <body className='min-h-dvh bg-background text-foreground'>
        <LocaleProvider initialLocale={locale}>
          <InvestigateProvider>{children}</InvestigateProvider>
          <LocaleSwitch />
          <InvestigateCommand />
        </LocaleProvider>
      </body>
    </html>
  )
}
