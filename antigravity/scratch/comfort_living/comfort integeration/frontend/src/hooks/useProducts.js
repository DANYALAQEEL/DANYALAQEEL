// ============================================
// Connected to the real backend API.
// Public interface (products, loading, error, getFeatured,
// getBestsellers, getNewArrivals, getByCategory, getById) is
// unchanged so existing pages/components keep working as-is.
// ============================================

import { useState, useEffect } from 'react'
import { fetchAllProducts } from '../services/productService'

export function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    fetchAllProducts()
      .then(data => {
        if (!cancelled) {
          setProducts(data)
          setLoading(false)
        }
      })
      .catch(err => {
        if (!cancelled) {
          setError(err.message)
          setLoading(false)
        }
      })

    return () => { cancelled = true }
  }, [])

  const getFeatured = () => products.filter(p => p.featured)
  const getBestsellers = () => products.filter(p => p.bestSeller)
  const getNewArrivals = () => products.filter(p => p.newArrival)
  const getByCategory = (cat) => products.filter(p => p.category === cat)
  const getById = (id) => products.find(p => p.id === id || p.slug === id)

  return {
    products,
    loading,
    error,
    getFeatured,
    getBestsellers,
    getNewArrivals,
    getByCategory,
    getById,
  }
}
