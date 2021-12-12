import logo from '../../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
// import { useUserFirstNameSelector } from '../../features/userInfosSlice'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { LoggedOutNav } from '../loggedOutNav/LoggedOutNav'
import { LoggedInNav } from '../loggedInNav/LoggedInNav'

export const Navigation = () => {
  const userFirstName = useSelector((state: RootState) => state.user.firstName)

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          src={logo}
          alt="Argent Bank Logo"
          className="main-nav-logo-image"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {userFirstName ? <LoggedInNav name={userFirstName} /> : <LoggedOutNav />}
    </nav>
  )
}
