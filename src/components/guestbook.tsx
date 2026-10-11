import { type GetApiMessagesStatus200 } from '@/api-client/types'
import styles from './guestbook.module.css'

export type Message = GetApiMessagesStatus200['items'][number]

export function Guestbook({ messages }: { messages: Message[] }) {
  return (
    <div className='flex w-full max-w-108 min-w-0 flex-col justify-center gap-5'>
      <div
        role='region'
        aria-label='Guestbook'
        tabIndex={0}
        className={`${styles.viewport} flex max-h-96 flex-col-reverse overflow-y-auto overscroll-y-contain pr-4 py-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white`}
      >
        <ul className='flex shrink-0 flex-col gap-2'>
          {messages.map((message) => (
            <GuestbookMessage key={message.id} message={message} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export function GuestbookMessage({ message }: { message: Message }) {
  return (
    <li className='rounded-sm group flex min-w-0 shrink-0 flex-col gap-1.5 bg-neutral-800 px-5 py-3 text-left transition-colors duration-150 ease-out hover:bg-white hover:text-black motion-reduce:transition-none'>
      <div className='flex min-w-0 items-center gap-1 group-hover:text-neutral-600 text-neutral-400 border-b border-neutral-400 group-hover:border-neutral-600'>
        <svg aria-hidden='true' viewBox='0 0 24 16' className='h-3.5 w-5 shrink-0 fill-current'>
          <path d='M0 0h24L12 9 0 0Zm0 3 12 9L24 3v13H0V3Z' />
        </svg>
        <span className='truncate'>{message.name}</span>
      </div>
      <p className='whitespace-pre-wrap wrap-break-word'>{message.content}</p>
    </li>
  )
}
