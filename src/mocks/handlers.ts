import { rest } from 'msw'

const url = 'http://localhost:3001/api/v1/user/'

const mockToken = 'Valid JWT'

const mockUser = {
  firstName: 'Tony',
  lastName: 'Stark',
}

export const handlers = [
  rest.post(`${url}login`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockToken))
  }),
  rest.post(`${url}profile`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockUser))
  }),
  rest.put(`${url}profile`, (_, res, ctx) => {
    return res(ctx.status(200))
  }),
]

// TODO : set the responses
