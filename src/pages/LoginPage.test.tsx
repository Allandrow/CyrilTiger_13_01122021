import { render, screen, connectedPreloadedState } from '../../jest/test-utils'
import { LoginPage } from './LoginPage'

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUseNavigate,
}))

test(`If I'm not logged in, Login Page should be rendered`, () => {
  render(<LoginPage />, {
    route: '/login',
    initialEntries: '/login',
  })
  expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()
  expect(mockedUseNavigate).not.toHaveBeenCalled()
})

test('If already logged in, should redirect to homepage', () => {
  render(<LoginPage />, {
    preloadedState: connectedPreloadedState,
    route: '/login',
    initialEntries: '/login',
  })
  expect(mockedUseNavigate).toHaveBeenCalled()
})
