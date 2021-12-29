import logo from '../../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import { NavItems } from '../navItems/NavItems'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'

export const Navigation = () => {
  const connectionStatus = useSelector(
    (state: RootState) => state.connection.status
  )
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
      <NavItems isLogged={connectionStatus === 'connected'} />
    </nav>
  )
}
