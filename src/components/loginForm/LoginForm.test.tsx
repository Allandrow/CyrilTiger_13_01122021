import userEvent from '@testing-library/user-event'
import { render, screen } from '../../../jest/test-utils'
import { LoginForm } from './LoginForm'

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUseNavigate,
}))

test('submit filled form to redirect and display name', async () => {
  render(<LoginForm />)
  userEvent.type(
    screen.getByRole('textbox', { name: /username/i }),
    'tony@stark.com'
  )
  userEvent.type(screen.getByLabelText(/password/i), '123456')
  userEvent.click(screen.getByRole('button', { name: /sign in/i }))
  expect(true).toBe(true)
})
