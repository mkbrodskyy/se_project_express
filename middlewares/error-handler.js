// Centralized error handling middleware
const errorHandler = (err, req, res, next) => {
  // Log the error to the console for debugging
  console.error(err);

  // If the error has a statusCode property, use it; otherwise default to 500
  const statusCode = err.statusCode || 500;

  // If the error has a message, use it; otherwise provide a generic message
  const message =
    statusCode === 500 ? "An error has occurred on the server." : err.message;

  // Send the error response
  res.status(statusCode).send({ message });
};

module.exports = errorHandler;
