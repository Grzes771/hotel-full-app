const { isAuth } = require("../hooks/isAuth");

const {
  getUserSettingsController,
  updateUserSettingsController,
} = require("../controllers/user.controller");

async function routes(fastify, option, done) {
  fastify.decorateRequest("profile", "");

  fastify.addHook("preHandler", isAuth);
  fastify.get("/get-user-data", getUserSettingsController);
  fastify.post("/update-user-data", updateUserSettingsController);
  done();
}

module.exports = routes;
