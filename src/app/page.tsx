import { connection } from 'next/server'
import { headers } from 'next/headers'
import { PageView } from '@/components/page-view'
import { trackView } from '@/server/views'
import { generateCards } from '@/components/falling-cards'

export default async function Page() {
  await connection()
  const { count } = await trackView(await headers())
  const date = new Date()
  const cards = generateCards()

  return <PageView count={count} cards={cards} date={date} />
}
