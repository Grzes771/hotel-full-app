const jwt = require("jsonwebtoken");
const User = require("../models/auth.model");

const C = require("./../controllers/consts.ts");

exports.isAuth = (req, res, done) => {
  const getToken = req.headers.authorization;
  const token = getToken.split(" ")[1];

  if (!token) {
    req.profile = {
      email: "",
    };
    done();
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.code(202).send({
          error: C.SESSION_EXPIRED,
        });
      } else {
        const { userToken } = jwt.decode(token);

        if (userToken) {
          const userID = userToken.split(".")[1];

          User.findOne({
            _id: userID,
          }).exec((err, user) => {
            if (err || !user) {
              return res.status(203).send({
                error: C.USER_NOT_FOUND,
              });
            }

            req.profile = user;
            done();
          });
        }
      }
    });
  }
};
