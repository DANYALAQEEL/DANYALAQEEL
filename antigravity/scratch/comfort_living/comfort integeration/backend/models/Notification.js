const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },

        message: {
            type: String,
            required: true
        },

        type: {
            type: String,
            enum: [
                "ORDER",
                "PAYMENT",
                "PRODUCT",
                "CONTACT",
                "CMS",
                "SYSTEM"
            ],
            default: "SYSTEM"
        },

        isRead: {
            type: Boolean,
            default: false
        },

        referenceId: {
            type: mongoose.Schema.Types.ObjectId,
            default: null
        }
    },
    {
        timestamps: true
    });

module.exports = mongoose.model("Notification", notificationSchema);