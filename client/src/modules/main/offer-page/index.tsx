import { OfferPageSection } from "./section/index";

import { OFFER_PAGE_CONTENT, TOfferPageContent } from "./utils";

import { Container, MainImageStyle } from "./index.styles";

const OfferPage = (): JSX.Element => {
  const displayContent = OFFER_PAGE_CONTENT.map(
    (pageContent: TOfferPageContent, index: number) => (
      <OfferPageSection pageContent={pageContent} key={index} />
    )
  );

  return (
    <Container>
      <MainImageStyle>
        <div></div>
      </MainImageStyle>
      {displayContent}
    </Container>
  );
};

export default OfferPage;
