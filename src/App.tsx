import { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { UserPage } from './pages/UserPage'
import { useDispatch } from 'react-redux'
import { removeToken, setToken } from './features/authSlice'
import { removeUser, setUser } from './features/userInfosSlice'
import { useGetUserInfosMutation } from './app/services/fetchApi'

function App() {
  const dispatch = useDispatch()
  const [getUserInfos] = useGetUserInfosMutation()
  useEffect(() => {
    try {
      const fetchAndSetUser = async () => {
        const userInfos = await getUserInfos('').unwrap()
        dispatch(setUser(userInfos))
      }
      const token = localStorage.getItem('authToken')
      dispatch(setToken(token))
      fetchAndSetUser()
    } catch (err) {
      // TODO : create a separate function to avoid duplication with signout
      localStorage.removeItem('authToken')
      dispatch(removeToken())
      dispatch(removeUser())
    }
  }, [])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="profile" element={<UserPage />} />
    </Routes>
  )
}

export default App
