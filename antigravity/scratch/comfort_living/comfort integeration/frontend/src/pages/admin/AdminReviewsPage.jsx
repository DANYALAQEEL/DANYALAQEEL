import { useState, useEffect } from 'react'
import { FiTrash2, FiStar } from 'react-icons/fi'
import { fetchAdminProducts } from '../../services/adminProductService'
import { fetchAllReviews, deleteReview } from '../../services/adminReviewService'

function AdminReviewsPage() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const load = async () => {
    setLoading(true)
    setError('')
    try {
      const products = await fetchAdminProducts()
      const allReviews = await fetchAllReviews(products)
      setReviews(allReviews)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => { load() }, [])

  const handleDelete = async (id) => {
    if (!confirm('Delete this review?')) return
    try {
      await deleteReview(id)
      setReviews((prev) => prev.filter((r) => r._id !== id))
    } catch (err) { setError(err.message) }
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Reviews</h1>
        <p className="text-gray-500 text-sm mt-1">Moderate customer reviews across all products</p>
      </div>

      {error && <div className="bg-red-950 border border-red-800 text-red-400 text-sm rounded-xl px-4 py-3 mb-6">{error}</div>}

      <div className="space-y-3">
        {loading && <p className="text-gray-500 text-sm">Loading reviews...</p>}
        {!loading && reviews.length === 0 && <p className="text-gray-500 text-sm">No reviews yet.</p>}
        {!loading && reviews.map((r) => (
          <div key={r._id} className="bg-[#050a14] border border-[#1a2a3a] rounded-xl p-5 flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white font-medium text-sm">{r.customer?.name}</span>
                <span className="text-gray-500 text-xs">on {r.productName}</span>
                <span className="flex items-center gap-0.5 text-amber-400 text-xs ml-2">
                  {Array.from({ length: r.rating }).map((_, i) => <FiStar key={i} size={12} fill="currentColor" />)}
                </span>
              </div>
              {r.title && <p className="text-gray-300 text-sm font-medium">{r.title}</p>}
              <p className="text-gray-500 text-sm mt-1">{r.review}</p>
              <p className="text-gray-600 text-xs mt-2">{new Date(r.createdAt).toLocaleDateString()}</p>
            </div>
            <button onClick={() => handleDelete(r._id)} className="p-2 rounded-lg bg-[#1e293b] text-gray-300 hover:bg-red-600 hover:text-white transition-colors shrink-0"><FiTrash2 size={14} /></button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminReviewsPage
