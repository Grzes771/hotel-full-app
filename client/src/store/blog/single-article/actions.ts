import { createAction } from 'typesafe-actions';

import { GET_SINGLE_ARTICLE_DATA } from './consts';

type TGetSingeArticleStarted = {
  id: string;
};

export const getSingleArticleStarted = createAction(
  GET_SINGLE_ARTICLE_DATA.started,
  (id): TGetSingeArticleStarted => ({
    id,
  })
)();
