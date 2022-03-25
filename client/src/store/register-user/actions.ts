import { createAction } from "typesafe-actions";

import {
  REGISTER_USER,
  CLEAR_REGISTER_USER_STATE,
  GET_USER_SETTINGS,
} from "./consts";
import { TValues } from "../../modules/main/login-page/components/register-page/components/types";

type RegisterUserProps = {
  user: TValues;
};

type TGetUserSettingsProps = {
  skip: number;
  take: number;
};

export const registerUserStarted = createAction(
  REGISTER_USER.started,
  (user): RegisterUserProps => ({
    user,
  })
)();
export const getUserSettingsStarted = createAction(
  GET_USER_SETTINGS.started,
  (skip, take): TGetUserSettingsProps => ({ skip, take })
)();

export const clearRegisterUserState = createAction(
  CLEAR_REGISTER_USER_STATE,
  () => ({})
)();
