const mongoose = require("mongoose");

const cmsPageSchema = new mongoose.Schema(
    {
        key: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        title: {
            type: String,
            required: true,
        },

        content: {
            type: String,
            default: "",
        },

        active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("CmsPage", cmsPageSchema);