const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(

    {

        orderNumber: {
            type: String,
            unique: true
        },

        customer: {

            name: {
                type: String,
                required: true
            },

            email: {
                type: String,
                required: true,
                lowercase: true
            },

            phone: {
                type: String,
                required: true
            }

        },

        items: [

            {

                productId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: true
                },

                title: {
                    type: String,
                    required: true
                },

                quantity: {
                    type: Number,
                    required: true
                },

                priceAtPurchase: {
                    type: Number,
                    required: true
                }

            }

        ],

        subtotal: {
            type: Number,
            required: true,
            default: 0
        },

        shippingCharge: {
            type: Number,
            default: 0
        },

        taxAmount: {
            type: Number,
            default: 0
        },

        discount: {
            type: Number,
            default: 0
        },

        couponCode: {
            type: String,
            default: ""
        },

        totalAmount: {
            type: Number,
            required: true
        },

        shippingAddress: {

            fullName: {
                type: String,
                required: true
            },

            phone: {
                type: String,
                required: true
            },

            addressLine: {
                type: String,
                required: true
            },

            city: {
                type: String,
                required: true
            },

            postalCode: {
                type: String,
                default: ""
            }

        },

        paymentMethod: {
            type: String,
            enum: [
                "COD",
                "Easypaisa",
                "JazzCash",
                "Bank Transfer"
            ],
            default: "COD"
        },
        paymentReference: {
            type: String,
            default: ""
        },
        gateway: {
            type: String,
            enum: ["COD", "EASYPAISA", "JAZZCASH"],
            default: "COD"
        },

        gatewayTransactionId: {
            type: String,
            default: ""
        },

        gatewayOrderId: {
            type: String,
            default: ""
        },

        gatewayResponse: {
            type: Object,
            default: {}
        },
        paymentStatus: {
            type: String,
            enum: [
                "Pending",
                "Awaiting Verification",
                "Paid",
                "Failed",
                "Refunded"
            ],
            default: "Pending"
        },

        transactionId: {
            type: String,
            default: ""
        },

        paymentProof: {
            type: String,
            default: ""
        },

        paymentDate: Date,

        verifiedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Admin"
        },

        verifiedAt: Date,

        paymentNotes: {
            type: String,
            default: ""
        },
        refundReason: {
            type: String,
            default: "",
        },
        cancelRequest: {

            requested: {

                type: Boolean,

                default: false

            },

            reason: {

                type: String,

                default: ""

            },

            requestedAt: Date

        },
        refundDate: Date,

        paymentHistory: [
            {
                action: String,
                status: String,
                date: {
                    type: Date,
                    default: Date.now,
                },
                performedBy: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Admin",
                },
                remarks: String,
            },
        ],
        paymentDate: Date,


        orderStatus: {

            type: String,

            enum: [

                "Pending",
                "Processing",
                "Packed",
                "Shipped",
                "Out For Delivery",
                "Delivered",
                "Cancelled",
                "Returned"

            ],

            default: "Pending"

        },
        processingAt: Date,
        packedAt: Date,
        shippedAt: Date,
        outForDeliveryAt: Date,

        deliveredAt: Date,

        cancelledAt: Date,

        returnedAt: Date,
        statusUpdatedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Admin",
        },
        statusHistory: [

            {

                status: {

                    type: String,

                    enum: [

                        "Pending",
                        "Processing",
                        "Packed",
                        "Shipped",
                        "Out For Delivery",
                        "Delivered",
                        "Cancelled",
                        "Returned"

                    ]

                },

                changedBy: {

                    type: mongoose.Schema.Types.ObjectId,

                    ref: "Admin"

                },

                remarks: {

                    type: String,

                    default: ""

                },

                changedAt: {

                    type: Date,

                    default: Date.now

                }

            }

        ],
        courierName: {

            type: String,

            default: ""

        },

        trackingNumber: {

            type: String,

            default: ""

        },

        dispatchDate: Date,

        estimatedDelivery: Date,

        deliveryDate: Date,

        notes: String,

        createdAt: {

            type: Date,

            default: Date.now

        }

    }

);

orderSchema.pre("save", function () {

    if (!this.orderNumber) {

        this.orderNumber =
            "CL-" +
            Date.now();

    }



});
// Performance Indexes

orderSchema.index({ "customer.email": 1 });
orderSchema.index({ orderStatus: 1 });
orderSchema.index({ paymentStatus: 1 });
orderSchema.index({ createdAt: -1 });
module.exports = mongoose.model("Order", orderSchema);