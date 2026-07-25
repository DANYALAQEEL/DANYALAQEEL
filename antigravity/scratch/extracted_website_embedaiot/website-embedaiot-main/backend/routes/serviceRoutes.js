const express = require("express");

const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const {
  createService,
  getServices,
  getSingleService,
  updateService,
  deleteService,
} = require("../controllers/serviceController");


// CREATE
router.post("/", protect, upload.single("image"), createService);

// GET ALL
router.get("/", getServices);

// GET SINGLE
router.get("/:id", getSingleService);

// UPDATE
router.put("/:id", protect, upload.single("image"), updateService);

// DELETE
router.delete("/:id",protect, deleteService);


module.exports = router;