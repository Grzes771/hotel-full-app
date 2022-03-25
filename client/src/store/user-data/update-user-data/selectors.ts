import { AppState } from "../../reducers";
import { TUser } from "./reducer";

export const updateUserDataResultRX = (
  state: AppState
): TUser | null | string => state.updateUserData.userData;

export const updateUserDataIsErrorRX = (state: AppState): string =>
  state.updateUserData.isError;

export const updateUserDataIsLoadingRX = (state: AppState): boolean =>
  state.updateUserData.isLoading;
