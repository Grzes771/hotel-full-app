import { AppState } from '../reducers';

export const isLoggedOutRX = (state: AppState): boolean =>
  state.logoutUser.loggedOut;
