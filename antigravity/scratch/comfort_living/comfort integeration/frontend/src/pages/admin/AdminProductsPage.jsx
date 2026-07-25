import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FiPlus, FiEdit2, FiTrash2, FiRotateCcw, FiX } from 'react-icons/fi'
import {
  fetchAdminProducts,
  createAdminProduct,
  updateAdminProduct,
  deleteAdminProduct,
  restoreAdminProduct,
} from '../../services/adminProductService'
import { resolveImageUrl } from '../../services/adminApi'

const emptyForm = {
  title: '', shortDescription: '', description: '', category: '',
  price: '', salePrice: '', stock: '', sku: '', badge: '',
  featured: false, bestSeller: false, newArrival: false,
}

function AdminProductsPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState(emptyForm)
  const [thumbnailFile, setThumbnailFile] = useState(null)
  const [imageFiles, setImageFiles] = useState([])
  const [saving, setSaving] = useState(false)

  const loadProducts = () => {
    setLoading(true)
    fetchAdminProducts()
      .then(setProducts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }

  const [searchParams] = useSearchParams()
  useEffect(() => { loadProducts() }, [])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { if (searchParams.get('new') === '1') openCreateForm() }, [])

  const openCreateForm = () => {
    setEditingId(null)
    setFormData(emptyForm)
    setThumbnailFile(null)
    setImageFiles([])
    setShowForm(true)
  }

  const openEditForm = (product) => {
    setEditingId(product.id)
    setFormData({
      title: product.name || '',
      shortDescription: product.shortDescription || '',
      description: product.description || '',
      category: product.category || '',
      price: product.price || '',
      salePrice: product.salePrice || '',
      stock: product.stock || '',
      sku: product.sku || '',
      badge: product.badge || '',
      featured: !!product.featured,
      bestSeller: !!product.bestSeller,
      newArrival: !!product.newArrival,
    })
    setThumbnailFile(null)
    setImageFiles([])
    setShowForm(true)
  }

  const handleSave = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    try {
      const payload = { ...formData }
      if (editingId) {
        await updateAdminProduct(editingId, payload, { thumbnail: thumbnailFile, images: imageFiles })
      } else {
        await createAdminProduct(payload, { thumbnail: thumbnailFile, images: imageFiles })
      }
      setShowForm(false)
      loadProducts()
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this product? It will be hidden from the storefront but can be restored later.')) return
    try {
      await deleteAdminProduct(id)
      loadProducts()
    } catch (err) {
      setError(err.message)
    }
  }

  const handleRestore = async (id) => {
    try {
      await restoreAdminProduct(id)
      loadProducts()
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Products</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your product catalog</p>
        </div>
        <button
          onClick={openCreateForm}
          className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors"
        >
          <FiPlus size={16} /> Add Product
        </button>
      </div>

      {error && (
        <div className="bg-red-950 border border-red-800 text-red-400 text-sm rounded-xl px-4 py-3 mb-6">
          {error}
        </div>
      )}

      {showForm && (
        <div className="bg-[#050a14] border border-[#1a2a3a] rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-white font-semibold">{editingId ? 'Edit Product' : 'Add New Product'}</h2>
            <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-white">
              <FiX size={20} />
            </button>
          </div>

          <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input required placeholder="Product title" value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary md:col-span-2" />

            <input placeholder="Short description" value={formData.shortDescription}
              onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary md:col-span-2" />

            <textarea placeholder="Full description" value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary md:col-span-2 min-h-[90px]" />

            <input required placeholder="Category" value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary" />

            <input placeholder="SKU" value={formData.sku}
              onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary" />

            <input required type="number" placeholder="Price" value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary" />

            <input required type="number" placeholder="Sale price" value={formData.salePrice}
              onChange={(e) => setFormData({ ...formData, salePrice: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary" />

            <input required type="number" placeholder="Stock" value={formData.stock}
              onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary" />

            <input placeholder="Badge (e.g. Sale, New)" value={formData.badge}
              onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
              className="bg-[#0d1829] border border-[#1e3a4a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-primary" />

            <div className="flex items-center gap-5 md:col-span-2 text-sm text-gray-300">
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })} />
                Featured
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={formData.bestSeller}
                  onChange={(e) => setFormData({ ...formData, bestSeller: e.target.checked })} />
                Best Seller
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={formData.newArrival}
                  onChange={(e) => setFormData({ ...formData, newArrival: e.target.checked })} />
                New Arrival
              </label>
            </div>

            <div>
              <label className="text-xs text-gray-500 block mb-1">Thumbnail image</label>
              <input type="file" accept="image/*" onChange={(e) => setThumbnailFile(e.target.files[0])}
                className="text-sm text-gray-300 w-full" />
            </div>
            <div>
              <label className="text-xs text-gray-500 block mb-1">Gallery images</label>
              <input type="file" accept="image/*" multiple onChange={(e) => setImageFiles(Array.from(e.target.files))}
                className="text-sm text-gray-300 w-full" />
            </div>

            <div className="md:col-span-2 flex gap-3 mt-2">
              <button type="submit" disabled={saving}
                className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors disabled:opacity-60">
                {saving ? 'Saving...' : editingId ? 'Update Product' : 'Create Product'}
              </button>
              <button type="button" onClick={() => setShowForm(false)}
                className="bg-[#1e293b] text-gray-300 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#334155] transition-colors">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-[#050a14] border border-[#1a2a3a] rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 text-xs uppercase tracking-wider border-b border-[#1a2a3a]">
                <th className="px-5 py-3">Image</th>
                <th className="px-5 py-3">Title</th>
                <th className="px-5 py-3">Category</th>
                <th className="px-5 py-3">Price</th>
                <th className="px-5 py-3">Stock</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr><td colSpan={7} className="text-center text-gray-500 py-10">Loading...</td></tr>
              )}
              {!loading && products.length === 0 && (
                <tr><td colSpan={7} className="text-center text-gray-500 py-10">No products yet.</td></tr>
              )}
              {!loading && products.map((p) => (
                <tr key={p.id} className="border-b border-[#0d1829] hover:bg-[#0d1829] transition-colors">
                  <td className="px-5 py-3">
                    {p.images?.[0] ? (
                      <img src={resolveImageUrl(p.images[0])} alt={p.name} className="w-11 h-11 rounded-lg object-cover" />
                    ) : <div className="w-11 h-11 rounded-lg bg-[#1a2a3a]" />}
                  </td>
                  <td className="px-5 py-3 text-white font-medium">{p.name}</td>
                  <td className="px-5 py-3 text-gray-400">{p.category}</td>
                  <td className="px-5 py-3 text-gray-300">Rs. {p.salePrice}</td>
                  <td className="px-5 py-3 text-gray-300">{p.stock}</td>
                  <td className="px-5 py-3">
                    {p.isActive ? (
                      <span className="bg-green-950 text-green-400 text-xs px-2.5 py-1 rounded-full">Active</span>
                    ) : (
                      <span className="bg-red-950 text-red-400 text-xs px-2.5 py-1 rounded-full">Deleted</span>
                    )}
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <button onClick={() => openEditForm(p)} title="Edit"
                        className="p-2 rounded-lg bg-[#1e293b] text-gray-300 hover:bg-primary hover:text-white transition-colors">
                        <FiEdit2 size={14} />
                      </button>
                      {p.isActive ? (
                        <button onClick={() => handleDelete(p.id)} title="Delete"
                          className="p-2 rounded-lg bg-[#1e293b] text-gray-300 hover:bg-red-600 hover:text-white transition-colors">
                          <FiTrash2 size={14} />
                        </button>
                      ) : (
                        <button onClick={() => handleRestore(p.id)} title="Restore"
                          className="p-2 rounded-lg bg-[#1e293b] text-gray-300 hover:bg-green-600 hover:text-white transition-colors">
                          <FiRotateCcw size={14} />
                        </button>
                      )}
                    </div>
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

export default AdminProductsPage
