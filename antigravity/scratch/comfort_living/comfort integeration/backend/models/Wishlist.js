const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema(
    {
        customer: {
            name: {
                type: String,
                required: true
            },

            email: {
                type: String,
                required: true
            },

            phone: {
                type: String,
                default: ""
            }
        },

        products: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: true
                },

                addedAt: {
                    type: Date,
                    default: Date.now
                }
            }
        ]
    },
    {
        timestamps: true
    });

module.exports = mongoose.model("Wishlist", wishlistSchema);