const express = require("express");

const router = express.Router();

const {

    placeOrder,

    getOrders,

    getOrder,

    updateOrderStatus,

    deleteOrder,
    verifyPayment,
    getOrderStats,
    downloadInvoice,
    updateTracking,
    trackOrder,
    getCustomerOrder,
    requestCancelOrder,
} = require("../controllers/orderController");

const {

    protect,

    adminOnly,

} = require("../middleware/authMiddleware");

// CUSTOMER

router.post("/place-order", placeOrder);

// ADMIN

router.get("/", protect, adminOnly, getOrders);
router.get(
    "/admin/stats",
    protect,
    adminOnly,
    getOrderStats
);
router.get(
    "/:id/invoice",
    protect,
    adminOnly,
    downloadInvoice
);

router.get("/:id", protect, adminOnly, getOrder);

//router.patch(
//  "/:id/status",
//  protect,
//  adminOnly,
//  updateOrderStatus
//);

router.delete(
    "/:id",
    protect,
    adminOnly,
    deleteOrder
);

router.patch(
    "/:id/payment",
    protect,
    adminOnly,
    verifyPayment
);
router.put(
    "/:id/status",
    protect,
    adminOnly,
    updateOrderStatus
);
router.put(
    "/:id/tracking",
    protect,
    adminOnly,
    updateTracking
);

router.post("/track", trackOrder);
router.post("/customer-order", getCustomerOrder);
router.post("/request-cancel", requestCancelOrder);
module.exports = router;