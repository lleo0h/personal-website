import { Elysia } from 'elysia'
import { incrementViewCount } from '../db'

export const incrementViews = new Elysia().post('/views', () => incrementViewCount())
