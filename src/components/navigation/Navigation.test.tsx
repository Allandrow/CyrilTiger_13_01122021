import { Navigation } from './Navigation'
import {
  connectedPreloadedState,
  render,
  screen,
} from '../../../jest/test-utils'

describe('When I connect to the site', () => {
  test('Should render the navigation', () => {
    render(<Navigation />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
  test(`Should have a sign in link if I'm not logged in`, () => {
    render(<Navigation />)
    expect(screen.getByRole('link', { name: /sign in/i })).toBeInTheDocument()
    expect(
      screen.queryByRole('link', { name: /sign out/i })
    ).not.toBeInTheDocument()
  })
  test(`Should have a sign out and name displayed if I'm logged in`, () => {
    render(<Navigation />, {
      preloadedState: connectedPreloadedState,
    })
    expect(screen.getByRole('link', { name: /tony/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
    expect(
      screen.queryByRole('link', { name: /sign in/i })
    ).not.toBeInTheDocument()
  })
})
