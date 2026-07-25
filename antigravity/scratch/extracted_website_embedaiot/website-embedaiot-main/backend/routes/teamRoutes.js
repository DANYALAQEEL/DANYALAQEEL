const express = require("express");

const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const {

  createTeamMember,
  getTeamMembers,
  getSingleTeamMember,
  updateTeamMember,
  deleteTeamMember,

} = require("../controllers/teamController");


// PUBLIC GET
router.get("/", getTeamMembers);

router.get("/:id", getSingleTeamMember);


// ADMIN ONLY
const upload = require("../middleware/uploadMiddleware");

router.post("/", protect, upload.single("image"), createTeamMember);

router.put("/:id", protect, upload.single("image"), updateTeamMember);

router.delete("/:id", protect, deleteTeamMember);


module.exports = router;