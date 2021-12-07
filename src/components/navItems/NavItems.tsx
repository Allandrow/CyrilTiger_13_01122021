import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../app/hooks'
import { removeCredentials } from '../login/authSlice'

interface NavItemsProps {
  isLogged: boolean
}

export const NavItems = ({ isLogged }: NavItemsProps) => {
  const dispatch = useAppDispatch()

  return (
    <>
      {isLogged ? (
        <>
          <Link to="/profile" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Tony
          </Link>
          <Link
            to="/"
            className="main-nav-item"
            onClick={() => dispatch(removeCredentials())}
          >
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

// TODO : change user name to dynamic value once user is fetched
