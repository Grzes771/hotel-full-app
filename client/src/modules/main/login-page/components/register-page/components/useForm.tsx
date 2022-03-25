import { useState, useEffect, ChangeEvent } from "react";
import { useDispatch } from "react-redux";

import { registerUserStarted } from "@store/register-user/actions";

import { TUseFormReturningValues, TValues, TErrors } from "./types";

import { ERRORS_INITIAL_VALUES, INITIAL_VALUES } from "./consts";

const useForm = (
  callback: () => void,
  validate: (values: TValues) => TErrors
): TUseFormReturningValues => {
  const [values, setValues] = useState<TValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<TValues>(ERRORS_INITIAL_VALUES);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    dispatch(registerUserStarted(values));
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
