import { createAction } from "typesafe-actions";
import {
  CREATE_ARTICLE,
  CLEAR_CREATE_ARTICLE_STATE,
  GET_ARTICLES,
} from "./consts";

type TValues = {
  title: string;
  text: string;
  image: string;
};

type TGetArticleProps = {
  skip: number;
  take: number;
};

type CreateArticleProps = {
  article: TValues;
};
export const createArticleStarted = createAction(
  CREATE_ARTICLE.started,
  (article): CreateArticleProps => ({
    article,
  })
)();

export const getArticlesStarted = createAction(
  GET_ARTICLES.started,
  (skip, take): TGetArticleProps => ({ skip, take })
)();

export const clearArticleState = createAction(
  CLEAR_CREATE_ARTICLE_STATE,
  () => ({})
)();
