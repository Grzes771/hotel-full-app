import { ChangeEvent } from "react";

export type TValues = {
  username: string;
  email: string;
};

export type TErrors = {
  username: string;
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
export type TSettingFormProps = {
  submitForm: () => void;
};

export type TSettingSectionElement = {
  id: string;
  type: string;
  name: string;

  value: string;
  label: string;
  errors: string | null;
};
