const express = require("express");

const router = express.Router();

const {

    subscribe,

    getSubscribers,

    deleteSubscriber

} = require("../controllers/newsletterController");

const {

    protect,

    adminOnly

} = require("../middleware/authMiddleware");

/*
====================================
PUBLIC
====================================
*/

router.post("/subscribe", subscribe);

/*
====================================
ADMIN
====================================
*/

router.get(
    "/",
    protect,
    adminOnly,
    getSubscribers
);

router.delete(
    "/:id",
    protect,
    adminOnly,
    deleteSubscriber
);

module.exports = router;