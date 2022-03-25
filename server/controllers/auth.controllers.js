const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const User = require("../models/auth.model");
const { transporter } = require("../config/nodemailer");
const { emailFormat } = require("../helpers/formats");

const C = require("./consts.ts");

exports.registerController = async (req, res) => {
  const { username, email, password } = req.body;

  User.findOne({ email }).exec((err, user) => {
    if (user) {
      return res.code(202).send({ message: C.EMAIL_IN_USE });
    } else {
      const newUser = new User({
        username,
        email,
        password,
      });

      newUser.save((err, createdUser) => {
        if (err) {
          return res.code(500).send({ error: err });
        } else {
          const userId = createdUser._id;

          const token = jwt.sign(
            {
              userId,
            },
            process.env.JWT_SECRET,
            process.env.JWT_ACCOUNT_ACTIVATION,
            {
              expiresIn: C.EXPIRES_IN_60,
            }
          );
          return res.status(200).send({
            token: token,
            message: C.ACCOUNT_CREATE_SUCCESS,
          });
        }
      });
    }
  });
};

exports.loginController = async (req, res) => {
  const { username, password } = req.body;

  if (username) {
    User.findOne({
      username,
    }).exec((err, user) => {
      if (err || !user) {
        return res.code(202).send({
          error: C.USER_USERNAME_NOT_EXIST,
        });
      }

      if (!user.authenticate(password)) {
        return res.code(202).send({
          error: C.INVALID_PASSWORD,
        });
      }

      const { _id, role } = user;

      const token = user.generateToken(_id.toString());

      res.code(200).send({
        token,
        role,
      });
    });
  } else {
    User.findOne({
      username,
    }).exec((err, user) => {
      if (err || !user) {
        return res.code(202).send({
          error: C.USER_USERNAME_NOT_EXIST,
        });
      }

      if (!user.authenticate(password)) {
        return res.code(202).send({
          error: C.INVALID_PASSWORD,
        });
      }

      const { _id } = user;

      const token = user.generateToken(_id.toString());

      res.code(200).send({
        token,
      });
    });
  }
};

exports.authController = async (req, res) => {
  const getToken = req.headers.authorization;
  const token = getToken.split(" ")[1];

  jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, (err, decoded) => {
    if (err) {
      return res.code(202).send({
        error: C.SESSION_EXPIRED,
      });
    } else {
      return res.code(200).send({ isAuth: true });
    }
  });
};

exports.getUserSettingsController = async (req, res) => {
  const email = req.profile.email;

  if (!req.profile) {
    return res.code(500).send({ err: C.SOMETHING_WENT_WRONG });
  } else return res.code(200).send(req.profile);
};

exports.forgotPasswordController = (req, res) => {
  const { email } = req.body;

  User.findOne(
    {
      email,
    },
    (err, user) => {
      if (err || !user) {
        return res.code(202).send({
          error: C.USER_EMAIL_NOT_EXIST,
        });
      }

      const token = jwt.sign(
        {
          _id: user._id,
        },
        process.env.JWT_SECRET,
        process.env.JWT_ACCOUNT_ACTIVATION,
        {
          expiresIn: C.EXPIRES_IN_10,
        }
      );

      let transporter = nodemailer.createTransport({
        service: C.NODEMAILER_SERVICE_EMAIL,
        auth: {
          user: process.env.EMAIL_FROM,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      const emailData = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: C.LINK_RESET_TITLE,
        html: C.ReturnEmailContent(token),
      };

      return user.updateOne(
        {
          resetPasswordLink: token,
        },
        (err, success) => {
          if (err) {
            return res.code(500).send({
              error: C.INTERNAL_SERVER_ERROR,
            });
          } else {
            transporter.sendMail(emailData, function (err, data) {
              if (err) {
                return res.code(500).send({
                  error: C.INTERNAL_SERVER_ERROR,
                });
              } else {
                return res.code(200).send({
                  message: C.ReturnEmailSent(email),
                });
              }
            });
          }
        }
      );
    }
  );
};

exports.resetPasswordController = (req, res, done) => {
  const { resetPasswordLink, newPassword } = req.body;
  const token = resetPasswordLink;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (err) {
        return res.code(202).send({
          error: C.SESSION_EXPIRED,
        });
      } else {
        const userToken = jwt.decode(token);

        const userID = userToken._id;

        User.findOne(
          {
            _id: userID,
          },

          (err, user) => {
            if (err || !user) {
              return res.code(500).send({ error: C.UPDATE_ERROR });
            } else {
              const updatedFields = {
                password: newPassword,
              };

              user = _.extend(user, updatedFields);

              user.save((err, result) => {
                if (err || !result) {
                  return res.status(409).json({
                    error: C.INTERNAL_SERVER_ERROR,
                  });
                } else
                  return res.code(200).send({
                    message: C.UPDATE_SUCCESS,
                  });
              });
            }
          }
        );
      }
    });
  }
};
