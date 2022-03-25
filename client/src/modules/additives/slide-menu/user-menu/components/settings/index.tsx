//
import React, { useState } from "react";
import { toast } from "react-toastify";

import { UserSettings } from "./components/setting";

import { Container } from "./index.styles";

export const SettingFormMain = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  toast.configure();
  const submitForm = () => {
    setIsSubmitted(true);
  };

  return (
    <Container>
      {!isSubmitted ? (
        <UserSettings submitForm={submitForm} />
      ) : (
        <>
          <UserSettings submitForm={submitForm} />
        </>
      )}
    </Container>
  );
};

export default SettingFormMain;
