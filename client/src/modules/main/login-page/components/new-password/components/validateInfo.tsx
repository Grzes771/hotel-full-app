import { TValues, TErrors } from "./types";

import * as C from "./consts";
export const validateInfo = (values: TValues): TErrors => {
  let errors = {} as TErrors;

  if (!values.newPassword) {
    errors.newPassword = C.NEW_PASSWORD;
  }
  return errors;
};
export default validateInfo;
