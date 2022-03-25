import { createAction } from 'typesafe-actions';

import { UPDATE_USER_DATA, CLEAR_UPDATE_USER_DATA_STATE } from './consts';

export type UpdateUserDataProps = {
  user: User;
};

export type User = {
  login: string;
  email: string;
};

export const updateUserDataStarted = createAction(
  UPDATE_USER_DATA.started,
  (user): UpdateUserDataProps => ({
    user,
  })
)();

export const clearUpdateUserDataState = createAction(
  CLEAR_UPDATE_USER_DATA_STATE,
  () => ({})
)();
