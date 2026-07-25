const express = require("express");

const router = express.Router();

const {

    addToWishlist,

    getWishlist,

    removeFromWishlist

} = require("../controllers/wishlistController");

router.post("/add", addToWishlist);

router.get("/", getWishlist);

router.delete("/:productId", removeFromWishlist);

module.exports = router;