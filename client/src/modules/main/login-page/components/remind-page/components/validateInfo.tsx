import { TValues, TErrors } from "./types";
import * as C from "./consts";
export const validateInfo = (values: TValues): TErrors => {
  let errors = {} as TErrors;

  if (!values.email) {
    errors.email = C.EMAIL_ERROR;
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = C.EMAIL_ERROR_TERMS;
  }
  return errors;
};
export default validateInfo;
