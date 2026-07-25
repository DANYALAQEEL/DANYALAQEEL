const mongoose = require("mongoose");

const websiteSettingsSchema = new mongoose.Schema(
    {
        websiteName: {
            type: String,
            default: "Comfort Living",
        },

        logo: {
            type: String,
            default: "",
        },

        favicon: {
            type: String,
            default: "",
        },

        contactEmail: {
            type: String,
            default: "",
        },

        phone: {
            type: String,
            default: "",
        },

        whatsapp: {
            type: String,
            default: "",
        },

        address: {
            type: String,
            default: "",
        },

        facebook: {
            type: String,
            default: "",
        },

        instagram: {
            type: String,
            default: "",
        },

        twitter: {
            type: String,
            default: "",
        },

        youtube: {
            type: String,
            default: "",
        },

        currency: {
            type: String,
            default: "PKR",
        },

        shippingCharge: {
            type: Number,
            default: 0,
        },

        taxPercentage: {
            type: Number,
            default: 0,
        },
        seo: {

            metaTitle: {
                type: String,
                default: ""
            },

            metaDescription: {
                type: String,
                default: ""
            },

            metaKeywords: {
                type: String,
                default: ""
            },

            canonicalUrl: {
                type: String,
                default: ""
            },

            ogImage: {
                type: String,
                default: ""
            },

            robots: {
                type: String,
                default: "index,follow"
            }

        },

        maintenanceMode: {
            type: Boolean,
            default: false,
        }

    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model(
    "WebsiteSettings",
    websiteSettingsSchema
);