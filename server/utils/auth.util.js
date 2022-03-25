const fastifyPlugin = require("fastify-plugin");
const jwt = require("jsonwebtoken");

function utility(fastify, options, done) {
  fastify.decorate("isAuth", (req) => {
    const token = req.headers.authorization;

    jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, (err, decoded) => {
      if (err) {
        return false;
      } else {
        return true;
      }
    });
  });

  fastify.decorate("getUser", (req) => {
    const token = req.headers.authorization;

    jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, (err, decoded) => {
      if (err) {
        return false;
      } else {
        const { userToken } = jwt.decode(token);
        const userID = userToken.split(".")[1];

        if (userID)
          User.findOne({
            _id: userID,
          }).exec((err, user) => {
            if (err || !user) {
              return false;
            }

            return user;
          });
      }
    });
  });

  done();
}

module.exports = fastifyPlugin(utility);
