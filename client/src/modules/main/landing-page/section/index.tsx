import { ELandingPageContentKeys, TLandingPageContent } from "../utils";

import { LandPageText, SliderImage } from "./index.styles";

const Fade = require("react-reveal/Fade");

type TLandingPageSection = {
  pageContent: TLandingPageContent;
};

export const LandingPageSection = ({
  pageContent,
}: TLandingPageSection): JSX.Element => (
  <>
    <LandPageText>
      <div>
        <Fade>
          {pageContent[ELandingPageContentKeys.TITLE].map((item: string) => (
            <h1 key={item}>{item}</h1>
          ))}
          <p>{pageContent[ELandingPageContentKeys.CONTENT]}</p>
          <h3>{pageContent[ELandingPageContentKeys.SUBTITLE]}</h3>
          {pageContent[ELandingPageContentKeys.CONTENTS].map((item: string) => (
            <p key={item}>{item}</p>
          ))}
        </Fade>
      </div>
    </LandPageText>
    {
      <div>
        <SliderImage>
          {pageContent[ELandingPageContentKeys.IMAGES].map(
            (image: string, index: number) => (
              <Fade key={index}>
                <img src={image} alt={""} />
              </Fade>
            )
          )}
        </SliderImage>
      </div>
    }
  </>
);
