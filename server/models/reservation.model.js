const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
    },
    phone: {
      type: String,
      trim: true,
      required: true,
    },
    amount: {
      type: String,
      trim: true,
      required: true,
    },
    accommodationType: {
      type: String,
      trim: true,
      required: true,
    },
    startDate: {
      type: Date,
      trim: true,
      required: false,
    },
    endDate: {
      type: Date,
      trim: true,
      required: false,
    },
    userEmail: {
      type: String,
      trim: true,
      required: false,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Reservation", reservationSchema);
