import { Elysia } from 'elysia'
import { z } from 'zod'
import { readMessages } from '../db'

export const getMessages = new Elysia().get(
  '/messages',
  async ({ query }) =>
    readMessages({
      limit: query.limit,
      status: 'approved',
      referenceStatus: 'approved'
    }),
  {
    query: z.object({
      limit: z.coerce.number().int().min(1).max(100),
      cursor: z.string().optional()
    })
  }
)
