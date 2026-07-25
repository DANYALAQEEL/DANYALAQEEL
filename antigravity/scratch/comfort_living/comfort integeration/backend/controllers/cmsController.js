const CmsPage = require("../models/CmsPage");
const createAuditLog = require("../utils/auditLogger");
const createNotification = require("../utils/notificationHelper");
/*
====================================
CREATE PAGE
====================================
*/

const createPage = async (req, res) => {

    try {

        const page = await CmsPage.create(req.body);
        await createAuditLog({
            req,
            adminId: req.admin._id,
            action: "CREATE",
            module: "CMS",
            targetId: page._id,
            description: `Created CMS page ${page.title}`,
            metadata: {
                pageKey: page.key
            }
        });
        res.status(201).json({

            success: true,

            message: "CMS page created successfully",

            page

        });
        await createNotification({
            title: "CMS Page Created",
            message: `${page.title} has been created.`,
            type: "CMS",
            referenceId: page._id
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
GET ALL PAGES
====================================
*/

const getPages = async (req, res) => {

    try {

        const pages = await CmsPage.find().sort({
            createdAt: -1
        });

        res.json({

            success: true,

            count: pages.length,

            pages

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
GET SINGLE PAGE
====================================
*/

const getPage = async (req, res) => {

    try {

        const page = await CmsPage.findOne({
            key: req.params.key,
            active: true
        });

        if (!page) {

            return res.status(404).json({

                success: false,

                message: "Page not found"

            });

        }

        res.json({

            success: true,

            page

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
UPDATE PAGE
====================================
*/

const updatePage = async (req, res) => {

    try {

        const page = await CmsPage.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true,
                runValidators: true
            }

        );

        if (!page) {

            return res.status(404).json({

                success: false,

                message: "Page not found"

            });

        }
        await createNotification({
            title: "CMS Page Updated",
            message: `${page.title} has been updated.`,
            type: "CMS",
            referenceId: page._id
        });
        await createAuditLog({
            req,
            adminId: req.admin._id,
            action: "UPDATE",
            module: "CMS",
            targetId: page._id,
            description: `Updated CMS page ${page.title}`,
            metadata: {
                pageKey: page.key
            }
        });
        res.json({

            success: true,

            message: "CMS page updated successfully",

            page

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
DELETE PAGE
====================================
*/

const deletePage = async (req, res) => {

    try {

        const page = await CmsPage.findById(req.params.id);

        if (!page) {

            return res.status(404).json({

                success: false,

                message: "Page not found"

            });

        }
        await createNotification({
            title: "CMS Page Deleted",
            message: `${page.title} has been deleted.`,
            type: "CMS",
            referenceId: page._id
        });
        await createAuditLog({
            req,
            adminId: req.admin._id,
            action: "DELETE",
            module: "CMS",
            targetId: page._id,
            description: `Deleted CMS page ${page.title}`,
            metadata: {
                pageKey: page.key
            }
        });
        await page.deleteOne();

        res.json({

            success: true,

            message: "CMS page deleted successfully"

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

    createPage,

    getPages,

    getPage,

    updatePage,

    deletePage

};