import React, { useState } from "react";
import { toast } from "react-toastify";

import { Write } from "./components/writeArticle";

import { Container } from "./index.styles";

export const WriteArticleMain = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  toast.configure();
  const submitForm = () => {
    setIsSubmitted(true);
  };
  return (
    <Container>
      {!isSubmitted ? (
        <Write submitForm={submitForm} />
      ) : (
        <>
          <Write submitForm={submitForm} />
        </>
      )}
    </Container>
  );
};

export default WriteArticleMain;
