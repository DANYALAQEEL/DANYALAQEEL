import { createContext, useContext, useState, useEffect } from 'react'
import { getToken } from '../services/api'
import {
  loginCustomer,
  registerCustomer,
  fetchCurrentCustomer,
  logoutCustomer,
} from '../services/authService'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = getToken()
    if (!token) {
      setLoading(false)
      return
    }

    fetchCurrentCustomer()
      .then(setUser)
      .catch(() => {
        // stored token is invalid/expired
        logoutCustomer()
      })
      .finally(() => setLoading(false))
  }, [])

  const login = async (credentials) => {
    const loggedInUser = await loginCustomer(credentials)
    setUser(loggedInUser)
    return loggedInUser
  }

  const register = async (details) => {
    const newUser = await registerCustomer(details)
    setUser(newUser)
    return newUser
  }

  const logout = () => {
    logoutCustomer()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, isAuthenticated: !!user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
