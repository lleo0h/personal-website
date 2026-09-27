'use client'

import Image from 'next/image'
import React, { createContext, useContext, useEffect, useState } from 'react'

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
  name,
  message,
  sprite_path,
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
      onClick={() => investigate({ name, message, sprite_path })}
      className={className}
    >
      {children}
    </button>
  )
}

export type InvestigateDialogProps = {
  name: string
  message: string
  sprite_path: string
}

export function InvestigateDialog({ name, message, sprite_path }: InvestigateDialogProps) {
  return (
    <div className='relative bg-neutral-800 flex min-h-30 w-[calc(100vw-4rem)] p-2 pl-36 max-w-160 border border-white/30'>
      <div className='pointer-events-none absolute bottom-0 -left-4'>
        <Image
          src={sprite_path}
          alt={`${name} sprite`}
          width={449}
          height={560}
          className='h-48 w-auto max-w-none'
          loading='eager'
          priority
        />
      </div>
      <div className='flex flex-col gap-1'>
        <span className='font-bold'>{name}</span>
        <span className='leading-5 text-white/70'>{message}</span>
      </div>
    </div>
  )
}
