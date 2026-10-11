import { env } from './env'
import { sql, eq, and, asc, lt } from 'drizzle-orm'
import { drizzle } from 'drizzle-orm/node-postgres'
import {
  integer,
  varchar,
  pgTable,
  uuid,
  text,
  timestamp,
  index,
  pgEnum,
  alias
} from 'drizzle-orm/pg-core'

export const views = pgTable('views', {
  id: varchar({ length: 4 }).primaryKey(),
  count: integer().default(0).notNull()
})

export const messageStatus = pgEnum('message_status', [
  'pending',
  'approved',
  'rejected',
  'deleted'
])

export const messages = pgTable(
  'messages',
  {
    id: uuid()
      .primaryKey()
      .default(sql`uuidv7()`),
    referenceId: uuid('reference_id'),
    name: varchar({ length: 25 }).notNull(),
    content: text().notNull(),
    status: messageStatus().default('pending').notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull()
  },
  (table) => [index('messages_created_at_idx').on(table.createdAt)]
)

export const schema = { views, messages }

export const db = drizzle(env.DATABASE_URL)

const referencedMessage = alias(schema.messages, 'referenced_message')

export type MessageFilters = {
  limit: number
  status?: (typeof messageStatus.enumValues)[number]
  referenceStatus?: (typeof messageStatus.enumValues)[number]
  cursor?: string
}

export async function readMessages({ limit, status, referenceStatus, cursor }: MessageFilters) {
  const r = await db
    .select({
      id: schema.messages.id,
      name: schema.messages.name,
      content: schema.messages.content,
      status: schema.messages.status,
      createdAt: schema.messages.createdAt,
      referenceId: schema.messages.referenceId,
      reference: {
        id: referencedMessage.id,
        name: referencedMessage.name,
        content: referencedMessage.content
      }
    })
    .from(schema.messages)
    .leftJoin(
      referencedMessage,
      and(
        eq(schema.messages.referenceId, referencedMessage.id),
        referenceStatus !== undefined ? eq(referencedMessage.status, referenceStatus) : undefined
      )
    )
    .where(
      and(
        status !== undefined ? eq(schema.messages.status, status) : undefined,
        cursor !== undefined ? lt(schema.messages.id, cursor) : undefined
      )
    )
    .orderBy(asc(schema.messages.id))
    .limit(limit + 1)

  const hasMore = r.length > limit
  const items = r.slice(0, limit)

  return {
    items,
    nextCursor: hasMore ? items.at(-1)!.id : null
  }
}

export async function createMessage({
  name,
  content,
  referenceId
}: {
  name: string
  content: string
  referenceId?: string
}) {
  const [message] = await db
    .insert(schema.messages)
    .values({ name, content, referenceId })
    .returning()

  return message!
}

export async function readViewCount() {
  const [view] = await db
    .select({ count: schema.views.count })
    .from(schema.views)
    .where(eq(schema.views.id, 'home'))

  return { count: view?.count ?? 0 }
}

export async function incrementViewCount() {
  const [view] = await db
    .insert(schema.views)
    .values({ id: 'home', count: 1 })
    .onConflictDoUpdate({
      target: schema.views.id,
      set: {
        count: sql`${schema.views.count} + 1`
      }
    })
    .returning()

  return { count: view!.count }
}
