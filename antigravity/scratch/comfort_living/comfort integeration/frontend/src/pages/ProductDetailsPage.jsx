import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FiShoppingCart, FiHeart, FiStar, FiTruck,
  FiRefreshCw, FiShield, FiChevronRight, FiMinus, FiPlus
} from 'react-icons/fi'
import { useProducts } from '../hooks/useProducts'
import ProductCard from '../components/common/ProductCard'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { resolveImageUrl } from '../services/api'

function ProductDetailsPage() {
  const { id } = useParams()
  const { products, loading } = useProducts()
  const product = products.find(p => p.slug === id || p.id === id)

  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const addedToWishlist = isInWishlist(product?.id)
  const [addedToCart, setAddedToCart] = useState(false)
  const [selectedColor, setSelectedColor] = useState(
  product?.colors?.length > 0 ? product.colors[0] : null
      )
  const [selectedSize, setSelectedSize] = useState(
  product?.sizes?.length > 0 ? product.sizes[0] : null
      )

  // Related products (same category, excluding current)
  const related = products.filter(
    p => p.category === product?.category && p.id !== product?.id
  ).slice(0, 4)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400 text-sm">Loading product...</p>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-6xl mb-4">😕</p>
          <h2 className="font-serif text-2xl text-brand mb-2">Product not found</h2>
          <Link to="/shop" className="text-primary underline text-sm">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const discount = Math.round(((product.price - product.salePrice) / product.price) * 100)

 const handleAddToCart = () => {
  addToCart({
    ...product,
    selectedColor: selectedColor || null,
    selectedSize: selectedSize || null,
  }, quantity)
  setAddedToCart(true)
  setTimeout(() => setAddedToCart(false), 2000)
  }
  return (
    <div className="min-h-screen bg-white">

      {/* Breadcrumb */}
      <div className="bg-accent border-b border-secondary/30 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-gray-500">
          <Link to="/" className="hover:text-primary">Home</Link>
          <FiChevronRight size={12} />
          <Link to="/shop" className="hover:text-primary">Shop</Link>
          <FiChevronRight size={12} />
          <span className="text-primary">{product.name}</span>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT — Images */}
          <div>
            {/* Main Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-2xl overflow-hidden aspect-square bg-accent mb-4"
            >
              <img
                src={resolveImageUrl(product.images[selectedImage])}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Thumbnail Images */}
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === i ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img src={resolveImageUrl(img)} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT — Product Info */}
          <div>

            {/* Badge */}
            {product.badge && (
              <span className={`inline-block text-white text-xs font-semibold px-3 py-1 rounded-full mb-3
                ${product.badge === 'New' ? 'bg-green-500' : ''}
                ${product.badge === 'Sale' ? 'bg-red-500' : ''}
                ${product.badge === 'Best Seller' ? 'bg-primary' : ''}
              `}>
                {product.badge}
              </span>
            )}

            <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">
              {product.category}
            </p>

            <h1 className="font-serif text-3xl md:text-4xl text-brand font-bold mb-4 leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating) ? 'fill-yellow-400' : ''}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-bold text-3xl text-primary">
                Rs. {product.salePrice.toLocaleString()}
              </span>
              {discount > 0 && (
                <>
                  <span className="text-gray-400 text-lg line-through">
                    Rs. {product.price.toLocaleString()}
                  </span>
                  <span className="bg-red-100 text-red-600 text-sm font-semibold px-2 py-0.5 rounded-full">
                    {discount}% OFF
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6 border-t border-accent pt-6">
              {product.description}
            </p>

            {/* Stock */}
            <p className="text-sm mb-6">
              <span className="text-green-600 font-medium">✓ In Stock</span>
              <span className="text-gray-400 ml-2">({product.stock} units available)</span>
            </p>
            {/* Colors */}
{product.colors && product.colors.length > 0 && (
  <div className="mb-6">
    <p className="text-sm font-medium text-brand mb-3">
      Color: <span className="text-primary font-semibold">{selectedColor}</span>
    </p>
    <div className="flex flex-wrap gap-2">
      {product.colors.map(color => (
        <button
          key={color}
          onClick={() => setSelectedColor(color)}
          className={`px-4 py-2 rounded-full text-sm border-2 transition-all ${
            selectedColor === color
              ? 'border-primary bg-primary text-white'
              : 'border-secondary text-brand hover:border-primary'
          }`}
        >
          {color}
        </button>
      ))}
    </div>
  </div>
)}

{/* Sizes */}
{product.sizes && product.sizes.length > 0 && (
  <div className="mb-6">
    <p className="text-sm font-medium text-brand mb-3">
      Size: <span className="text-primary font-semibold">{selectedSize}</span>
    </p>
    <div className="flex flex-wrap gap-2">
      {product.sizes.map(size => (
        <button
          key={size}
          onClick={() => setSelectedSize(size)}
          className={`px-4 py-2 rounded-full text-sm border-2 transition-all ${
            selectedSize === size
              ? 'border-primary bg-primary text-white'
              : 'border-secondary text-brand hover:border-primary'
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  </div>
)}

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-medium text-brand">Quantity:</span>
              <div className="flex items-center border border-secondary rounded-full overflow-hidden">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-4 py-2 hover:bg-accent transition-colors"
                >
                  <FiMinus size={14} />
                </button>
                <span className="px-4 py-2 text-sm font-medium min-w-[40px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => Math.min(product.stock, q + 1))}
                  className="px-4 py-2 hover:bg-accent transition-colors"
                >
                  <FiPlus size={14} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-full font-semibold text-sm transition-all duration-300 ${
                  addedToCart
                    ? 'bg-green-500 text-white'
                    : 'bg-primary text-white hover:bg-opacity-90'
                }`}
              >
                <FiShoppingCart size={18} />
                {addedToCart ? '✓ Added to Cart!' : 'Add to Cart'}
              </button>
              <button
                onClick={() => addedToWishlist ? removeFromWishlist(product.id) : addToWishlist(product)}
                className={`p-4 rounded-full border-2 transition-all duration-300 ${
                  addedToWishlist
                    ? 'border-red-400 bg-red-50 text-red-500'
                    : 'border-secondary hover:border-primary text-gray-500 hover:text-primary'
                }`}
              >
                <FiHeart size={20} className={addedToWishlist ? 'fill-red-400' : ''} />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 border-t border-accent pt-6">
              {[
                { icon: <FiTruck size={18} />, text: 'Free Delivery', sub: 'Orders over Rs. 2,999' },
                { icon: <FiRefreshCw size={18} />, text: 'Easy Returns', sub: '7-day return policy' },
                { icon: <FiShield size={18} />, text: 'Secure Payment', sub: '100% protected' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-accent rounded-full text-primary mb-2">
                    {item.icon}
                  </div>
                  <p className="text-xs font-semibold text-brand">{item.text}</p>
                  <p className="text-xs text-gray-400">{item.sub}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-20">
            <div className="text-center mb-10">
              <p className="text-primary text-sm uppercase tracking-widest font-medium mb-2">
                You May Also Like
              </p>
              <h2 className="font-serif text-3xl text-brand font-bold">
                Related Products
              </h2>
              <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProductCard product={p} />
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default ProductDetailsPage