import { TErrors, TRegisterSectionElement, TValues } from "./types";

import * as C from "./consts";

export const RegisterSectionData = (
  values: TValues,
  errors: TErrors
): TRegisterSectionElement[] => [
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
    label: C.EMAIL_LABEL,
    id: C.EMAIL_ID,
    type: C.EMAIL_TYPE,
    name: C.EMAIL_NAME,
    placeholder: C.EMAIL_PLACEHOLDER,
    value: values.email,
    errors: !values.email ? errors.email : null,
  },
  {
    label: C.PASSWORD_LABEL,
    id: C.PASSWORD_ID,
    type: C.PASSWORD_TYPE,
    name: C.PASSWORD_NAME,
    placeholder: C.PASSWORD_PLACEHOLDER,
    value: values.password,
    errors: !values.password ? errors.password : null,
  },
  {
    label: C.PASSWORD2_LABEL,
    id: C.PASSWORD2_ID,
    type: C.PASSWORD2_TYPE,
    name: C.PASSWORD2_NAME,
    placeholder: C.PASSWORD2_PLACEHOLDER,
    value: values.password2,
    errors: values.password !== values.password2 ? errors.password2 : null,
  },
];
