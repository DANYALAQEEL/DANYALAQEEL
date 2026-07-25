const mongoose = require("mongoose");

const auditLogSchema = new mongoose.Schema(
    {
        admin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Admin",
            required: true,
        },

        action: {
            type: String,
            required: true,
        },

        module: {
            type: String,
            required: true,
        },

        targetId: {
            type: mongoose.Schema.Types.ObjectId,
        },

        description: {
            type: String,
            default: "",
        },

        ipAddress: {
            type: String,
            default: "",
        },

        userAgent: {
            type: String,
            default: "",
        },

        metadata: {
            type: Object,
            default: {},
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("AuditLog", auditLogSchema);