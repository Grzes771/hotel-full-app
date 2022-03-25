import { LOGIN_USER, CLEAR_LOGIN_USER_STATE } from "./consts";

import { getType } from "typesafe-actions";

import { Action } from "../types/actions";
import { loginUserStarted } from "./actions";

export type LoginUserState = {
  isError: string;
  isLoading: boolean;
  token: string | undefined;
};

export const initialState: LoginUserState = {
  isError: "",
  isLoading: false,
  token: undefined,
};

export const loginUser = (
  state = initialState,
  action: Action
): LoginUserState => {
  switch (action.type) {
    case getType(loginUserStarted):
      return {
        ...state,
        isLoading: true,
        isError: initialState.isError,
        token: initialState.token,
      };
    case LOGIN_USER.success:
      return {
        ...state,
        isLoading: initialState.isLoading,
        token: action.payload.token,
      };
    case LOGIN_USER.failure:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: action.payload.error,
        token: initialState.token,
      };
    case CLEAR_LOGIN_USER_STATE:
      return {
        ...state,
        isError: initialState.isError,
        isLoading: initialState.isLoading,
        token: initialState.token,
      };
    default:
      return { ...state };
  }
};
