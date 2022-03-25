import { createAction } from 'typesafe-actions';
import { IS_AUTH, RESET_IS_AUTH_STATE } from './consts';

export const isAuthStarted = createAction(IS_AUTH.started, () => ({}))();
export const ResetIsAuthState = createAction(RESET_IS_AUTH_STATE, () => ({}))();
