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
  const showFormBtn = screen.getByRole('button', { name: /edit name/i })
  userEvent.click(showFormBtn)
  expect(showFormBtn).not.toBeInTheDocument()
  expect(screen.getByPlaceholderText(/tony/i)).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument()
})

test('Submitting toggles back the form', async () => {
  const { firstName, lastName } = connectedPreloadedState.user
  render(<ProfileHeader name={{ firstName, lastName }} />, {
    preloadedState: connectedPreloadedState,
  })
  userEvent.click(screen.getByRole('button', { name: /edit name/i }))
  expect(screen.getByPlaceholderText(/tony/i)).toBeInTheDocument()
  userEvent.click(screen.getByRole('button', { name: /save/i }))
  await waitFor(() => {
    expect(
      screen.queryByRole('button', { name: /save/i })
    ).not.toBeInTheDocument()
  })
})
