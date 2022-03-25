import React, { useState } from "react";
import { toast } from "react-toastify";

import CheckDate from "./checkDate";

import "react-toastify/dist/ReactToastify.css";
import { DivIndexMain } from "./index.styles";

const CheckDateMain = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  toast.configure();
  const submitForm = (): void => {
    setIsSubmitted(true);
  };

  return (
    <DivIndexMain>
      {!isSubmitted ? (
        <CheckDate submitForm={submitForm} />
      ) : (
        <div>
          <CheckDate submitForm={submitForm} />
        </div>
      )}
    </DivIndexMain>
  );
};

export default CheckDateMain;
