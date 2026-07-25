const express = require("express");

const router = express.Router();

const {

    createTemplate,
    getTemplates,
    updateTemplate

} = require("../controllers/emailTemplateController");

const {

    protect,
    adminOnly

} = require("../middleware/authMiddleware");

router.get(
    "/",
    protect,
    adminOnly,
    getTemplates
);

router.post(
    "/",
    protect,
    adminOnly,
    createTemplate
);

router.put(
    "/:id",
    protect,
    adminOnly,
    updateTemplate
);

module.exports = router;