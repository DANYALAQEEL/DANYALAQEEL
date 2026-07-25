const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true, min: 1 },
            // Added to preserve existing frontend variant-selection UI (colors/sizes).
            // Optional, so it does not affect any existing cart documents.
            selectedColor: { type: String, default: null },
            selectedSize: { type: String, default: null }
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model('Cart', CartSchema);