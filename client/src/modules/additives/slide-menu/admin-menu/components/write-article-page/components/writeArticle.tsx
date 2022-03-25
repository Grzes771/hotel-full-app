import React, { useEffect, useState } from "react";

import useForm from "./useForm";
import validate from "./validateInfo";

import { Container, Button, WriteDiv } from "./index.styles";
import * as C from "./consts";

type TWriteProps = {
  submitForm: () => void;
};
export const Write = ({ submitForm }: TWriteProps) => {
  const {
    handleChange,
    values,
    selectedImage,
    handleSubmit,
    errors,
    handleOnClick,
    handleUploadImage,
  } = useForm(submitForm, validate);
  const [textareaValue, setTextareaValue] = useState<string>("");

  useEffect(() => {}, [handleChange]);

  const handleOnKeyDown = (e: React.KeyboardEvent<object>) => {
    if (e.key === C.E_KEY) setTextareaValue((prevState) => `${prevState}\n`);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h1>{C.IMAGE_ARTICLE_TITLE}</h1>
        {selectedImage && (
          <div>
            <img
              alt={C.IMAGE_ALT}
              width={C.IMAGE_WIDTH}
              src={C.IMAGE_SRC(selectedImage)}
            />
            <button onClick={() => handleOnClick()}>Remove</button>
          </div>
        )}
        <input
          type={C.INPUT_FILE_TYPE}
          name={C.INPUT_FILE_NAME}
          onChange={handleUploadImage}
        />
        <WriteDiv>
          <input
            placeholder={C.INPUT_TITLE_PLACEHOLDER}
            type={C.INPUT_TITLE_TYPE}
            autoFocus={true}
            name={C.INPUT_TITLE_NAME}
            value={values.title}
            onChange={handleChange}
          />
          {errors.title && <p>{errors.title}</p>}
        </WriteDiv>
        <WriteDiv>
          <textarea
            placeholder={C.TEXTAREA_PLACEHOLDER}
            data-type={C.TEXTAREA_DATA_TYPE}
            autoFocus={true}
            name={C.TEXTAREA_NAME}
            onChange={handleChange}
            value={values.text}
            onKeyDown={handleOnKeyDown}
          />
          {errors.text && <p>{errors.text}</p>}
        </WriteDiv>
        <Button type={C.BUTTON_SUBMIT_TYPE}>{C.BUTTON_SUBMIT_LABEL}</Button>
      </form>
    </Container>
  );
};
export default Write;
