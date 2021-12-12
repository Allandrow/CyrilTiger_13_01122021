import { Link } from 'react-router-dom'

export const LoggedInNav = ({ name }: any) => {
  return (
    <div>
      <Link to="profile" className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        {name}
      </Link>
      <Link to="/" className="main-nav-item">
        <i className="fa fa-sign-out"></i>
        Sign Out
      </Link>
    </div>
  )
}
