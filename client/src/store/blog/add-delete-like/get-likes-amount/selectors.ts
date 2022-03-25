import { AppState } from "../../../../store/reducers";

export const articleLikesRX = (state: AppState): string =>
  state.getArticleLikesData.likes;
