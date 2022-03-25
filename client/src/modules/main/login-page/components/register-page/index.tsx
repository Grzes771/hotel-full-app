import React, { useState } from "react";
import { toast } from "react-toastify";

import { RegisterForm } from "./components/register";

import { Container } from "./index.styles";

export const RegisterFormMain = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  toast.configure();
  const submitForm = () => {
    setIsSubmitted(true);
  };
  return (
    <Container>
      {!isSubmitted ? (
        <RegisterForm submitForm={submitForm} />
      ) : (
        <>
          <RegisterForm submitForm={submitForm} />
          {toast.success("Rejestracja potwierdzona!")}
        </>
      )}
    </Container>
  );
};

export default RegisterFormMain;
