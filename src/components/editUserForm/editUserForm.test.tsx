import {
  connectedPreloadedState,
  render,
  screen,
} from '../../../jest/test-utils'
import { EditUserForm } from './editUserForm'

test('Displaying inputs with placeholder text from props', () => {
  const toggle = jest.fn()
  render(
    <EditUserForm
      toggle={toggle}
      firstName={connectedPreloadedState.user.firstName}
      lastName={connectedPreloadedState.user.lastName}
    />,
    { preloadedState: connectedPreloadedState }
  )
  expect(screen.getByPlaceholderText(/tony/i)).toBeInTheDocument()
  expect(screen.getByPlaceholderText(/stark/i)).toBeInTheDocument()
})
