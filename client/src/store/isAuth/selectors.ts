import { AppState } from '../reducers';

export const isAuthRX = (state: AppState): string => state.checkAuth.isAuth;

export const isAuthErrorRX = (state: AppState): string => state.checkAuth.error;
