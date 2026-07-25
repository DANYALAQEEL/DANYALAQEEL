const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const {
  createContact,
  getContacts,
  deleteContact,
} = require("../controllers/contactController");

// PUBLIC — anyone can submit the form
router.post("/", createContact);

// ADMIN ONLY — must be logged in
router.get("/", protect, getContacts);
router.delete("/:id", protect, deleteContact);

module.exports = router;