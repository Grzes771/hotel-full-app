const {
  registerController,
  loginController,
  authController,
  reservationController,
  getUserSettingsController,
  updateUserSettingsController,
  forgotPasswordController,
  resetPasswordController,
} = require("../controllers/auth.controllers");

const { isAuth } = require("../hooks/isAuth");

async function routes(fastify, option, done) {
  fastify.decorateRequest("profile", "");

  fastify.addHook("preHandler", isAuth);
  fastify.post("/register", registerController);
  fastify.post("/login", loginController);
  fastify.get("/is_auth", authController);
  fastify.put("/forgotPassword", forgotPasswordController);
  fastify.put("/resetPassword", resetPasswordController);
  done();
}

module.exports = routes;
