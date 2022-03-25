const nodemailer = require("nodemailer");
const C = require("./consts.ts");

exports.transporter = nodemailer.createTransport({
  service: C.NODEMAILER_SERVICE,
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_PASSWORD,
  },
});
