import { useState, useEffect, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { resetPasswordStarted } from "@store/remind-password-user/reset-password-user/actions";
import { forgetPasswordMessageRX } from "@store/remind-password-user/selector";

import { TErrors, TUseFormReturningValues, TValues } from "./types";

export const ERRORS_INITIAL_VALUES = {
  newPassword: "",
};

const INITIAL_VALUES = {
  newPassword: "",
};

const useForm = (
  callback: () => void,
  validate: (values: TValues) => TErrors
): TUseFormReturningValues => {
  const [values, setValues] = useState<TValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<TErrors>(ERRORS_INITIAL_VALUES);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const params = useParams();
  const { token } = params;
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

  const tokenUser = useSelector(forgetPasswordMessageRX);

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    dispatch(resetPasswordStarted(values, token));
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
