'use client'

import Image from 'next/image'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

const InvestigateContext = createContext<((dialog: InvestigateDialogProps) => void) | null>(null)

export function InvestigateProvider({ children }: { children: React.ReactNode }) {
  const [dialog, setDialog] = useState<InvestigateDialogProps | null>(null)

  useEffect(() => {
    if (dialog === null) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setDialog(null)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [dialog])

  return (
    <InvestigateContext.Provider value={setDialog}>
      {children}
      <div className='fixed bottom-12 left-1/2 z-50 -translate-x-1/2'>
        <div role='status' aria-live='polite' aria-atomic='true'>
          {dialog && <InvestigateDialog {...dialog} />}
        </div>
        {dialog && (
          <button
            type='button'
            onClick={() => setDialog(null)}
            aria-label='Fechar investigação'
            className='absolute right-0 top-0 cursor-pointer px-2 text-white/70 hover:text-white focus-visible:outline-2 focus-visible:outline-white'
          >
            X
          </button>
        )}
      </div>
    </InvestigateContext.Provider>
  )
}

export type InvestigateAreaProps = InvestigateDialogProps & {
  children: React.ReactNode
  label: string
  className?: string
}

export function InvestigateArea({
  children,
  label,
  message,
  className = ''
}: InvestigateAreaProps) {
  const investigate = useContext(InvestigateContext)

  if (!investigate) {
    throw new Error('InvestigateArea must be used within an InvestigateProvider')
  }

  return (
    <button
      type='button'
      aria-label={label}
      onClick={(event) => {
        if (event.altKey) {
          investigate({ message })
        }
      }}
      className={className}
    >
      {children}
    </button>
  )
}

export type InvestigateDialogProps = {
  message: string
}

export function InvestigateDialog({ message }: InvestigateDialogProps) {
  return (
    <div className='relative bg-neutral-800 flex min-h-30 w-[calc(100vw-4rem)] p-2 pl-36 max-w-160 border border-white/30'>
      <div className='pointer-events-none absolute bottom-0 -left-4'>
        <Image
          src='/sprites/nagito_komaeda_sprite_6.webp'
          alt='Nagito Komaeda sprite'
          width={449}
          height={560}
          className='h-48 w-auto max-w-none'
          loading='eager'
          priority
        />
      </div>
      <div className='flex flex-col gap-1'>
        <span className='font-bold'>Nagito Komaeda</span>
        <span className='leading-5 text-white/70'>{message}</span>
      </div>
    </div>
  )
}

export function InvestigateCommand() {
  const t = useTranslations('InvestigateCommand')

  return (
    <div className='text-neutral-300 fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-6 hidden w-64 max-w-[calc(100vw-3rem)] flex-col sm:flex'>
      <div className='flex flex-col'>
        <span className='text-xl leading-none italic tracking-tight [text-shadow:2px_2px_0_#151525,0_0_3px_#151525]'>
          {t('title')}
        </span>
        <div className='flex items-center gap-1'>
          <span className='text-xs leading-none italic font-bold [text-shadow:1px_1px_0_#111]'>
            {t('guide')}
          </span>
          <div className='h-px flex-1 -skew-x-12 bg-white shadow-[1px_2px_0_#111]' />
        </div>
      </div>
      <div className='mt-2 flex items-center justify-end gap-1'>
        <span className='bg-neutral-600 italic flex size-6 items-center justify-center rounded-full border-2 border-white/80 text-[11px] leading-none shadow-[1px_1px_0_2px_#111]'>
          Alt
        </span>
        <span className='text-lg leading-none tracking-tighter [text-shadow:2px_2px_0_#111,0_0_2px_#111]'>
          {t('hold')}
        </span>
      </div>
    </div>
  )
}
