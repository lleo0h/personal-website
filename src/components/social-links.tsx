const links: {
  label: string
  href: string
}[] = [
  { label: 'GitHub', href: 'https://github.com/lleo0h' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/leonardo-araujo-b2a243388' },
  { label: 'Steam', href: 'https://steamcommunity.com/id/lleo0h/' }
]

const romanNumbers = ['I', 'II', 'III']

export function SocialLinks() {
  return (
    <ul className='grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:gap-x-5 sm:gap-y-4'>
      {links.map((link, i) => (
        <li key={link.label} className='min-w-0'>
          <a
            href={link.href}
            target='_blank'
            rel='noopener noreferrer'
            className='group flex min-h-11 flex-col items-center justify-center gap-2 text-sm text-neutral-400 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:flex-row sm:gap-3 sm:text-base'
          >
            <span
              aria-hidden
              className='flex h-10 w-8 shrink-0 rotate-12 items-center justify-center border border-neutral-600 font-serif text-base text-foreground transition-all duration-200 ease-out group-hover:-translate-y-1 group-hover:rotate-0 group-hover:bg-white group-hover:text-black group-focus-visible:-translate-y-1 group-focus-visible:rotate-0 group-focus-visible:bg-white group-focus-visible:text-black'
            >
              {romanNumbers[i]}
            </span>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
