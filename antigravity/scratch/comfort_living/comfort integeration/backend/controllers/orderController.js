const Order = require("../models/Order");
const Product = require("../models/Product");
const nodemailer = require("nodemailer");
const Coupon = require("../models/Coupon");
const createAuditLog = require("../utils/auditLogger");
const createActivityLog = require("../utils/activityLogger");
const createNotification = require("../utils/notificationHelper");
const generateInvoice = require("../utils/invoiceGenerator");
const createInventoryLog = require("../utils/inventoryLogger");
const restoreInventory = require("../utils/restoreInventory");
const { isValidTransition } = require("../utils/orderStatusValidator");
const {
    initiatePayment
} = require("../services/paymentService");
/*
====================================
MAIL TRANSPORT
====================================
*/

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

/*
====================================
PLACE ORDER
====================================
*/

const placeOrder = async (req, res) => {
    try {
        const {
            items,
            customer,
            shippingAddress,
            shippingFee,
            paymentMethod,
            couponCode,
            paymentReference,
            notes,
        } = req.body;
        let calculatedTotal = 0;
        let subtotal = 0;

        if (!items || items.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No products selected",
            });
        }

        // ================================
        // CALCULATE TOTAL FROM DATABASE
        // ================================

        for (const item of items) {

            const product = await Product.findById(item.productId);

            if (!product) {
                return res.status(404).json({
                    success: false,
                    message: "Product not found"
                });
            }

            if (product.stock < item.quantity) {
                return res.status(400).json({
                    success: false,
                    message: `${product.title} is out of stock`
                });
            }

            item.title = product.title;
            item.priceAtPurchase = product.price;

            subtotal += product.price * item.quantity;
        }
        calculatedTotal = subtotal;
        // ================================
        // APPLY COUPON
        // ================================

        let discount = 0;

        let appliedCoupon = "";

        if (couponCode) {

            const coupon = await Coupon.findOne({
                code: couponCode.toUpperCase(),
                active: true
            });

            if (!coupon) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid coupon"
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

            if (calculatedTotal < coupon.minimumOrder) {
                return res.status(400).json({
                    success: false,
                    message: `Minimum order should be Rs ${coupon.minimumOrder}`
                });
            }

            if (coupon.discountType === "percentage") {

                discount =
                    (calculatedTotal * coupon.discount) / 100;

            } else {

                discount = coupon.discount;

            }

            calculatedTotal -= discount;
            coupon.usedCount += 1;

            await coupon.save();

            appliedCoupon = coupon.code;

        }
        const shippingCharge = shippingFee || 0;

        // For now keep tax at zero.
        // Later we'll automatically read it from Website Settings.
        const taxAmount = 0;

        calculatedTotal =
            calculatedTotal +
            shippingCharge +
            taxAmount;
        const order = await Order.create({
            customer,
            items,

            subtotal,
            shippingCharge,
            taxAmount,
            totalAmount: calculatedTotal,


            discount,
            couponCode: appliedCoupon,

            shippingAddress,

            paymentMethod,
            paymentReference,
            notes,

            gateway:
                paymentMethod === "Easypaisa"
                    ? "EASYPAISA"
                    : paymentMethod === "JazzCash"
                        ? "JAZZCASH"
                        : "COD",

            paymentStatus: "Pending",

            orderStatus: "Processing",
        });
        if (
            paymentMethod === "Easypaisa" ||
            paymentMethod === "JazzCash"
        ) {

            const payment = await initiatePayment(order);

            if (!payment.success) {

                return res.status(400).json({
                    success: false,
                    message: "Payment initialization failed"
                });

            }
            order.transactionId = payment.transactionId || "";
            order.paymentReference = payment.reference || "";
            await order.save();
            return res.status(200).json({
                success: true,
                message: "Payment initialized successfully",
                payment,
                order,
            });

        }

        for (const item of items) {

            const product = await Product.findById(item.productId);

            const stockBefore = product.stock;

            product.stock -= item.quantity;

            await product.save();

            await createInventoryLog({

                product: product._id,

                productTitle: product.title,

                action: "ORDER_PLACED",

                quantity: -item.quantity,

                stockBefore,

                stockAfter: product.stock,

                order: order._id,

                remarks: `Stock deducted for Order ${order.orderNumber}`,

            });

        }

        try {

            if (
                process.env.EMAIL_USER &&
                process.env.EMAIL_PASS &&
                shippingAddress.email
            ) {

                await transporter.sendMail({

                    from: process.env.EMAIL_USER,

                    to: shippingAddress.email,

                    subject: `Order #${order.orderNumber}`,

                    html: `
            <h2>Thank you for your order.</h2>

            <p>Your order has been received successfully.</p>

            <h3>Total: Rs ${order.totalAmount}</h3>
            `

                });

            }
            await createNotification({
                title: "New Order",
                message: `Order ${order.orderNumber} received.`,
                type: "ORDER",
                referenceId: order._id
            });

        } catch (err) {

            console.log("Email skipped:", err.message);

        }

        res.status(201).json({
            success: true,
            message: "Order placed successfully",
            order
        });
        await createActivityLog({
            type: "ORDER",
            message: `New order ${order.orderNumber} placed`,
            referenceId: order._id,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

/*
====================================
GET ALL ORDERS
====================================
*/

const getOrders = async (req, res) => {

    try {

        const orders = await Order.find()
            .sort({ createdAt: -1 });

        res.json({
            success: true,
            count: orders.length,
            orders,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};

/*
====================================
GET SINGLE ORDER
====================================
*/

const getOrder = async (req, res) => {

    try {

        const order = await Order.findById(req.params.id);

        if (!order) {

            return res.status(404).json({
                success: false,
                message: "Order not found",
            });

        }

        res.json({
            success: true,
            order,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};

/*
====================================
UPDATE STATUS
====================================
*/



/*
====================================
DELETE ORDER
====================================
*/

const deleteOrder = async (req, res) => {

    try {

        const order = await Order.findById(req.params.id);

        if (!order) {

            return res.status(404).json({
                success: false,
                message: "Order not found"
            });

        }

        await order.deleteOne();
        await createActivityLog({
            type: "ORDER",
            message: `Order ${order.orderNumber} deleted`,
            referenceId: order._id,
            createdBy: req.admin._id,
        });
        await createAuditLog({
            req,
            adminId: req.admin._id,
            action: "DELETE",
            module: "ORDER",
            targetId: order._id,
            description: `Deleted order ${order.orderNumber}`,
            metadata: {
                orderId: order._id,
                orderNumber: order.orderNumber
            }
        });
        res.json({

            success: true,

            message: "Order deleted successfully"

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};
const verifyPayment = async (req, res) => {

    try {

        const {
            paymentStatus,
            paymentNotes
        } = req.body;

        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found"
            });
        }

        order.paymentStatus = paymentStatus;

        order.paymentNotes = paymentNotes || "";

        order.verifiedBy = req.admin._id;

        order.verifiedAt = new Date();

        if (paymentStatus === "Paid") {
            order.paymentDate = new Date();
        }

        await order.save({ validateBeforeSave: false });
        await createActivityLog({
            type: "PAYMENT",
            message: `Payment verified for ${order.orderNumber}`,
            referenceId: order._id,
            createdBy: req.admin._id,
        });
        await createAuditLog({
            req,
            adminId: req.admin._id,
            action: "VERIFY_PAYMENT",
            module: "ORDER",
            targetId: order._id,
            description: `Verified payment for order ${order.orderNumber}`,
            metadata: {
                orderId: order._id,
                orderNumber: order.orderNumber,
                paymentStatus: order.paymentStatus
            }
        });
        res.status(200).json({
            success: true,
            message: "Payment verified successfully",
            order
        });
        await createNotification({
            title: "Payment Verified",
            message: `Payment verified for ${order.orderNumber}.`,
            type: "PAYMENT",
            referenceId: order._id
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};
// ================================
// ADMIN ORDER DASHBOARD STATS
// ================================

const getOrderStats = async (req, res) => {
    try {

        const totalOrders = await Order.countDocuments();

        const pendingOrders = await Order.countDocuments({
            orderStatus: "Processing"
        });

        const shippedOrders = await Order.countDocuments({
            orderStatus: "Shipped"
        });

        const deliveredOrders = await Order.countDocuments({
            orderStatus: "Delivered"
        });

        const cancelledOrders = await Order.countDocuments({
            orderStatus: "Cancelled"
        });

        const pendingPayments = await Order.countDocuments({
            paymentStatus: "Pending"
        });

        const paidPayments = await Order.countDocuments({
            paymentStatus: "Paid"
        });

        const codOrders = await Order.countDocuments({
            paymentMethod: "COD"
        });

        const easypaisaOrders = await Order.countDocuments({
            paymentMethod: "Easypaisa"
        });

        const jazzcashOrders = await Order.countDocuments({
            paymentMethod: "JazzCash"
        });

        const revenue = await Order.aggregate([
            {
                $match: {
                    paymentStatus: "Paid"
                }
            },
            {
                $group: {
                    _id: null,
                    totalRevenue: {
                        $sum: "$totalAmount"
                    }
                }
            }
        ]);

        const today = new Date();

        today.setHours(0, 0, 0, 0);

        const todayRevenue = await Order.aggregate([
            {
                $match: {
                    paymentStatus: "Paid",
                    createdAt: {
                        $gte: today
                    }
                }
            },
            {
                $group: {
                    _id: null,
                    total: {
                        $sum: "$totalAmount"
                    }
                }
            }
        ]);

        res.json({
            success: true,

            stats: {

                totalOrders,

                pendingOrders,

                shippedOrders,

                deliveredOrders,

                cancelledOrders,

                pendingPayments,

                paidPayments,

                codOrders,

                easypaisaOrders,

                jazzcashOrders,

                totalRevenue:
                    revenue.length > 0
                        ? revenue[0].totalRevenue
                        : 0,

                todayRevenue:
                    todayRevenue.length > 0
                        ? todayRevenue[0].total
                        : 0
            }
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};
/*
====================================
DOWNLOAD ORDER INVOICE
====================================
*/

const downloadInvoice = async (req, res) => {

    try {

        const order = await Order.findById(req.params.id);

        if (!order) {

            return res.status(404).json({
                success: false,
                message: "Order not found"
            });

        }

        generateInvoice(order, res);

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};
const updateOrderStatus = async (req, res) => {
    try {

        const { status, remarks } = req.body;

        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found",
            });
        }

        // Validate status flow
        if (!isValidTransition(order.orderStatus, status)) {
            return res.status(400).json({
                success: false,
                message: `Cannot change order from ${order.orderStatus} to ${status}`,
            });
        }

        // Don't update if already in same status
        if (order.orderStatus === status) {
            return res.status(400).json({
                success: false,
                message: `Order is already ${status}`,
            });
        }

        order.orderStatus = status;

        // Save who updated it
        order.statusUpdatedBy = req.admin._id;

        // Save timeline
        switch (status) {

            case "Processing":
                if (!order.processingAt)
                    order.processingAt = new Date();
                break;

            case "Packed":
                if (!order.packedAt)
                    order.packedAt = new Date();
                break;

            case "Shipped":
                if (!order.shippedAt)
                    order.shippedAt = new Date();

                if (!order.dispatchDate)
                    order.dispatchDate = new Date();
                break;

            case "Out For Delivery":
                if (!order.outForDeliveryAt)
                    order.outForDeliveryAt = new Date();
                break;

            case "Delivered":
                if (!order.deliveredAt)
                    order.deliveredAt = new Date();

                if (!order.deliveryDate)
                    order.deliveryDate = new Date();
                break;

            case "Cancelled":

                if (!order.cancelledAt)
                    order.cancelledAt = new Date();

                // Restore inventory only once
                const alreadyRestored = order.statusHistory.some(
                    item => item.status === "Cancelled"
                );

                if (!alreadyRestored) {
                    await restoreInventory(order, req.admin._id);
                }

                break;

            case "Returned":

                if (!order.returnedAt)
                    order.returnedAt = new Date();

                // Restore inventory only once
                const alreadyReturned = order.statusHistory.some(
                    item => item.status === "Returned"
                );

                if (!alreadyReturned) {
                    await restoreInventory(order, req.admin._id);
                }

                break;
        }

        // Save history
        order.statusHistory.push({

            status,

            changedBy: req.admin._id,

            remarks: remarks || ""

        });

        await order.save();

        await createActivityLog({

            type: "ORDER",

            message: `Order ${order.orderNumber} changed to ${status}`,

            referenceId: order._id,

        });

        await createNotification({

            title: "Order Updated",

            message: `${order.orderNumber} is now ${status}`,

            type: "ORDER",

            referenceId: order._id,

        });

        res.json({

            success: true,

            order,

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message,

        });

    }
};
const updateTracking = async (req, res) => {

    try {

        const order = await Order.findById(req.params.id);

        if (!order) {

            return res.status(404).json({

                success: false,

                message: "Order not found"

            });

        }

        const {

            courierName,

            trackingNumber,

            estimatedDelivery

        } = req.body;

        order.courierName = courierName;

        order.trackingNumber = trackingNumber;

        order.estimatedDelivery = estimatedDelivery;

        await order.save();

        await createActivityLog({

            type: "ORDER",

            message: `Tracking updated for ${order.orderNumber}`,

            referenceId: order._id

        });

        res.json({

            success: true,

            order

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};
const trackOrder = async (req, res) => {
    try {

        const { orderNumber, email } = req.body;

        if (!orderNumber || !email) {
            return res.status(400).json({
                success: false,
                message: "Order number and email are required."
            });
        }

        const order = await Order.findOne({
            orderNumber,
            "customer.email": email.toLowerCase()
        });

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found."
            });
        }

        res.json({
            success: true,

            order: {
                orderNumber: order.orderNumber,

                customer: {
                    name: order.customer.name
                },

                orderStatus: order.orderStatus,

                paymentStatus: order.paymentStatus,

                courierName: order.courierName,

                trackingNumber: order.trackingNumber,

                estimatedDelivery: order.estimatedDelivery,

                timeline: order.statusHistory
            }
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};
const getCustomerOrder = async (req, res) => {

    try {

        const { orderNumber, email } = req.body;

        const order = await Order.findOne({

            orderNumber,

            "customer.email": email.toLowerCase()

        });

        if (!order) {

            return res.status(404).json({

                success: false,

                message: "Order not found."

            });

        }

        res.json({

            success: true,

            order

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};
const requestCancelOrder = async (req, res) => {

    try {

        const {

            orderNumber,

            email,

            reason

        } = req.body;

        const order = await Order.findOne({

            orderNumber,

            "customer.email": email.toLowerCase()

        });

        if (!order) {

            return res.status(404).json({

                success: false,

                message: "Order not found."

            });

        }

        if (

            order.orderStatus === "Delivered" ||

            order.orderStatus === "Cancelled"

        ) {

            return res.status(400).json({

                success: false,

                message: "Cancellation not allowed."

            });

        }

        order.cancelRequest = {

            requested: true,

            reason,

            requestedAt: new Date()

        };

        await order.save();

        await createNotification({

            title: "Cancellation Requested",

            message: `${order.orderNumber} requested cancellation`,

            type: "ORDER",

            referenceId: order._id

        });

        res.json({

            success: true,

            message: "Cancellation request submitted."

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


module.exports = {

    placeOrder,

    getOrders,

    getOrder,



    deleteOrder,

    verifyPayment,
    getOrderStats,
    downloadInvoice,
    updateOrderStatus,
    updateTracking,
    trackOrder,
    getCustomerOrder,
    requestCancelOrder,

};