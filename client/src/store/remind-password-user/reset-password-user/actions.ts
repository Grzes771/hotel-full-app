import { createAction } from "typesafe-actions";
import { RESET_PASSWORD, CLEAR_RESET_PASSWORD_STATE } from "./consts";

export type ResetPasswordProps = {
  newPassword: object;
  resetPasswordLink: string;
};

export const resetPasswordStarted = createAction(
  RESET_PASSWORD.started,
  (newPassword, resetPasswordLink): ResetPasswordProps => ({
    newPassword,
    resetPasswordLink,
  })
)();

export const clearResetPasswordState = createAction(
  CLEAR_RESET_PASSWORD_STATE,
  () => ({})
)();
