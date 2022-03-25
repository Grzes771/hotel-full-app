import { createAction } from "typesafe-actions";

import {
  ADD_RESERVATION_USER,
  GET_USER_RESERVATIONS,
  CLEAR_ADD_RESERVATION_USER_STATE,
} from "./consts";

type TValues = {
  username: string;
  phone: string;
  amount: string;
  accommodationType: string;
};

type ReservationUserProps = {
  reservation: TValues;
  startDate: Date;
  endDate: Date;
};

type TGetReservationUserProps = {
  skip: number;
  take: number;
};

export const reservationUserStarted = createAction(
  ADD_RESERVATION_USER.started,
  (reservation, startDate, endDate): ReservationUserProps => ({
    reservation,
    startDate,
    endDate,
  })
)();
export const getUserReservationsStarted = createAction(
  GET_USER_RESERVATIONS.started,
  (skip, take): TGetReservationUserProps => ({ skip, take })
)();

export const clearReservationUserState = createAction(
  CLEAR_ADD_RESERVATION_USER_STATE,
  () => ({})
)();
