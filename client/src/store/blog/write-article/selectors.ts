import { AppState } from "@store/reducers";
import { TArticle } from "./reducer";

export const blogArticlesRX = (state: AppState): TArticle[] | null =>
  state.newArticle.articles;

export const blogArticlesIsLoadingRX = (state: AppState): boolean =>
  state.newArticle.isLoading;

export const blogArticlesIsErrorRX = (state: AppState): string =>
  state.newArticle.isError;
