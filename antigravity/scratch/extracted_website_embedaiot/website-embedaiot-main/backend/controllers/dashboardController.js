const Product = require("../models/Product");
const Service = require("../models/Service");
const Portfolio = require("../models/Portfolio");


// GET DASHBOARD STATS
const getDashboardStats = async (req, res) => {

  try {

    // COUNTS
    const totalProducts = await Product.countDocuments();

    const totalServices = await Service.countDocuments();

    const totalProjects = await Portfolio.countDocuments();

    // FEATURED PRODUCTS
    const featuredProducts = await Product.countDocuments({
      featured: true,
    });

    // FEATURED SERVICES
    const featuredServices = await Service.countDocuments({
      featured: true,
    });

    res.status(200).json({

      totalProducts,
      totalServices,
      totalProjects,
      featuredProducts,
      featuredServices,

    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


module.exports = {
  getDashboardStats,
};