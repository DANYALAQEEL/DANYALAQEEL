import { createContext, useContext, useState } from 'react'
import { getAdminToken, getStoredAdminUser } from '../services/adminApi'
import { loginAdmin, logoutAdmin } from '../services/adminAuthService'

const AdminAuthContext = createContext()

export function AdminAuthProvider({ children }) {
  const [admin, setAdmin] = useState(() => (getAdminToken() ? getStoredAdminUser() : null))

  const login = async (credentials) => {
    const loggedInAdmin = await loginAdmin(credentials)
    setAdmin(loggedInAdmin)
    return loggedInAdmin
  }

  const logout = () => {
    logoutAdmin()
    setAdmin(null)
  }

  return (
    <AdminAuthContext.Provider value={{ admin, isAuthenticated: !!admin, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  )
}

export const useAdminAuth = () => useContext(AdminAuthContext)
