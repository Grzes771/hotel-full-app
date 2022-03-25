import { getType } from "typesafe-actions";
import { Action } from "../types/actions";
import { getUserReservationsStarted, reservationUserStarted } from "./actions";
import {
  ADD_RESERVATION_USER,
  CLEAR_ADD_RESERVATION_USER_STATE,
  GET_USER_RESERVATIONS,
} from "./consts";

export type TReservation = {
  id: string;
  username: string;
  phone: string;
  amount: string;
  accommodationType: string;
  startDate: string;
  endDate: string;
  userEmail: string;
  createdAt: string;
  updatedAt: string;
};

export type TReservationUserState = {
  isSuccess: boolean;
  isLoading: boolean;
  isError: string;
  reservations: TReservation[] | null;
};

export const initialState: TReservationUserState = {
  isSuccess: false,
  isLoading: false,
  isError: "",
  reservations: null,
};

export const reservationUser = (
  state = initialState,
  action: Action
): TReservationUserState => {
  switch (action.type) {
    case getType(reservationUserStarted):
      return {
        ...state,
        isLoading: true,
        isSuccess: initialState.isSuccess,
        isError: initialState.isError,
      };
    case ADD_RESERVATION_USER.success:
      return {
        ...state,
        isSuccess: true,
        isLoading: initialState.isLoading,
      };
    case ADD_RESERVATION_USER.failure:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: action.payload.error,
      };
    case getType(getUserReservationsStarted):
      return {
        ...state,
        isLoading: true,
        isSuccess: initialState.isSuccess,
        isError: initialState.isError,
        reservations: initialState.reservations,
      };
    case GET_USER_RESERVATIONS.success:
      return {
        ...state,
        isSuccess: true,
        isLoading: initialState.isLoading,
        reservations: action.payload.reservations,
      };
    case GET_USER_RESERVATIONS.failure:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: action.payload.error,
        reservations: initialState.reservations,
      };
    case CLEAR_ADD_RESERVATION_USER_STATE:
      return {
        ...state,
        isSuccess: initialState.isSuccess,
        isLoading: initialState.isLoading,
        isError: initialState.isError,
      };
    default:
      return { ...state };
  }
};
