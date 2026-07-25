const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({

  heroTitle: {
    type: String,
  },

  heroDescription: {
    type: String,
  },

  bannerImage: {
    type: String,
  },

  updatedAt: {
    type: Date,
    default: Date.now,
  },

});

module.exports = mongoose.model("Home", homeSchema);