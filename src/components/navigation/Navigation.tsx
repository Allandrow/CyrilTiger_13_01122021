import logo from '../../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'

export const Navigation = () => {
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
      <div>
        <Link to="/login" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          <span> Sign In</span>
        </Link>
      </div>
    </nav>
  )
}
