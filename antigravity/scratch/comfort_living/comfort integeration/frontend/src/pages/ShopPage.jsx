import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiSearch, FiFilter, FiX, FiChevronDown } from 'react-icons/fi'
import ProductCard from '../components/common/ProductCard'
import { useProducts } from '../hooks/useProducts'

const categoryList = [
  'All',
  'Bedsheets',
  'Blankets',
  'Pillows',
  'Mattress Topper',
  'Mattress Protectors',
  'BedSpreads',
  'Bedding',
  'Leather Belts',
  'Leather Products',
  "Men's Wallets",
  'Ladies Bags',
  'Laptop Bags',
]

const sortOptions = [
  { label: 'Default', value: 'default' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
  { label: 'Newest First', value: 'newest' },
]

function ShopPage() {
  const { products } = useProducts()
  const [searchParams] = useSearchParams()
  const urlCategory = searchParams.get('category')

  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(
    urlCategory ? urlCategory.charAt(0).toUpperCase() + urlCategory.slice(1) : 'All'
  )
  const [sortBy, setSortBy] = useState('default')
  const [showFilters, setShowFilters] = useState(false)

  const filtered = useMemo(() => {
    let result = [...products]

    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory)
    }

    // Filter by search
    if (search.trim()) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase())
      )
    }

    // Sort
    if (sortBy === 'price-asc') result.sort((a, b) => a.salePrice - b.salePrice)
    if (sortBy === 'price-desc') result.sort((a, b) => b.salePrice - a.salePrice)
    if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating)
    if (sortBy === 'newest') result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

    return result
  }, [products, search, selectedCategory, sortBy])

  return (
    <div className="min-h-screen bg-white">

      {/* Page Header */}
      <div className="bg-accent py-12 px-4 text-center border-b border-secondary/30">
        <p className="text-primary text-sm uppercase tracking-widest font-medium mb-2">
          Our Collection
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-brand font-bold">
          Shop All Products
        </h1>
        <p className="text-gray-500 mt-3 text-sm">
          {filtered.length} products found
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Search + Sort Bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">

          {/* Search */}
          <div className="relative flex-1">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-secondary rounded-full text-sm outline-none focus:border-primary transition-colors"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary"
              >
                <FiX size={16} />
              </button>
            )}
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="appearance-none pl-4 pr-10 py-3 border border-secondary rounded-full text-sm outline-none focus:border-primary bg-white cursor-pointer"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
          </div>

          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="sm:hidden flex items-center gap-2 px-5 py-3 border border-secondary rounded-full text-sm"
          >
            <FiFilter size={16} />
            Filters
          </button>

        </div>

        <div className="flex gap-8">

          {/* Sidebar Filters — Desktop always visible, Mobile toggleable */}
          <aside className={`${showFilters ? 'block' : 'hidden'} sm:block w-full sm:w-56 shrink-0`}>
            <div className="sticky top-24">

              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-semibold text-brand text-sm uppercase tracking-wider mb-4">
                  Categories
                </h3>
                <ul className="space-y-2">
                  {categoryList.map(cat => (
                    <li key={cat}>
                      <button
                        onClick={() => setSelectedCategory(cat)}
                        className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === cat
                            ? 'bg-primary text-white font-medium'
                            : 'text-gray-600 hover:bg-accent hover:text-primary'
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Filters */}
              <div>
                <h3 className="font-semibold text-brand text-sm uppercase tracking-wider mb-4">
                  Quick Filters
                </h3>
                <div className="space-y-2">
                  {[
                    { label: 'Best Sellers', action: () => { setSelectedCategory('All'); setSortBy('rating') }},
                    { label: 'New Arrivals', action: () => { setSelectedCategory('All'); setSortBy('newest') }},
                    { label: 'On Sale', action: () => { setSelectedCategory('All'); setSortBy('price-asc') }},
                  ].map(f => (
                    <button
                      key={f.label}
                      onClick={f.action}
                      className="w-full text-left text-sm px-3 py-2 rounded-lg text-gray-600 hover:bg-accent hover:text-primary transition-colors"
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-4xl mb-4">🔍</p>
                <h3 className="font-serif text-2xl text-brand mb-2">No products found</h3>
                <p className="text-gray-500 text-sm">Try a different search or category</p>
                <button
                  onClick={() => { setSearch(''); setSelectedCategory('All') }}
                  className="mt-6 bg-primary text-white px-8 py-3 rounded-full text-sm hover:bg-opacity-90 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default ShopPage