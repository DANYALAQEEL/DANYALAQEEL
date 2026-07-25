const express = require("express");

const router = express.Router();

const {

    createBanner,

    getBanners,

    updateBanner,

    deleteBanner

} = require("../controllers/bannerController");

const {

    protect,

    adminOnly

} = require("../middleware/authMiddleware");

/*
====================================
PUBLIC
====================================
*/

router.get("/", getBanners);

/*
====================================
ADMIN
====================================
*/

router.post(
    "/",
    protect,
    adminOnly,
    createBanner
);

router.put(
    "/:id",
    protect,
    adminOnly,
    updateBanner
);

router.delete(
    "/:id",
    protect,
    adminOnly,
    deleteBanner
);

module.exports = router;