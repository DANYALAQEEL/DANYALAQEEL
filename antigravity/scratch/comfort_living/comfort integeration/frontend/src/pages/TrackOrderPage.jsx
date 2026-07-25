import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSearch, FiPackage, FiTruck, FiCheckCircle, FiClock, FiMail } from 'react-icons/fi'
import { trackOrder } from '../services/orderService'

const statusIcon = {
  Pending: FiClock,
  Processing: FiPackage,
  Packed: FiPackage,
  Shipped: FiTruck,
  'Out For Delivery': FiTruck,
  Delivered: FiCheckCircle,
  Cancelled: FiClock,
  Returned: FiClock,
}

function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState('')
  const [email, setEmail] = useState('')
  const [order, setOrder] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleTrack = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    setOrder(null)

    try {
      const result = await trackOrder(orderNumber.trim(), email.trim())
      setOrder(result)
    } catch (err) {
      setError(err.message || 'Order not found. Please check your order ID and email.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">

      <div className="bg-accent py-16 px-4 text-center border-b border-secondary/30">
        <p className="text-primary text-sm uppercase tracking-widest font-medium mb-2">
          Order Status
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-brand font-bold">
          Track Your Order
        </h1>
        <p className="text-gray-500 text-sm mt-3">
          Enter your order ID and email to see the current status.
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-16">

        <form onSubmit={handleTrack} className="space-y-3 mb-12">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                value={orderNumber}
                onChange={e => setOrderNumber(e.target.value)}
                placeholder="Enter your Order ID (e.g. CL-1234567890)"
                required
                className="w-full pl-11 pr-4 py-3 border border-secondary rounded-full text-sm outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="relative flex-1">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email used at checkout"
                required
                className="w-full pl-11 pr-4 py-3 border border-secondary rounded-full text-sm outline-none focus:border-primary transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-colors disabled:opacity-60"
            >
              {loading ? 'Tracking...' : 'Track'}
            </button>
          </div>
        </form>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3 mb-8 text-center">
            {error}
          </div>
        )}

        {order && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-accent rounded-3xl p-8"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Order ID</p>
                <p className="font-bold text-brand">{order.orderNumber}</p>
                {order.trackingNumber && (
                  <p className="text-xs text-gray-400 mt-1">
                    Tracking #: {order.trackingNumber}
                    {order.courierName ? ` (${order.courierName})` : ''}
                  </p>
                )}
              </div>
              <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                {order.orderStatus}
              </span>
            </div>

            {/* Status Timeline (from statusHistory) */}
            {order.timeline && order.timeline.length > 0 ? (
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-secondary" />
                {order.timeline.map((step, i) => {
                  const Icon = statusIcon[step.status] || FiPackage
                  return (
                    <div key={i} className="flex gap-4 mb-6 relative">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10 bg-primary text-white">
                        <Icon size={16} />
                      </div>
                      <div className="pt-2">
                        <p className="text-sm font-semibold text-brand">{step.status}</p>
                        {step.remarks && (
                          <p className="text-xs text-gray-400">{step.remarks}</p>
                        )}
                        {step.changedAt && (
                          <p className="text-xs text-gray-400">
                            {new Date(step.changedAt).toLocaleString()}
                          </p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <p className="text-sm text-gray-500 text-center py-6">
                No status updates yet — your order is {order.orderStatus?.toLowerCase()}.
              </p>
            )}

            {order.estimatedDelivery && (
              <p className="text-xs text-gray-400 text-center mt-4">
                Estimated delivery: {new Date(order.estimatedDelivery).toLocaleDateString()}
              </p>
            )}
          </motion.div>
        )}

        {!order && !error && (
          <div className="text-center text-gray-400">
            <FiPackage size={48} className="mx-auto mb-4 opacity-30" />
            <p className="text-sm">Enter your order ID and email above to track your package</p>
          </div>
        )}

      </div>
    </div>
  )
}

export default TrackOrderPage
