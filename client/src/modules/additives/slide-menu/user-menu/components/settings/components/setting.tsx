import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import useForm from "./useForm";
import validate from "./validateInfo";

import { getUserDataStarted } from "@store/user-data/actions";
import { userDataRX } from "@store/user-data/selectors";
import { SettingSectionData } from "./sections";

import { TSettingFormProps, TSettingSectionElement } from "./types";
import { Container, SettingsTitle, Form, Button } from "./index.styles";
import * as C from "./consts";

export const UserSettings = ({ submitForm }: TSettingFormProps) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  const dispatch = useDispatch();
  const fetchedUserData = useSelector(userDataRX);
  const actualUserData = {
    username: fetchedUserData?.username,
    email: fetchedUserData?.email,
  };

  useEffect(() => {
    dispatch(getUserDataStarted());
  }, []);

  const displaySettingSection = SettingSectionData(values, errors).map(
    (arrItem: TSettingSectionElement) => (
      <>
        <label>{arrItem.label}</label>
        <input
          type={arrItem.type}
          placeholder={
            (arrItem.id === C.USERNAME_ID
              ? actualUserData?.username
              : actualUserData?.email) ?? ""
          }
          name={arrItem.name}
          onChange={handleChange}
          value={arrItem.value}
        />
        {errors.username && <p>{arrItem.errors}</p>}
      </>
    )
  );

  return (
    <Container>
      <div>
        <SettingsTitle>
          <span>{C.SETTING_TITLE}</span>
        </SettingsTitle>
        <Form onSubmit={handleSubmit}>
          {displaySettingSection}
          <Button type={C.BUTTON_TYPE}>{C.BUTTON_LABEL}</Button>
        </Form>
      </div>
    </Container>
  );
};

export default UserSettings;
