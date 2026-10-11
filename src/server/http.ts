import { Elysia } from 'elysia'
import { openapi, fromTypes } from '@elysia/openapi'
import { getMessages } from './routes/get-messages'
import { getViews } from './routes/get-views'
import { sendMessage } from './routes/send-message'

export const http = new Elysia({ prefix: '/api' })
  .use(getMessages)
  .use(getViews)
  .use(sendMessage)
  .use(openapi({ references: fromTypes('src/server/http.ts') }))
