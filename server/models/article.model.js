const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    likes: {
      type: Array,
      default: [],
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    text: {
      type: String,
      trim: true,
      required: true,
    },
    image: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Article", articleSchema);
