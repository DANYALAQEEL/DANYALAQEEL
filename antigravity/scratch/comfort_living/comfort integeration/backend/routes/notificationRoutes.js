const express = require("express");

const router = express.Router();

const {
    protect,
    adminOnly
} = require("../middleware/authMiddleware");

const {
    getNotifications,
    markAsRead,
    markAllAsRead
} = require("../controllers/notificationController");

router.get(
    "/",
    protect,
    adminOnly,
    getNotifications
);

router.patch(
    "/read-all",
    protect,
    adminOnly,
    markAllAsRead
);

router.patch(
    "/:id/read",
    protect,
    adminOnly,
    markAsRead
);

module.exports = router;