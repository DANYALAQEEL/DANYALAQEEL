const express = require("express");

const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const {
  getAbout,
  updateAbout,
} = require("../controllers/aboutController");


// PUBLIC GET
router.get("/", getAbout);


// ADMIN UPDATE
router.put("/", protect, updateAbout);


module.exports = router;