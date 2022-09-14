import { createContext, useState } from 'react'

export const AuthContext = createContext(null)

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)

  const value = {
    isAuth,
    activateAuth: () => {
      setIsAuth(true)
    }
  }

  const handleLogin = () => {
    value.activateAuth()
  }

  const handleLogout = () => {
    setIsAuth(false)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        handleLogin,
        handleLogout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
