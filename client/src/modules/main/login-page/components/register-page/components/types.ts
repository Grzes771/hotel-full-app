import { ChangeEvent } from "react";

export type TValues = {
  username: string;
  email: string;
  password: string;
  password2: string;
};

export type TErrors = {
  username: string;
  email: string;
  password: string;
  password2: string;
};

export type TRegisterFormProps = {
  submitForm: () => void;
};

export type TRegisterSectionElement = {
  id: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  errors: string | null;
  label: string;
};

export type TUseFormReturningValues = {
  values: TValues;
  handleChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => void;
  handleSubmit: (e: React.SyntheticEvent) => void;
  errors: TErrors;
};
