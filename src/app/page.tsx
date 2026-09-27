import Image from 'next/image'
import { ViewCounter } from '@/components/view-counter'
import { ListTechnologies } from '@/components/list-technologies'
import { InvestigateProvider } from '@/components/investigate'
import { Calendar } from '@/components/calendar'

export default function Page() {
  return (
    <InvestigateProvider>
      <div className='flex min-h-screen px-4 py-6'>
        <div className='fixed inset-0 -z-10 pointer-events-none bg-grid opacity-70' aria-hidden />
        <div className='bg-[#101010] relative flex flex-col w-full mx-auto max-w-5xl py-6 border border-white/30 shadow-[10px_-10px_0_rgba(255,255,255,0.08)] backdrop-blur-sm'>
          <div className='-skew-x-1 absolute -top-5 right-5 z-20'>
            <ViewCounter count={0} />
          </div>
          <div className='flex items-center gap-5 p-2 m-4'>
            <div className='relative shrink-0'>
              <div
                className='animate-[spin_7s_linear_infinite] absolute -inset-2 rotate-3 border border-white/15'
                aria-hidden
              />
              <div
                className='animate-[spin_4s_linear_infinite_reverse] absolute -inset- rotate-3 border border-white/15'
                aria-hidden
              />
              <div className='shadow-[-10px_-2px_0_rgba(255,255,255,0.08)]'>
                <Image
                  className='z-10 h-28 w-28 object-cover sm:h-36 sm:w-36'
                  src='/pfp.jpg'
                  alt='foto de perfil'
                  width={144}
                  height={144}
                  loading='eager'
                />
              </div>
              <span className='z-10 absolute -bottom-2 -right-2 bg-white px-2 py-0.5 font-mono text-[8px] font-bold tracking-[0.15em] text-black'>
                Lv 3
              </span>
            </div>
            <div>
              <h1 className='text-4xl font-bold'>leo</h1>
              <p className='text-xs leading-5 text-white/70 sm:text-sm'>
                Oi, sou programador <i className='text-white'>underground</i> full-stack que faz
                gadgets desde 2022.
              </p>
            </div>
          </div>
          <div className='m-5'>
            <ListTechnologies />
          </div>
          <div className='flex justify-end my-5 mx-10'>
            <Calendar />
          </div>
        </div>
      </div>
    </InvestigateProvider>
  )
}
