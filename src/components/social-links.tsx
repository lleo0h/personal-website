const links = [
  {
    label: 'GitHub',
    href: 'https://github.com/lleo0h',
    icon: (
      <svg viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
        <path d='M12 .7a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 6.5c1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.3c0 .32.22.7.83.58A12 12 0 0 0 12 .7Z' />
      </svg>
    )
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/leonardo-araujo-b2a243388',
    icon: (
      <svg viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
        <path d='M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.04H3.54V8.98H7.1v11.47ZM22.23 0H1.77A1.77 1.77 0 0 0 0 1.77v20.46C0 23.21.79 24 1.77 24h20.46A1.77 1.77 0 0 0 24 22.23V1.77A1.77 1.77 0 0 0 22.23 0Z' />
      </svg>
    )
  },
  {
    label: 'Steam',
    href: 'https://steamcommunity.com/id/lleo0h/',
    icon: (
      <svg viewBox='0 0 24 24' fill='currentColor' aria-hidden>
        <path d='M11.98 0A12 12 0 0 0 .26 9.45l6.45 2.67a3.39 3.39 0 0 1 1.93-.6l2.87-4.16v-.06a4.52 4.52 0 1 1 4.52 4.52h-.1l-4.09 2.92c0 .16-.02.32-.04.48a3.39 3.39 0 0 1-6.65.4L.54 13.71A12 12 0 1 0 11.98 0Zm-4.1 17.4-1.48-.61a2.54 2.54 0 0 0 4.67-.3 2.54 2.54 0 0 0-1.38-3.32l-1.53-.63a1.87 1.87 0 1 1-.28 4.86Zm8.15-7.09a3.02 3.02 0 1 0 0-6.04 3.02 3.02 0 0 0 0 6.04Zm0-.76a2.26 2.26 0 1 1 0-4.52 2.26 2.26 0 0 1 0 4.52Z' />
      </svg>
    )
  }
]

export function SocialLinks() {
  return (
    <ul className='grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:gap-x-5 sm:gap-y-4'>
      {links.map((link) => (
        <li key={link.label} className='min-w-0'>
          <a
            href={link.href}
            target='_blank'
            rel='noopener noreferrer'
            className='group flex min-h-11 flex-col items-center justify-center gap-2 text-sm text-neutral-400 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:flex-row sm:gap-3 sm:text-base'
          >
            <span
              aria-hidden
              className='flex h-10 w-8 shrink-0 rotate-12 items-center justify-center border border-neutral-600 p-1 text-foreground transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:rotate-0 group-hover:bg-white group-hover:text-black'
            >
              {link.icon}
            </span>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
