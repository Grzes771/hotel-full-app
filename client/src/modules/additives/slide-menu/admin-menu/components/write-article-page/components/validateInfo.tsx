import { TValues, TErrors } from "./types";
import * as C from "./consts";

export const validateInfo = (values: TValues): TErrors => {
  let errors = {} as TErrors;

  if (!values.image) {
    errors.image = C.ERROR_IMAGE;
  }
  if (!values.title) {
    errors.title = C.ERROR_TITLE;
  }
  if (!values.text) {
    errors.text = C.ERROR_TEXT;
  }
  return errors;
};
export default validateInfo;
