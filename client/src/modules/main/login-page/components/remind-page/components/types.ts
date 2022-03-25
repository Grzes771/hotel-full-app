import { ChangeEvent } from "react";

export type TRemindForm = {
  submitForm: () => void;
};

export type TValues = {
  email: string;
};
export type TErrors = {
  email: string;
};

export type TUseFormReturningValues = {
  values: TValues;
  handleChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => void;
  handleSubmit: (e: React.SyntheticEvent) => void;
  errors: TErrors;
};
