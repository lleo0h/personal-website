import { useTranslations } from 'next-intl'

export function ViewCounter({ count }: { count: number }) {
  const t = useTranslations('ViewCounter')

  return (
    <div className='flex flex-col border-2 border-black bg-white px-3 py-1 text-black selection:bg-black selection:text-white min-w-46'>
      <span className='text-2xl font-medium leading-none tracking-[-0.06em] sm:text-[30px]'>
        ¥ {count.toLocaleString()}
      </span>
      <span className='mt-1 mb-2 text-[10px] font-bold italic leading-none tracking-[-0.04em] sm:mb-3 sm:text-[12px]'>
        {t('label')}
      </span>
    </div>
  )
}
