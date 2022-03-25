import { RegisterSectionData } from "./sections";
import useForm from "./useForm";
import validate from "./validateInfo";

import { TRegisterFormProps, TRegisterSectionElement } from "./types";

import * as C from "./consts";
import {
  Button,
  BackgroundImage,
  BackgroundCover,
  WindowDiv,
  Form,
  Options,
  Inputs,
  P,
} from "./index.styles";

export const RegisterForm = ({ submitForm }: TRegisterFormProps) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  const displayRegisterSection = RegisterSectionData(values, errors).map(
    (arrItem: TRegisterSectionElement) => (
      <div>
        <label>{arrItem.label}</label>
        <input
          type={arrItem.type}
          name={arrItem.name}
          placeholder={arrItem.placeholder}
          value={arrItem.value}
          onChange={handleChange}
        />
        {arrItem.errors && <P>{arrItem.errors}</P>}
      </div>
    )
  );

  return (
    <BackgroundImage>
      <BackgroundCover>
        <WindowDiv>
          <h2>{C.REGISTER_MAIN_LABEL}</h2>
          <Form onSubmit={handleSubmit}>
            <Inputs>{displayRegisterSection}</Inputs>
            <Button type={C.REGISTER_BUTTON_SUBMIT}>
              {C.REGISTER_BUTTON_LABEL}
            </Button>
          </Form>
          <Options>
            <a href={C.BACK_TO_LOGIN_HREF}>{C.BACK_TO_LOGIN}</a>
          </Options>
        </WindowDiv>
      </BackgroundCover>
    </BackgroundImage>
  );
};

export default RegisterForm;
