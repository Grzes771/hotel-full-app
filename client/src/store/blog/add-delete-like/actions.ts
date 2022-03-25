import { createAction } from 'typesafe-actions';
import { ADD_SINGLE_LIKE } from './consts';

type CreateLikeProps = {
  articleId: string;
};

export const addSingleLikeStarted = createAction(
  ADD_SINGLE_LIKE.started,
  (articleId): CreateLikeProps => ({
    articleId,
  })
)();
