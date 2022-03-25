import { useState, useEffect, useCallback, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { commentUserStarted } from "../../../../../../../../store/blog/comments/actions";

import { INITIAL_VALUES, TOUCHED_INITIAL_VALUES } from "./consts";
import { TValues, TTouched } from "./types";

type TUseFormReturningValues = {
  values: TValues;

  touched: TTouched;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.SyntheticEvent) => void;
};

export const useForm = (callback: () => void): TUseFormReturningValues => {
  const [values, setValues] = useState<TValues>(INITIAL_VALUES);
  const [touched, setTouched] = useState<TTouched>(TOUCHED_INITIAL_VALUES);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const params = useParams();
  const { articleId } = params;

  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
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
      setIsSubmitting(true);
      dispatch(commentUserStarted(values.commentText, articleId));
      values.commentText = "";
    },
    [touched]
  );

  const setTouchValue = (key: string): void => {
    setTouched((prevState: TTouched) => ({ ...prevState, [key]: true }));
  };

  const handleTouchedInputs = () => {
    if (values.commentText) setTouchValue(`commentText`);
  };

  useEffect(() => {
    handleTouchedInputs();
  }, [values]);

  useEffect(() => {
    if (isSubmitting) {
      callback();
    }
  }, [isSubmitting, callback]);

  return {
    values,
    touched,
    handleChange,
    handleSubmit,
  };
};
