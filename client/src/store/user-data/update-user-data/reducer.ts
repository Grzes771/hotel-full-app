import { getType } from "typesafe-actions";
import { Action } from "../../types/actions";
import { updateUserDataStarted } from "./actions";

import { UPDATE_USER_DATA, CLEAR_UPDATE_USER_DATA_STATE } from "./consts";

export type TUser = {
  createdAt: string;
  email: string;
  hashed_password: string;
  role: string;
  salt: string;
  updatedAt: string;
  username: string;
  _id: string;
};

export type TUpdateUserDataState = {
  userData: TUser | null | string;
  isLoading: boolean;
  isError: string;
};

export const initialState: TUpdateUserDataState = {
  userData: "",
  isLoading: false,
  isError: "",
};

export const updateUserData = (
  state = initialState,
  action: Action
): TUpdateUserDataState => {
  switch (action.type) {
    case getType(updateUserDataStarted):
      return {
        ...state,
        isLoading: true,
        isError: "",
      };
    case UPDATE_USER_DATA.success:
      return {
        ...state,
        userData: action.payload.userData,
        isLoading: false,
        isError: "",
      };
    case UPDATE_USER_DATA.failure:
      return {
        ...state,
        userData: "",
        isLoading: false,
        isError: action.payload.error,
      };
    case CLEAR_UPDATE_USER_DATA_STATE:
      return {
        ...state,
        userData: "",
        isLoading: false,
        isError: "",
      };
    default:
      return { ...state };
  }
};
