const express = require("express");

const router = express.Router();

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

const {
  getDashboardStats,
  getMonthlySalesAnalytics,
  getTopSellingProducts,
  getCustomerAnalytics,
  getInventoryAnalytics,
  getOrderAnalytics,
  getSystemHealth
} = require("../controllers/dashboardController");


// ADMIN ONLY
router.get(
  "/",
  protect,
  adminOnly,
  getDashboardStats,
  getSystemHealth
);
router.get(
  "/monthly-sales",
  protect,
  adminOnly,
  getMonthlySalesAnalytics
);
router.get(
  "/top-products",
  protect,
  adminOnly,
  getTopSellingProducts
);
router.get(
  "/customer-analytics",
  protect,
  adminOnly,
  getCustomerAnalytics
);
router.get(
  "/inventory-analytics",
  protect,
  adminOnly,
  getInventoryAnalytics
);
router.get(
  "/order-analytics",
  protect,
  adminOnly,
  getOrderAnalytics
);
router.get(
  "/health",
  protect,
  adminOnly,
  getSystemHealth
);
module.exports = router;