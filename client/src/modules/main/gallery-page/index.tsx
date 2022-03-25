import GallerySlider from "@additives/gallery-slider/index";
import { Container, ImageContainerStyle } from "./index.style";
import Image9 from "@img/foto9.jpg";
import {
  GALLERY_PAGE_CONTENT,
  TGalleryPageContent,
  EGalleryPageContentKeys,
} from "./utils";

const Fade = require("react-reveal/Fade");

const GalleryPage = (): JSX.Element => {
  const displayImages = GALLERY_PAGE_CONTENT.map(
    (arrItem: TGalleryPageContent, index: number) => (
      <div key={index}>
        <ImageContainerStyle>
          {arrItem[EGalleryPageContentKeys.IMAGES].map(
            (image: string, index: number) => (
              <Fade key={index}>
                <img src={image} alt={""} />
              </Fade>
            )
          )}
        </ImageContainerStyle>
      </div>
    )
  );

  return (
    <Container>
      <div>
        <GallerySlider />
        {displayImages}
        <Fade>
          <img src={Image9} alt={""} className="fullImage" />
        </Fade>
      </div>
    </Container>
  );
};

export default GalleryPage;
