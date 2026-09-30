import { Elysia } from 'elysia'
import { trackView } from '../views'

export const incrementViews = new Elysia().post('/views', ({ request }) =>
  trackView(request.headers)
)
