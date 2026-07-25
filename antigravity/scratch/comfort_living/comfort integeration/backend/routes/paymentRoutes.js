const express = require("express");

const router = express.Router();

const {
    initiate,
    verify,
    refund,
    status,
} = require("../controllers/paymentController");

const {
    protect,
    adminOnly,
} = require("../middleware/authMiddleware");

router.post(
    "/:orderId/initiate",
    protect,
    initiate
);

router.post(
    "/:orderId/verify",
    protect,
    adminOnly,
    verify
);

router.post(
    "/:orderId/refund",
    protect,
    adminOnly,
    refund
);

router.get(
    "/:orderId/status",
    protect,
    status
);

module.exports = router;