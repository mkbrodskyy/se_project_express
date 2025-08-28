class NotFoundError extends Error {
  constructor(message = "Requested resource not found") {
    super(message);
    this.statusCode = 404;
  }
}

module.exports = {
  NotFoundError,
};
