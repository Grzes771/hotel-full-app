import { TValues, TErrors, TLoginSectionElement } from "./types";

import * as C from "./consts";

export const LoginSectionData = (
  values: TValues,
  errors: TErrors
): TLoginSectionElement[] => [
  {
    label: C.USERNAME_LABEL,
    id: C.USERNAME_ID,
    type: C.USERNAME_TYPE,
    name: C.USERNAME_NAME,
    placeholder: C.USERNAME_PLACEHOLDER,
    value: values.username,
    errors: !values.username ? errors.username : null,
  },
  {
    id: C.PASSWORD_ID,
    label: C.PASSWORD_LABEL,
    type: C.PASSWORD_TYPE,
    name: C.PASSWORD_NAME,
    placeholder: C.PASSWORD_PLACEHOLDER,
    value: values.password,
    errors: !values.password ? errors.password : null,
  },
];
