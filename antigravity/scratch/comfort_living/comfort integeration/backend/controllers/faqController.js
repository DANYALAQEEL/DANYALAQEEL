const Faq = require("../models/Faq");

/*
====================================
CREATE FAQ
====================================
*/

const createFaq = async (req, res) => {

    try {

        const faq = await Faq.create(req.body);

        res.status(201).json({

            success: true,

            message: "FAQ created successfully",

            faq

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
GET ALL FAQS
====================================
*/

const getFaqs = async (req, res) => {

    try {

        const faqs = await Faq.find()

            .sort({

                displayOrder: 1,

                createdAt: -1

            });

        res.json({

            success: true,

            count: faqs.length,

            faqs

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
UPDATE FAQ
====================================
*/

const updateFaq = async (req, res) => {

    try {

        const faq = await Faq.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true,
                runValidators: true
            }

        );

        if (!faq) {

            return res.status(404).json({

                success: false,

                message: "FAQ not found"

            });

        }

        res.json({

            success: true,

            message: "FAQ updated successfully",

            faq

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
DELETE FAQ
====================================
*/

const deleteFaq = async (req, res) => {

    try {

        const faq = await Faq.findById(req.params.id);

        if (!faq) {

            return res.status(404).json({

                success: false,

                message: "FAQ not found"

            });

        }

        await faq.deleteOne();

        res.json({

            success: true,

            message: "FAQ deleted successfully"

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

module.exports = {

    createFaq,

    getFaqs,
    updateFaq,

    deleteFaq

};