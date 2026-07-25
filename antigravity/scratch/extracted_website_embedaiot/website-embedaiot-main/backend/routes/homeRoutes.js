const express = require("express");

const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const {
  getHome,
  updateHome,
} = require("../controllers/homeController");


// PUBLIC GET
router.get("/", getHome);


// ADMIN UPDATE
router.put("/", protect, updateHome);


module.exports = router;