import { createContext, useContext, useState, useEffect } from 'react'
import { useAuth } from './AuthContext'
import {
  fetchWishlist,
  addWishlistItem,
  removeWishlistItem,
} from '../services/wishlistService'

const WishlistContext = createContext()

// Public interface (wishlistItems, addToWishlist, removeFromWishlist,
// isInWishlist, wishlistCount) is unchanged from the original local-only
// implementation. Logged-in customers get their wishlist persisted on the
// backend (keyed by their account email, matching the existing Wishlist
// schema); guests keep the original local-only behavior.
export function WishlistProvider({ children }) {
  const { isAuthenticated, user } = useAuth()
  const [wishlistItems, setWishlistItems] = useState([])

  useEffect(() => {
    if (isAuthenticated && user?.email) {
      fetchWishlist(user.email)
        .then(setWishlistItems)
        .catch(() => {})
    }
  }, [isAuthenticated, user?.email])

  const addToWishlist = (product) => {
    if (isAuthenticated && user?.email) {
      addWishlistItem(
        { name: user.name, email: user.email, phone: user.phone },
        product.id
      )
        .then(setWishlistItems)
        .catch(() => {})
      return
    }

    setWishlistItems(prev => {
      const exists = prev.find(item => item.id === product.id)
      if (exists) return prev
      return [...prev, product]
    })
  }

  const removeFromWishlist = (id) => {
    if (isAuthenticated && user?.email) {
      removeWishlistItem(user.email, id)
        .then(setWishlistItems)
        .catch(() => {})
      return
    }

    setWishlistItems(prev => prev.filter(item => item.id !== id))
  }

  const isInWishlist = (id) => wishlistItems.some(item => item.id === id)

  const wishlistCount = wishlistItems.length

  return (
    <WishlistContext.Provider value={{
      wishlistItems, addToWishlist, removeFromWishlist, isInWishlist, wishlistCount
    }}>
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => useContext(WishlistContext)
