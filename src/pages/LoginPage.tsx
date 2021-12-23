import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginForm } from '../components/loginForm/LoginForm'
import { MainLayout } from '../layout/MainLayout'

interface LoginPageProps {
  status: {
    isLoading: boolean
    isError: boolean
    isSuccess: boolean
  }
}

export const LoginPage = ({ status }: LoginPageProps) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (status.isSuccess) navigate('/')
  }, [status])

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
