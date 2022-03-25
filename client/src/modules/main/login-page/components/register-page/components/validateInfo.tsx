import { TValues, TErrors } from "./types";
import * as C from "./consts";

export const validateInfo = (values: TValues): TErrors => {
  let errors = {} as TErrors;

  if (!values.username) {
    errors.username = C.USERNAME_ERROR;
  }
  if (!values.email) {
    errors.email = C.EMAIL_ERROR;
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = C.EMAIL_ERROR_TERMS;
  }
  if (!values.password) {
    errors.password = C.PASSWORD_ERROR;
  } else if (values.password.length < 6) {
    errors.password = C.PASSWORD_ERROR_TERMS;
  }

  if (!values.password2) {
    errors.password2 = C.PASSWORD2_ERROR;
  } else if (values.password2 !== values.password) {
    errors.password2 = C.PASSWORD2_ERROR_TERMS;
  }
  return errors;
};
export default validateInfo;
