import { getType } from "typesafe-actions";
import { Action } from "../../types/actions";

import { createArticleStarted, getArticlesStarted } from "./actions";
import {
  CREATE_ARTICLE,
  CLEAR_CREATE_ARTICLE_STATE,
  GET_ARTICLES,
} from "./consts";

export type TArticle = {
  _id: string;
  likes: Array<string>;
  title: string;
  text: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};

export type TArticleState = {
  isSuccess: boolean;
  isLoading: boolean;
  isError: string;
  articles: TArticle[] | null;
};

export const initialState: TArticleState = {
  isSuccess: false,
  isLoading: false,
  isError: "",
  articles: null,
};

export const newArticle = (
  state = initialState,
  action: Action
): TArticleState => {
  switch (action.type) {
    case getType(createArticleStarted):
      return {
        ...state,
        isLoading: true,
        isSuccess: initialState.isSuccess,
        isError: initialState.isError,
      };
    case CREATE_ARTICLE.success:
      return {
        ...state,
        isSuccess: true,
        isLoading: initialState.isLoading,
      };
    case CREATE_ARTICLE.failure:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: action.payload.error,
      };
    case getType(getArticlesStarted):
      return {
        ...state,
        isLoading: true,
        isSuccess: initialState.isSuccess,
        isError: initialState.isError,
        articles: initialState.articles,
      };
    case GET_ARTICLES.success:
      return {
        ...state,
        isSuccess: true,
        isLoading: initialState.isLoading,
        articles: action.payload.articles,
      };
    case GET_ARTICLES.failure:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: action.payload.error,
        articles: initialState.articles,
      };
    case CLEAR_CREATE_ARTICLE_STATE:
      return {
        ...state,
        isSuccess: initialState.isSuccess,
        isLoading: initialState.isLoading,
        isError: initialState.isError,
      };

    default:
      return { ...state };
  }
};
