const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },

  password: {
    type: String,
    required: true,
    minlength: 8
  },

  role: {
    type: String,
    enum: ["admin", "staff"],
    default: "staff"
  },

  isActive: {
    type: Boolean,
    default: true
  },

  failedLoginAttempts: {
    type: Number,
    default: 0
  },

  lockUntil: {
    type: Date,
    default: null
  },

  resetPasswordToken: {
    type: String
  },

  resetPasswordExpire: {
    type: Date
  },

  lastLogin: {
    type: Date
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("Admin", adminSchema);