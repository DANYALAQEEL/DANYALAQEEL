const TeamMember = require("../models/Team");


// CREATE TEAM MEMBER
const createTeamMember = async (req, res) => {
  try {
    const memberData = { ...req.body };
    if (req.file) {
      memberData.image = req.file.filename;
    }
    const member = await TeamMember.create(memberData);
    res.status(201).json(member);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// GET ALL TEAM MEMBERS
const getTeamMembers = async (req, res) => {

  try {

    const members = await TeamMember.find();

    res.json(members);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


// GET SINGLE TEAM MEMBER
const getSingleTeamMember = async (req, res) => {

  try {

    const member = await TeamMember.findById(req.params.id);

    if (!member) {

      return res.status(404).json({
        message: "Team member not found",
      });

    }

    res.json(member);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


// UPDATE TEAM MEMBER
const updateTeamMember = async (req, res) => {
  try {
    const updateData = { ...req.body };
    if (req.file) {
      updateData.image = req.file.filename;
    }
    const member = await TeamMember.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );
    if (!member) {
      return res.status(404).json({ message: "Team member not found" });
    }
    res.json(member);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// DELETE TEAM MEMBER
const deleteTeamMember = async (req, res) => {

  try {

    await TeamMember.findByIdAndDelete(req.params.id);

    res.json({
      message: "Team member deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


module.exports = {
  createTeamMember,
  getTeamMembers,
  getSingleTeamMember,
  updateTeamMember,
  deleteTeamMember,
};