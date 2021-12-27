import { TransactionsPage } from '../pages/TransactionsPage'
import { rest } from 'msw'
import { data } from './mock-data'

export default {
  title: 'Transactions',
  component: TransactionsPage,
}

const Template = () => <TransactionsPage />

export const Default: any = Template.bind({})

Default.parameters = {
  msw: {
    handlers: [
      rest.get('/transactions/:id', (_, res, ctx) => {
        return res(
          ctx.json({
            data: data.slice(0, 8),
          })
        )
      }),
      rest.put('/transactions/:id/:field', (_, res, ctx) => {
        return res(ctx.status(200))
      }),
    ],
  },
}

export const Empty: any = Template.bind({})

Empty.parameters = {
  msw: {
    handlers: [
      rest.get('/transactions/:id', (_, res, ctx) => {
        return res(
          ctx.json({
            data: [],
          })
        )
      }),
      rest.put('/transactions/:id/:field', (_, res, ctx) => {
        return res(ctx.status(200))
      }),
    ],
  },
}

export const All: any = Template.bind({})

All.parameters = {
  msw: {
    handlers: [
      rest.get('/transactions/:id', (_, res, ctx) => {
        return res(
          ctx.json({
            data: data,
          })
        )
      }),
    ],
  },
}
