exports.reservationSchema = {
  schema: {
    body: {
      username: { type: "string" },
      phone: { type: "string" },
      amount: { type: "string" },
      accommodationType: { type: "string" },
      startDate: { type: "date" },
      endDate: { type: "date" },
    },
  },
};
