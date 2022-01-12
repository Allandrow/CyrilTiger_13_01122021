import {
  connectedPreloadedState,
  render,
  screen,
} from '../../../jest/test-utils'
import { Navigation } from '../navigation/Navigation'
import userEvent from '@testing-library/user-event'

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUseNavigate,
}))

test('Disconnect when I click on Sign out link', () => {
  render(<Navigation />, { preloadedState: connectedPreloadedState })
  const signOutLink = screen.getByRole('link', { name: /sign out/i })
  userEvent.click(signOutLink)
  expect(mockedUseNavigate).toHaveBeenCalled()
  expect(signOutLink).not.toBeInTheDocument()
})
