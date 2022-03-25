import React from "react";
import DatePicker from "react-datepicker";
import { useForm } from "./useForm";
import { validate } from "./validateInfo";
import {
  DatePickerInputData,
  MidSectionData,
  SelectInputsData,
  ButtonsData,
  TButtonsData,
} from "./sections";
import {
  TDatePickerInputDataElement,
  TMidSectionElement,
  TSelectInputsData,
} from "./types";
import "react-datepicker/dist/react-datepicker.css";
import { Container, Container2, Button, P } from "./index.styles";

import * as C from "./consts";

type TCheckDateProps = {
  submitForm: () => void;
};

export const CheckDate = ({ submitForm }: TCheckDateProps) => {
  const {
    values,
    startDate,
    endDate,
    errors,
    touched,
    setStartDate,
    setEndDate,
    handleChange,
    handleSubmit,
  } = useForm(submitForm, validate);

  const displayDatePickerInputs = DatePickerInputData(
    startDate,
    endDate,
    touched,
    setStartDate,
    setEndDate
  ).map((arrItem: TDatePickerInputDataElement) => (
    <div className={arrItem.className} key={arrItem.id}>
      <label htmlFor={arrItem.id}>{arrItem.label}</label>
      <Container2>
        <DatePicker
          selected={arrItem.selected}
          onChange={arrItem.onChange}
          name={arrItem.id}
          id={arrItem.id}
          placeholderText={arrItem.placeholder}
          minDate={arrItem.minDate}
          disabled={arrItem.disabled}
        />
      </Container2>
      {arrItem.touched && arrItem.error && <P>{arrItem.error}</P>}
    </div>
  ));

  const displayMidSection = MidSectionData(values, errors, touched).map(
    (arrItem: TMidSectionElement) => (
      <div className={C.CLASS_NAME} key={arrItem.id}>
        <label htmlFor={arrItem.id}>{arrItem.label}</label>
        <input
          type={arrItem.type}
          name={arrItem.id}
          placeholder={arrItem.placeholder}
          id={arrItem.id}
          value={arrItem.value}
          onChange={handleChange}
        />

        {arrItem.touched && arrItem.error && <P>{arrItem.error}</P>}
      </div>
    )
  );

  const displaySelectInputs = SelectInputsData(
    values,
    errors,
    touched,
    C.PLACES_AMOUNT_OPTIONS,
    C.ACCOMMODATION_OPTION
  ).map((arrItem: TSelectInputsData) => (
    <div className={C.CLASS_NAME} key={arrItem.id}>
      <label htmlFor={arrItem.id}>{arrItem.label}</label>
      <select
        defaultValue={""}
        name={arrItem.id}
        id={arrItem.id}
        onChange={handleChange}
        value={undefined}
      >
        {arrItem.options}
      </select>
    </div>
  ));

  const displayButtons = ButtonsData().map(
    (arrItem: TButtonsData, id: number) => (
      <Button type={arrItem.type} key={id}>
        {arrItem.label}
      </Button>
    )
  );

  return (
    <Container>
      <div>
        <div>
          <div>
            <div>
              <h2>REZERWUJ TERMIN</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <div>{displayDatePickerInputs}</div>
                <div>{displayMidSection}</div>
                <div>{displaySelectInputs}</div>
              </div>
              <div>{displayButtons}</div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CheckDate;
