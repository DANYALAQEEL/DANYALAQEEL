const express = require("express");

const router = express.Router();

const upload = require("../middleware/uploadMiddleware");
const validate = require("../middleware/validate");

const productSchema = require("../validators/productValidator");
const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

const {

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
  getProductStats,
  getLowStockProducts,
  searchProducts

} = require("../controllers/productController");

// PUBLIC ROUTES

router.get("/", getProducts);

router.get("/featured", getFeaturedProducts);

router.get("/best-sellers", getBestSellerProducts);

router.get("/new-arrivals", getNewArrivalProducts);

router.get("/categories", getCategories);

router.get("/search", searchProducts);

router.get("/related/:slug", getRelatedProducts);

router.get("/slug/:slug", getSingleProduct);

router.get("/inventory/low-stock", getLowStockProducts);
// ADMIN ROUTES

router.post(
  "/",
  protect,
  adminOnly,
  upload.fields([
    {
      name: "thumbnail",
      maxCount: 1
    },
    {
      name: "images",
      maxCount: 10
    }
  ]),
  validate(productSchema),
  createProduct
);
router.put(
  "/:id",
  protect,
  adminOnly,
  upload.fields([
    {
      name: "thumbnail",
      maxCount: 1
    },
    {
      name: "images",
      maxCount: 10
    }
  ]),
  updateProduct
);

router.delete(
  "/:id",
  protect,
  adminOnly,
  deleteProduct
);
router.patch(
  "/restore/:id",
  protect,
  adminOnly,
  restoreProduct
);
router.get(
  "/stats/dashboard",
  protect,
  adminOnly,
  getProductStats
);
module.exports = router;