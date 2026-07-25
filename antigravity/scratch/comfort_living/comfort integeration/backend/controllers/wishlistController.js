const Wishlist = require("../models/Wishlist");
const Product = require("../models/Product");

/*
====================================
ADD TO WISHLIST
====================================
*/

const addToWishlist = async (req, res) => {

    try {

        const {
            customer,
            productId
        } = req.body;

        const product = await Product.findById(productId);

        if (!product) {

            return res.status(404).json({
                success: false,
                message: "Product not found"
            });

        }

        let wishlist = await Wishlist.findOne({
            "customer.email": customer.email
        });

        if (!wishlist) {

            wishlist = await Wishlist.create({

                customer,

                products: [
                    {
                        product: productId
                    }
                ]

            });

        } else {

            const exists = wishlist.products.find(
                item => item.product.toString() === productId
            );

            if (exists) {

                return res.status(400).json({
                    success: false,
                    message: "Product already in wishlist"
                });

            }

            wishlist.products.push({
                product: productId
            });

            await wishlist.save();

        }

        res.status(200).json({

            success: true,

            message: "Product added to wishlist",

            wishlist

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
GET WISHLIST
====================================
*/

const getWishlist = async (req, res) => {

    try {

        const email = req.query.email;

        const wishlist = await Wishlist.findOne({

            "customer.email": email

        }).populate("products.product");

        if (!wishlist) {

            return res.json({

                success: true,

                products: []

            });

        }

        res.json({

            success: true,

            wishlist

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
REMOVE PRODUCT
====================================
*/

const removeFromWishlist = async (req, res) => {

    try {

        const { email } = req.body;

        const wishlist = await Wishlist.findOne({

            "customer.email": email

        });

        if (!wishlist) {

            return res.status(404).json({

                success: false,

                message: "Wishlist not found"

            });

        }

        wishlist.products = wishlist.products.filter(

            item => item.product.toString() !== req.params.productId

        );

        await wishlist.save();

        res.json({

            success: true,

            message: "Product removed successfully",

            wishlist

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

    addToWishlist,

    getWishlist,

    removeFromWishlist

};