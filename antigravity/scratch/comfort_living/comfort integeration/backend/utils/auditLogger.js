const AuditLog = require("../models/AuditLog");

const createAuditLog = async ({
    req,
    adminId,
    action,
    module,
    targetId = null,
    description = "",
    metadata = {}
}) => {
    try {
        await AuditLog.create({
            admin: adminId,
            action,
            module,
            targetId,
            description,
            metadata,
            ipAddress: req.ip,
            userAgent: req.headers["user-agent"]
        });
    } catch (err) {
        console.error("Audit Log Error:", err);
    }
};

module.exports = createAuditLog;