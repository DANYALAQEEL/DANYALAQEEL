import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiHeart, FiTrash2, FiShoppingCart } from 'react-icons/fi'
import { useWishlist } from '../context/WishlistContext'
import { useCart } from '../context/CartContext'
import { resolveImageUrl } from '../services/api'

function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <FiHeart size={64} className="text-secondary mx-auto mb-4" />
          <h2 className="font-serif text-3xl text-brand mb-2">Your wishlist is empty</h2>
          <p className="text-gray-500 text-sm mb-6">
            Save your favourite products here.
          </p>
          <Link
            to="/shop"
            className="bg-primary text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">

      <div className="bg-accent py-10 px-4 text-center border-b border-secondary/30">
        <h1 className="font-serif text-4xl text-brand font-bold">My Wishlist</h1>
        <p className="text-gray-500 text-sm mt-2">{wishlistItems.length} saved item(s)</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlistItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-accent rounded-2xl overflow-hidden shadow-sm"
            >
              <div className="relative">
                <Link to={`/product/${item.slug || item.id}`}>
                  <img
                    src={resolveImageUrl(item.images[0])}
                    alt={item.name}
                    className="w-full aspect-square object-cover"
                  />
                </Link>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-3 right-3 bg-white text-red-400 p-2 rounded-full shadow hover:bg-red-50 transition-colors"
                >
                  <FiTrash2 size={14} />
                </button>
              </div>

              <div className="p-4">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                  {item.category}
                </p>
                <Link to={`/product/${item.slug || item.id}`}>
                  <h3 className="font-medium text-brand text-sm mb-2 hover:text-primary transition-colors line-clamp-2">
                    {item.name}
                  </h3>
                </Link>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-primary font-bold">
                    Rs. {item.salePrice.toLocaleString()}
                  </span>
                  <button
                    onClick={() => addToCart(item, 1)}
                    className="flex items-center gap-1 bg-primary text-white text-xs px-3 py-2 rounded-full hover:bg-opacity-90 transition-colors"
                  >
                    <FiShoppingCart size={12} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WishlistPage