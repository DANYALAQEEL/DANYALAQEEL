// ============================================
// Connected to the real backend API.
// Public interface (categories, loading, error) is unchanged.
// ============================================

import { useState, useEffect } from 'react'
import { fetchCategories } from '../services/productService'

export function useCategories() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    fetchCategories()
      .then(data => {
        if (!cancelled) {
          setCategories(data)
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

  return { categories, loading, error }
}
