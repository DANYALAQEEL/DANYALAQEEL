const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },

        subtitle: {
            type: String,
            default: ""
        },

        image: {
            type: String,
            required: true
        },

        buttonText: {
            type: String,
            default: "Shop Now"
        },

        buttonLink: {
            type: String,
            default: "/shop"
        },

        position: {
            type: Number,
            default: 1
        },

        active: {
            type: Boolean,
            default: true
        }

    },
    {
        timestamps: true
    });

module.exports = mongoose.model("Banner", bannerSchema);