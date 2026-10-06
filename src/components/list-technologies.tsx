import { InvestigateArea } from '@/components/investigate'

const technologies = ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Docker', 'PostgreSQL']

export function ListTechnologies() {
  return (
    <div className='flex'>
      <div className='relative flex flex-col'>
        <span className='px-5'>TECS USADA POR MIM:</span>
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-x-5 inset-y-0 z-0 rotate-[-32deg] border border-white/15 before:absolute before:inset-3 before:border before:border-white/5'
        />
        <div className='pointer-events-none animate-[spin_4s_linear_infinite_reverse] absolute -inset-2 rotate-3 border border-white/15' />
        <ul className='text-4xl'>
          {technologies.map((i) => {
            return (
              <li key={i}>
                <InvestigateArea
                  label={`Investigar ${i}`}
                  message={`${i}...`}
                  className='rounded-sm block w-full cursor-pointer px-5 text-left uppercase font-bold transition-all duration-150 ease-out hover:bg-white hover:text-black hover:shadow-[5px_-10px_0_rgba(255,255,255,0.08)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'
                >
                  {i}
                </InvestigateArea>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
