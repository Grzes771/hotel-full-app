const Reservation = require("../models/reservation.model");
const User = require("../models/auth.model");

const C = require("./consts.ts");

exports.addReservationController = async (req, res) => {
  const { username, phone, amount, accommodationType, startDate, endDate } =
    req.body;

  const { email } = req.profile;

  if (!email) {
    Reservation.findOne({ phone, startDate }).exec((err, reservation) => {
      if (reservation) {
        return res.code(202).send({ message: C.RESERVATION_BUSY });
      } else {
        const newReservation = new Reservation({
          username,
          phone,
          amount,
          accommodationType,
          startDate,
          endDate,
        });

        newReservation.save((err, createdReservation) => {
          if (err || !createdReservation) {
            return res.code(500).send({ error: err });
          } else {
            return res.status(204).send({
              message: C.RESERVATION_SUCCESS,
            });
          }
        });
      }
    });
  } else {
    Reservation.findOne({ phone, startDate }).exec((err, reservation) => {
      if (reservation) {
        return res.code(202).send({ message: C.RESERVATION_BUSY });
      } else {
        User.findOne({ email }).exec((err, user) => {
          if (user) {
            const newReservation = new Reservation({
              username,
              phone,
              amount,
              accommodationType,
              startDate,
              endDate,
              userEmail: user.email,
            });

            newReservation.save((err, createdReservation) => {
              if (err || !createdReservation) {
                return res.code(500).send({ error: err }), console.log(err);
              } else {
                return res.status(200).send({
                  message: C.RESERVATION_SUCCESS,
                });
              }
            });
          }
        });
      }
    });
  }
};

exports.getReservationsController = async (req, res) => {
  const email = req.profile.email;
  const articleId = req.query.articleId;

  if (req.profile.role === C.USER_ROLE) {
    Reservation.find({ userEmail: email })
      .skip(parseInt(req.query.skip))
      .limit(parseInt(req.query.take))
      .exec((err, reservations) => {
        if (err) {
          return res.code(500).send({ err: C.SOMETHING_WENT_WRONG });
        } else return res.code(200).send({ items: reservations });
      });
  } else {
    Reservation.find()
      .skip(parseInt(req.query.skip))
      .limit(parseInt(req.query.take))
      .exec((err, reservations) => {
        if (err) {
          return res.code(500).send({ err: C.SOMETHING_WENT_WRONG });
        } else return res.code(200).send({ items: reservations });
      });
  }
};
