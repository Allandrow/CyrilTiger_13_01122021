import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginForm } from '../components/loginForm/LoginForm'
import { useConnectionStatus } from '../hooks/useConnectionStatus'
import { MainLayout } from '../layout/MainLayout'

export const LoginPage = () => {
  const connectionStatus = useConnectionStatus()
  const navigate = useNavigate()

  useEffect(() => {
    if (connectionStatus === 'connected') {
      navigate('/')
    }
  }, [connectionStatus])
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
