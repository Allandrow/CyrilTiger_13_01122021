import { Link } from 'react-router-dom'

interface NavItemsProps {
  isLogged: boolean
}

export const NavItems = ({ isLogged }: NavItemsProps) => {
  return (
    <>
      {isLogged ? (
        <>
          <Link to="/" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Tony
          </Link>
          <Link to="/" className="main-nav-item">
            <i className="fa fa-sign-out"></i>
            Sign out
          </Link>
        </>
      ) : (
        <Link to="/login" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          <span> Sign In</span>
        </Link>
      )}
    </>
  )
}
