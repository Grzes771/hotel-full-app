import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { useState, useEffect, useCallback, ChangeEvent } from "react";
import { reservationUserStarted } from "@store/reservation/actions";

import { TValues, TErrors, TTouched, TUseFormReturningValues } from "./types";
import * as C from "./consts";

export const useForm = (
  callback: () => void,
  validate: (values: TValues) => TErrors
): TUseFormReturningValues => {
  const [values, setValues] = useState<TValues>(C.INITIAL_VALUES);
  const [errors, setErrors] = useState<TErrors>(C.ERRORS_INITIAL_VALUES);
  const [touched, setTouched] = useState<TTouched>(C.TOUCHED_INITIAL_VALUES);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ): void => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = useCallback(
    (e: React.SyntheticEvent): void => {
      e.preventDefault();
      toast.configure();

      const fieldAreFilled = Object.values(touched).some(
        (arrItem: boolean) => arrItem === false
      );

      if (fieldAreFilled) {
        toast.error(C.FIELDS_NOT_FILLED);
        return;
      }

      const isError = Object.values(errors).some(
        (arrItem: string) => arrItem.length > 0
      );

      if (isError) {
        toast.error(C.CHECK_ERRORS);
        return;
      }

      setErrors(validate(values));
      setIsSubmitting(true);
      dispatch(reservationUserStarted(values, startDate, endDate));
      toast.success(C.RESERVATION_APPROVED);
    },
    [errors, touched]
  );

  const setTouchValue = (key: string): void => {
    setTouched((prevState) => ({ ...prevState, [key]: true }));
  };

  const handleTouchedInputs = () => {
    if (startDate) setTouchValue(`startDate`);
    if (endDate) setTouchValue(`endDate`);
    if (values.username) setTouchValue(`username`);
    if (values.phone) setTouchValue(`phone`);
    if (values.amount) setTouchValue(`amount`);
    if (values.accommodationType) setTouchValue(`accommodationType`);
  };

  useEffect(() => {
    handleTouchedInputs();
  }, [values, startDate, endDate]);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors, isSubmitting, callback]);

  return {
    values,
    startDate,
    endDate,
    errors,
    touched,
    setStartDate,
    setEndDate,
    handleChange,
    handleSubmit,
  };
};
