import { createAction } from 'typesafe-actions';
import { CLEAR_UPDATE_COMMENT_DATA_STATE, UPDATE_COMMENT_DATA } from './consts';

export type UpdateCommentProps = {
  comment: Comment;
  commentId: string;
  articleId: string;
};
export type Comment = {
  commentText: string;
};

export const updateCommentDataStarted = createAction(
  UPDATE_COMMENT_DATA.started,
  (comment, commentId, articleId): UpdateCommentProps => ({
    comment,
    commentId,
    articleId,
  })
)();

export const clearUpdateCommentDataState = createAction(
  CLEAR_UPDATE_COMMENT_DATA_STATE,
  () => ({})
)();
