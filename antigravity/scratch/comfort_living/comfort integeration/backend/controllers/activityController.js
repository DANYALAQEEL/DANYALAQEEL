const ActivityLog = require("../models/ActivityLog");

const getActivityLogs = async (req, res) => {
    try {
        const logs = await ActivityLog.find()
            .populate("createdBy", "name email")
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: logs.length,
            logs,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

module.exports = {
    getActivityLogs,
};