const mongoose = require("mongoose");

const activityLogSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            required: true,
            enum: [
                "ORDER",
                "PRODUCT",
                "CONTACT",
                "PAYMENT",
                "CMS",
                "LOGIN"
            ]
        },

        message: {
            type: String,
            required: true,
        },

        referenceId: {
            type: mongoose.Schema.Types.ObjectId,
            default: null,
        },

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Admin",
            default: null,
        },

        metadata: {
            type: Object,
            default: {},
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("ActivityLog", activityLogSchema);