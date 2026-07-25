const Product = require("../models/Product");
const mapProduct = require("../utils/productMapper");
const asyncHandler = require("../utils/asyncHandler");
const createAuditLog = require("../utils/auditLogger");
const createActivityLog = require("../utils/activityLogger");
const createNotification = require("../utils/notificationHelper");
const {
  successResponse,
  errorResponse,
} = require("../utils/response");

/*
==========================================
CREATE PRODUCT
==========================================
*/

const createProduct = async (req, res) => {

  console.log("CREATE PRODUCT CONTROLLER HIT");

  try {

    const {
      title,
      shortDescription,
      description,
      category,
      price,
      salePrice,
      stock,
      sku,
      featured,
      bestSeller,
      newArrival,
      badge,
      rating,
    } = req.body;

    const thumbnail = req.files?.thumbnail
      ? `/uploads/${req.files.thumbnail[0].filename}`
      : "";

    const images = req.files?.images
      ? req.files.images.map(
        img => `/uploads/${img.filename}`
      )
      : [];

    const product = await Product.create({

      title,

      shortDescription,

      description,

      category,

      price,

      salePrice,

      stock,

      sku,

      thumbnail,

      images,

      featured:
        featured === "true",

      bestSeller:
        bestSeller === "true",

      newArrival:
        newArrival === "true",

      badge,

      rating,

      technologies:
        req.body.technologies
          ? req.body.technologies
            .split(",")
            .map(t => t.trim())
          : [],

      features:
        req.body.features
          ? req.body.features
            .split(",")
            .map(f => f.trim())
          : []


    });
    console.log("Creating notification...");

    await createNotification({
      title: "New Product",
      message: `${product.title} has been added.`,
      type: "PRODUCT",
      referenceId: product._id
    });
    console.log("Notification created.");
    await createActivityLog({
      type: "PRODUCT",
      message: `Product "${product.title}" created`,
      referenceId: product._id,
      createdBy: req.admin._id,
      metadata: {
        sku: product.sku,
      },
    });
    console.log("Before Audit Log");
    await createAuditLog({
      req,
      adminId: req.admin._id,
      action: "CREATE",
      module: "PRODUCT",
      targetId: product._id,
      description: `Created product ${product.title}`
    });
    console.log("STEP 5");
    console.log("After Audit Log");

    return successResponse(

      res,

      "Product created successfully",

      mapProduct(product),

      201

    );


  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
      stack: error.stack,
    });
  }
};

/*
==========================================
GET ALL PRODUCTS
==========================================
*/

const getProducts = asyncHandler(async (req, res) => {


  const {
    page = 1,
    limit = 12,
    search = "",
    category,
    featured,
    bestSeller,
    newArrival,
    minPrice,
    maxPrice,
    sort = "latest",
    includeInactive = "false"
  } = req.query;

  const filter = {};

  if (includeInactive !== "true") {
    filter.isActive = true;
  }

  if (search) {
    filter.$or = [
      {
        title: {
          $regex: search,
          $options: "i"
        }
      },
      {
        category: {
          $regex: search,
          $options: "i"
        }
      }
    ];
  }

  if (category) {
    filter.category = category;
  }

  if (featured === "true") {
    filter.featured = true;
  }

  if (bestSeller === "true") {
    filter.bestSeller = true;
  }

  if (newArrival === "true") {
    filter.newArrival = true;
  }

  if (minPrice || maxPrice) {

    filter.salePrice = {};

    if (minPrice) {
      filter.salePrice.$gte = Number(minPrice);
    }

    if (maxPrice) {
      filter.salePrice.$lte = Number(maxPrice);
    }

  }

  let sortOption = {};

  switch (sort) {

    case "priceAsc":
      sortOption = { salePrice: 1 };
      break;

    case "priceDesc":
      sortOption = { salePrice: -1 };
      break;

    case "rating":
      sortOption = { rating: -1 };
      break;

    case "latest":
    default:
      sortOption = { createdAt: -1 };

  }

  const products = await Product.paginate(filter, {

    page: Number(page),

    limit: Number(limit),

    sort: sortOption

  });

  return successResponse(
    res,
    "Products fetched successfully",
    products.docs.map(mapProduct),
    200,
    {
      page: products.page,
      limit: products.limit,
      total: products.totalDocs,
      pages: products.totalPages,
      hasNextPage: products.hasNextPage,
      hasPrevPage: products.hasPrevPage
    }
  );



});

/*
==========================================
GET SINGLE PRODUCT
==========================================
*/

const getSingleProduct = async (req, res) => {

  try {

    const product = await Product.findOne({

      slug: req.params.slug,

      isActive: true

    });

    if (!product) {

      return errorResponse(

        res,

        "Product not found",

        404

      );

    }

    return successResponse(

      res,

      "Product fetched successfully",

      mapProduct(product)

    );

  } catch (error) {

    return errorResponse(

      res,

      error.message

    );

  }

};

/*
==========================================
GET FEATURED PRODUCTS
==========================================
*/

const getFeaturedProducts = async (req, res) => {

  try {

    const products = await Product.find({

      featured: true,

      isActive: true

    })
      .sort({
        createdAt: -1
      })
      .limit(8);

    return successResponse(

      res,

      "Featured products fetched successfully",

      products.map(mapProduct)

    );

  } catch (error) {

    return errorResponse(

      res,

      error.message

    );

  }

};

/*
==========================================
GET BEST SELLERS
==========================================
*/

const getBestSellerProducts = async (req, res) => {

  try {

    const products = await Product.find({

      bestSeller: true,

      isActive: true

    }).limit(8);

    return successResponse(

      res,

      "Best seller products fetched successfully",

      products.map(mapProduct)

    );

  } catch (error) {

    return errorResponse(

      res,

      error.message

    );

  }

};

/*
==========================================
GET NEW ARRIVALS
==========================================
*/

const getNewArrivalProducts = async (req, res) => {

  try {

    const products = await Product.find({

      newArrival: true,

      isActive: true

    })
      .sort({
        createdAt: -1
      })
      .limit(8);

    return successResponse(

      res,

      "New arrival products fetched successfully",

      products.map(mapProduct)

    );

  } catch (error) {

    return errorResponse(

      res,

      error.message

    );

  }

};

/*
==========================================
GET RELATED PRODUCTS
==========================================
*/

const getRelatedProducts = async (req, res) => {

  try {

    const current = await Product.findOne({

      slug: req.params.slug

    });

    if (!current) {

      return errorResponse(

        res,

        "Product not found",

        404

      );

    }

    const related = await Product.find({

      category: current.category,

      _id: {

        $ne: current._id

      },

      isActive: true

    }).limit(4);

    return successResponse(

      res,

      "Related products fetched successfully",

      related.map(mapProduct)

    );

  } catch (error) {

    return errorResponse(

      res,

      error.message

    );

  }

};
/*
==========================================
UPDATE PRODUCT
==========================================
*/

const updateProduct = async (req, res) => {

  try {

    const product = await Product.findById(req.params.id);

    if (!product) {

      return errorResponse(
        res,
        "Product not found",
        404
      );

    }

    const {

      title,
      shortDescription,
      description,
      category,
      price,
      salePrice,
      stock,
      sku,
      featured,
      bestSeller,
      newArrival,
      badge,
      rating,
      isActive

    } = req.body;

    if (title !== undefined) product.title = title;
    if (shortDescription !== undefined) product.shortDescription = shortDescription;
    if (description !== undefined) product.description = description;
    if (category !== undefined) product.category = category;
    if (price !== undefined) product.price = price;
    if (salePrice !== undefined) product.salePrice = salePrice;
    if (stock !== undefined) product.stock = stock;
    if (sku !== undefined) product.sku = sku;
    if (badge !== undefined) product.badge = badge;
    if (rating !== undefined) product.rating = rating;

    if (featured !== undefined)
      product.featured = featured === "true" || featured === true;

    if (bestSeller !== undefined)
      product.bestSeller = bestSeller === "true" || bestSeller === true;

    if (newArrival !== undefined)
      product.newArrival = newArrival === "true" || newArrival === true;

    if (isActive !== undefined)
      product.isActive = isActive === "true" || isActive === true;

    if (req.body.technologies) {
      product.technologies = req.body.technologies
        .split(",")
        .map(t => t.trim());
    }

    if (req.body.features) {
      product.features = req.body.features
        .split(",")
        .map(f => f.trim());
    }

    if (req.files?.thumbnail) {
      product.thumbnail =
        `/uploads/${req.files.thumbnail[0].filename}`;
    }

    if (req.files?.images) {

      const newImages = req.files.images.map(
        img => `/uploads/${img.filename}`
      );

      product.images = [
        ...product.images,
        ...newImages
      ];

    }

    await product.save();
    console.log("ACTIVITY LOGGER CALLED");
    await createActivityLog({
      type: "PRODUCT",
      message: `Product "${product.title}" updated`,
      referenceId: product._id,
      createdBy: req.admin._id,
      metadata: {
        sku: product.sku,
      },
    });
    await createAuditLog({
      req,
      adminId: req.admin._id,
      action: "UPDATE",
      module: "PRODUCT",
      targetId: product._id,
      description: `Updated product ${product.title}`,
      metadata: {
        productId: product._id,
        sku: product.sku
      }
    });
    await createNotification({
      title: "Product Updated",
      message: `${product.title} has been updated.`,
      type: "PRODUCT",
      referenceId: product._id
    });
    return successResponse(
      res,
      "Product updated successfully",
      mapProduct(product)
    );


  } catch (error) {

    console.error("UPDATE PRODUCT ERROR");
    console.error(error);

    return errorResponse(
      res,
      error.message
    );

  }

};


/*
==========================================
DELETE PRODUCT (SOFT DELETE)
==========================================
*/

const deleteProduct = async (req, res) => {

  try {

    const product = await Product.findById(req.params.id);

    if (!product) {

      return errorResponse(
        res,
        "Product not found",
        404
      );

    }

    // Soft Delete
    product.isActive = false;

    await product.save();
    await createAuditLog({
      req,
      adminId: req.admin._id,
      action: "DELETE",
      module: "PRODUCT",
      targetId: product._id,
      description: `Deleted product ${product.title}`,
      metadata: {
        productId: product._id,
        sku: product.sku
      }
    });
    await createActivityLog({
      type: "PRODUCT",
      message: `Product "${product.title}" deleted`,
      referenceId: product._id,
      createdBy: req.admin._id,
      metadata: {
        sku: product.sku,
      },
    });
    await createNotification({
      title: "Product Deleted",
      message: `${product.title} has been deleted.`,
      type: "PRODUCT",
      referenceId: product._id
    });

    return successResponse(
      res,
      "Product deleted successfully"
    );

  } catch (error) {

    return errorResponse(
      res,
      error.message
    );

  }

};
/*
==========================================
RESTORE PRODUCT
==========================================
*/

const restoreProduct = async (req, res) => {

  try {

    const product = await Product.findById(req.params.id);

    if (!product) {

      return errorResponse(
        res,
        "Product not found",
        404
      );

    }

    product.isActive = true;

    await product.save();
    await createAuditLog({
      req,
      adminId: req.admin._id,
      action: "RESTORE",
      module: "PRODUCT",
      targetId: product._id,
      description: `Restored product ${product.title}`,
      metadata: {
        productId: product._id,
        sku: product.sku
      }
    });
    return successResponse(
      res,
      "Product restored successfully",
      mapProduct(product)
    );

  } catch (error) {

    return errorResponse(
      res,
      error.message
    );

  }

};
/*
==========================================
GET CATEGORIES
==========================================
*/

const getCategories = async (req, res) => {

  try {

    const categories = await Product.distinct("category");

    return successResponse(

      res,

      "Categories fetched successfully",

      categories

    );

  } catch (error) {

    return errorResponse(

      res,

      error.message

    );

  }

};


/*
==========================================
SEARCH PRODUCTS
==========================================
*/

const searchProducts = async (req, res) => {

  try {

    const q = req.query.q || "";

    const products = await Product.find({

      isActive: true,

      $or: [

        {

          title: {

            $regex: q,

            $options: "i"

          }

        },

        {

          category: {

            $regex: q,

            $options: "i"

          }

        }

      ]

    }).limit(5);

    return successResponse(

      res,

      "Search completed",

      products.map(mapProduct)

    );

  } catch (error) {

    return errorResponse(

      res,

      error.message

    );

  }

};
/*
==========================================
PRODUCT DASHBOARD STATS
==========================================
*/

const getProductStats = async (req, res) => {

  try {

    const totalProducts = await Product.countDocuments({
      isActive: true
    });

    const featuredProducts = await Product.countDocuments({
      featured: true,
      isActive: true
    });

    const bestSellerProducts = await Product.countDocuments({
      bestSeller: true,
      isActive: true
    });

    const newArrivalProducts = await Product.countDocuments({
      newArrival: true,
      isActive: true
    });

    const outOfStock = await Product.countDocuments({
      stock: 0,
      isActive: true
    });

    const lowStock = await Product.countDocuments({
      stock: {
        $gt: 0,
        $lte: 5
      },
      isActive: true
    });

    const categories = await Product.distinct("category", {
      isActive: true
    });

    return successResponse(
      res,
      "Dashboard statistics fetched successfully",
      {
        totalProducts,
        featuredProducts,
        bestSellerProducts,
        newArrivalProducts,
        outOfStock,
        lowStock,
        totalCategories: categories.length
      }
    );

  } catch (error) {

    return errorResponse(
      res,
      error.message
    );

  }

};
const getLowStockProducts = async (req, res) => {

  try {

    const products = await Product.find({
      stock: { $lte: 5 }
    });

    res.json({

      success: true,

      count: products.length,

      products

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};

module.exports = {

  createProduct,

  getProducts,

  getSingleProduct,

  updateProduct,

  deleteProduct,

  restoreProduct,

  getFeaturedProducts,

  getBestSellerProducts,

  getNewArrivalProducts,

  getRelatedProducts,

  getCategories,

  searchProducts,
  getProductStats,
  getLowStockProducts
};