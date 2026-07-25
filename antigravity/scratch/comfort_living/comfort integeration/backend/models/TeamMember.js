const mongoose = require("mongoose");

const teamMemberSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        designation: {
            type: String,
            required: true,
            trim: true
        },

        bio: {
            type: String,
            default: ""
        },

        image: {
            type: String,
            default: ""
        },

        email: {
            type: String,
            default: ""
        },

        phone: {
            type: String,
            default: ""
        },

        linkedin: {
            type: String,
            default: ""
        },

        facebook: {
            type: String,
            default: ""
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

module.exports = mongoose.model(
    "TeamMember",
    teamMemberSchema
);