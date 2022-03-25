import React, { useState } from "react";
import { toast } from "react-toastify";

import { AddComment } from "./addComment";

import { Container } from "./index.styles";

export const AddCommentMain = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  toast.configure();
  const submitForm = () => {
    setIsSubmitted(true);
  };

  return (
    <Container>
      {!isSubmitted ? (
        <AddComment submitForm={submitForm} />
      ) : (
        <>
          <AddComment submitForm={submitForm} />
        </>
      )}
    </Container>
  );
};

export default AddCommentMain;
