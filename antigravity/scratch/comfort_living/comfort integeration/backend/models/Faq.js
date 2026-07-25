const mongoose = require("mongoose");

const faqSchema = new mongoose.Schema(
    {
        question: {
            type: String,
            required: true,
            trim: true
        },

        answer: {
            type: String,
            required: true
        },

        category: {
            type: String,
            default: "General"
        },

        displayOrder: {
            type: Number,
            default: 0
        },

        active: {
            type: Boolean,
            default: true
        }

    },
    {
        timestamps: true
    });

module.exports = mongoose.model("Faq", faqSchema);