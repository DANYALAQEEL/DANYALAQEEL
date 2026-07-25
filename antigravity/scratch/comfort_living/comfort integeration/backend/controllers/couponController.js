const Coupon = require("../models/Coupon");


// Create Coupon
const createCoupon = async (req, res) => {
    try {

        const coupon = await Coupon.create(req.body);

        res.status(201).json({
            success: true,
            coupon
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// Get All Coupons
const getCoupons = async (req, res) => {

    try {

        const coupons = await Coupon.find().sort({ createdAt: -1 });

        res.json({
            success: true,
            count: coupons.length,
            coupons
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


// Validate Coupon
const validateCoupon = async (req, res) => {

    try {

        const { code, totalAmount } = req.body;

        const coupon = await Coupon.findOne({
            code: code.toUpperCase()
        });

        if (!coupon) {

            return res.status(404).json({
                success: false,
                message: "Invalid coupon"
            });

        }

        if (!coupon.active) {

            return res.status(400).json({
                success: false,
                message: "Coupon disabled"
            });

        }

        if (coupon.expiryDate < new Date()) {

            return res.status(400).json({
                success: false,
                message: "Coupon expired"
            });

        }

        if (coupon.usedCount >= coupon.usageLimit) {

            return res.status(400).json({
                success: false,
                message: "Coupon usage limit reached"
            });

        }

        if (totalAmount < coupon.minimumOrder) {

            return res.status(400).json({
                success: false,
                message: `Minimum order Rs ${coupon.minimumOrder}`
            });

        }

        let discount = 0;

        if (coupon.discountType === "percentage") {

            discount = (totalAmount * coupon.discount) / 100;

        } else {

            discount = coupon.discount;

        }

        res.json({

            success: true,

            coupon,

            discount,

            finalAmount: totalAmount - discount

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


// Delete Coupon
const deleteCoupon = async (req, res) => {

    try {

        await Coupon.findByIdAndDelete(req.params.id);

        res.json({

            success: true,

            message: "Coupon deleted"

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


module.exports = {

    createCoupon,
    getCoupons,
    validateCoupon,
    deleteCoupon

};