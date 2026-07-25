const HomeSection = require("../models/Home");

/*
====================================
CREATE SECTION
====================================
*/

const createSection = async (req, res) => {

  try {

    const section = await HomeSection.create(req.body);

    res.status(201).json({

      success: true,

      message: "Section created successfully",

      section

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
GET ALL SECTIONS
====================================
*/

const getSections = async (req, res) => {

  try {

    const filter = {};

    if (req.query.includeInactive !== "true") {
      filter.active = true;
    }

    const sections = await HomeSection.find(filter);

    res.json({

      success: true,

      count: sections.length,

      sections

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
UPDATE SECTION
====================================
*/

const updateSection = async (req, res) => {

  try {

    const section = await HomeSection.findByIdAndUpdate(

      req.params.id,

      req.body,

      {
        new: true,
        runValidators: true
      }

    );

    if (!section) {

      return res.status(404).json({

        success: false,

        message: "Section not found"

      });

    }

    res.json({

      success: true,

      message: "Section updated successfully",

      section

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
DELETE SECTION
====================================
*/

const deleteSection = async (req, res) => {

  try {

    const section = await HomeSection.findById(req.params.id);

    if (!section) {

      return res.status(404).json({

        success: false,

        message: "Section not found"

      });

    }

    await section.deleteOne();

    res.json({

      success: true,

      message: "Section deleted successfully"

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

  createSection,

  getSections,

  updateSection,

  deleteSection

};