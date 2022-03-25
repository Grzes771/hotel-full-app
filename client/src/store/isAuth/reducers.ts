import { IS_AUTH } from "./consts";
import { getType } from "typesafe-actions";
import { Action } from "../../store/types/actions";
import { isAuthStarted, ResetIsAuthState } from "./actions";

export type CheckAuthState = {
  isAuth: string;
  error: string;
};

export const initialState = {
  isAuth: "",
  error: "",
};

export const checkAuth = (
  state = initialState,
  action: Action
): CheckAuthState => {
  switch (action.type) {
    case getType(isAuthStarted):
      return {
        ...state,
        isAuth: initialState.isAuth,
        error: initialState.error,
      };
    case IS_AUTH.success:
      return {
        ...state,
        isAuth: "isAuth",
      };
    case IS_AUTH.failure:
      return {
        ...state,
        isAuth: "isNotAuth",
        error: action.payload.error,
      };
    case getType(ResetIsAuthState):
      return {
        ...state,
        isAuth: initialState.isAuth,
        error: initialState.error,
      };
    default:
      return { ...state };
  }
};
