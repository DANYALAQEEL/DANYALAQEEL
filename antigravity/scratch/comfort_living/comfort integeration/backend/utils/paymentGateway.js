const initiate = async (order) => {

    switch (order.gateway) {

        case "EASYPAISA":
            return {
                success: true,
                transactionId: `EP-${Date.now()}`,
                reference: `REF-${Date.now()}`,
                paymentUrl: ""
            };

        case "JAZZCASH":
            return {
                success: true,
                transactionId: `JC-${Date.now()}`,
                reference: `REF-${Date.now()}`,
                paymentUrl: ""
            };

        default:
            return {
                success: true,
                transactionId: "",
                reference: "",
                paymentUrl: ""
            };
    }
};

const verify = async () => {
    return {
        success: true,
        status: "Paid"
    };
};

const refund = async () => {
    return {
        success: true
    };
};

module.exports = {
    initiate,
    verify,
    refund,
};