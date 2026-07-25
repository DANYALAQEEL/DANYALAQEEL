import { useState, useEffect } from 'react'
import { fetchAdminOrders, updateOrderStatus } from '../../services/adminOrderService'

const allowedTransitions = {
  Pending: ['Processing', 'Cancelled'],
  Processing: ['Packed', 'Cancelled'],
  Packed: ['Shipped', 'Cancelled'],
  Shipped: ['Out For Delivery'],
  'Out For Delivery': ['Delivered'],
  Delivered: ['Returned'],
  Cancelled: [],
  Returned: [],
}

const statusColors = {
  Pending: 'bg-gray-800 text-gray-300',
  Processing: 'bg-blue-950 text-blue-400',
  Packed: 'bg-indigo-950 text-indigo-400',
  Shipped: 'bg-cyan-950 text-cyan-400',
  'Out For Delivery': 'bg-amber-950 text-amber-400',
  Delivered: 'bg-green-950 text-green-400',
  Cancelled: 'bg-red-950 text-red-400',
  Returned: 'bg-orange-950 text-orange-400',
}

function AdminOrdersPage() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [updatingId, setUpdatingId] = useState(null)

  const loadOrders = () => {
    setLoading(true)
    fetchAdminOrders()
      .then(setOrders)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }

  useEffect(() => { loadOrders() }, [])

  const handleStatusChange = async (order, newStatus) => {
    if (!newStatus) return
    setUpdatingId(order._id)
    setError('')
    try {
      await updateOrderStatus(order._id, newStatus)
      loadOrders()
    } catch (err) {
      setError(err.message)
    } finally {
      setUpdatingId(null)
    }
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Orders</h1>
        <p className="text-gray-500 text-sm mt-1">Manage customer orders</p>
      </div>

      {error && (
        <div className="bg-red-950 border border-red-800 text-red-400 text-sm rounded-xl px-4 py-3 mb-6">
          {error}
        </div>
      )}

      <div className="bg-[#050a14] border border-[#1a2a3a] rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 text-xs uppercase tracking-wider border-b border-[#1a2a3a]">
                <th className="px-5 py-3">Order #</th>
                <th className="px-5 py-3">Customer</th>
                <th className="px-5 py-3">Total</th>
                <th className="px-5 py-3">Payment</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Placed</th>
                <th className="px-5 py-3">Update Status</th>
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr><td colSpan={7} className="text-center text-gray-500 py-10">Loading...</td></tr>
              )}
              {!loading && orders.length === 0 && (
                <tr><td colSpan={7} className="text-center text-gray-500 py-10">No orders yet.</td></tr>
              )}
              {!loading && orders.map((order) => {
                const options = allowedTransitions[order.orderStatus] || []
                return (
                  <tr key={order._id} className="border-b border-[#0d1829] hover:bg-[#0d1829] transition-colors">
                    <td className="px-5 py-3 text-white font-medium">{order.orderNumber}</td>
                    <td className="px-5 py-3 text-gray-300">
                      {order.customer?.name}
                      <div className="text-xs text-gray-500">{order.customer?.email}</div>
                    </td>
                    <td className="px-5 py-3 text-gray-300">Rs. {order.totalAmount?.toLocaleString?.() ?? order.totalAmount}</td>
                    <td className="px-5 py-3">
                      <span className={`text-xs px-2.5 py-1 rounded-full ${order.paymentStatus === 'Paid' ? 'bg-green-950 text-green-400' : 'bg-gray-800 text-gray-300'}`}>
                        {order.paymentStatus}
                      </span>
                    </td>
                    <td className="px-5 py-3">
                      <span className={`text-xs px-2.5 py-1 rounded-full ${statusColors[order.orderStatus] || 'bg-gray-800 text-gray-300'}`}>
                        {order.orderStatus}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-gray-500 text-xs">
                      {order.createdAt ? new Date(order.createdAt).toLocaleDateString() : '—'}
                    </td>
                    <td className="px-5 py-3">
                      {options.length > 0 ? (
                        <select
                          disabled={updatingId === order._id}
                          defaultValue=""
                          onChange={(e) => handleStatusChange(order, e.target.value)}
                          className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-3 py-1.5 text-xs text-white outline-none focus:border-primary"
                        >
                          <option value="" disabled>Change to...</option>
                          {options.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      ) : (
                        <span className="text-xs text-gray-600">Final state</span>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminOrdersPage
