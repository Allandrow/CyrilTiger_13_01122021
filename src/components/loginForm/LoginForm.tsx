import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  useGetAuthTokenMutation,
  useGetUserInfosMutation,
} from '../../app/services/fetchApi'
import { setToken } from '../../features/authSlice'
import { setUser } from '../../features/userInfosSlice'

export const LoginForm = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  })
  const [getAuthToken] = useGetAuthTokenMutation()
  const [getUserInfos] = useGetUserInfosMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = ({
    target: { id, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setFormState((previousState) => ({
      ...previousState,
      [id]: value,
    }))
  }

  const handleSubmit = async (e: SyntheticEvent) => {
    try {
      e.preventDefault()
      const token = await getAuthToken(formState).unwrap()
      dispatch(setToken(token))
      const userInfos = await getUserInfos('').unwrap()
      dispatch(setUser(userInfos))
      navigate('/profile')
    } catch (err) {
      console.error('ERROR', err)
    }
  }

  return (
    <form>
      <div className="input-wrapper">
        <label htmlFor="email">Username</label>
        <input type="text" id="email" onChange={handleChange} />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={handleChange} />
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
