import { AppState } from "../../../store/reducers";
import { TArticle } from "./reducer";

export const singleArticleRX = (state: AppState): TArticle | null | undefined =>
  state.getSingleArticleData.singleArticleData;

export const singleArticleLikeRX = (state: AppState): string | null =>
  state.getSingleArticleData.likes;

export const SingleArticleIsLoadingRX = (state: AppState): boolean =>
  state.getSingleArticleData.isLoading;

export const SingleArticleIsErrorRX = (state: AppState): string =>
  state.getSingleArticleData.isError;
