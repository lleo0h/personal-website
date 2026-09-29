import { Elysia } from 'elysia'
import { openapi, fromTypes } from '@elysia/openapi'
import { getViews } from './routes/get-views'

export const http = new Elysia({ prefix: '/api' })
  .get('/', () => ({ message: 'Hello World' }))
  .use(getViews)
  .use(
    openapi({
      references: fromTypes('src/server/http.ts'),
      documentation: {
        info: {
          title: '',
          description: '',
          version: ''
        }
      }
    })
  )
