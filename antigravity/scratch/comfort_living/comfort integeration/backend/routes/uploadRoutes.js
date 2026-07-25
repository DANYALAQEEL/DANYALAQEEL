const express = require("express");

const router = express.Router();

const upload = require("../middleware/uploadMiddleware");


// IMAGE UPLOAD
router.post("/", upload.single("image"), (req, res) => {

  res.status(200).json({
    message: "Image uploaded successfully",
    image: req.file.path,
  });

});


module.exports = router;