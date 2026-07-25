import { createContext, useContext, useState, useEffect } from 'react'
import { useAuth } from './AuthContext'
import {
  fetchCart,
  addCartItem,
  updateCartItem as updateCartItemApi,
  removeCartItem,
  clearCartBackend,
} from '../services/cartService'

const CartContext = createContext()

// Public interface (cartItems, addToCart, removeFromCart, updateQuantity,
// clearCart, cartCount, cartTotal) is unchanged from the original
// local-only implementation. Logged-in customers now get their cart
// persisted on the backend; guests keep the original local-only behavior.
export function CartProvider({ children }) {
  const { isAuthenticated } = useAuth()
  const [cartItems, setCartItems] = useState([])

  // When the customer logs in, load their persisted cart from the backend.
  // When they log out, fall back to an empty local cart.
  useEffect(() => {
    if (isAuthenticated) {
      fetchCart()
        .then(setCartItems)
        .catch(() => {}) // non-fatal — keep whatever is currently shown
    }
  }, [isAuthenticated])

  const addToCart = (product, quantity = 1) => {
    if (isAuthenticated) {
      addCartItem(product.id, quantity, product.selectedColor, product.selectedSize)
        .then(setCartItems)
        .catch(() => {})
      return
    }

    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, { ...product, quantity }]
    })
  }

  const removeFromCart = (id) => {
    if (isAuthenticated) {
      removeCartItem(id).then(setCartItems).catch(() => {})
      return
    }

    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return

    if (isAuthenticated) {
      updateCartItemApi(id, quantity).then(setCartItems).catch(() => {})
      return
    }

    setCartItems(prev =>
      prev.map(item => item.id === id ? { ...item, quantity } : item)
    )
  }

  const clearCart = () => {
    if (isAuthenticated) {
      clearCartBackend().then(setCartItems).catch(() => {})
      return
    }

    setCartItems([])
  }

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.salePrice * item.quantity, 0
  )

  return (
    <CartContext.Provider value={{
      cartItems, addToCart, removeFromCart, updateQuantity, clearCart, cartCount, cartTotal
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
