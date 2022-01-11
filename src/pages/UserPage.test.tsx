import { render, screen } from '../../jest/test-utils'
import { UserPage } from './UserPage'

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUseNavigate,
}))

test(`If not logged in, should redirect`, () => {
  render(<UserPage />, { route: '/profile', initialEntries: '/profile' })
  expect(mockedUseNavigate).toHaveBeenCalled()
})

test(`If logged in the page should render`, () => {
  const preloadedState = {
    jwt: {
      token: 'valid token',
    },
    connection: {
      status: 'connected',
    },
    user: {
      firstName: 'Tony',
      lastName: 'Stark',
    },
  }
  render(<UserPage />, {
    preloadedState,
    route: '/profile',
    initialEntries: '/profile',
  })

  expect(
    screen.getByRole('heading', { name: /welcome back tony stark/i })
  ).toBeInTheDocument()
  expect(
    screen.queryByRole('heading', { name: /loading/i })
  ).not.toBeInTheDocument()
})
