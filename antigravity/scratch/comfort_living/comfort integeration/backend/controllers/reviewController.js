const Review = require("../models/Review");
const Product = require("../models/Product");

/*
====================================
ADD REVIEW
====================================
*/

const addReview = async (req, res) => {

    try {

        const {
            product,
            customer,
            rating,
            title,
            review
        } = req.body;

        const existingProduct = await Product.findById(product);

        if (!existingProduct) {

            return res.status(404).json({
                success: false,
                message: "Product not found"
            });

        }

        const alreadyReviewed = await Review.findOne({
            product,
            "customer.email": customer.email
        });

        if (alreadyReviewed) {

            return res.status(400).json({
                success: false,
                message: "You already reviewed this product"
            });

        }

        const newReview = await Review.create({
            product,
            customer,
            rating,
            title,
            review
        });

        const reviews = await Review.find({ product });

        const average =
            reviews.reduce((sum, item) => sum + item.rating, 0) /
            reviews.length;

        existingProduct.rating = Number(average.toFixed(1));
        existingProduct.reviewsCount = reviews.length;

        await existingProduct.save();

        res.status(201).json({
            success: true,
            message: "Review added successfully",
            review: newReview
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
GET PRODUCT REVIEWS
====================================
*/

const getProductReviews = async (req, res) => {

    try {

        const reviews = await Review.find({
            product: req.params.productId
        }).sort({
            createdAt: -1
        });

        res.status(200).json({

            success: true,

            count: reviews.length,

            reviews

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
DELETE REVIEW (ADMIN)
====================================
*/

const deleteReview = async (req, res) => {

    try {

        const review = await Review.findById(req.params.id);

        if (!review) {
            return res.status(404).json({
                success: false,
                message: "Review not found"
            });
        }

        const productId = review.product;

        await review.deleteOne();

        // Recalculate product rating
        const reviews = await Review.find({ product: productId });

        let averageRating = 0;

        if (reviews.length > 0) {

            averageRating =
                reviews.reduce((sum, item) => sum + item.rating, 0) /
                reviews.length;

        }

        await Product.findByIdAndUpdate(productId, {

            rating: Number(averageRating.toFixed(1)),
            reviewsCount: reviews.length

        });

        res.json({

            success: true,

            message: "Review deleted successfully"

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

module.exports = {
    addReview,
    getProductReviews,
    deleteReview
};