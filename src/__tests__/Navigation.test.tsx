import { Navigation } from '../components/navigation/Navigation'
import { render, screen } from '../../jest/test-utils'

describe('When I connect to the site', () => {
  test('Should render the navigation', () => {
    render(<Navigation />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
  test(`Should have a sign in link if I'm not logged in`, () => {
    render(<Navigation />)
    expect(screen.getByText('Sign In')).toBeInTheDocument()
    expect(screen.queryByText('Sign Out')).not.toBeInTheDocument()
  })
})
