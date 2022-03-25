import validate from "./validateInfo";
import useForm from "./useForm";

import { TNewPassword } from "./types";

import * as C from "./consts";
import {
  Button,
  BackgroundImage,
  BackgroundCover,
  WindowDiv,
  Form,
  Options,
} from "./index.styles";

export const NewPassword = ({ submitForm }: TNewPassword) => {
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
          <h2>{C.NEW_PASSWORD_LABEL}</h2>

          <Form onSubmit={handleSubmit}>
            <input
              type={C.NEW_PASSWORD_TYPE}
              name={C.NEW_PASSWORD_NAME}
              placeholder={C.NEW_PASSWORD_PLACEHOLDER}
              value={values.newPassword}
              onChange={handleChange}
            />
            {errors.newPassword && <p>{errors.newPassword}</p>}
            <Button type={C.BUTTON_TYPE}>{C.BUTTON_LABEL}</Button>
          </Form>
          {displayOptions}
        </WindowDiv>
      </BackgroundCover>
    </BackgroundImage>
  );
};

export default NewPassword;
