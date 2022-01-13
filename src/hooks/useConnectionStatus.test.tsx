import { render } from '../../jest/test-utils'
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
    return null
  }

  render(<TestComponent />, { preloadedState: token })
  return status
}

test('hook requesting user infos', () => {
  const preloadedState = { jwt: { token: 'valid token' } }
  const status = getConnectionStatus(preloadedState)
  expect(status).toBe('pending')
})

test('hook not fetching', () => {
  const status = getConnectionStatus()
  expect(status).toBe('not connected')
})
