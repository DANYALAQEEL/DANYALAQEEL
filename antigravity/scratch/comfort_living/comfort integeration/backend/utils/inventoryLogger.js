const InventoryLog = require("../models/InventoryLog");

const createInventoryLog = async ({
    product,
    productTitle,
    action,
    quantity,
    stockBefore,
    stockAfter,
    order = null,
    performedBy = null,
    remarks = "",
}) => {

    await InventoryLog.create({
        product,
        productTitle,
        action,
        quantity,
        stockBefore,
        stockAfter,
        order,
        performedBy,
        remarks,
    });

};

module.exports = createInventoryLog;