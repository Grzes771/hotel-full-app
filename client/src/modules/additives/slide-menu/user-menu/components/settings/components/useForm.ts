import { useState, useEffect, ChangeEvent } from "react";
import { useDispatch } from "react-redux";

import { updateUserDataStarted } from "@store/user-data/update-user-data/actions";

import { TValues, TErrors, TUseFormReturningValues } from "./types";
import { ERRORS_INITIAL_VALUES, INITIAL_VALUES } from "./consts";

const useForm = (
  callback: () => void,
  validate: (values: TValues) => TErrors
): TUseFormReturningValues => {
  const [values, setValues] = useState<TValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<TValues>(ERRORS_INITIAL_VALUES);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    dispatch(updateUserDataStarted(values));
  };

  const checkErrors = () => {
    if (Object.keys(errors).length === 0 && isSubmitting) return;
    callback();
  };

  useEffect(() => {
    checkErrors();
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
