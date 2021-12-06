import { Route, Routes } from 'react-router'
import { Home } from './pages/Home'
import { LoginPage } from './pages/LoginPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
  )
}

export default App
