const WebsiteSettings = require("../models/WebsiteSettings");
const createAuditLog = require("../utils/auditLogger");
const createActivityLog = require("../utils/activityLogger");
const createNotification = require("../utils/notificationHelper");

const getSettings = async (req, res) => {
    try {

        let settings = await WebsiteSettings.findOne();

        if (!settings) {
            settings = await WebsiteSettings.create({});
        }

        res.json({
            success: true,
            settings
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

const updateSettings = async (req, res) => {

    try {

        let settings = await WebsiteSettings.findOne();

        if (!settings) {
            settings = await WebsiteSettings.create({});
        }

        Object.assign(settings, req.body);

        await settings.save();
        await createAuditLog({
            req,
            adminId: req.admin._id,
            action: "UPDATE",
            module: "SETTINGS",
            targetId: settings._id,
            description: "Updated website settings",
        });
        await createActivityLog({
            type: "CMS",
            message: "Website settings updated",
            referenceId: settings._id,
            createdBy: req.admin._id,
        });
        await createNotification({
            title: "Website Settings Updated",
            message: "Website settings have been updated.",
            type: "CMS",
            referenceId: settings._id,
        });
        res.json({
            success: true,
            message: "Website settings updated successfully",
            settings
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
GET SEO SETTINGS
====================================
*/

const getSeoSettings = async (req, res) => {
    try {

        const settings = await WebsiteSettings.findOne();

        if (!settings) {
            return res.status(404).json({
                success: false,
                message: "Website settings not found"
            });
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
UPDATE SEO SETTINGS
====================================
*/

const updateSeoSettings = async (req, res) => {

    try {

        const settings = await WebsiteSettings.findOne();

        if (!settings) {

            return res.status(404).json({
                success: false,
                message: "Website settings not found"
            });

        }

        settings.seo = req.body;

        await settings.save();

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
    getSettings,
    updateSettings,
    getSeoSettings,
    updateSeoSettings
};