exports.successResponse = (
    res,
    message,
    data = null,
    statusCode = 200
) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data
    });
};

exports.errorResponse = (
    res,
    message,
    statusCode = 400
) => {
    return res.status(statusCode).json({
        success: false,
        message
    });
};

exports.notFoundResponse = (
    res,
    message,
    statusCode = 404
) => {
    return res.status(statusCode).json({
        success: false,
        message
    });
};

exports.serverErrorResponse = (
    res,
    message,
    statusCode = 500
) => {
    return res.status(statusCode).json({
        success: false,
        message
    });
};