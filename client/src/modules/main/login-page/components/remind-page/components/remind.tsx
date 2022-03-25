import validate from "./validateInfo";
import useForm from "./useForm";

import { TRemindForm } from "./types";

import * as C from "./consts";
import {
  Button,
  BackgroundImage,
  BackgroundCover,
  WindowDiv,
  Form,
  Options,
} from "./index.styles";

export const RemindForm = ({ submitForm }: TRemindForm) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  const displayOptions = (
    <Options>
      <a href={C.LOGIN_HREF} style={{ float: "left" }}>
        {C.LOGIN_BUTTON_LABEL}
      </a>
      <a href={C.REGISTER_HREF} style={{ float: "right" }}>
        {C.REGISTER_BUTTON_LABEL}
      </a>
    </Options>
  );
  return (
    <BackgroundImage>
      <BackgroundCover>
        <WindowDiv>
          <h2>{C.REMIND_LABEL}</h2>
          <Form onSubmit={handleSubmit}>
            <label>{C.EMAIL_LABEL}</label>
            <input
              type={C.EMAIL_TYPE}
              name={C.EMAIL_NAME}
              placeholder={C.EMAIL_PLACEHOLDER}
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
            <Button type={C.BUTTON_SUBMIT}>{C.BUTTON_SUBMIT_LABEL}</Button>
          </Form>
          {displayOptions}
        </WindowDiv>
      </BackgroundCover>
    </BackgroundImage>
  );
};

export default RemindForm;
