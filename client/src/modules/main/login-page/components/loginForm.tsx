import useForm from "./useForm";
import validate from "./validateInfo";
import { LoginSectionData } from "./sections";

import { TLoginFormProps, TLoginSectionElement } from "./types";

import * as C from "./consts";
import {
  Button,
  BackgroundImage,
  BackgroundCover,
  WindowDiv,
  Form,
  Options,
  FormFieldsContainer,
  ErrorP,
} from "./index.styles";
export const LoginForm = ({ submitForm }: TLoginFormProps) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  const displayLoginSection = LoginSectionData(values, errors).map(
    (arrItem: TLoginSectionElement) => (
      <div key={arrItem.id}>
        <label htmlFor={arrItem.id}>{arrItem.label}</label>
        <input
          type={arrItem.type}
          name={arrItem.name}
          placeholder={arrItem.placeholder}
          value={arrItem.value}
          onChange={handleChange}
        />
        {arrItem.errors && <ErrorP>{arrItem.errors}</ErrorP>}
      </div>
    )
  );
  const displayOptions = (
    <Options>
      <a href={C.REMIND_HREF}>{C.REMIND_BUTTON_LABEL}</a>
      <a href={C.REGISTER_HREF} style={{ float: "right" }}>
        {C.REGISTER_BUTTON_LABEL}
      </a>
    </Options>
  );

  return (
    <BackgroundImage>
      <BackgroundCover>
        <WindowDiv>
          <div>
            <h2>{C.LOGIN_MAIN_LABEL}</h2>
          </div>
          <Form onSubmit={handleSubmit}>
            <FormFieldsContainer>{displayLoginSection}</FormFieldsContainer>
            <Button type={C.LOGIN_BUTTON_SUBMIT}>{C.LOGIN_BUTTON_LABEL}</Button>
          </Form>
          {displayOptions}
        </WindowDiv>
      </BackgroundCover>
    </BackgroundImage>
  );
};

export default LoginForm;
