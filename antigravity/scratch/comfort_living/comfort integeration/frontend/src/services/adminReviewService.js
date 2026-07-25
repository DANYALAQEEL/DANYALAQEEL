import { adminApi } from './adminApi'

// There is no single "get all reviews" admin endpoint — reviews are only
// fetched per-product (GET /reviews/:productId). To give the admin a
// moderation view across the whole catalog, this fetches every product's
// reviews in parallel and flattens them, tagging each with the product name.
export async function fetchAllReviews(products) {
  const results = await Promise.all(
    products.map((p) =>
      adminApi
        .get(`/reviews/${p.id}`)
        .then((res) => (res.reviews || []).map((r) => ({ ...r, productName: p.name })))
        .catch(() => [])
    )
  )
  return results.flat().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
}

export async function deleteReview(id) {
  return adminApi.delete(`/reviews/${id}`)
}
