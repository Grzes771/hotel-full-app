const User = require("../models/auth.model");
const C = require("./consts.ts");

exports.getUserSettingsController = async (req, res) => {
  const email = req.profile.email;
  if (!email) {
    return res.code(500).send({ err: C.SOMETHING_WENT_WRONG });
  } else return res.code(200).send({ userData: req.profile });
};

exports.updateUserSettingsController = async (req, res) => {
  const { username, email } = req.body;
  const userID = req.profile._id;

  User.findOneAndUpdate(
    { _id: userID },
    {
      username,
      email,
    },
    (err, user) => {
      if (err || !user) {
        return res.code(500).send({ error: C.UPDATE_ERROR });
      } else {
        return res.code(200).send({
          message: C.UPDATE_SUCCESS,
        });
      }
    }
  );
};
