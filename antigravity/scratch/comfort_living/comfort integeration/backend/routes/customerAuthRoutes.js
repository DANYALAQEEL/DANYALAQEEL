const express = require("express");
const router = express.Router();

const {
  registerCustomer,
  loginCustomer,
  getMe
} = require("../controllers/customerAuthController");

const { protectCustomer } = require("../middleware/authMiddleware");

// PUBLIC
router.post("/register", registerCustomer);
router.post("/login", loginCustomer);

// AUTHENTICATED CUSTOMER
router.get("/me", protectCustomer, getMe);

module.exports = router;
