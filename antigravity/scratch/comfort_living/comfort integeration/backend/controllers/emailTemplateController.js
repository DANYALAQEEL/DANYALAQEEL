const EmailTemplate = require("../models/EmailTemplate");

const createTemplate = async (req, res) => {

    try {

        const template = await EmailTemplate.create(req.body);

        res.status(201).json({
            success: true,
            template
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const getTemplates = async (req, res) => {

    try {

        const templates = await EmailTemplate.find().sort({
            createdAt: -1
        });

        res.json({
            success: true,
            count: templates.length,
            templates
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const updateTemplate = async (req, res) => {

    try {

        const template = await EmailTemplate.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true,
                runValidators: true
            }

        );

        if (!template) {

            return res.status(404).json({

                success: false,
                message: "Template not found"

            });

        }

        res.json({

            success: true,
            template

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

module.exports = {

    createTemplate,

    getTemplates,

    updateTemplate

};