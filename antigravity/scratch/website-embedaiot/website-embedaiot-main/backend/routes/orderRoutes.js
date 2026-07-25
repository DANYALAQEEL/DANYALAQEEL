const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Order = require('../models/Order');
const Product = require('../models/Product');

// --- CONFIGURING AUTOMATED MAIL TRANSPORTER SYSTEM ---
// Replace placeholders with real SMTP credentials (like a Gmail account + App Password)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ghar.naarii@gmail.com',
        pass: 'umzw kree iust vkyq'    // Must be a 16-digit Google App Password, not normal login pass
    }
});

// 1. Process Incoming Checkouts & Execute Mail Confirmation Trigger Loops
router.post('/place-order', async (req, res) => {
    try {
        const { items, totalAmount, shippingAddress, shippingFee } = req.body;

        const newOrder = new Order({
            items,
            totalAmount,
            shippingAddress,
            paymentMethod: 'COD',
            paymentStatus: 'Pending',
            orderStatus: 'Processing'
        });

        await newOrder.save();

        // Stock deduction synchronization map
        for (const item of items) {
            await Product.findByIdAndUpdate(item.productId, {
                $inc: { stock: -item.quantity }
            });
        }

        // --- AUTOMATED HTML EMAIL GENERATION ENGINE ---
        if (shippingAddress.email) {
            const itemsHTML = items.map(item => `
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #eee;">${item.title}</td>
                    <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center;">x${item.quantity}</td>
                    <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">Rs. ${item.priceAtPurchase * item.quantity}</td>
                </tr>
            `).join('');

            const mailOptions = {
                from: '"Ghar Naari" <ghar.naarii@gmail.com>',
                to: shippingAddress.email,
                subject: `Order Confirmation - #${newOrder._id.toString().substring(0, 8).toUpperCase()}`,
                html: `
                    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5d5c5; border-radius: 16px; overflow: hidden; background-color: #ffffff;">
                        <div style="background-color: #2a1b12; padding: 30px; text-align: center;">
                            <h1 style="color: #efdcc7; margin: 0; font-size: 24px;">Thank You For Your Order!</h1>
                            <p style="color: #ffffff; opacity: 0.8; margin-top: 5px;">We are preparing your handcrafted bag for delivery.</p>
                        </div>
                        <div style="padding: 30px; color: #333333;">
                            <p>Hello <b>${shippingAddress.fullName}</b>,</p>
                            <p>Your order has been placed successfully via Cash on Delivery. Below is your detailed summary statement invoice:</p>
                            
                            <table style="w-full: 100%; border-collapse: collapse; margin: 20px 0; width: 100%;">
                                <thead>
                                    <tr style="background-color: #fafdff; color: #2a1b12; font-weight: bold;">
                                        <th style="padding: 10px; text-align: left; border-bottom: 2px solid #2a1b12;">Product</th>
                                        <th style="padding: 10px; text-align: center; border-bottom: 2px solid #2a1b12;">Qty</th>
                                        <th style="padding: 10px; text-align: right; border-bottom: 2px solid #2a1b12;">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${itemsHTML}
                                </tbody>
                            </table>

                            <div style="text-align: right; margin-top: 20px; line-height: 1.6;">
                                <p style="margin: 4px 0;">Delivery Fee: <b>Rs. 300</b></p>
                                <p style="margin: 4px 0; font-size: 18px; color: #b37e42;">Total Bill Amount: <b>Rs. ${totalAmount}</b></p>
                            </div>

                            <hr style="border: 0; border-top: 1px solid #eee; margin: 25px 0;" />
                            <h3 style="color: #2a1b12; margin-bottom: 5px;">Shipping Destination target:</h3>
                            <p style="margin: 0; color: #555;">
                                ${shippingAddress.addressLine},<br/>
                                ${shippingAddress.city}<br/>
                                Phone Contact: ${shippingAddress.phone}
                            </p>
                        </div>
                        <div style="background-color: #f7f5f3; padding: 15px; text-align: center; font-size: 12px; color: #777;">
                            © ${new Date().getFullYear()} Handcrafted Heritage Bag Studio. All rights reserved.
                        </div>
                    </div>
                `
            };

            // Send async trigger silently to ensure backend processes correctly even if SMTP delays
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) console.error("SMTP Mail delivery failure log:", err);
                else console.log("Confirmation invoice email successfully dispatched:", info.response);
            });
        }

        res.status(201).json({ success: true, message: "COD Order placed successfully!", order: newOrder });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// 2. Fetch All Existing Collections to display on the Admin Panel Workspace
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find({});
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;