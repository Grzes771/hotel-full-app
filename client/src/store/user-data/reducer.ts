import { getType } from "typesafe-actions";

import { Action } from "../types/actions";
import { getUserDataStarted } from "./actions";

import { GET_USER_DATA } from "./consts";

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

export type TGetUserDataState = {
  isLoading: boolean;
  isError: string;
  userData: TUser | null;
};

export const initialState: TGetUserDataState = {
  isLoading: false,
  isError: "",
  userData: null,
};

export const getUserData = (
  state = initialState,
  action: Action
): TGetUserDataState => {
  switch (action.type) {
    case getType(getUserDataStarted):
      return {
        ...state,
        isLoading: true,
        isError: initialState.isError,
        userData: initialState.userData,
      };
    case GET_USER_DATA.success:
      return {
        ...state,
        isLoading: false,
        isError: initialState.isError,
        userData: action.payload.userData,
      };
    case GET_USER_DATA.failure:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: action.payload.error,
        userData: initialState.userData,
      };
    default:
      return { ...state };
  }
};
