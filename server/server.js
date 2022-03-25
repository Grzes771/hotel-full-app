require("dotenv").config();
const fastify = require("fastify")({ logger: true });
const connectDB = require("./config/index.js");

require("dotenv").config({ path: "./server/config/config.env", debug: true });

fastify.register(require("fastify-cors"), {
  origin: process.env.CLIENT_URL,
});

connectDB();
fastify.register(require(`./utils/auth.util`));
fastify.register(require(`./routes/auth.route`), { prefix: "/api/auth" });
fastify.register(require(`./routes/reservation.route`), {
  prefix: "/api/reservation",
});
fastify.register(require(`./routes/user.route`), {
  prefix: "/api/user",
});
fastify.register(require("./routes/article.route"), {
  prefix: "/api/article",
});
fastify.register(require("./routes/comment.route"), {
  prefix: "/api/comment",
});

const PORT = process.env.PORT;

const start = async () => {
  try {
    await fastify.listen(PORT);
    fastify.log.info(`Server is running at port ${PORT}`);
  } catch (err) {
    process.exit(1);
  }
};

start();
