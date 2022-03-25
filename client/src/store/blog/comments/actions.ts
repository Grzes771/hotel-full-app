import {
  ADD_COMMENT_USER,
  CLEAR_ADD_COMMENT_USER_STATE,
  GET_COMMENTS,
} from "./consts";

import { createAction } from "typesafe-actions";

type TValues = {
  text: string;
};

type CommentUserProps = {
  commentText: TValues;
  articleId: string;
};
type TGetCommentsProps = {
  id: string;
};

export const commentUserStarted = createAction(
  ADD_COMMENT_USER.started,
  (commentText, articleId): CommentUserProps => ({
    commentText,
    articleId,
  })
)();

export const getCommentsStarted = createAction(
  GET_COMMENTS.started,
  (id): TGetCommentsProps => ({ id })
)();

export const clearCommentState = createAction(
  CLEAR_ADD_COMMENT_USER_STATE,
  () => ({})
)();
