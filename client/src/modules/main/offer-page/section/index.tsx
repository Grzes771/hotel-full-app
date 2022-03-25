import { EOfferPageContentKeys, TOfferPageContent } from "../utils";

import {
  ContainerSection1Style,
  ContainerSlideTextStyle,
  ContainerSlideImageStyle,
  Image,
} from "../index.styles";

const Fade = require("react-reveal/Fade");

type TOfferPageSection = {
  pageContent: TOfferPageContent;
};

export const OfferPageSection = ({
  pageContent,
}: TOfferPageSection): JSX.Element => {
  const TextContent = () => (
    <ContainerSlideTextStyle>
      <div>
        <Fade>
          <h1>{pageContent[EOfferPageContentKeys.TITLE]}</h1>
          <p>
            {pageContent[EOfferPageContentKeys.CONTENT].map((item: string) => (
              <span key={item}>{item}</span>
            ))}
          </p>
        </Fade>
      </div>
    </ContainerSlideTextStyle>
  );

  const ImageContent = () => (
    <ContainerSlideImageStyle>
      <div>
        <Fade>
          <Image src={pageContent[EOfferPageContentKeys.IMAGES]} alt={""} />
        </Fade>
      </div>
    </ContainerSlideImageStyle>
  );

  const displayContent = pageContent.reorder ? (
    <>
      <ImageContent />
      <TextContent />
    </>
  ) : (
    <>
      <TextContent />
      <ImageContent />
    </>
  );

  return (
    <ContainerSection1Style backgroundColor={pageContent.reorder}>
      {displayContent}
    </ContainerSection1Style>
  );
};
