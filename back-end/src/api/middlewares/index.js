const errorHandler = (error, _req, res, next) => {
  const { status, message } = error;
  res.status(status || 500).json({ message });
  next();
};

module.exports = errorHandler;