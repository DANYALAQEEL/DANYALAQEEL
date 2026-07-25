import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FiPlus, FiTrash2, FiX } from 'react-icons/fi'
import { fetchCoupons, createCoupon, deleteCoupon } from '../../services/adminCouponService'

const emptyForm = { code: '', discount: '', discountType: 'percentage', minimumOrder: 0, expiryDate: '', usageLimit: 100 }

function AdminCouponsPage() {
  const [coupons, setCoupons] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState(emptyForm)
  const [saving, setSaving] = useState(false)

  const load = () => {
    setLoading(true)
    fetchCoupons().then(setCoupons).catch((e) => setError(e.message)).finally(() => setLoading(false))
  }
  const [searchParams] = useSearchParams()
  useEffect(load, [])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { if (searchParams.get('new') === '1') setShowForm(true) }, [])

  const handleSave = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    try {
      await createCoupon(formData)
      setShowForm(false)
      setFormData(emptyForm)
      load()
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this coupon?')) return
    try { await deleteCoupon(id); load() } catch (err) { setError(err.message) }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Coupons</h1>
          <p className="text-gray-500 text-sm mt-1">Manage discount codes</p>
        </div>
        <button onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors">
          <FiPlus size={16} /> Add Coupon
        </button>
      </div>

      {error && <div className="bg-red-950 border border-red-800 text-red-400 text-sm rounded-xl px-4 py-3 mb-6">{error}</div>}

      {showForm && (
        <div className="bg-[#050a14] border border-[#1a2a3a] rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-white font-semibold">Add New Coupon</h2>
            <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-white"><FiX size={20} /></button>
          </div>
          <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input required placeholder="Code (e.g. SAVE20)" value={formData.code}
              onChange={(e) => setFormData({ ...formData, code: e.target.value.toUpperCase() })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary" />
            <select value={formData.discountType} onChange={(e) => setFormData({ ...formData, discountType: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary">
              <option value="percentage">Percentage (%)</option>
              <option value="fixed">Fixed (Rs.)</option>
            </select>
            <input required type="number" placeholder="Discount value" value={formData.discount}
              onChange={(e) => setFormData({ ...formData, discount: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary" />
            <input type="number" placeholder="Minimum order (Rs.)" value={formData.minimumOrder}
              onChange={(e) => setFormData({ ...formData, minimumOrder: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary" />
            <input required type="date" value={formData.expiryDate}
              onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary" />
            <input type="number" placeholder="Usage limit" value={formData.usageLimit}
              onChange={(e) => setFormData({ ...formData, usageLimit: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary" />
            <button type="submit" disabled={saving}
              className="md:col-span-3 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors disabled:opacity-60">
              {saving ? 'Saving...' : 'Create Coupon'}
            </button>
          </form>
        </div>
      )}

      <div className="bg-[#050a14] border border-[#1a2a3a] rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 text-xs uppercase tracking-wider border-b border-[#1a2a3a]">
                <th className="px-5 py-3">Code</th><th className="px-5 py-3">Discount</th>
                <th className="px-5 py-3">Min Order</th><th className="px-5 py-3">Usage</th>
                <th className="px-5 py-3">Expires</th><th className="px-5 py-3">Status</th><th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {loading && <tr><td colSpan={7} className="text-center text-gray-500 py-10">Loading...</td></tr>}
              {!loading && coupons.length === 0 && <tr><td colSpan={7} className="text-center text-gray-500 py-10">No coupons yet.</td></tr>}
              {!loading && coupons.map((c) => (
                <tr key={c._id} className="border-b border-[#0d1829] hover:bg-[#0d1829] transition-colors">
                  <td className="px-5 py-3 text-white font-mono font-medium">{c.code}</td>
                  <td className="px-5 py-3 text-gray-300">{c.discount}{c.discountType === 'percentage' ? '%' : ' Rs.'}</td>
                  <td className="px-5 py-3 text-gray-300">Rs. {c.minimumOrder}</td>
                  <td className="px-5 py-3 text-gray-300">{c.usedCount}/{c.usageLimit}</td>
                  <td className="px-5 py-3 text-gray-500 text-xs">{new Date(c.expiryDate).toLocaleDateString()}</td>
                  <td className="px-5 py-3">
                    <span className={`text-xs px-2.5 py-1 rounded-full ${c.active ? 'bg-green-950 text-green-400' : 'bg-gray-800 text-gray-400'}`}>
                      {c.active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <button onClick={() => handleDelete(c._id)} className="p-2 rounded-lg bg-[#1e293b] text-gray-300 hover:bg-red-600 hover:text-white transition-colors">
                      <FiTrash2 size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminCouponsPage
