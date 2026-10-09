import { useTranslations } from 'next-intl'

export function Todo() {
  const t = useTranslations('Todo')
  const todo = t.raw('list') as string[]

  return (
    <div
      className='pointer-events-none absolute inset-0 -z-10 overflow-hidden p-6 select-none'
      aria-hidden
    >
      <ul className='flex max-w-100 flex-col gap-1.5 font-mono text-xs leading-5 text-neutral-600'>
        {todo.map((item) => (
          <li key={item}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
