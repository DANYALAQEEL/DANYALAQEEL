const express = require("express");

const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const {
  getDashboardStats,
} = require("../controllers/dashboardController");


// ADMIN ONLY
router.get("/", protect, getDashboardStats);


module.exports = router;