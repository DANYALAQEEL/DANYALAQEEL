const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({

    code: {
        type: String,
        required: true,
        unique: true,
        uppercase: true,
        trim: true
    },

    discount: {
        type: Number,
        required: true
    },

    discountType: {
        type: String,
        enum: ["percentage", "fixed"],
        default: "percentage"
    },

    minimumOrder: {
        type: Number,
        default: 0
    },

    expiryDate: {
        type: Date,
        required: true
    },

    usageLimit: {
        type: Number,
        default: 100
    },

    usedCount: {
        type: Number,
        default: 0
    },

    active: {
        type: Boolean,
        default: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Coupon", couponSchema);