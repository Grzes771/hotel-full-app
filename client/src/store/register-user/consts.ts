import { createActionType } from "../types/actions";

export const REGISTER_USER = createActionType("REGISTER_USER");

export const CLEAR_REGISTER_USER_STATE = "CLEAR_REGISTER_USER_STATE";

export const GET_USER_SETTINGS = createActionType("GET_USER_SETTINGS");

export const SOMETHING_WENT_WRONG = "Something went wrong - please try again";
