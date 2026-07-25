const Newsletter = require("../models/Newsletter");

/*
====================================
SUBSCRIBE
====================================
*/

const subscribe = async (req, res) => {

    try {

        const { email } = req.body;

        if (!email) {

            return res.status(400).json({

                success: false,

                message: "Email is required"

            });

        }

        const exists = await Newsletter.findOne({ email });

        if (exists) {

            return res.status(400).json({

                success: false,

                message: "Email already subscribed"

            });

        }

        const subscriber = await Newsletter.create({

            email

        });

        res.status(201).json({

            success: true,

            message: "Subscribed successfully",

            subscriber

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

/*
====================================
GET SUBSCRIBERS
====================================
*/

const getSubscribers = async (req, res) => {

    try {

        const subscribers = await Newsletter.find()

            .sort({

                createdAt: -1

            });

        res.json({

            success: true,

            count: subscribers.length,

            subscribers

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

/*
====================================
DELETE SUBSCRIBER
====================================
*/

const deleteSubscriber = async (req, res) => {

    try {

        const subscriber = await Newsletter.findById(req.params.id);

        if (!subscriber) {

            return res.status(404).json({

                success: false,

                message: "Subscriber not found"

            });

        }

        await subscriber.deleteOne();

        res.json({

            success: true,

            message: "Subscriber removed successfully"

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

module.exports = {

    subscribe,

    getSubscribers,

    deleteSubscriber

};