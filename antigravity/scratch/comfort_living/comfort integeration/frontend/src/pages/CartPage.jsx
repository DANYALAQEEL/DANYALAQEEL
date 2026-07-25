import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiTrash2, FiMinus, FiPlus, FiShoppingBag, FiArrowLeft } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import { resolveImageUrl } from '../services/api'

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <FiShoppingBag size={64} className="text-secondary mx-auto mb-4" />
          <h2 className="font-serif text-3xl text-brand mb-2">Your cart is empty</h2>
          <p className="text-gray-500 text-sm mb-6">
            Looks like you haven't added anything yet.
          </p>
          <Link
            to="/shop"
            className="bg-primary text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    )
  }

  const shipping = cartTotal >= 2999 ? 0 : 199
  const grandTotal = cartTotal + shipping

  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <div className="bg-accent py-10 px-4 text-center border-b border-secondary/30">
        <h1 className="font-serif text-4xl text-brand font-bold">Your Cart</h1>
        <p className="text-gray-500 text-sm mt-2">{cartItems.length} item(s)</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Cart Items */}
          <div className="flex-1">

            {/* Back Link */}
            <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-primary mb-6 hover:underline">
              <FiArrowLeft size={14} />
              Continue Shopping
            </Link>

            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 bg-white border border-accent rounded-2xl p-4"
                >
                  {/* Image */}
                  <Link to={`/product/${item.slug || item.id}`}>
                    <img
                      src={resolveImageUrl(item.images[0])}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-xl shrink-0"
                    />
                  </Link>

                  {/* Info */}
                  <div className="flex-1">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">
                      {item.category}
                    </p>
                    <Link to={`/product/${item.slug || item.id}`}>
                      <h3 className="font-medium text-brand text-sm hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <div className="flex gap-2 mt-1">
                        {item.selectedColor && (
                          <span className="text-xs bg-accent text-brand px-2 py-0.5 rounded-full">
                        {item.selectedColor}
                      </span>
                          )}
                        {item.selectedSize && (
                          <span className="text-xs bg-accent text-brand px-2 py-0.5 rounded-full">
                        {item.selectedSize}
                          </span>
                          )}
                    </div>
                    </Link>
                    <p className="text-primary font-bold mt-1">
                      Rs. {item.salePrice.toLocaleString()}
                    </p>
                  </div>

                  {/* Quantity + Delete */}
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <FiTrash2 size={16} />
                    </button>

                    <div className="flex items-center border border-secondary rounded-full overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1.5 hover:bg-accent transition-colors"
                      >
                        <FiMinus size={12} />
                      </button>
                      <span className="px-3 py-1.5 text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1.5 hover:bg-accent transition-colors"
                      >
                        <FiPlus size={12} />
                      </button>
                    </div>

                    <p className="text-sm font-semibold text-brand">
                      Rs. {(item.salePrice * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Clear Cart */}
            <button
              onClick={clearCart}
              className="mt-4 text-xs text-gray-400 hover:text-red-500 transition-colors underline"
            >
              Clear entire cart
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:w-80 shrink-0">
            <div className="bg-accent rounded-2xl p-6 sticky top-24">
              <h3 className="font-serif text-xl text-brand font-bold mb-6">
                Order Summary
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-medium">Rs. {cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Shipping</span>
                  <span className={shipping === 0 ? 'text-green-600 font-medium' : 'font-medium'}>
                    {shipping === 0 ? 'FREE' : `Rs. ${shipping}`}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-gray-400">
                    Add Rs. {(2999 - cartTotal).toLocaleString()} more for free shipping
                  </p>
                )}
                <div className="border-t border-secondary pt-3 flex justify-between font-bold">
                  <span className="text-brand">Total</span>
                  <span className="text-primary text-lg">
                    Rs. {grandTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              <Link
  to="/checkout"
  className="block text-center w-full bg-primary text-white py-4 rounded-full font-semibold text-sm hover:bg-opacity-90 transition-colors mb-3"
>
  Proceed to Checkout
</Link>
              <Link
                to="/shop"
                className="block text-center text-sm text-primary hover:underline"
              >
                Continue Shopping
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CartPage