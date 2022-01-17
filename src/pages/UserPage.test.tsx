import userEvent from '@testing-library/user-event'
import { render, screen, connectedPreloadedState } from '../../jest/test-utils'
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
  render(<UserPage />, {
    preloadedState: connectedPreloadedState,
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

test('Should display name in heading and navigation after submit', async () => {
  render(<UserPage />, {
    preloadedState: connectedPreloadedState,
    route: '/profile',
    initialEntries: '/profile',
  })
  userEvent.click(screen.getByRole('button', { name: /edit name/i }))
  userEvent.type(screen.getByPlaceholderText(/tony/i), 'Jean')
  userEvent.click(screen.getByRole('button', { name: /save/i }))
  expect(await screen.findByRole('link', { name: /jean/i })).toBeInTheDocument()
  expect(await screen.findByText(/jean stark/i)).toBeInTheDocument()
})
