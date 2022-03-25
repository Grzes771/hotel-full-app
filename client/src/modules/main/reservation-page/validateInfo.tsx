import { TValues, TErrors } from "./types";
import * as C from "./consts";

export const validate = (values: TValues): TErrors => {
  let errors = {} as TErrors;

  if (!values.username.trim()) {
    errors.username = C.ERROR_USERNAME;
  }
  if (!values.phone) {
    errors.phone = C.ERROR_PHONE;
  } else if (values.phone.length < 8) {
    errors.phone = C.ERROR_PHONE_LENGTH;
  }
  if (parseInt(values.amount) === 0) {
    errors.amount = C.ERROR_AMOUNT;
  }
  return errors;
};
