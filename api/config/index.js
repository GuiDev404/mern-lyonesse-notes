module.exports = {
  RED_COLOR: "\x1b[31m",
  IS_DEV: process.env.NODE_ENV === "development",
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
  ROUNDS: process.env.ROUNDS,
  EXPIRE_ACCESS_TOKEN_TIME: process.env.EXPIRE_ACCESS_TOKEN_TIME,
  EXPIRE_REFRESH_TOKEN_TIME: process.env.EXPIRE_REFRESH_TOKEN_TIME,
  JWT_ERRORS: {
    'TokenExpiredError': 'Token expirados. Inicie sesion de nuevo.',
    'JsonWebTokenError': 'Token invalido.'
  }
}