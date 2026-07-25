const express = require("express");

const router = express.Router();

const {

    addReview,

    getProductReviews,
    deleteReview

} = require("../controllers/reviewController");
const {
    protect,
    adminOnly
} = require("../middleware/authMiddleware");
router.post("/", addReview);

router.get("/:productId", getProductReviews);
router.delete(
    "/:id",
    protect,
    adminOnly,
    deleteReview
);

module.exports = router;