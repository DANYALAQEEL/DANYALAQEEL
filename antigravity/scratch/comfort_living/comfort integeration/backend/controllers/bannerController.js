const Banner = require("../models/Banner");

/*
====================================
CREATE BANNER
====================================
*/

const createBanner = async (req, res) => {

    try {

        const banner = await Banner.create(req.body);

        res.status(201).json({

            success: true,

            message: "Banner created successfully",

            banner

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
GET ACTIVE BANNERS
====================================
*/

const getBanners = async (req, res) => {

    try {

        const banners = await Banner.find({

            active: true

        }).sort({

            position: 1

        });

        res.json({

            success: true,

            count: banners.length,

            banners

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
UPDATE BANNER
====================================
*/

const updateBanner = async (req, res) => {

    try {

        const banner = await Banner.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true,
                runValidators: true
            }

        );

        if (!banner) {

            return res.status(404).json({

                success: false,

                message: "Banner not found"

            });

        }

        res.json({

            success: true,

            message: "Banner updated successfully",

            banner

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
DELETE BANNER
====================================
*/

const deleteBanner = async (req, res) => {

    try {

        const banner = await Banner.findById(req.params.id);

        if (!banner) {

            return res.status(404).json({

                success: false,

                message: "Banner not found"

            });

        }

        await banner.deleteOne();

        res.json({

            success: true,

            message: "Banner deleted successfully"

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

    createBanner,

    getBanners,

    updateBanner,

    deleteBanner

};