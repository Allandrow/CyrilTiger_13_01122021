import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCredentials } from './authSlice'
import { useLoginMutation } from '../../app/services/auth'
import type { LoginRequest } from '../../app/services/auth'
import { ChangeEvent, SyntheticEvent, useState } from 'react'

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formState, setFormState] = useState<LoginRequest>({
    email: '',
    password: '',
  })
  const [login] = useLoginMutation()

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
      console.log(dispatch(setCredentials(user)))
      navigate('/')
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

// TODO : change navigate to /profile
