const express = require("express");

const router = express.Router();

const {

    createPage,

    getPages,

    getPage,

    updatePage,

    deletePage

} = require("../controllers/cmsController");

const {

    protect,

    adminOnly

} = require("../middleware/authMiddleware");

/*
====================================
PUBLIC
====================================
*/

router.get("/:key", getPage);

/*
====================================
ADMIN
====================================
*/

router.get(
    "/",
    protect,
    adminOnly,
    getPages
);

router.post(
    "/",
    protect,
    adminOnly,
    createPage
);

router.put(
    "/:id",
    protect,
    adminOnly,
    updatePage
);

router.delete(
    "/:id",
    protect,
    adminOnly,
    deletePage
);

module.exports = router;