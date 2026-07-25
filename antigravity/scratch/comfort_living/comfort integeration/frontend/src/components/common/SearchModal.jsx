import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch, FiX } from 'react-icons/fi'
import { useProducts } from '../../hooks/useProducts'
import { resolveImageUrl } from '../../services/api'

function SearchModal({ isOpen, onClose }) {
  const { products } = useProducts()
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  const results = query.trim().length > 1
    ? products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5)
    : []

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
      setQuery('')
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-start justify-center pt-24 px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            onClick={e => e.stopPropagation()}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden"
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-accent">
              <FiSearch size={20} className="text-primary shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search products, categories..."
                className="flex-1 text-base outline-none text-brand placeholder-gray-400"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <FiX size={18} />
                </button>
              )}
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-primary transition-colors ml-2 text-sm"
              >
                ESC
              </button>
            </div>

            {/* Results */}
            <div className="max-h-96 overflow-y-auto">
              {query.trim().length > 1 && results.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-4xl mb-3">🔍</p>
                  <p className="text-brand font-medium">No results for "{query}"</p>
                  <p className="text-gray-400 text-sm mt-1">
                    Try searching for bedsheets, pillows, curtains...
                  </p>
                </div>
              )}

              {results.length > 0 && (
                <div className="p-3">
                  <p className="text-xs text-gray-400 uppercase tracking-wider px-3 mb-2">
                    Products
                  </p>
                  {results.map(product => (
                    <Link
                      key={product.id}
                      to={`/product/${product.slug || product.id}`}
                      onClick={onClose}
                      className="flex items-center gap-4 p-3 rounded-2xl hover:bg-accent transition-colors group"
                    >
                      <img
                        src={resolveImageUrl(product.images[0])}
                        alt={product.name}
                        className="w-14 h-14 rounded-xl object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">
                          {product.category}
                        </p>
                        <p className="text-sm font-medium text-brand group-hover:text-primary transition-colors truncate">
                          {product.name}
                        </p>
                        <p className="text-primary font-bold text-sm">
                          Rs. {product.salePrice.toLocaleString()}
                        </p>
                      </div>
                      {product.badge && (
                        <span className={`text-white text-xs px-2 py-1 rounded-full shrink-0
                          ${product.badge === 'New' ? 'bg-green-500' : ''}
                          ${product.badge === 'Sale' ? 'bg-red-500' : ''}
                          ${product.badge === 'Best Seller' ? 'bg-primary' : ''}
                        `}>
                          {product.badge}
                        </span>
                      )}
                    </Link>
                  ))}

                  <Link
                    to={`/shop?search=${query}`}
                    onClick={onClose}
                    className="block text-center text-sm text-primary font-medium py-3 hover:underline"
                  >
                    See all results for "{query}"
                  </Link>
                </div>
              )}

              {query.trim().length <= 1 && (
                <div className="p-6">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-4">
                    Popular Categories
                  </p>
                  <div className="flex flex-wrap gap-2">
                  {['Bedsheets', 'Blankets', 'Pillows', 'Mattress Topper', 'Leather Belts', "Men's Wallets", 'Ladies Bags', 'Laptop Bags'].map(cat => (
                      <Link
                        key={cat}
                        to={`/shop?category=${cat.toLowerCase()}`}
                        onClick={onClose}
                        className="bg-accent text-brand text-sm px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                      >
                        {cat}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SearchModal