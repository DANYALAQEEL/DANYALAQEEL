const Home = require("../models/Home");


// GET HOME DATA
const getHome = async (req, res) => {
  try {

    const homeData = await Home.findOne();

    res.status(200).json(homeData);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// UPDATE HOME DATA
const updateHome = async (req, res) => {
  try {

    let homeData = await Home.findOne();

    // IF NO DATA EXISTS
    if (!homeData) {

      homeData = await Home.create(req.body);

    } else {

      homeData = await Home.findByIdAndUpdate(
        homeData._id,
        req.body,
        { new: true }
      );

    }

    res.status(200).json(homeData);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


module.exports = {
  getHome,
  updateHome,
};