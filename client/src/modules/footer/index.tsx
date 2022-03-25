import React from "react";

import { Container } from "./index.styles";
import * as C from "./consts";

export const Footer = () => {
  return (
    <Container>
      <div>
        <ul>
          <li>{C.COMPANY_NAME}</li>
          <li>{C.COMPANY_ADDRESS}</li>
          <li>{C.COMPANY_NUMBER}</li>
          <li>{C.ALL_RIGHTS_RESERVER}</li>
        </ul>
      </div>
    </Container>
  );
};
