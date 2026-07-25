const multer = require("multer");
const fs = require("fs");
const path = require("path");

// Create uploads folder if it doesn't exist
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads", { recursive: true });
}

// Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {

    const uniqueName =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);

    cb(null, uniqueName);

  },
});

// Allow Images Only
const fileFilter = (req, file, cb) => {

  const allowed = /jpg|jpeg|png|webp/i;

  const ext = path.extname(file.originalname);

  if (allowed.test(ext)) {

    cb(null, true);

  } else {

    cb(new Error("Only JPG, PNG and WEBP images are allowed"));

  }

};

const upload = multer({

  storage,

  fileFilter,

  limits: {

    fileSize: 5 * 1024 * 1024,

  },

});

module.exports = upload;