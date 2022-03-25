import { AppState } from "../../store/reducers";
import { TReservation } from "./reducer";

export const userReservationsRX = (state: AppState): TReservation[] | null =>
  state.reservationUser.reservations;

export const userReservationsIsLoadingRX = (state: AppState): boolean =>
  state.reservationUser.isLoading;

export const userReservationsIsErrorRX = (state: AppState): string =>
  state.reservationUser.isError;
