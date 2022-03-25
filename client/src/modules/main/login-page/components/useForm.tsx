import { useState, useEffect, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { loginUserStarted } from "@store/login-user/actions";
import { loginUserIsErrorRX } from "@store/login-user/selectors";

import { TValues, TErrors, TUseFormReturningValues } from "./types";

export const ERRORS_INITIAL_VALUES = {
  username: "",
  password: "",
};
const INITIAL_VALUES = {
  username: "",
  password: "",
};
const useForm = (
  callback: () => void,
  validate: (values: TValues) => TErrors
): TUseFormReturningValues => {
  const [values, setValues] = useState<TValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<TErrors>(ERRORS_INITIAL_VALUES);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useDispatch();

  const loginUserIsError = useSelector(loginUserIsErrorRX);
  useEffect(() => {
    if (loginUserIsError) toast.dark(loginUserIsError);
  }, [loginUserIsError]);

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
    dispatch(loginUserStarted(values));
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
