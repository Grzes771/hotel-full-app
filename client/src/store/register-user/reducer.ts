import { getType } from "typesafe-actions";
import { Action } from "../types/actions";
import { getUserSettingsStarted, registerUserStarted } from "./actions";
import {
  REGISTER_USER,
  CLEAR_REGISTER_USER_STATE,
  GET_USER_SETTINGS,
} from "./consts";

export type TRegisterUserState = {
  isSuccess: boolean;
  isLoading: boolean;
  isError: string;
  users: TRegisterUser[] | null;
};

export type TRegisterUser = {
  id: string;
  username: string;
  password: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};

export const initialState: TRegisterUserState = {
  isSuccess: false,
  isLoading: false,
  isError: "",
  users: null,
};

export const registerUser = (
  state = initialState,
  action: Action
): TRegisterUserState => {
  switch (action.type) {
    case getType(registerUserStarted):
      return {
        ...state,
        isLoading: true,
        isSuccess: initialState.isSuccess,
        isError: initialState.isError,
      };
    case REGISTER_USER.success:
      return {
        ...state,
        isSuccess: true,
        isLoading: initialState.isLoading,
      };
    case REGISTER_USER.failure:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: action.payload.error,
      };
    case getType(getUserSettingsStarted):
      return {
        ...state,
        isLoading: true,
        isSuccess: initialState.isSuccess,
        isError: initialState.isError,
        users: initialState.users,
      };
    case GET_USER_SETTINGS.success:
      return {
        ...state,
        isSuccess: true,
        isLoading: initialState.isLoading,
        users: action.payload.users,
      };
    case GET_USER_SETTINGS.failure:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: action.payload.error,
        users: initialState.users,
      };
    case CLEAR_REGISTER_USER_STATE:
      return {
        ...state,
        isSuccess: initialState.isSuccess,
        isLoading: initialState.isLoading,
        isError: initialState.isError,
      };
    default:
      return { ...state };
  }
};
