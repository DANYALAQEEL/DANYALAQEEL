const paymentGateway = require("../utils/paymentGateway");

const initializePayment = async (order) => {
    return await paymentGateway.initiate(order);
};

const verifyPayment = async (order) => {
    return await paymentGateway.verify(order);
};

const refundPayment = async (order) => {
    return await paymentGateway.refund(order);
};

module.exports = {
    initializePayment,
    verifyPayment,
    refundPayment,
};