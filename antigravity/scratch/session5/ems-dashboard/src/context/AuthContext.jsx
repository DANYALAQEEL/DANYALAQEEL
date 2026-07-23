import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export const ROLES = {
  ADMIN: 'admin',
  ORG:   'org',
  USER:  'user',
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const login = (role) => {
    const profiles = {
      [ROLES.ADMIN]: { name: 'App Admin',       email: 'appadmin@yopmail.com', role: ROLES.ADMIN },
      [ROLES.ORG]:   { name: 'CF Smart Technology', email: 'org@cfsmartems.com',  role: ROLES.ORG   },
      [ROLES.USER]:  { name: 'Miss Maryam',     email: 'maryam@delicia.com',    role: ROLES.USER  },
    }
    setUser(profiles[role])
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
