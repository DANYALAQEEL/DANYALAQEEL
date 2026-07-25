const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  role: {
    type: String,
    required: true
  },

  department: {
    type: String,
    required: true
  },

  image: {
    type: String,
    required: true
  },

  bio: {
    type: String,
    default: ""
  },

  qualifications: [
    String
  ],

  featured: {
    type: Boolean,
    default: false
  }

}, { timestamps: true });

module.exports = mongoose.model("Team", teamSchema);