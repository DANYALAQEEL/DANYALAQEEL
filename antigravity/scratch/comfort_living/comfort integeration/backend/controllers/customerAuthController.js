const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const asyncHandler = require("../utils/asyncHandler");
const { successResponse, errorResponse } = require("../utils/response");

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, role: "customer" },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  );
};

const sanitizeUser = (user) => ({
  id: user._id,
  name: user.name,
  email: user.email,
  phone: user.phone,
  createdAt: user.createdAt
});

/*
====================================
REGISTER CUSTOMER
====================================
*/
const registerCustomer = asyncHandler(async (req, res) => {
  const { name, email, phone, password } = req.body;

  if (!name || !email || !password) {
    return errorResponse(res, "Name, email and password are required", 400);
  }

  if (!validator.isEmail(email)) {
    return errorResponse(res, "Invalid email address", 400);
  }

  if (password.length < 8) {
    return errorResponse(res, "Password must be at least 8 characters", 400);
  }

  const existing = await User.findOne({ email: email.toLowerCase() });

  if (existing) {
    return errorResponse(res, "An account already exists with this email", 400);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email: email.toLowerCase(),
    phone: phone || "",
    password: hashedPassword
  });

  const token = generateToken(user);

  return successResponse(
    res,
    "Account created successfully",
    { token, user: sanitizeUser(user) },
    201
  );
});

/*
====================================
LOGIN CUSTOMER
====================================
*/
const loginCustomer = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return errorResponse(res, "Email and password are required", 400);
  }

  const user = await User.findOne({ email: email.toLowerCase() });

  if (!user || !user.isActive) {
    return errorResponse(res, "Invalid email or password", 401);
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return errorResponse(res, "Invalid email or password", 401);
  }

  user.lastLogin = new Date();
  await user.save();

  const token = generateToken(user);

  return successResponse(res, "Login successful", {
    token,
    user: sanitizeUser(user)
  });
});

/*
====================================
GET CURRENT CUSTOMER
====================================
*/
const getMe = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    return errorResponse(res, "Account not found", 404);
  }

  return successResponse(res, "Profile fetched successfully", sanitizeUser(user));
});

module.exports = {
  registerCustomer,
  loginCustomer,
  getMe
};
