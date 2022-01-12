import 'whatwg-fetch'
import { rest } from 'msw'

const mockToken = 'Valid JWT'

const mockUser = {
  firstName: 'Tony',
  lastName: 'Stark',
}

const baseUrl = 'http://localhost:3001/api/v1/user/'

export const handlers = [
  rest.post(`${baseUrl}login`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockToken))
  }),
  rest.post(`${baseUrl}profile`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockUser))
  }),
  rest.put(`${baseUrl}profile`, (_, res, ctx) => {
    return res(ctx.status(200))
  }),
]

// TODO : set the responses
