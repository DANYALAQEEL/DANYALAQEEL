const express = require("express");

const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");


// CREATE PRODUCT
router.post("/", upload.single("image"), createProduct);

// GET PRODUCTS
router.get("/", getProducts);

// GET SINGLEPRODUCT
router.get("/slug/:slug", getSingleProduct);

// PUT UPDATE
router.put("/:id", upload.single("image"), updateProduct);

// DELETE PRODUCT
router.delete("/:id", protect, deleteProduct);

module.exports = router; 
