const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({

  heroTitle: String,

  heroSubtitle: String,

  introText: String,

  mission: String,

  vision: String,

  values: String

});

module.exports = mongoose.model("About", aboutSchema);