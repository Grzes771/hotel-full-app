import { ChangeEvent, Dispatch, SetStateAction } from "react";

export type TValues = {
  username: string;
  phone: string;
  amount: string;
  accommodationType: string;
};

export type TErrors = Record<keyof TValues, string>;

export type TTouched = Record<keyof TValues, boolean> & {
  startDate: boolean;
  endDate: boolean;
};

export type TSelectOptions = { value: string; label: string };

export type TDatePickerInputDataElement = {
  id: string;
  label: string;
  placeholder: string;
  className: string;
  selected: Date | null;
  onChange: (date: Date) => void;
  minDate: Date;
  error: string | null;
  touched: boolean;
  disabled?: boolean;
};

export type TMidSectionElement = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  error: string | null;
  touched: boolean;
};

export type TSelectInputsData = Omit<TMidSectionElement, "type" | "value"> & {
  options: JSX.Element[];
  value: string | undefined;
};

export type TUseFormReturningValues = {
  values: TValues;
  startDate: Date | null;
  endDate: Date | null;
  errors: TErrors;
  touched: TTouched;
  setStartDate: Dispatch<SetStateAction<Date | null>>;
  setEndDate: Dispatch<SetStateAction<Date | null>>;
  handleChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => void;
  handleSubmit: (e: React.SyntheticEvent) => void;
};
