const ApiResponse = (res, statusCode, success, message) => {
    res.status(statusCode).json({
        success,
        message,
    });
};

module.exports = ApiResponse;
