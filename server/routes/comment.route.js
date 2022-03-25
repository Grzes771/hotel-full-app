const {
  addCommentController,
  getCommentsController,
  updateCommentController,
  addCommentLikeController,
  getCommentLikesController,
} = require("../controllers/blog.controllers");

const { isAuth } = require("../hooks/isAuth");

async function routes(fastify, option, done) {
  fastify.decorateRequest("profile", "");

  fastify.addHook("preHandler", isAuth);
  fastify.post("/add", addCommentController);
  fastify.get("/get", getCommentsController);
  fastify.post("/update-comment-data", updateCommentController);
  fastify.post("/add-comment-like", addCommentLikeController);
  fastify.get("/get-comment-likes-amount", getCommentLikesController);

  done();
}

module.exports = routes;
