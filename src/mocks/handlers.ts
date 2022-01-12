import { rest } from 'msw'

const mockToken = 'Valid JWT'

const mockUser = {
  firstName: 'Tony',
  lastName: 'Stark',
}

export const handlers = [
  rest.post(`/login`, (_, res, ctx) => {
    console.log('IT IS KNOWN')
    return res(ctx.status(200), ctx.json(mockToken))
  }),
  rest.post(`/profile`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockUser))
  }),
  rest.put(`/profile`, (_, res, ctx) => {
    return res(ctx.status(200))
  }),
]

// TODO : set the responses
