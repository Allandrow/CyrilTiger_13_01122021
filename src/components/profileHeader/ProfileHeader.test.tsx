import userEvent from '@testing-library/user-event'
import {
  connectedPreloadedState,
  render,
  screen,
  waitFor,
} from '../../../jest/test-utils'
import { ProfileHeader } from './ProfileHeader'

test('Displays name in header', () => {
  render(<ProfileHeader name={{ firstName: 'Tony', lastName: 'Stark' }} />)
  expect(
    screen.getByRole('heading', { name: /tony stark/i })
  ).toBeInTheDocument()
})

test('Click on button shows form to edit name', () => {
  render(<ProfileHeader name={{ firstName: 'Tony', lastName: 'Stark' }} />)
  userEvent.click(screen.getByRole('button', { name: /edit name/i }))
  expect(screen.getByPlaceholderText(/tony/i)).toBeInTheDocument()
})

test('Submitting new values displays them in the heading', async () => {
  const { firstName, lastName } = connectedPreloadedState.user
  render(<ProfileHeader name={{ firstName, lastName }} />, {
    preloadedState: connectedPreloadedState,
  })
  userEvent.click(screen.getByRole('button', { name: /edit name/i }))
  expect(screen.getByPlaceholderText(/tony/i)).toBeInTheDocument()
  userEvent.type(screen.getByPlaceholderText(/tony/i), 'Jean')
  userEvent.click(screen.getByRole('button', { name: /save/i }))
  await waitFor(() => {
    expect(
      screen.queryByRole('button', { name: /save/i })
    ).not.toBeInTheDocument()
  })
})
