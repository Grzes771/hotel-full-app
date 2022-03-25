import { ChangeEvent } from "react";

export type TValues = {
  newPassword: string;
};
export type TErrors = {
  newPassword: string;
};

export type TUseFormReturningValues = {
  values: TValues;
  handleChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => void;
  handleSubmit: (e: React.SyntheticEvent) => void;
  errors: TErrors;
};

export type TNewPassword = {
  submitForm: () => void;
};
