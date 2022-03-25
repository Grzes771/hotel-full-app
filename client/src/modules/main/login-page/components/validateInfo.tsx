import { TValues, TErrors } from "./types";

import * as C from "./consts";

export const validateInfo = (values: TValues): TErrors => {
  let errors = {} as TErrors;

  if (!values.username) {
    errors.username = C.USERNAME_ERROR;
  }

  if (!values.password) {
    errors.password = C.PASSWORD_ERROR;
  } else if (values.password.length < 6) {
    errors.password = C.PASSWORD_ERROR_TERMS;
  }
  return errors;
};
export default validateInfo;
