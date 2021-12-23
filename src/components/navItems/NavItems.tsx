import { SyntheticEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { RootState } from '../../app/store'
import { removeToken } from '../../features/authSlice'
import { removeUser } from '../../features/userInfosSlice'

interface NavItemsProps {
  isLogged: boolean
}

export const NavItems = ({ isLogged }: NavItemsProps) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userName = useSelector((state: RootState) => state.user.firstName)

  const handleSignOut = (e: SyntheticEvent) => {
    e.preventDefault()
    localStorage.removeItem('authToken')
    dispatch(removeToken())
    dispatch(removeUser())
    navigate('/')
  }

  return (
    <div>
      {isLogged ? (
        <>
          <Link to="/profile" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            {userName}
          </Link>
          <Link to="/" className="main-nav-item" onClick={handleSignOut}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </>
      ) : (
        <Link to="/login" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          <span> Sign In</span>
        </Link>
      )}
    </div>
  )
}
