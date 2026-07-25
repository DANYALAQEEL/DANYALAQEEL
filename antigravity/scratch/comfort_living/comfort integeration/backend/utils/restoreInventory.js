const Product = require("../models/Product");
const InventoryLog = require("../models/InventoryLog");

const restoreInventory = async (order, adminId = null) => {

    for (const item of order.items) {

        const product = await Product.findById(item.productId);

        if (!product) continue;

        const stockBefore = product.stock;

        product.stock += item.quantity;

        await product.save();

        await InventoryLog.create({

            product: product._id,

            productTitle: product.title,

            action: "ORDER_CANCELLED",

            quantity: item.quantity,

            stockBefore,

            stockAfter: product.stock,

            order: order._id,

            performedBy: adminId,

            remarks: `Stock restored for Order ${order.orderNumber}`

        });

    }

};

module.exports = restoreInventory;