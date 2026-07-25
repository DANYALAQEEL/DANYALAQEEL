const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({

 
  title: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  technologies: {
    type: [String],
  },

  image: {
    type: String,
  },

  clientName: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

});

module.exports = mongoose.model("Portfolio", portfolioSchema);