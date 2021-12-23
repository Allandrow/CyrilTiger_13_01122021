import { TransactionsPage } from './TransactionsPage'
import { rest } from 'msw'
import { data } from './data'

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
