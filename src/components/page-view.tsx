'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { ViewCounter } from './view-counter'
import { SocialLinks } from './social-links'
import { ListTechnologies } from './list-technologies'
import { Todo } from './to-do'
import { Calendar } from './calendar'
import { FallingCards, type Cards } from './falling-cards'

export function PageView({ count, date, cards }: { count: number; date: Date; cards: Cards }) {
  const t = useTranslations('Page')

  return (
    <div>
      <div className='relative isolate flex min-h-screen px-4 py-6'>
        <div className='fixed inset-0 -z-10 pointer-events-none bg-grid opacity-70' aria-hidden />
        <Todo />
        <FallingCards cards={cards} />
        <div className='bg-[#101010] relative flex flex-col w-full mx-auto max-w-5xl py-6 border border-white/30 shadow-[10px_-10px_0_rgba(255,255,255,0.08)] backdrop-blur-sm'>
          <div className='-skew-x-1 absolute -top-5 right-5 z-20'>
            <ViewCounter count={count} />
          </div>
          <div className='grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-5 gap-y-7 p-2 m-4 sm:gap-y-2'>
            <div className='relative shrink-0 sm:row-span-2'>
              <div
                className='animate-[spin_7s_linear_infinite] absolute -inset-2 rotate-3 border border-white/15'
                aria-hidden
              />
              <div
                className='animate-[spin_4s_linear_infinite_reverse] absolute -inset- rotate-3 border border-white/15'
                aria-hidden
              />
              <div className='relative z-0 transition-transform duration-300 hover:scale-115'>
                <Image
                  className='h-28 w-28 object-cover sm:h-36 sm:w-36'
                  src='/pfp.jpg'
                  alt={t('Image.alt')}
                  width={144}
                  height={144}
                  loading='eager'
                />
              </div>
              <span className='z-10 absolute -bottom-2 -right-2 bg-white px-2 py-0.5 font-mono text-[8px] font-bold tracking-[0.15em] text-black'>
                Lv 3
              </span>
            </div>
            <div className='min-w-0 sm:self-end'>
              <h1 className='text-4xl font-bold'>{t('author')}</h1>
              <p className='text-xs leading-5 text-white/70 sm:text-sm'>
                {t.rich('bio', {
                  highlight: (chunks) => <i className='text-white'>{chunks}</i>
                })}
              </p>
            </div>
            <div className='col-span-2 min-w-0 sm:col-span-1 sm:col-start-2 sm:self-start'>
              <SocialLinks />
            </div>
          </div>
          <div className='flex justify-center mx-3 md:mx-5 mb-10'>
            <ListTechnologies />
          </div>
          <div className='flex justify-end my-5 mx-10'>
            <Calendar date={date} />
          </div>
        </div>
      </div>
      <div className='flex justify-center p-1 md:pb-6 select-none pointer-events-none'>
        <span className='font-mono text-sm text-white/30'>{t('footer.label')}</span>
      </div>
    </div>
  )
}
