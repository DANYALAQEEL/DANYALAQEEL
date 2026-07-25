import { Link } from 'react-router-dom'
import { FiHeart, FiShoppingCart, FiStar } from 'react-icons/fi'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'
import { resolveImageUrl } from '../../services/api'

function ProductCard({ product }) {
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const inWishlist = isInWishlist(product.id)
  const discount = Math.round(((product.price - product.salePrice) / product.price) * 100)

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-accent">

      {/* Image Container */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={resolveImageUrl(product.images[0])}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badge */}
        {product.badge && (
          <span className={`absolute top-3 left-3 text-white text-xs font-semibold px-2 py-1 rounded-full
            ${product.badge === 'New' ? 'bg-green-500' : ''}
            ${product.badge === 'Sale' ? 'bg-red-500' : ''}
            ${product.badge === 'Best Seller' ? 'bg-primary' : ''}
          `}>
            {product.badge}
          </span>
        )}

        {/* Discount */}
        {discount > 0 && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            -{discount}%
          </span>
        )}

        {/* Hover Buttons */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm py-3 px-4 flex gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={() => addToCart(product, 1)}
            className="flex-1 bg-primary text-white text-sm py-2 rounded-full flex items-center justify-center gap-2 hover:bg-opacity-90 transition-colors"
          >
            <FiShoppingCart size={14} />
            Add to Cart
          </button>
          <button
            onClick={() => inWishlist ? removeFromWishlist(product.id) : addToWishlist(product)}
            className={`border border-secondary p-2 rounded-full transition-colors ${
              inWishlist ? 'bg-red-50 text-red-500 border-red-300' : 'bg-accent text-primary hover:bg-secondary'
            }`}
          >
            <FiHeart size={16} className={inWishlist ? 'fill-red-400' : ''} />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <Link to={`/product/${product.slug || product.id}`}>
          <h3 className="font-medium text-brand text-sm leading-snug mb-2 hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FiStar
                key={i}
                size={12}
                className={i < Math.floor(product.rating) ? 'fill-yellow-400' : ''}
              />
            ))}
          </div>
          <span className="text-xs text-gray-400">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-primary font-bold text-lg">
            Rs. {product.salePrice.toLocaleString()}
          </span>
          {product.price !== product.salePrice && (
            <span className="text-gray-400 text-sm line-through">
              Rs. {product.price.toLocaleString()}
            </span>
          )}
        </div>
      </div>

    </div>
  )
}

export default ProductCard