import { Elysia } from 'elysia'
import { readViewCount } from '../db'

export const getViews = new Elysia().get('/views', () => readViewCount())
