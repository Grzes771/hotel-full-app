const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: false,
    },
    userId: {
      type: String,
      trim: true,
      required: true,
    },
    commentText: {
      type: String,
      trim: true,
      required: true,
    },
    responseToCommentUsername: {
      type: String,
      trim: true,
      required: false,
    },
    responseToCommentId: {
      type: String,
      trim: true,
      required: false,
    },
    articleId: {
      type: String,
      trim: true,
      required: true,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", commentSchema);
