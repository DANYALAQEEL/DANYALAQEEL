const ActivityLog = require("../models/ActivityLog");

const createActivityLog = async ({
    type,
    message,
    referenceId = null,
    createdBy = null,
    metadata = {},
}) => {
    try {
        await ActivityLog.create({
            type,
            message,
            referenceId,
            createdBy,
            metadata,
        });
    } catch (err) {
        console.error("Activity Log Error:", err.message);
    }
};

module.exports = createActivityLog;