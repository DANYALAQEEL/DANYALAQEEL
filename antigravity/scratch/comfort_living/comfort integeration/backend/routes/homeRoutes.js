const express = require("express");

const router = express.Router();

const {
  createSection,
  getSections,
  updateSection,
  deleteSection
} = require("../controllers/homeController");

const {
  protect,
  adminOnly
} = require("../middleware/authMiddleware");

router.get("/", getSections);

router.post(
  "/",
  protect,
  adminOnly,
  createSection
);

router.put(
  "/:id",
  protect,
  adminOnly,
  updateSection
);

router.delete(
  "/:id",
  protect,
  adminOnly,
  deleteSection
);

module.exports = router;