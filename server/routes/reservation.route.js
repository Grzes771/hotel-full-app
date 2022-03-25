const {
  addReservationController,
  getReservationsController,
} = require("../controllers/reservation.controller");

const { isAuth } = require("../hooks/isAuth");

async function routes(fastify, option, done) {
  fastify.decorateRequest("profile", "");
  fastify.addHook("preHandler", isAuth);
  fastify.post("/add", addReservationController);
  fastify.get("/get", getReservationsController);

  done();
}

module.exports = routes;
