const WebsiteSettings = require("../models/WebsiteSettings");

const createAuditLog = require("../utils/auditLogger");
const createActivityLog = require("../utils/activityLogger");
const createNotification = require("../utils/notificationHelper");

/*
====================================
GET SEO
====================================
*/

const getSEO = async (req, res) => {

    try {

        let settings = await WebsiteSettings.findOne();

        if (!settings) {
            settings = await WebsiteSettings.create({});
        }

        res.json({
            success: true,
            seo: settings.seo
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
UPDATE SEO
====================================
*/

const updateSEO = async (req, res) => {

    try {

        let settings = await WebsiteSettings.findOne();

        if (!settings) {
            settings = await WebsiteSettings.create({});
        }

        settings.seo = req.body;

        await settings.save();

        await createActivityLog({
            type: "CMS",
            message: "SEO settings updated",
            createdBy: req.admin._id
        });

        await createNotification({
            title: "SEO Updated",
            message: "Website SEO settings have been updated.",
            type: "SYSTEM"
        });

        await createAuditLog({
            req,
            adminId: req.admin._id,
            action: "UPDATE",
            module: "SEO",
            targetId: settings._id,
            description: "Updated SEO settings"
        });

        res.json({
            success: true,
            message: "SEO updated successfully",
            seo: settings.seo
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    getSEO,
    updateSEO
};