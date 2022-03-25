import { createAction } from 'typesafe-actions';

import { UPDATE_ARTICLE_DATA, CLEAR_UPDATE_ARTICLE_DATA_STATE } from './consts';

export type UpdateArticleDataProps = {
  article: Article;
};

export type Article = {
  title: string;
  text: string;
  image: string;
};

export const updateArticleDataStarted = createAction(
  UPDATE_ARTICLE_DATA.started,
  (article): UpdateArticleDataProps => ({
    article,
  })
)();

export const clearUpdateArticleDataState = createAction(
  CLEAR_UPDATE_ARTICLE_DATA_STATE,
  () => ({})
)();
