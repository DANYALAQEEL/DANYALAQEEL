const express = require("express");

const router = express.Router();

const {

    createCoupon,
    getCoupons,
    validateCoupon,
    deleteCoupon

} = require("../controllers/couponController");

const { protect, adminOnly } = require("../middleware/authMiddleware");


// Admin
router.post("/", protect, adminOnly, createCoupon);

router.get("/", protect, adminOnly, getCoupons);

router.delete("/:id", protect, adminOnly, deleteCoupon);


// Public
router.post("/validate", validateCoupon);


module.exports = router;