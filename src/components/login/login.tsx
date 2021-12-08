import { useNavigate } from 'react-router-dom'
import { setCredentials } from './authSlice'
import { useLoginMutation } from '../../app/services/auth'
import type { LoginRequest } from '../../app/services/auth'
import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { useAuth } from '../../hooks/useAuth'

export const Login = () => {
  const { userToken } = useAuth()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [formState, setFormState] = useState<LoginRequest>({
    email: '',
    password: '',
  })
  const [login] = useLoginMutation()

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((data) => {
        return data.json()
      })
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err)
      })
  }, [userToken])

  const handleInputChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: SyntheticEvent) => {
    try {
      e.preventDefault()
      const user = await login(formState).unwrap()
      dispatch(setCredentials(user))
      navigate('/profile')
    } catch (err) {
      console.error('ERROR', err)
    }
  }
  return (
    <form>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="email"
          onChange={handleInputChange}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleInputChange}
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className="sign-in-button" onClick={handleSubmit}>
        Sign In
      </button>
    </form>
  )
}
