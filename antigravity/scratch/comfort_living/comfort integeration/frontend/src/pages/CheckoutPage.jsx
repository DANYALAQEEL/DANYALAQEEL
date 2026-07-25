import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FiUser, FiMail, FiPhone, FiMapPin, FiHome, FiCheckCircle,
  FiSmartphone, FiLock
} from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import { placeOrder } from '../services/orderService'
import { resolveImageUrl } from '../services/api'

const pakistanCities = [
  'Lahore', 'Karachi', 'Islamabad', 'Rawalpindi', 'Faisalabad',
  'Multan', 'Peshawar', 'Quetta', 'Sialkot', 'Gujranwala', 'Other'
]

function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart()
  const { user } = useAuth()

  const [formData, setFormData] = useState({
    fullName: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: '',
    apartment: '',
    city: '',
    postalCode: '',
    notes: '',
  })

  const [paymentMethod, setPaymentMethod] = useState('cod')
  const [walletData, setWalletData] = useState({
    walletProvider: 'easypaisa',
    walletNumber: '',
    transactionId: '',
  })

  const [orderPlaced, setOrderPlaced] = useState(false)
  const [orderId, setOrderId] = useState('')
  const [placing, setPlacing] = useState(false)
  const [orderError, setOrderError] = useState('')

  const shipping = cartTotal >= 2999 ? 0 : 199
  const grandTotal = cartTotal + shipping

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleWalletChange = (e) => {
    let { name, value } = e.target

    if (name === 'walletNumber') {
      value = value.replace(/\D/g, '').slice(0, 11)
    }

    setWalletData({ ...walletData, [name]: value })
  }

  const handlePlaceOrder = async (e) => {
    e.preventDefault()
    setOrderError('')
    setPlacing(true)

    try {
      const order = await placeOrder({
        items: cartItems.map(item => ({
          productId: item.id,
          quantity: item.quantity,
        })),
        customer: {
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
        },
        shippingAddress: {
          fullName: formData.fullName,
          phone: formData.phone,
          addressLine: formData.apartment
            ? `${formData.address}, ${formData.apartment}`
            : formData.address,
          city: formData.city,
          postalCode: formData.postalCode,
        },
        shippingFee: shipping,
        paymentMethod:
          paymentMethod === 'cod'
            ? 'COD'
            : walletData.walletProvider === 'easypaisa'
              ? 'Easypaisa'
              : 'JazzCash',
        paymentReference: paymentMethod === 'wallet' ? walletData.transactionId : '',
        notes: formData.notes,
      })

      setOrderId(order.orderNumber)
      setOrderPlaced(true)
      clearCart()
    } catch (err) {
      setOrderError(err.message || 'Could not place your order. Please try again.')
    } finally {
      setPlacing(false)
    }
  }

  // Order Success Screen
  if (orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-accent px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-sm p-10 text-center max-w-md w-full"
        >
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiCheckCircle size={32} />
          </div>
          <h1 className="font-serif text-3xl text-brand font-bold mb-2">
            Order Placed!
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            Thank you for shopping with Comfort Livings. Your order has been confirmed.
          </p>
          <div className="bg-accent rounded-xl p-4 mb-6">
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
              Order ID
            </p>
            <p className="font-bold text-primary text-lg">{orderId}</p>
          </div>
          <p className="text-xs text-gray-400 mb-6">
            We've sent a confirmation to your email. You can track your order anytime using your Order ID.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              to="/track-order"
              className="bg-primary text-white py-3 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-colors"
            >
              Track My Order
            </Link>
            <Link
              to="/shop"
              className="text-primary text-sm font-medium hover:underline"
            >
              Continue Shopping
            </Link>
          </div>
        </motion.div>
      </div>
    )
  }

  // Empty Cart
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="text-center">
          <p className="text-5xl mb-4">🛒</p>
          <h2 className="font-serif text-2xl text-brand mb-2">Your cart is empty</h2>
          <p className="text-gray-500 text-sm mb-6">Add some products before checking out.</p>
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

      {/* Header */}
      <div className="bg-accent py-10 px-4 text-center border-b border-secondary/30">
        <h1 className="font-serif text-4xl text-brand font-bold">Checkout</h1>
        <p className="text-gray-500 text-sm mt-2">Complete your order below</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <form onSubmit={handlePlaceOrder} className="flex flex-col lg:flex-row gap-10">

          {/* LEFT — Forms */}
          <div className="flex-1 space-y-10">

            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-xl text-brand font-bold mb-5">
                Contact Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-brand block mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-secondary rounded-xl text-sm outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-brand block mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+92 300 0000000"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-secondary rounded-xl text-sm outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <label className="text-sm font-medium text-brand block mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-secondary rounded-xl text-sm outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div>
              <h2 className="font-serif text-xl text-brand font-bold mb-5">
                Shipping Address
              </h2>

              <div className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-brand block mb-2">
                    Street Address
                  </label>
                  <div className="relative">
                    <FiHome className="absolute left-4 top-4 text-gray-400" size={14} />
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="House #, Street name"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-secondary rounded-xl text-sm outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-brand block mb-2">
                    Apartment, Suite, etc. (Optional)
                  </label>
                  <input
                    type="text"
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleChange}
                    placeholder="Apartment, floor, landmark"
                    className="w-full px-4 py-3 border border-secondary rounded-xl text-sm outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-brand block mb-2">
                      City
                    </label>
                    <div className="relative">
                      <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-secondary rounded-xl text-sm outline-none focus:border-primary transition-colors bg-white appearance-none"
                      >
                        <option value="">Select city</option>
                        {pakistanCities.map(city => (
                          <option key={city} value={city}>{city}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-brand block mb-2">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      placeholder="e.g. 54000"
                      required
                      className="w-full px-4 py-3 border border-secondary rounded-xl text-sm outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-brand block mb-2">
                    Order Notes (Optional)
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Any special instructions for delivery..."
                    rows={2}
                    className="w-full px-4 py-3 border border-secondary rounded-xl text-sm outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h2 className="font-serif text-xl text-brand font-bold mb-5">
                Payment Method
              </h2>

              <div className="space-y-3">

                {/* COD Option */}
                <label
                  className={`flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                    paymentMethod === 'cod' ? 'border-primary bg-accent' : 'border-secondary'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                    className="accent-primary w-4 h-4"
                  />
                  <div className="text-primary font-bold text-lg w-5 text-center">₨</div>
                  <div className="flex-1">
                  <p className="text-sm font-semibold text-brand">Cash on Delivery</p>
                  <p className="text-xs text-gray-400">Pay when your order arrives</p>
                  </div>
                </label>

                {/* Mobile Wallet Option */}
                <label
                  className={`flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                    paymentMethod === 'wallet' ? 'border-primary bg-accent' : 'border-secondary'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="wallet"
                    checked={paymentMethod === 'wallet'}
                    onChange={() => setPaymentMethod('wallet')}
                    className="accent-primary w-4 h-4"
                  />
                  <FiSmartphone className="text-primary" size={20} />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-brand">Easypaisa / JazzCash</p>
                    <p className="text-xs text-gray-400">Pay via mobile wallet</p>
                  </div>
                </label>

                {/* Wallet Form */}
                {paymentMethod === 'wallet' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-accent rounded-xl p-5 space-y-4 overflow-hidden"
                  >
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                      <FiLock size={12} />
                      Send payment, then enter your details below to confirm
                    </div>

                    {/* Provider selection */}
                    <div>
                      <label className="text-sm font-medium text-brand block mb-2">
                        Select Wallet
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <label
                          className={`flex items-center justify-center gap-2 py-3 rounded-xl border-2 cursor-pointer text-sm font-semibold transition-colors ${
                            walletData.walletProvider === 'easypaisa'
                              ? 'border-primary bg-white text-primary'
                              : 'border-secondary text-gray-500 bg-white'
                          }`}
                        >
                          <input
                            type="radio"
                            name="walletProvider"
                            value="easypaisa"
                            checked={walletData.walletProvider === 'easypaisa'}
                            onChange={handleWalletChange}
                            className="hidden"
                          />
                          Easypaisa
                        </label>
                        <label
                          className={`flex items-center justify-center gap-2 py-3 rounded-xl border-2 cursor-pointer text-sm font-semibold transition-colors ${
                            walletData.walletProvider === 'jazzcash'
                              ? 'border-primary bg-white text-primary'
                              : 'border-secondary text-gray-500 bg-white'
                          }`}
                        >
                          <input
                            type="radio"
                            name="walletProvider"
                            value="jazzcash"
                            checked={walletData.walletProvider === 'jazzcash'}
                            onChange={handleWalletChange}
                            className="hidden"
                          />
                          JazzCash
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-brand block mb-2">
                        Wallet Account Number
                      </label>
                      <input
                        type="text"
                        name="walletNumber"
                        value={walletData.walletNumber}
                        onChange={handleWalletChange}
                        placeholder="03xxxxxxxxx"
                        required={paymentMethod === 'wallet'}
                        className="w-full px-4 py-3 border border-secondary rounded-xl text-sm outline-none focus:border-primary transition-colors bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-brand block mb-2">
                        Transaction ID (TID)
                      </label>
                      <input
                        type="text"
                        name="transactionId"
                        value={walletData.transactionId}
                        onChange={handleWalletChange}
                        placeholder="Enter TID after sending payment"
                        required={paymentMethod === 'wallet'}
                        className="w-full px-4 py-3 border border-secondary rounded-xl text-sm outline-none focus:border-primary transition-colors bg-white"
                      />
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Submit for mobile/desktop fallback under form */}
            {orderError && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3">
                {orderError}
              </div>
            )}
            <button
              type="submit"
              disabled={placing}
              className="w-full bg-primary text-white py-4 rounded-full font-semibold text-sm hover:bg-opacity-90 transition-colors lg:hidden disabled:opacity-60"
            >
              {placing ? 'Placing order...' : `Place Order — Rs. ${grandTotal.toLocaleString()}`}
            </button>

          </div>

          {/* RIGHT — Order Summary */}
          <div className="lg:w-96 shrink-0">
            <div className="bg-accent rounded-2xl p-6 sticky top-24">
              <h3 className="font-serif text-xl text-brand font-bold mb-6">
                Order Summary
              </h3>

              {/* Items */}
              <div className="space-y-4 mb-6 max-h-72 overflow-y-auto pr-2 pt-3 -mt-3">
                {cartItems.map(item => (
                  <div key={item.id} className="flex gap-3">
                    <div className="relative shrink-0">
                      <img
                        src={resolveImageUrl(item.images[0])}
                        alt={item.name}
                        className="w-14 h-14 rounded-lg object-cover"
                      />
                      <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-brand font-medium truncate">{item.name}</p>
                      <p className="text-xs text-gray-400">Rs. {item.salePrice.toLocaleString()} each</p>
                    </div>
                    <p className="text-xs font-semibold text-brand shrink-0">
                      Rs. {(item.salePrice * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-3 border-t border-secondary pt-4">
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
                <div className="border-t border-secondary pt-3 flex justify-between font-bold">
                  <span className="text-brand">Total</span>
                  <span className="text-primary text-lg">
                    Rs. {grandTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Submit for desktop */}
              <button
                type="submit"
                disabled={placing}
                className="hidden lg:block w-full bg-primary text-white py-4 rounded-full font-semibold text-sm hover:bg-opacity-90 transition-colors mt-6 disabled:opacity-60"
              >
                {placing ? 'Placing order...' : `Place Order — Rs. ${grandTotal.toLocaleString()}`}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-4">
                <FiLock size={12} />
                Secure checkout
              </div>

            </div>
          </div>

        </form>
      </div>
    </div>
  )
}

export default CheckoutPage