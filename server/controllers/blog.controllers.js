const Article = require("../models/article.model");
const User = require("../models/auth.model");
const Comment = require("../models/comment.model");
const C = require("./consts.ts");

exports.createArticleController = async (req, res) => {
  const { title, text, image } = req.body;

  const newArticle = new Article({
    title,
    text,
    image,
  });

  newArticle.save((err, createdArticle) => {
    if (err) {
      return res.code(500).send({ error: err });
    } else {
      return res.status(200).send({
        message: C.ARTICLE_CREATED,
      });
    }
  });
};

exports.getArticlesController = async (req, res) => {
  const title = req.profile.title;

  Article.find()
    .sort({ created_at: 1 })
    .skip(parseInt(req.query.skip))
    .limit(parseInt(req.query.take))
    .exec((err, articles) => {
      if (err) {
        return res.code(500).send({ err: C.SOMETHING_WENT_WRONG });
      } else return res.code(200).send({ items: articles });
    });
};

exports.getSingleArticleController = async (req, res) => {
  const articleId = req.query.articleId;

  Article.findOne({ _id: articleId }).exec((err, article) => {
    if (err) {
      return res.code(500).send({ err: C.SOMETHING_WENT_WRONG });
    } else return res.code(200).send({ article });
  });
};

exports.updateArticleController = async (req, res) => {
  const { title, text, image, articleId } = req.body;

  Article.findOneAndUpdate(
    { _id: articleId },
    {
      title,
      text,
      image,
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

exports.addSingleLikeController = async (req, res) => {
  const { articleId } = req.body;
  const like = req.profile.id;

  Article.findOne({ _id: articleId }, (err, article) => {
    if (err || !article) {
      return res.code(500).send({ error: C.ARTICLE_NOT_FOUND });
    } else {
      if (article.likes.findIndex((articleLike) => articleLike === like) !== -1)
        return Article.findOneAndUpdate(
          { _id: article._id },

          { $pull: { likes: like } },
          { multi: true }
        ).exec((err) => {
          if (err) {
            return res.code(500).send({ err: C.SOMETHING_WENT_WRONG });
          } else return res.code(200).send({ message: C.LIKE_DELETED });
        });
      else
        Article.findOneAndUpdate(
          { _id: article._id },

          { $push: { likes: like } },
          { new: true }
        ).exec((err) => {
          if (err) {
            return res.code(500).send({ err: C.SOMETHING_WENT_WRONG });
          } else return res.code(200).send({ message: C.LIKE_ADDED });
        });
    }
  });
};

exports.getSingleLikeController = async (req, res) => {
  const articleId = req.query.articleId;

  Article.findOne({ _id: articleId }).exec((err, article) => {
    if (err) {
      return res.code(500).send({ err: C.SOMETHING_WENT_WRONG });
    } else return res.code(200).send({ article });
  });
};

exports.addCommentController = async (req, res) => {
  const { commentText, articleId } = req.body;

  const { _id } = req.profile;

  User.findOne({ _id }).exec((err, user) => {
    if (!_id) {
      return res.code(500).send({ err: C.YOURE_NOT_LOGGED });
    } else if (_id) {
      const newComment = new Comment({
        commentText,
        userId: user._id,
        username: user.username,
        articleId: articleId,
      });

      newComment.save((err, createdComment) => {
        if (err || !createdComment) {
          return res.code(500).send({ error: err });
        } else {
          return res.status(200).send({
            message: C.COMMENT_ADDED,
          });
        }
      });
    }
  });
};

exports.getCommentsController = async (req, res) => {
  const articleId = req.query.articleId;

  Comment.find({ articleId: articleId }).exec((err, comment) => {
    if (err) {
      return res.code(500).send({ err: C.SOMETHING_WENT_WRONG });
    } else return res.code(200).send({ comment });
  });
};

exports.updateCommentController = async (req, res) => {
  const { commentText, commentId } = req.body;

  Comment.findOneAndUpdate(
    { _id: commentId },
    {
      commentText,
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
exports.addCommentLikeController = async (req, res) => {
  const { commentId } = req.body;

  const like = req.profile.id;

  Comment.findOne({ _id: commentId }, (err, comment) => {
    if (err || !comment) {
      return res.code(500).send({ error: C.COMMENT_NOT_FOUND });
    } else {
      if (comment.likes.findIndex((commentLike) => commentLike === like) !== -1)
        return Comment.findOneAndUpdate(
          { _id: comment._id },

          { $pull: { likes: like } },
          { multi: true }
        ).exec((err) => {
          if (err) {
            return res.code(500).send({ err: C.SOMETHING_WENT_WRONG });
          } else return res.code(200).send({ message: C.LIKE_DELETED });
        });
      else
        Comment.findOneAndUpdate(
          { _id: comment._id },

          { $push: { likes: like } },
          { new: true }
        ).exec((err) => {
          if (err) {
            return res.code(500).send({ err: C.SOMETHING_WENT_WRONG });
          } else return res.code(200).send({ message: C.LIKE_ADDED });
        });
    }
  });
};
exports.getCommentLikesController = async (req, res) => {
  const commentId = req.query.commentId;

  Comment.findOne({ _id: commentId }).exec((err, comment) => {
    if (err) {
      return res.code(500).send({ err: C.SOMETHING_WENT_WRONG });
    } else return res.code(200).send({ comment });
  });
};
