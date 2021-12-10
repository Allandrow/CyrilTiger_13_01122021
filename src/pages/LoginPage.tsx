import { Link } from 'react-router-dom'
import { MainLayout } from '../layout/MainLayout'

export const LoginPage = () => {
  return (
    <MainLayout classNames={['main', 'bg-dark']}>
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <Link to="/profile" className="sign-in-button">
            Sign in
          </Link>
        </form>
      </section>
    </MainLayout>
  )
}

/* TODO : 
Submit should be 

<button className="sign-in-button">Sign In</button>

Instead of <Link>...</Link>
 */
