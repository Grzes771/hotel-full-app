import { createActionType } from "../../store/types/actions";

export const IS_AUTH = createActionType("IS_AUTH");
export const RESET_IS_AUTH_STATE = "RESET_IS_AUTH_STATE";
export const SESSION_EXPIRED = "Your session expired, please sign in again";
