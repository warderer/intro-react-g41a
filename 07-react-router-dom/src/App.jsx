import { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'
import './App.css'

function App () {
  const [isAuth, setIsAuth] = useState(() => {
    return localStorage.getItem('isAuth') === 'true'
  })

  useEffect(() => {
    localStorage.setItem('isAuth', isAuth)
  }, [isAuth])

  const login = () => {
    setIsAuth(true)
  }

  const logout = () => {
    setIsAuth(false)
  }

  return (
    <div className='container'>
      <BrowserRouter>
        <Navbar isAuth={isAuth} onLogin={login} onLogout={logout} />
        <AppRoutes isAuth={isAuth} />
      </BrowserRouter>
    </div>
  )
}

export default App
