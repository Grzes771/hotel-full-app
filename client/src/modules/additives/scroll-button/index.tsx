import React from "react";
import { useState, useEffect } from "react";
import { SCROLL_EVENT, SMOOTH_SCROLL_BEHAVIOR } from "./utils";
import { Container, Icon } from "./index.styles";

export const ScrollButton = () => {
  const [scroll, setScroll] = useState(false);

  //scroll to top
  const ScrollButtonUp = () => {
    window.scrollTo({ behavior: SMOOTH_SCROLL_BEHAVIOR, top: 0 });
  };

  //show when 600px from top
  const ShowTheButton = () => {
    if (document.documentElement.scrollTop >= 600) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const handleShowButton = () => {
    ShowTheButton();
  };

  // run handleShowButton when changing state with ShowTheButton
  useEffect(() => {
    window.addEventListener(SCROLL_EVENT, handleShowButton);
    return () => {
      window.removeEventListener(SCROLL_EVENT, handleShowButton);
    };
  }, [scroll, ShowTheButton]);

  return (
    <Container {...{ scroll }}>
      <button onClick={ScrollButtonUp} style={{}}>
        <div>
          <Icon />
        </div>
      </button>
    </Container>
  );
};
