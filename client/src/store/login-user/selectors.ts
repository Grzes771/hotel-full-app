import { AppState } from "../../store/reducers";

export const loginUserIsErrorRX = (state: AppState): string =>
  state.loginUser.isError;

export const loginUserIsLoadingRX = (state: AppState): boolean =>
  state.loginUser.isLoading;

export const tokenRX = (state: AppState): string | undefined =>
  state.loginUser.token;
