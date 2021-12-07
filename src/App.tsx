import { Route, Routes } from 'react-router'
import { Home } from './pages/Home'
import { LoginPage } from './pages/LoginPage'
import { UserProfile } from './pages/userProfile'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="profile" element={<UserProfile />} />
    </Routes>
  )
}

export default App
