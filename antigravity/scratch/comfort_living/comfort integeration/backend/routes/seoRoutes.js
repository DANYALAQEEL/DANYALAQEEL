const express = require("express");

const router = express.Router();

const {
    getSEO,
    updateSEO
} = require("../controllers/seoController");

const {
    protect,
    adminOnly
} = require("../middleware/authMiddleware");

router.get("/", getSEO);

router.put(
    "/",
    protect,
    adminOnly,
    updateSEO
);

module.exports = router;