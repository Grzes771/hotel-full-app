exports.commentSchema = {
  schema: {
    body: {
      likes: { type: "string" },
      commentText: { type: "string" },
      articleId: { type: "string" },
    },
  },
};
