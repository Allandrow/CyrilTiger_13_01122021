import { Link } from 'react-router-dom'

export const LoggedOutNav = () => {
  return (
    <div>
      <Link to="/login" className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        <span> Sign In</span>
      </Link>
    </div>
  )
}
