import { createActionType } from "../types/actions";

export const ADD_RESERVATION_USER = createActionType("ADD_RESERVATION_USER");

export const GET_USER_RESERVATIONS = createActionType("GET_USER_RESERVATIONS");

export const CLEAR_ADD_RESERVATION_USER_STATE =
  "CLEAR_ADD_RESERVATION_USER_STATE";

export const SOMETHING_WENT_WRONG = "Something went wrong - please try again";
