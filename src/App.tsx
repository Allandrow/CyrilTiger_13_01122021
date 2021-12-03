import { Route, Routes } from 'react-router'
import { Home } from './pages/Home'
import { Signin } from './pages/Signin'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="sign-in" element={<Signin />} />
    </Routes>
  )
}

export default App
