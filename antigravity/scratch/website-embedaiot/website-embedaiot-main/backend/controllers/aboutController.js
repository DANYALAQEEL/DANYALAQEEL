const About = require("../models/About");


// GET ABOUT DATA
const getAbout = async (req, res) => {

  try {

    const aboutData = await About.findOne();

    res.status(200).json(aboutData);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


// UPDATE ABOUT DATA
const updateAbout = async (req, res) => {

  try {

    let aboutData = await About.findOne();

    // IF NO DATA EXISTS
    if (!aboutData) {

      aboutData = await About.create(req.body);

    } else {

      aboutData = await About.findByIdAndUpdate(
        aboutData._id,
        req.body,
        { new: true }
      );

    }

    res.status(200).json(aboutData);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


module.exports = {
  getAbout,
  updateAbout,
};