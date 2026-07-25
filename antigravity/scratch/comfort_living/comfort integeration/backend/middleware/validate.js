const validate = (schema) => {

    return (req, res, next) => {

        const { error } = schema.validate(req.body, {
            abortEarly: false,
            allowUnknown: false,
            stripUnknown: true
        });

        if (error) {

            return res.status(400).json({

                success: false,

                message: "Validation failed",

                errors: error.details.map(item => ({
                    field: item.path.join("."),
                    message: item.message
                }))

            });

        }

        next();

    };

};

module.exports = validate;