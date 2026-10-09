'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import { NextIntlClientProvider, useLocale, useTranslations } from 'next-intl'
import { isLocale, timeZone, type Locale } from '@/i18n/locales'

import ptBR from '../../messages/pt-BR.json'
import enUS from '../../messages/en-US.json'

const messages = { 'pt-BR': ptBR, 'en-US': enUS }

const LocaleContext = createContext<((locale: string) => void) | null>(null)

export function LocaleProvider({
  children,
  initialLocale
}: {
  children: ReactNode
  initialLocale: Locale
}) {
  const [locale, setLocaleState] = useState(initialLocale)

  function setLocale(locale: string) {
    if (!isLocale(locale)) return
    setLocaleState(locale)
    document.cookie = `locale=${locale}; path=/; max-age=31536000; SameSite=Lax`
    document.documentElement.lang = locale
  }

  return (
    <LocaleContext.Provider value={setLocale}>
      <NextIntlClientProvider locale={locale} messages={messages[locale]} timeZone={timeZone}>
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  )
}

export function useSetLocale() {
  const context = useContext(LocaleContext)
  if (!context) throw new Error('LocaleProvider não encontrado')
  return context
}

export function LocaleSwitch() {
  const locale = useLocale()
  const setLocale = useSetLocale()
  const t = useTranslations('LocaleSwitch')

  return (
    <div className='fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] left-6 z-40'>
      <button
        type='button'
        onClick={() => setLocale(locale === 'pt-BR' ? 'en-US' : 'pt-BR')}
        aria-label={t('label')}
        title={t('label')}
        className='group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-white relative size-15 flex justify-center items-center bg-neutral-900 border border-white/10 rounded-full transition-all duration-300 hover:scale-105 hover:border-white hover:bg-white hover:text-black active:scale-90 active:shadow-none motion-reduce:transition-none motion-reduce:transform-none'
      >
        <div
          className='animate-[spin_6s_linear_infinite] absolute -inset-2 rotate-3 border border-white/15 transition-colors duration-300 group-hover:border-white/50 motion-reduce:animate-none'
          aria-hidden
        />
        <div
          className='animate-[spin_4s_linear_infinite_reverse] absolute inset-2 rotate-3 border border-white/15 transition-colors duration-300 group-hover:border-black/30 motion-reduce:animate-none'
          aria-hidden
        />
        <svg
          key={locale}
          className='animate-[locale-switch_350ms_ease-out] motion-reduce:animate-none'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          aria-hidden='true'
        >
          <path d='m5 8 6 6' />
          <path d='m4 14 6-6 2-3' />
          <path d='M2 5h12' />
          <path d='M7 2h1' />
          <path d='m22 22-5-10-5 10' />
          <path d='M14 18h6' />
        </svg>
        <span className='absolute -bottom-1 rounded bg-white px-1 font-mono text-[10px] font-bold text-black transition-colors duration-300 group-hover:bg-black group-hover:text-white'>
          {locale === 'pt-BR' ? 'PT' : 'EN'}
        </span>
      </button>
    </div>
  )
}
