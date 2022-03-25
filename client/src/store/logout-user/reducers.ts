import { LOGOUT_USER } from './consts';

import { getType } from 'typesafe-actions';

import { Action } from '../types/actions';
import { logoutUserStarted, clearLogoutUserState } from './actions';

export type LogoutUserState = {
  loggedOut: boolean;
};

export const initialState = {
  loggedOut: false,
};

export const logoutUser = (
  state = initialState,
  action: Action
): LogoutUserState => {
  switch (action.type) {
    case getType(logoutUserStarted):
      return {
        ...state,
        loggedOut: initialState.loggedOut,
      };
    case LOGOUT_USER.success:
      return {
        ...state,
        loggedOut: true,
      };
    case getType(clearLogoutUserState):
      return {
        ...state,
        loggedOut: initialState.loggedOut,
      };
    default:
      return { ...state };
  }
};
