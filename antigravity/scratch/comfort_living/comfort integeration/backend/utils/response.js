const successResponse = (
    res,
    message,
    data = null,
    statusCode = 200,
    pagination = null
) => {

    return res.status(statusCode).json({
        success: true,
        message,
        data,
        pagination
    });

};

const errorResponse = (
    res,
    message,
    statusCode = 500
) => {

    return res.status(statusCode).json({
        success: false,
        message
    });

};

module.exports = {
    successResponse,
    errorResponse
};