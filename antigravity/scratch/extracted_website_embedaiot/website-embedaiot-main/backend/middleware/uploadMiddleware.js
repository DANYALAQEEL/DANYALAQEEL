const multer = require("multer");
const fs = require("fs");

// Ensure uploads directory exists
if (!fs.existsSync("uploads/")) {
  fs.mkdirSync("uploads/", { recursive: true });
}

// STORAGE SETTINGS
const storage = multer.diskStorage({

  destination: function (req, file, cb) {

    cb(null, "uploads/");

  },

  filename: function (req, file, cb) {

    cb(
      null,
      Date.now() + "-" + file.originalname
    );

  },

});


const upload = multer({
  storage: storage,
});

module.exports = upload;