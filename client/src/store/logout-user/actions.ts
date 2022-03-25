import { LOGOUT_USER, CLEAR_LOGOUT_USER_STATE } from './consts';

import { createAction } from 'typesafe-actions';

export const logoutUserStarted = createAction(
  LOGOUT_USER.started,
  () => ({})
)();

export const clearLogoutUserState = createAction(
  CLEAR_LOGOUT_USER_STATE,
  () => ({})
)();
