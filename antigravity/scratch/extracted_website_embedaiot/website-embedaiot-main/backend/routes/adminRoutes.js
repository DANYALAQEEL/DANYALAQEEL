const express = require("express");
const router = express.Router();

const {
  registerAdmin,
  loginAdmin,
  getUsers,
  deleteUser,
} = require("../controllers/adminController");

const { protect, adminOnly } = require("../middleware/authMiddleware");

// LOGIN (Public)
router.post("/login", loginAdmin);

// ADMIN ONLY MANAGEMENT ROUTES
router.post("/register", protect, adminOnly, registerAdmin);
router.get("/users", protect, adminOnly, getUsers);
router.delete("/users/:id", protect, adminOnly, deleteUser);

module.exports = router;