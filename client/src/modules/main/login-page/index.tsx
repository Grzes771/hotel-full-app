import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

import { useIsAuth } from "@hooks/use-is-auth";

import { tokenRX } from "@store/login-user/selectors";
import { LoginForm } from "./components/loginForm";

import { Container } from "./index.styles";
export const LoginFormMain = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { isLoggedIn } = useIsAuth();
  const token = useSelector(tokenRX);

  let navigate = useNavigate();

  const submitForm = () => {
    toast.configure();
    setIsSubmitted(true);
  };

  return (
    <Container>
      {token || isLoggedIn ? (
        <>
          {navigate("/")}
          {toast.success("Poprawnie zalogowano!")}
        </>
      ) : (
        <LoginForm submitForm={submitForm} />
      )}
    </Container>
  );
};

export default LoginFormMain;
