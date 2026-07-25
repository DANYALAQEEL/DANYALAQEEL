const Notification = require("../models/Notification");

const createNotification = async ({
    title,
    message,
    type = "SYSTEM",
    referenceId = null,
}) => {

    console.log("Notification helper called");

    const notification = await Notification.create({
        title,
        message,
        type,
        referenceId,
    });

    console.log("Notification saved:", notification._id);

    return notification;
};

module.exports = createNotification;