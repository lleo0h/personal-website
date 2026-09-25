function getDaysInMonth(year: number, month: number) {
  return new Date(year, month, 0).getDate()
}

export function Calendar() {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()
  const currentDay = date.getDate()
  const totalDays = getDaysInMonth(year, month + 1)
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const firstWeekday = new Date(year, month, 1).getDay()

  const days: (number | null)[] = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: totalDays }, (_, i) => i + 1)
  ]

  return (
    <div className='relative w-90 max-w-full min-w-0 uppercase'>
      <div aria-hidden className='pointer-events-none absolute inset-0 flex'>
        <span className='absolute right-0 -bottom-16 select-none font-black text-[240px] leading-none tracking-tighter text-white/4'>
          {String(month + 1)}
        </span>
      </div>
      <div className='relative z-10 grid grid-cols-7 gap-2'>
        {weekDays.map((day) => (
          <div key={day} className='text-center text-sm font-bold'>
            {day}
          </div>
        ))}
        {days.map((day, index) => (
          <div key={index} className='flex aspect-square items-center justify-center italic'>
            {currentDay === day ? (
              <span className='flex size-9 items-center justify-center rounded-full bg-white text-black'>
                {day}
              </span>
            ) : (
              day
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
