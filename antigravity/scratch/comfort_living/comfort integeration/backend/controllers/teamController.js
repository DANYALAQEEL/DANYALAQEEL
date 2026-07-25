const TeamMember = require("../models/TeamMember");

/*
====================================
CREATE TEAM MEMBER
====================================
*/

const createTeamMember = async (req, res) => {

  try {

    const member = await TeamMember.create(req.body);

    res.status(201).json({

      success: true,

      message: "Team member added successfully",

      member

    });

  }

  catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};

/*
====================================
GET TEAM MEMBERS
====================================
*/

const getTeamMembers = async (req, res) => {

  try {

    const filter = {};

    if (req.query.includeInactive !== "true") {
      filter.active = true;
    }

    const members = await TeamMember.find(filter).sort({
      displayOrder: 1
    });

    res.json({

      success: true,

      count: members.length,

      members

    });

  }

  catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};

/*
====================================
UPDATE TEAM MEMBER
====================================
*/

const updateTeamMember = async (req, res) => {

  try {

    const member = await TeamMember.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Team member not found"
      });
    }

    res.json({

      success: true,

      message: "Team member updated successfully",

      member

    });

  }

  catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};

/*
====================================
DELETE TEAM MEMBER (soft delete — mirrors the
active flag already used elsewhere, so a member
can be brought back later by editing them with
active: true instead of losing their record)
====================================
*/

const deleteTeamMember = async (req, res) => {

  try {

    const member = await TeamMember.findByIdAndUpdate(
      req.params.id,
      { active: false },
      { new: true }
    );

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Team member not found"
      });
    }

    res.json({

      success: true,

      message: "Team member removed successfully",

      member

    });

  }

  catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};

module.exports = {

  createTeamMember,

  getTeamMembers,

  updateTeamMember,

  deleteTeamMember

};