import 'whatwg-fetch'
import { rest } from 'msw'

const mockToken = {
  data: 'Valid JWT',
}

const mockUser = {
  data: {
    firstName: 'Tony',
    lastName: 'Stark',
  },
}

const baseUrl = 'http://localhost:3001/api/v1/user/'

interface LoginReqBody {
  email: string
  password: string
}

export const handlers = [
  rest.post(`${baseUrl}login`, (req, res, ctx) => {
    console.log('REQUEST WITH', req.body)
    const { email, password } = req.body as LoginReqBody
    if (email.length === 0 || password.length === 0) {
      console.log('400 BAD REQUEST')
      return res(ctx.status(400), ctx.json({ message: 'Bad Request' }))
    }
    console.log('200 WITH', mockToken)
    return res(ctx.status(200), ctx.json({ body: mockToken }))
  }),
  rest.post(`${baseUrl}profile`, (_, res, ctx) => {
    console.log('GET USER, SENDING BACK', mockUser)
    return res(ctx.status(200), ctx.json({ body: mockUser }))
  }),
  rest.put(`${baseUrl}profile`, (req, res, ctx) => {
    console.log('received PUT request with', req.body)
    return res(ctx.status(200), ctx.json({ body: req.body }))
  }),
]
