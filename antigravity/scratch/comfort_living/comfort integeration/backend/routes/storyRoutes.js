const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
const {
  createStory,
  getStories,
  updateStory,
  deleteStory,
} = require("../controllers/storyController");

router.get("/", getStories);
router.post("/", protect, upload.single("image"), createStory);
router.put("/:id", protect, upload.single("image"), updateStory);
router.delete("/:id", protect, deleteStory);

module.exports = router;