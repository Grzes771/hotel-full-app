import { AppState } from "../../store/reducers";
import { TUser } from "./reducer";

export const userDataRX = (state: AppState): TUser | null =>
  state.getUserData.userData;

export const userDataIsLoadingRX = (state: AppState): boolean =>
  state.getUserData.isLoading;

export const userDataIsErrorRX = (state: AppState): string =>
  state.getUserData.isError;
