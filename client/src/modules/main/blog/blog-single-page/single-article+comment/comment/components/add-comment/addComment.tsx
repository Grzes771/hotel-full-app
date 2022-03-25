import React from "react";

import { useForm } from "./useForm";

import { Form } from "./index.styles";
import * as C from "./consts";

type TCheckDateProps = {
  submitForm: () => void;
};

export const AddComment = ({ submitForm }: TCheckDateProps) => {
  const { values, handleChange, handleSubmit } = useForm(submitForm);
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div>
          <p>{C.ADD_COMMENT_LABEL}</p>
          <textarea
            placeholder={C.ADD_COMMENT_PLACEHOLDER}
            name={C.ADD_COMMENT_NAME}
            data-type={C.ADD_COMMENT_TYPE}
            id={C.ADD_COMMENT_ID}
            value={values.commentText}
            onChange={handleChange}
          ></textarea>
          <button type={C.BUTTON_SUBMIT}>{C.BUTTON_LABEL}</button>
        </div>
      </Form>
    </>
  );
};

export default AddComment;
