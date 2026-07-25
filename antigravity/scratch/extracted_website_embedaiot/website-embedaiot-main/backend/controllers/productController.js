const Product = require("../models/Product");

// CREATE PRODUCT
const createProduct = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const imagePath = req.file
      ? `/uploads/${req.file.filename}`
      : "";

    const product = await Product.create({
  title: req.body.title,
  category: req.body.category,
  description: req.body.description,
  price: req.body.price || 0,
  image: imagePath,

  technologies: req.body.technologies
    ? req.body.technologies.split(",").map(t => t.trim())
    : [],

  features: req.body.features
    ? req.body.features.split(",").map(f => f.trim())
    : [],

  featured: req.body.featured === "true",
});

    res.status(201).json(product);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET ALL PRODUCTS
const getProducts = async (req, res) => {
  try {

    const products = await Product.find();

    res.status(200).json(products);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// GET SINGLE PRODUCT BY SLUG
const getSingleProduct = async (req, res) => {
  try {

    const product = await Product.findOne({
      slug: req.params.slug,
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json(product);

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// UPDATE PRODUCT
const updateProduct = async (req, res) => {
  try {

   const updateData = {
  title: req.body.title,
  category: req.body.category,
  description: req.body.description,
  price: req.body.price,
  featured: req.body.featured === "true",
};

    if (req.body.technologies) {
  updateData.technologies =
    req.body.technologies.split(",").map(t => t.trim());
}

if (req.body.features) {
  updateData.features =
    req.body.features.split(",").map(f => f.trim());
}

    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
      }
    );

    res.status(200).json(product);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// DELETE PRODUCT
const deleteProduct = async (req, res) => {
  try {

    const product = await Product.findById(
      req.params.id
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    await product.deleteOne();

    res.status(200).json({
      message: "Product deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};