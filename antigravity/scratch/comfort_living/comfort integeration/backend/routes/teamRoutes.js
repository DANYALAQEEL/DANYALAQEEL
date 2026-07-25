const express = require("express");

const router = express.Router();

const {

  createTeamMember,

  getTeamMembers,

  updateTeamMember,

  deleteTeamMember

} = require("../controllers/teamController");

const {

  protect,

  adminOnly

} = require("../middleware/authMiddleware");

router.get("/", getTeamMembers);

router.post(
  "/",
  protect,
  adminOnly,
  createTeamMember
);

router.put(
  "/:id",
  protect,
  adminOnly,
  updateTeamMember
);

router.delete(
  "/:id",
  protect,
  adminOnly,
  deleteTeamMember
);

module.exports = router;