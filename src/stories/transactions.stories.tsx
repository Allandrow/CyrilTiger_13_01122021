import { TransactionsPage } from '../pages/TransactionsPage'
import { rest } from 'msw'
import { data, Data } from './mock-data'
import { Story } from '@storybook/react'

const getMswParams = (data: Data[] = []) => {
  return {
    handlers: [
      rest.get('/transactions/:id', (_, res, ctx) => {
        return res(
          ctx.json({
            data: data,
          })
        )
      }),
      rest.put('/transactions/:id/:field', (_, res, ctx) => {
        return res(ctx.status(200))
      }),
    ],
  }
}

export default {
  title: 'Transactions',
  component: TransactionsPage,
}

const Template: Story = () => <TransactionsPage />

export const Default = Template.bind({})

Default.parameters = {
  msw: getMswParams(data.slice(0, 8)),
}

export const Empty = Template.bind({})

Empty.parameters = {
  msw: getMswParams(),
}

export const All = Template.bind({})

All.parameters = {
  msw: getMswParams(data),
}
