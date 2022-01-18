import { render, screen } from '../../jest/test-utils'
import { useConnectionStatus } from './useConnectionStatus'

interface Token {
  jwt: {
    token: string | null
  }
}

function getConnectionStatus(token: Token = { jwt: { token: null } }) {
  let status
  function TestComponent() {
    status = useConnectionStatus()
    return <h1>{status}</h1>
  }

  render(<TestComponent />, { preloadedState: token })
  return null
}

test('hook requesting user infos', async () => {
  const preloadedState = { jwt: { token: 'valid token' } }
  getConnectionStatus(preloadedState)
  expect(
    await screen.findByRole('heading', { name: /pending/i })
  ).toBeInTheDocument()
  expect(
    await screen.findByRole('heading', { name: /connected/i })
  ).toBeInTheDocument()
})

test('hook not fetching', async () => {
  getConnectionStatus()
  expect(
    await screen.findByRole('heading', { name: /not connected/i })
  ).toBeInTheDocument()
})
