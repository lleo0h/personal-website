const technologies = [
  {
    title: 'ui',
    tools: ['React', 'Next.js', 'TypeScript', 'shadcn/ui', 'Framer Motion'],
    decoration: 'diamond'
  },
  {
    title: 'server',
    tools: ['Node.js', 'Fastify', 'Elysia', 'Python', 'REST APIs', 'WebSockets'],
    decoration: 'circle'
  },
  {
    title: 'data',
    tools: ['PostgreSQL', 'SQLite', 'MongoDB', 'Redis', 'Prisma', 'Drizzle'],
    decoration: 'bars'
  },
  {
    title: 'infra',
    tools: ['Docker', 'Nginx', 'Linux', 'GitHub Actions', 'CI/CD'],
    decoration: 'cut'
  }
]

export function ListTechnologies() {
  return (
    <div>
      <div className='flex flex-col gap-4 hover:selection:bg-black hover:selection:text-white'>
        <span className='self-center font-bold text-neutral-500'>STACK</span>
        <div className='grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4'>
          {technologies.map((category) => (
            <div
              key={category.title}
              className='group relative min-h-72 overflow-hidden cursor-pointer border border-white/10 bg-neutral-900 transition-all duration-300 hover:scale-105 hover:border-white hover:bg-white hover:text-black hover:shadow-[10px_10px_0px_rgba(255,255,255,0.18)]'
            >
              {category.decoration === 'diamond' && (
                <>
                  <div className='absolute -right-8 -top-8 h-24 w-24 rotate-45 border border-white/20 bg-white/5 transition-all duration-300 group-hover:right-3 group-hover:top-3 group-hover:rotate-135 group-hover:border-black group-hover:bg-black' />
                  <div className='absolute right-5 top-5 h-5 w-5 rotate-45 bg-white transition-all duration-300 group-hover:scale-150 group-hover:bg-black' />
                  <div className='absolute -bottom-10 -left-10 h-20 w-20 rotate-45 border-4 border-white/10 transition-all duration-300 group-hover:border-black' />
                </>
              )}
              {category.decoration === 'circle' && (
                <>
                  <div className='absolute right-7 top-10 h-3 w-3 rounded-full bg-white transition-all duration-300 group-hover:scale-[4] group-hover:bg-black' />
                  <div className='absolute bottom-5 left-0 h-2 w-0 bg-black transition-all duration-500 group-hover:w-3/4' />
                </>
              )}
              {category.decoration === 'bars' && (
                <>
                  <div className='absolute -rig ht-4 top-0 h-full w-3 rotate-6 bg-white/10 transition-all duration-300 group-hover:right-5 group-hover:bg-black' />
                  <div className='absolute -right-10 top-0 h-full w-3 rotate-6 bg-white/5 transition-all delay-75 duration-300 group-hover:right-12 group-hover:bg-black/60' />
                  <div className='absolute -right-16 top-0 h-full w-3 rotate-6 bg-white/5 transition-all delay-100 duration-300 group-hover:right-20 group-hover:bg-black/30' />
                  <div className='absolute bottom-0 left-0 h-5 w-20 bg-white/10 [clip-path:polygon(0_0,100%_0,75%_100%,0_100%)] transition-all duration-300 group-hover:w-36 group-hover:bg-black' />
                  <div className='absolute bottom-0 right-0 h-0 w-0 border-b-25 border-l-25 border-b-transparent border-l-white/20 transition-all duration-300 group-hover:border-l-black' />
                </>
              )}
              {category.decoration === 'cut' && (
                <>
                  <div className='absolute -left-6 bottom-7 h-3 w-28 -rotate-12 bg-white transition-all duration-500 group-hover:left-3 group-hover:bg-black' />
                  <div className='absolute -bottom-6 right-8 h-12 w-12 rotate-45 border-4 border-white/10 transition-all duration-300 group-hover:bottom-2 group-hover:border-black' />
                </>
              )}
              <div className='absolute -left-24 top-0 h-full w-8 -skew-x-12 bg-white/70 transition-all duration-700 group-hover:left-[120%]' />
              <div className='relative z-10 p-5'>
                <p className='mb-4 text-sm font-black uppercase tracking-[0.25em] text-neutral-500 transition-colors group-hover:text-black'>
                  {category.title}
                </p>
                <ul className='space-y-1 md:text-2xl text-1xl'>
                  {category.tools.map((tool) => (
                    <li
                      key={tool}
                      className='text-left font-semibold text-neutral-300 transition-all duration-200 group-hover:translate-x-2 group-hover:text-black'
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
