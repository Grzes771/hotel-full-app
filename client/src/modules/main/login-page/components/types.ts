import { ChangeEvent } from "react";

export type TValues = {
  username: string;
  password: string;
};
export type TErrors = {
  username: string;
  password: string;
};
export type TUseFormReturningValues = {
  values: TValues;
  handleChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => void;
  handleSubmit: (e: React.SyntheticEvent) => void;
  errors: TErrors;
};
export type TLoginFormProps = {
  submitForm: () => void;
};
export type TLoginSectionElement = {
  id: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  label: string;
  errors: string | null;
};
