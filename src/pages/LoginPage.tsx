import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginForm } from '../components/loginForm/LoginForm'
import { useRememberedUser } from '../hooks/useRememberedUser'
import { MainLayout } from '../layout/MainLayout'

export const LoginPage = () => {
  const authStatus = useRememberedUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (authStatus.isSuccess) {
      navigate('/')
    }
  }, [authStatus])
  return (
    <MainLayout>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <LoginForm />
        </section>
      </main>
    </MainLayout>
  )
}
