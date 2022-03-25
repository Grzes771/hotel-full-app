import React, { useState } from "react";
import { NewPassword } from "./components/newPassword";

import { Container } from "./index.styles";

export const NewPasswordMain = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  };
  return (
    <Container>
      {!isSubmitted ? (
        <NewPassword submitForm={submitForm} />
      ) : (
        <>
          <NewPassword submitForm={submitForm} />
        </>
      )}
    </Container>
  );
};

export default NewPasswordMain;
