const mongoose = require("mongoose");

const inventoryLogSchema = new mongoose.Schema(
    {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },

        productTitle: {
            type: String,
            required: true,
        },

        action: {
            type: String,
            enum: [
                "PRODUCT_CREATED",
                "ORDER_PLACED",
                "ORDER_CANCELLED",
                "PAYMENT_REFUNDED",
                "STOCK_UPDATED",
                "STOCK_ADJUSTED",
            ],
            required: true,
        },

        quantity: {
            type: Number,
            required: true,
        },

        stockBefore: {
            type: Number,
            required: true,
        },

        stockAfter: {
            type: Number,
            required: true,
        },

        order: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order",
        },

        performedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Admin",
        },

        remarks: {
            type: String,
            default: "",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model(
    "InventoryLog",
    inventoryLogSchema
);