import { render, screen, connectedPreloadedState } from '../../jest/test-utils'
import { LoginPage } from './LoginPage'
import userEvent from '@testing-library/user-event'

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

test('submit filled form to redirect', async () => {
  render(<LoginPage />, {
    route: '/login',
    initialEntries: '/login',
  })
  const userNameInput = screen.getByRole('textbox', { name: /username/i })
  userEvent.type(userNameInput, 'tony@stark.com')
  userEvent.type(screen.getByLabelText(/password/i), '123456')
  userEvent.click(screen.getByRole('button', { name: /sign in/i }))
  expect(mockedUseNavigate).toHaveBeenCalled()
})

// test('submit error should throw', async () => {
//   render(<LoginPage />, {
//     route: '/login',
//     initialEntries: '/login',
//   })
//   const userNameInput = screen.getByRole('textbox', { name: /username/i })
//   userEvent.type(userNameInput, 'tony@stark.com')
//   userEvent.click(screen.getByRole('button', { name: /sign in/i }))
//   expect(mockedUseNavigate).not.toHaveBeenCalled()
// })
