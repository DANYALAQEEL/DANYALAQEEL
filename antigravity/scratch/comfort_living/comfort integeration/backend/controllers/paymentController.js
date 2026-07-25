const Order = require("../models/Order");
const createActivityLog = require("../utils/activityLogger");
const createNotification = require("../utils/notificationHelper");
const restoreInventory = require("../utils/restoreInventory");
const {
    initializePayment,
    verifyPayment,
    refundPayment,
} = require("../services/paymentService");

// Initiate Payment
const initiate = async (req, res) => {
    try {
        const order = await Order.findById(req.params.orderId);

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found",
            });
        }
        // Payment already completed
        if (order.paymentStatus === "Paid") {
            return res.status(400).json({
                success: false,
                message: "Payment has already been verified.",
            });
        }

        // Payment already refunded
        if (order.paymentStatus === "Refunded") {
            return res.status(400).json({
                success: false,
                message: "Refunded payments cannot be initiated.",
            });
        }

        // Already waiting for payment
        if (
            order.paymentHistory.some(
                (history) => history.action === "Payment Initiated"
            )
        ) {
            return res.status(400).json({
                success: false,
                message: "Payment has already been initiated.",
            });
        }
        const result = await initializePayment(order);

        if (result.success) {

            order.gatewayTransactionId =
                result.transactionId || "";

            order.gatewayOrderId =
                result.orderId || "";

            order.paymentHistory.push({

                action: "Payment Initiated",

                status: "Pending",

                remarks: `${order.gateway} payment initiated`

            });

            await order.save();

        }

        res.json({

            success: true,

            payment: result,

            order,

        });
    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

// Verify Payment
const verify = async (req, res) => {

    try {

        const order = await Order.findById(req.params.orderId);

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found",
            });
        }
        // Already verified
        if (order.paymentStatus === "Paid") {
            return res.status(400).json({
                success: false,
                message: "Payment already verified.",
            });
        }

        // Refunded orders cannot be verified
        if (order.paymentStatus === "Refunded") {
            return res.status(400).json({
                success: false,
                message: "Refunded payments cannot be verified.",
            });
        }
        const result = await verifyPayment(order);

        if (result.success) {

            order.paymentStatus = "Paid";

            order.paymentDate = new Date();

            order.verifiedAt = new Date();

            order.verifiedBy = req.admin._id;
            order.transactionId =
                result.transactionId ||
                order.gatewayTransactionId;

            order.paymentHistory.push({

                action: "Payment Verified",

                status: "Paid",

                performedBy: req.admin._id,

                remarks: "Payment verified successfully",

            });

            await order.save();
            await createActivityLog({
                type: "PAYMENT",
                message: `Payment verified for order ${order.orderNumber}`,
                referenceId: order._id,
            });
            await createNotification({
                title: "Payment Verified",
                message: `${order.orderNumber} payment verified`,
                type: "PAYMENT",
                referenceId: order._id,
            });
        }

        res.json({

            success: true,

            payment: result,

            order,

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message,

        });

    }

};

// Refund Payment
const refund = async (req, res) => {

    try {

        const order = await Order.findById(req.params.orderId);

        if (!order) {

            return res.status(404).json({

                success: false,

                message: "Order not found",

            });

        }
        // Only paid orders can be refunded
        if (order.paymentStatus !== "Paid") {
            return res.status(400).json({
                success: false,
                message: "Only paid orders can be refunded.",
            });
        }
        if (order.paymentStatus === "Refunded") {
            return res.status(400).json({
                success: false,
                message: "Payment already refunded.",
            });
        }
        const result = await refundPayment(order);

        if (result.success) {

            order.paymentStatus = "Refunded";

            order.refundDate = new Date();

            order.refundReason =
                req.body.reason || "Refund approved";
            order.gatewayRefundId =
                result.refundId || "";
            order.paymentHistory.push({

                action: "Payment Refunded",

                status: "Refunded",

                performedBy: req.admin._id,

                remarks: order.refundReason,

            });
            await restoreInventory(order, req.admin._id);
            console.log(req.admin);
            console.log(req.admin._id);
            await order.save();
            await createActivityLog({
                type: "PAYMENT",
                message: `Payment refunded for order ${order.orderNumber}`,
                referenceId: order._id,
            });
            await createNotification({
                title: "Payment Refunded",
                message: `${order.orderNumber} payment refunded`,
                type: "PAYMENT",
                referenceId: order._id,
            });
        }

        res.json({

            success: true,

            payment: result,

            order,

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message,

        });

    }

};

// Payment Status
const status = async (req, res) => {

    try {

        const order = await Order.findById(req.params.orderId);

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found",
            });
        }

        res.json({

            success: true,

            paymentStatus: order.paymentStatus,

            gateway: order.gateway,

            paymentReference: order.paymentReference,

            transactionId: order.transactionId,

            gatewayOrderId: order.gatewayOrderId,

            gatewayTransactionId: order.gatewayTransactionId,

            refundDate: order.refundDate,

            paymentDate: order.paymentDate,

            paymentHistory: order.paymentHistory,

        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};

module.exports = {
    initiate,
    verify,
    refund,
    status,
};