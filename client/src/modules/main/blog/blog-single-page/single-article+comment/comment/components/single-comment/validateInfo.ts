import { TValues, TErrors } from "./types";
import * as C from "./consts";

export const validateInfo = (values: TValues): TErrors => {
  let errors = {} as TErrors;

  if (!values.commentText) {
    errors.commentText = C.ERROR_EMPTY_TEXT;
  }

  return errors;
};
export default validateInfo;
