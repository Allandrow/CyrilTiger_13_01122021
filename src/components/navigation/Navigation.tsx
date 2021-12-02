import { Link } from 'react-router-dom'
import logo from './argentBankLogo.png'

export const Navigation = () => {
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
        <a className="main-nav-item" href="/">
          <i className="fa fa-user-circle"></i>
          <span> Sign In</span>
        </a>
      </div>
    </nav>
  )
}
// TODO : modify sign-in href to sign-in page/layout
