import { render, screen } from '../../jest/test-utils'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'

// Mocked useNavigate function
const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUseNavigate,
}))

describe('Full app render/navigation', () => {
  test('Homepage renders correctly', () => {
    render(<HomePage />)
    expect(
      screen.getByRole('heading', { name: 'Argent Bank' })
    ).toBeInTheDocument()
  })
  describe('Login Page', () => {
    test('Login page renders correctly', () => {
      render(<LoginPage />, { route: '/login', initialEntries: '/login' })
      expect(
        screen.getByRole('button', { name: /sign in/i })
      ).toBeInTheDocument()
    })
    test('If already logged in, should redirect to homepage', () => {
      const preloadedState = {
        connection: {
          status: 'connected',
        },
      }
      render(<LoginPage />, {
        preloadedState,
        route: '/login',
        initialEntries: '/login',
      })
      expect(mockedUseNavigate).toHaveBeenCalled()
    })
  })
})
