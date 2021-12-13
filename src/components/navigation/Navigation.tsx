import logo from '../../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import { useAuth } from '../../app/hooks/useAuth'
import { NavItems } from '../navItems/NavItems'

export const Navigation = () => {
  const { userToken } = useAuth()

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
      <NavItems isLogged={userToken !== null} />
    </nav>
  )
}
