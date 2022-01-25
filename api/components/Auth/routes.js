const { Router } = require("express");
const authController = require("./controller");
const { validate, avoid_try_catch, is_auth } = require("../../middlewares");
const { registerSchema, loginSchema } = require("../../util/schema");

const router = Router();

router.post(
  "/signup",
  validate(registerSchema),
  avoid_try_catch(authController.signup)
);

router.post(
  "/signin",
  validate(loginSchema),
  avoid_try_catch(authController.signin)
);

router.post(
  '/logout',
  is_auth,
  avoid_try_catch(authController.logout)
)

router.post(
  "/refresh-token",
  avoid_try_catch(authController.refreshToken)
);

module.exports = router;
