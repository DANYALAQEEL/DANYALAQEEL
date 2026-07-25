const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  try {
    let token;

    // CHECK TOKEN
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];

      // VERIFY TOKEN
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || "default_dev_secret_key_12345"
      );

      req.admin = decoded;
      next();
    } else {
      res.status(401).json({
        message: "Not authorized, no token",
      });
    }
  } catch (error) {
    res.status(401).json({
      message: "Token failed",
    });
  }
};

const adminOnly = (req, res, next) => {
  if (req.admin && req.admin.role === "admin") {
    next();
  } else {
    res.status(403).json({
      message: "Access denied. Admin role required.",
    });
  }
};

module.exports = {
  protect,
  adminOnly,
};