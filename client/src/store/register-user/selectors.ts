import { AppState } from '../../store/reducers';
import { TRegisterUser } from './reducer';

export const userRegisterRX = (state: AppState): TRegisterUser[] | null =>
  state.registerUser.users;

export const userRegisterIsLoadingRX = (state: AppState): boolean =>
  state.registerUser.isLoading;

export const userRegisterIsErrorRX = (state: AppState): string =>
  state.registerUser.isError;
