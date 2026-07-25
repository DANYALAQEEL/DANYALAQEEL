const errorMiddleware = (err, req, res, next) => {

    err.statusCode = err.statusCode || 500;

    err.status = err.status || "error";

    res.status(err.statusCode).json({

        success: false,

        status: err.status,

        message: err.message || "Internal Server Error"

    });

};

module.exports = errorMiddleware;