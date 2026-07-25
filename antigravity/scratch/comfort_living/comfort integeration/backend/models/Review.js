const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
    {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true
        },

        customer: {

            name: {
                type: String,
                required: true
            },

            email: {
                type: String,
                required: true
            }

        },

        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        },

        title: {
            type: String,
            default: ""
        },

        review: {
            type: String,
            required: true
        }

    },
    {
        timestamps: true
    });

module.exports = mongoose.model("Review", reviewSchema);