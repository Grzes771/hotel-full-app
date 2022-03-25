import { createAction } from "typesafe-actions";
import { ADD_SINGLE_COMMENT_LIKE } from "./consts";

type CreateLikeProps = {
  commentId: string;
  articleId: string;
};

export const addSingleCommentLikeStarted = createAction(
  ADD_SINGLE_COMMENT_LIKE.started,
  (commentId, articleId): CreateLikeProps => ({
    commentId,
    articleId,
  })
)();
