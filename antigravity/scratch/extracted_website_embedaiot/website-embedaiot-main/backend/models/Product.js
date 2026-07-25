const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
  },

  slug: {
    type: String,
    unique: true,
  },

  category: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    default: 0,
  },
  stock: {
    type: Number,
    default: 10, // Default to 10 items in stock, your client can change this later
  },
  image: {
    type: String,
  },

  technologies: [{
    type: String,
  }],

  features: {
    type: [String],
    default: [],
  },

  featured: {
    type: Boolean,
    default: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

});

productSchema.pre('save', function () {
  if (!this.slug && this.title) {
    this.slug = this.title
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '')
      .replace(/-+/g, '-');
  }
});

module.exports = mongoose.model("Product", productSchema);