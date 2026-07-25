const allowedTransitions = {
    Pending: ["Processing", "Cancelled"],

    Processing: ["Packed", "Cancelled"],

    Packed: ["Shipped", "Cancelled"],

    Shipped: ["Out For Delivery"],

    "Out For Delivery": ["Delivered"],

    Delivered: ["Returned"],

    Cancelled: [],

    Returned: [],
};

const isValidTransition = (currentStatus, newStatus) => {
    return (
        allowedTransitions[currentStatus] &&
        allowedTransitions[currentStatus].includes(newStatus)
    );
};

module.exports = {
    allowedTransitions,
    isValidTransition,
};