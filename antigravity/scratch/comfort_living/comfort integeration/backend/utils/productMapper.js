const mapProduct = (product) => {
    return {
        id: product._id,
        name: product.title,
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

        reviews: product.reviewsCount,

        featured: product.featured,
        bestSeller: product.bestSeller,
        newArrival: product.newArrival,

        technologies: product.technologies,
        features: product.features,

        isActive: product.isActive,

        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
    };
};

module.exports = mapProduct;