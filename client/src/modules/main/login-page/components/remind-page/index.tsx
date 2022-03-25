import React, { useState } from "react";

import { RemindForm } from "./components/remind";

import { Container } from "./index.styles";

export const RemindFormMain = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  };
  return (
    <Container>
      {!isSubmitted ? (
        <RemindForm submitForm={submitForm} />
      ) : (
        <>
          <RemindForm submitForm={submitForm} />
        </>
      )}
    </Container>
  );
};

export default RemindFormMain;
