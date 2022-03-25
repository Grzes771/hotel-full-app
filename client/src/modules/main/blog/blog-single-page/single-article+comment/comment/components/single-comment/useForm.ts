import { useState, useEffect, ChangeEvent } from "react";
import { useDispatch } from "react-redux";

import { updateCommentDataStarted } from "../../../../../../../../store/blog/comments/update-comment/actions";

import { TUseFormReturningValues, TValues } from "./types";
import { INITIAL_VALUES } from "./consts";

const useForm = (
  callback: () => void,
  editedCommentId: string | undefined,
  articleId: string | undefined
): TUseFormReturningValues => {
  const [values, setValues] = useState<TValues>(INITIAL_VALUES);

  const dispatch = useDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(updateCommentDataStarted(values, editedCommentId, articleId));
  };

  return { handleChange, handleSubmit, values };
};

export default useForm;
