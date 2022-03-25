import { createAction } from 'typesafe-actions';

import { GET_USER_DATA } from './consts';

export const getUserDataStarted = createAction(
  GET_USER_DATA.started,
  () => ({})
)();
