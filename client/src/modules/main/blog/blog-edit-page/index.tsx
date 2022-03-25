import React, { useState } from "react";
import { toast } from "react-toastify";
import HomePage from "../blog-home-page";

import { UpdateArticle } from "./components/updateArticle";

import { Container } from "./index.styles";
import * as C from "./components/consts";

export const UpdateArticleMain = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  toast.configure();
  const submitForm = () => {
    setIsSubmitted(true);
  };

  return (
    <Container>
      {!isSubmitted ? (
        <UpdateArticle submitForm={submitForm} />
      ) : (
        <>
          <HomePage />
          {toast.success(C.TOAST_SUCCESS_EDITED)}
        </>
      )}
    </Container>
  );
};

export default UpdateArticleMain;
