const {
  createArticleController,
  getArticlesController,
  getSingleArticleController,
  addSingleLikeController,
  updateArticleController,
  getSingleLikeController,
} = require("../controllers/blog.controllers");

const { isAuth } = require("../hooks/isAuth");

async function routes(fastify, option, done) {
  fastify.decorateRequest("profile", "");

  fastify.addHook("preHandler", isAuth);
  fastify.post("/new-article", createArticleController);
  fastify.get("/get-articles", getArticlesController);
  fastify.get("/get-single-article", getSingleArticleController);
  fastify.post("/add-like", addSingleLikeController);
  fastify.post("/update-article-data", updateArticleController);
  fastify.get("/get-likes-amount", getSingleLikeController);
  done();
}

module.exports = routes;
