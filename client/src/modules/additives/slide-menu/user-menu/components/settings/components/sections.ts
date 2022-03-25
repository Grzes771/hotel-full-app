import { TValues, TErrors, TSettingSectionElement } from "./types";

import * as C from "./consts";

export const SettingSectionData = (
  values: TValues,
  errors: TErrors
): TSettingSectionElement[] => [
  {
    label: C.USERNAME_LABEL,
    id: C.USERNAME_ID,
    type: C.USERNAME_TYPE,
    name: C.USERNAME_NAME,
    value: values.username,
    errors: !values.username ? errors.username : null,
  },
  {
    id: C.EMAIL_ID,
    label: C.EMAIL_LABEL,
    type: C.EMAIL_TYPE,
    name: C.EMAIL_NAME,
    value: values.email,
    errors: !values.email ? errors.email : null,
  },
];
