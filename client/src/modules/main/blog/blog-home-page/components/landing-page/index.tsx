import { Parallax } from "react-parallax";

import Background2 from "@img/foto20.jpg";
import * as C from "./consts";
import { Container, LandingTextMain, ParallaxContainer } from "./index.styles";

export const Main = () => {
  return (
    <Container>
      <Parallax bgImage={Background2} strength={300}>
        <div>
          <ParallaxContainer>
            <LandingTextMain>
              <span>
                {C.ZIELONY_BUKOWIEC}
                <br />
                {C.BLOG}
              </span>
            </LandingTextMain>
          </ParallaxContainer>
        </div>
      </Parallax>
    </Container>
  );
};

export default Main;
