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
    errors.email = C.EMAIL_FORMAT_ERROR;
  }
  return errors;
};
export default validateInfo;
