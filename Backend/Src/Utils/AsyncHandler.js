const AsyncHandler = (InputFunction) => async (req, res, next) => {
    try {
        await InputFunction(req, res, next);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = AsyncHandler;
