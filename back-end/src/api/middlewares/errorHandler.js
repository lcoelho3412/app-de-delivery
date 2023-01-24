module.exports = class ErrorHandler {
    static handle(
        error,
        _req,
        res,
        next,
    ) {
        const { status, message } = error;
        res.status(status || 500).json({ message });
        next();
    }
};