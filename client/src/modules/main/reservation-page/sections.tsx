import { Dispatch, SetStateAction } from "react";
import {
  TValues,
  TErrors,
  TSelectOptions,
  TTouched,
  TDatePickerInputDataElement,
  TMidSectionElement,
  TSelectInputsData,
} from "./types";
import * as C from "./consts";

export const DatePickerInputData = (
  startDate: Date | null,
  endDate: Date | null,
  touched: TTouched,
  setStartDate: Dispatch<SetStateAction<Date | null>>,
  setEndDate: Dispatch<SetStateAction<Date | null>>
): TDatePickerInputDataElement[] => [
  {
    className: C.CLASS_NAME,
    label: C.START_DATE_LABEL,
    selected: startDate,
    onChange: (date: Date) => setStartDate(date),
    id: C.START_DATE_ID,
    minDate: new Date(),
    error: !startDate ? C.ENTER_DATE : null,
    touched: !!touched.startDate,
    placeholder: C.START_DATE_PLACEHOLDERF,
  },
  {
    className: C.CLASS_NAME,
    label: C.END_DATE_LABEL,
    selected: endDate,
    onChange: (date: Date) => setEndDate(date),
    id: C.END_DATE_ID,
    minDate: new Date(
      (startDate ? startDate : new Date()).getTime() + 1 * 24 * 60 * 60 * 1000
    ),
    placeholder: C.END_DATE_PLACEHOLDERF,
    error: !endDate ? C.ENTER_DATE : null,
    touched: !!touched.endDate,
    disabled: !startDate,
  },
];

export const MidSectionData = (
  values: TValues,
  errors: TErrors,
  touched: TTouched
): TMidSectionElement[] => [
  {
    id: C.USERNAME_ID,
    label: C.USERNAME_LABEL,
    type: C.TYPE_TEXT,
    placeholder: C.USERNAME_PLACEHOLDER,
    value: values.username,
    error: !values.username ? C.REQUIRED_FIELD : null,
    touched: !!touched.username,
  },
  {
    id: C.PHONE_ID,
    label: C.PHONE_LABEL,
    type: C.TYPE_PHONE,
    placeholder: C.PHONE_PLACEHOLDER,
    value: values.phone,
    error: !values.phone ? C.REQUIRED_FIELD : null,
    touched: !!touched.phone,
  },
];

export const SelectInputsData = (
  values: TValues,
  errors: TErrors,
  touched: TTouched,
  amountOptions: TSelectOptions[],
  accommodationOptions: TSelectOptions[]
): TSelectInputsData[] => [
  {
    id: C.TITLE_DATA_ID,
    label: C.TITLE_DATA_LABEL,
    placeholder: C.TITLE_DATA_PLACEHOLDER,
    value: values.amount.length ? values.amount : undefined,
    options: amountOptions.map(
      (arrItem: { value: string; label: string }, index: number) => (
        <option
          key={arrItem.value}
          value={arrItem.value}
          disabled={index === 0}
        >
          {arrItem.label}
        </option>
      )
    ),
    error: errors.amount,
    touched: !!touched.amount,
  },
  {
    id: C.TITLE_ACCOMMODATION_TYPE_ID,
    label: C.TITLE_ACCOMMODATION_TYPE_LABEL,
    placeholder: C.TITLE_ACCOMMODATION_TYPE_PLACEHOLDER,
    value: values.accommodationType ?? undefined,
    options: accommodationOptions.map(
      (arrItem: { value: string; label: string }, index: number) => (
        <option
          key={arrItem.value}
          value={arrItem.value}
          disabled={index === 0}
        >
          {arrItem.label}
        </option>
      )
    ),
    error: errors.accommodationType,
    touched: !!touched.accommodationType,
  },
];

export type TButtonsData = {
  type: "submit" | "button";
  label: string;
};

export const ButtonsData = (): TButtonsData[] => [
  {
    type: C.BUTTON_TYPE_SUBMIT,
    label: C.BUTTON_LABEL_SUBMIT,
  },
];
