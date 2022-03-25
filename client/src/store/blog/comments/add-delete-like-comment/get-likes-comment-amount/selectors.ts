import { AppState } from "../../../../../store/reducers";

export const commentLikesRX = (state: AppState): string =>
  state.getCommentLikesData.likes;
