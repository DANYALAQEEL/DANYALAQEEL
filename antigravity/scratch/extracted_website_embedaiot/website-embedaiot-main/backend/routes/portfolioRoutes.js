const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const {
  createPortfolio,
  getPortfolios,
  getSinglePortfolio,
  updatePortfolio,
  deletePortfolio,
} = require("../controllers/portfolioController");

// PUBLIC
router.get("/", getPortfolios);
router.get("/:id", getSinglePortfolio);

// ADMIN ONLY — upload.single added here
router.post("/", protect, upload.single("image"), createPortfolio);
router.put("/:id", protect, upload.single("image"), updatePortfolio);
router.delete("/:id", protect, deletePortfolio);

module.exports = router;