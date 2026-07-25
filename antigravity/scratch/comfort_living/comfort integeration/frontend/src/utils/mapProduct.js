// Mirrors backend/utils/productMapper.js — the wishlist endpoint returns
// raw populated Product documents rather than the mapped shape the rest
// of the frontend expects (id/name/salePrice/etc instead of
// _id/title/price), so this converts between the two.
export function mapProduct(product) {
  if (!product) return null

  return {
    id: product._id || product.id,
    name: product.title || product.name,
    slug: product.slug,

    shortDescription: product.shortDescription,
    description: product.description,

    category: product.category,

    price: product.price,
    salePrice: product.salePrice || product.price,

    stock: product.stock,
    sku: product.sku,

    thumbnail: product.thumbnail,

    images:
      product.images && product.images.length > 0
        ? product.images
        : product.thumbnail
          ? [product.thumbnail]
          : [],

    badge: product.badge,

    rating: product.rating,
    reviews: product.reviewsCount ?? product.reviews,

    featured: product.featured,
    bestSeller: product.bestSeller,
    newArrival: product.newArrival,

    isActive: product.isActive,
  }
}
