const PDFDocument = require("pdfkit");

const generateInvoice = (order, res) => {
    const doc = new PDFDocument({ margin: 50 });

    const fileName = `Invoice-${order.orderNumber}.pdf`;

    res.setHeader(
        "Content-Disposition",
        `attachment; filename="${fileName}"`
    );

    res.setHeader("Content-Type", "application/pdf");

    doc.pipe(res);

    // Header
    doc
        .fontSize(24)
        .text("Comfort Living", {
            align: "center"
        });

    doc.moveDown();

    doc
        .fontSize(18)
        .text("INVOICE", {
            align: "center"
        });

    doc.moveDown(2);

    // Order Details
    doc.fontSize(12);

    doc.text(`Order Number: ${order.orderNumber}`);
    doc.text(`Date: ${new Date(order.createdAt).toLocaleDateString()}`);
    doc.text(`Order Status: ${order.orderStatus}`);
    doc.text(`Payment Status: ${order.paymentStatus}`);

    doc.moveDown();

    // Customer
    doc
        .fontSize(15)
        .text("Customer Details");

    doc.moveDown(0.5);

    doc.fontSize(12);

    doc.text(`Name: ${order.customer.name}`);
    doc.text(`Email: ${order.customer.email}`);
    doc.text(`Phone: ${order.customer.phone}`);

    doc.moveDown();

    // Shipping
    doc
        .fontSize(15)
        .text("Shipping Address");

    doc.moveDown(0.5);

    doc.fontSize(12);

    doc.text(order.shippingAddress.fullName);
    doc.text(order.shippingAddress.phone);
    doc.text(order.shippingAddress.addressLine);
    doc.text(order.shippingAddress.city);

    doc.moveDown();

    // Products
    doc
        .fontSize(15)
        .text("Products");

    doc.moveDown();

    order.items.forEach((item) => {

        doc.text(
            `${item.title}
Qty: ${item.quantity}
Price: Rs. ${item.priceAtPurchase}
Subtotal: Rs. ${item.quantity * item.priceAtPurchase}`
        );

        doc.moveDown();

    });

    doc.moveDown();

    const subtotal = order.subtotal || order.items.reduce(
        (total, item) => total + item.quantity * item.priceAtPurchase,
        0
    );

    const shipping = order.shippingCharge || 0;

    const tax = order.taxAmount || 0;

    const discount = order.discount || 0;

    const grandTotal = order.totalAmount;

    doc.fontSize(12);

    doc.text(`Subtotal: Rs. ${subtotal}`, {
        align: "right",
    });

    doc.text(`Shipping: Rs. ${shipping}`, {
        align: "right",
    });

    doc.text(`Tax: Rs. ${tax}`, {
        align: "right",
    });

    if (discount > 0) {
        doc.text(`Discount: -Rs. ${discount}`, {
            align: "right",
        });
    }

    doc.moveDown(0.3);

    doc.moveTo(350, doc.y)
        .lineTo(550, doc.y)
        .stroke();

    doc.moveDown(0.5);

    doc.fontSize(16).text(
        `Grand Total: Rs. ${grandTotal}`,
        {
            align: "right",
        }
    );

    doc.moveDown(2);

    doc.text(
        "Thank you for shopping with Comfort Living.",
        {
            align: "center"
        }
    );

    doc.end();
};

module.exports = generateInvoice;