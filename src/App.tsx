import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router'
import { useGetUserInfosMutation } from './app/services/fetchApi'
import { removeToken, setToken } from './features/authSlice'
import { setUser } from './features/userInfosSlice'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { UserPage } from './pages/UserPage'

function App() {
  const dispatch = useDispatch()
  const [getUserInfos, fetchState] = useGetUserInfosMutation()

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    if (token) {
      dispatch(setToken(token))
    }
    getUserInfos('')
      .unwrap()
      .then((res) => dispatch(setUser(res)))
      .catch(() => {
        localStorage.clear()
        dispatch(removeToken())
      })
  }, [])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="profile" element={<UserPage fetchState={fetchState} />} />
    </Routes>
  )
}

export default App
