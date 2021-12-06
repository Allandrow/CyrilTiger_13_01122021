import { Login } from '../components/login/login'
import { MainLayout } from '../layout/MainLayout'

export const LoginPage = () => {
  return (
    <MainLayout>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <Login />
        </section>
      </main>
    </MainLayout>
  )
}
