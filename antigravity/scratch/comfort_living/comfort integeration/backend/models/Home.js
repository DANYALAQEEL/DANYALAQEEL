const mongoose = require("mongoose");

const homeSectionSchema = new mongoose.Schema(
  {
    sectionKey: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    title: {
      type: String,
      default: ""
    },

    subtitle: {
      type: String,
      default: ""
    },

    content: {
      type: String,
      default: ""
    },

    image: {
      type: String,
      default: ""
    },

    buttonText: {
      type: String,
      default: ""
    },

    buttonLink: {
      type: String,
      default: ""
    },

    active: {
      type: Boolean,
      default: true
    }

  },
  {
    timestamps: true
  });

module.exports = mongoose.model(
  "HomeSection",
  homeSectionSchema
);