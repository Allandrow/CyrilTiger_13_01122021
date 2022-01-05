import { HomePage } from '../pages/HomePage'
import { render, screen } from '../../jest/test-utils'

describe('When i connect to the site', () => {
  test('the page should render', () => {
    render(<HomePage />)
    expect(screen.getByText('Sign In')).toBeInTheDocument()
  })
})
