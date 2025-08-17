// JWT secret key configuration - uses environment variable or fallback for development
module.exports.JWT_SECRET = process.env.JWT_SECRET || "dev-secret";
