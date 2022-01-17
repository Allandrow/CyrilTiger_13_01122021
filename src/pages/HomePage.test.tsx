import { render, screen } from '../../jest/test-utils'
import { HomePage } from './HomePage'

test('HomePage should be rendered', () => {
  render(<HomePage />)
  expect(screen.getByRole('heading', { name: /features/i })).toBeInTheDocument()
})
