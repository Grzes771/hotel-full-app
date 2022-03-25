import { Container, LandingTextMain, ParallaxContainer } from "./index.styles";

import { Parallax } from "react-parallax";

import { LANDING_PAGE_CONTENT, TLandingPageContent } from "./utils";
import * as C from "./consts";

import Background2 from "../../../img/foto20.jpg";
import { LandingPageSection } from "./section";

export const LandingPage = (): JSX.Element => {
  const displayContent = LANDING_PAGE_CONTENT.map(
    (pageContent: TLandingPageContent, index: number) => (
      <LandingPageSection key={index} pageContent={pageContent} />
    )
  );

  return (
    <Container>
      <Parallax bgImage={Background2} strength={300}>
        <div>
          <ParallaxContainer>
            <LandingTextMain>
              <span>
                {C.LANDING_PAGE_TITLE}
                <br />
                {C.LandingPageTitle2}
              </span>
            </LandingTextMain>
          </ParallaxContainer>
        </div>
      </Parallax>
      {displayContent}
    </Container>
  );
};

export default LandingPage;
