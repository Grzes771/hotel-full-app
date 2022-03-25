import { AppState } from "../../../store/reducers";
import { TComment } from "./reducer";

export const CommentsRX = (state: AppState): TComment[] | null =>
  state.commentUser.comment;

export const CommentsIsLoadingRX = (state: AppState): boolean =>
  state.commentUser.isLoading;

export const CommentsIsErrorRX = (state: AppState): string =>
  state.commentUser.isError;
