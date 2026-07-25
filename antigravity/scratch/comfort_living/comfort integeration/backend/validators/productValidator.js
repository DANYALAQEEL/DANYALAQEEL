const Joi = require("joi");

const productSchema = Joi.object({

    title: Joi.string()
        .min(3)
        .max(200)
        .required(),

    description: Joi.string()
        .required(),

    category: Joi.string()
        .required(),

    price: Joi.number()
        .min(0)
        .required(),

    salePrice: Joi.number()
        .min(0)
        .allow(null),

    stock: Joi.number()
        .min(0)
        .required(),

    shortDescription: Joi.string()
        .allow("")
        .optional(),

    featured: Joi.boolean(),

    bestSeller: Joi.boolean(),

    newArrival: Joi.boolean(),

    badge: Joi.string()
        .allow("")
        .optional()

});

module.exports = productSchema;