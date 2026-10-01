import type { CSSProperties } from 'react'

function random(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function randomInt(min: number, max: number) {
  return Math.floor(random(min, max + 1))
}

function randomSign() {
  return Math.random() > 0.5 ? 1 : -1
}

function generateCards(count = 24) {
  return Array.from({ length: count }, (_, index) => {
    return {
      id: index,
      left: random(-3, 103),
      size: randomInt(22, 54),
      duration: random(14, 30),
      delay: -random(0, 30),
      drift: random(20, 110) * randomSign(),
      rotate: random(-35, 35),
      spin: random(100, 420) * randomSign(),
      opacity: random(0.16, 0.42),
      background: random(0.015, 0.07),
      border: random(0.12, 0.3),
      aspect: random(1.25, 1.55)
    }
  })
}

export function FallingCards() {
  const cards = generateCards(15)

  return (
    <div
      className='pointer-events-none absolute inset-0 -z-10 overflow-hidden mask-[linear-gradient(transparent,black_8%,black_92%,transparent)] motion-reduce:hidden'
      aria-hidden
    >
      {cards.map((card) => (
        <span
          key={card.id}
          className='absolute top-0 block w-(--card-size) aspect-[1/var(--card-aspect)] will-change-transform animate-[cards-fall_var(--fall-duration)_var(--fall-delay)_linear_infinite]'
          style={
            {
              left: `${card.left}%`,
              '--card-size': `${card.size}px`,
              '--card-aspect': card.aspect,
              '--fall-duration': `${card.duration}s`,
              '--fall-delay': `${card.delay}s`,
              '--card-drift': `${card.drift}px`,
              '--card-rotate': `${card.rotate}deg`,
              '--card-spin': `${card.spin}deg`,
              '--card-opacity': card.opacity,
              '--card-background': card.background,
              '--card-border': card.border,
              opacity: 'var(--card-opacity)',
              backgroundColor: `rgb(255 255 255 / ${card.background})`,
              borderColor: `rgb(255 255 255 / ${card.border})`
            } as CSSProperties
          }
        >
          <span className='absolute inset-0 border border-inherit shadow-[0_0_18px_rgba(255,255,255,0.015)]' />
        </span>
      ))}
    </div>
  )
}
