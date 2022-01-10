import { render, screen } from '../../jest/test-utils'
import { HomePage } from '../pages/HomePage'

describe('Full app render/navigation', () => {
  test('Homepage renders correctly', () => {
    render(<HomePage />)
    expect(
      screen.getByRole('heading', { name: 'Argent Bank' })
    ).toBeInTheDocument()
  })
})
