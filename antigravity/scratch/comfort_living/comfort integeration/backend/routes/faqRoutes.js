const express = require("express");

const router = express.Router();

const {

    createFaq,

    getFaqs,
    updateFaq,
    deleteFaq

} = require("../controllers/faqController");

const {

    protect,

    adminOnly

} = require("../middleware/authMiddleware");

router.get("/", getFaqs);

router.post(

    "/",

    protect,

    adminOnly,

    createFaq

);
router.put(
    "/:id",
    protect,
    adminOnly,
    updateFaq
);

router.delete(
    "/:id",
    protect,
    adminOnly,
    deleteFaq
);
module.exports = router;