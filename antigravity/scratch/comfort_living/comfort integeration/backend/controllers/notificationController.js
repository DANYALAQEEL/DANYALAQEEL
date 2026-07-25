const Notification = require("../models/Notification");

/*
====================================
GET ALL NOTIFICATIONS
====================================
*/

const getNotifications = async (req, res) => {

    try {

        const notifications = await Notification.find()
            .sort({ createdAt: -1 });

        res.status(200).json({

            success: true,
            count: notifications.length,
            notifications,

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message,

        });

    }

};

/*
====================================
MARK AS READ
====================================
*/

const markAsRead = async (req, res) => {

    try {

        const notification = await Notification.findByIdAndUpdate(

            req.params.id,

            {
                isRead: true
            },

            {
                new: true
            }

        );

        if (!notification) {

            return res.status(404).json({

                success: false,
                message: "Notification not found"

            });

        }

        res.json({

            success: true,
            notification

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

/*
====================================
MARK ALL AS READ
====================================
*/

const markAllAsRead = async (req, res) => {

    try {

        await Notification.updateMany(

            {},

            {
                isRead: true
            }

        );

        res.json({

            success: true,
            message: "All notifications marked as read"

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

module.exports = {

    getNotifications,
    markAsRead,
    markAllAsRead

};