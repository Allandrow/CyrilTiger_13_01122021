import { Link } from 'react-router-dom'
import logo from './argentBankLogo.png'
import { useAuth } from '../../hooks/useAuth'
import { NavItems } from '../navItems/NavItems'

export const Navigation = () => {
  const { userToken } = useAuth()

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {userToken ? (
          <NavItems isLogged={true} />
        ) : (
          <NavItems isLogged={false} />
        )}
      </div>
    </nav>
  )
}
