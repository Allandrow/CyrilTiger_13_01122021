import { rest } from 'msw'

const url = 'http://localhost:3001/api/v1/user/'

export const handlers = [
  rest.post(`${url}login`, (req, res, ctx) => {
    return res(ctx.status(200))
  }),
  rest.post(`${url}profile`, (req, res, ctx) => {
    return res(ctx.status(200))
  }),
  rest.put(`${url}profile`, (req, res, ctx) => {
    return res(ctx.status(200))
  }),
]

// TODO : set the responses
