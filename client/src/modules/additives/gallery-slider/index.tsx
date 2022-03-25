import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Container from "./index.styles";
const images = [
  {
    original: "https://i.ibb.co/6Whr9LX/11.jpg",
    thumbnail: "https://i.ibb.co/s9QjNHG/11thum.jpg",
  },
  {
    original: "https://i.ibb.co/nb2DVwP/22.jpg",
    thumbnail: "https://i.ibb.co/bmc1d22/foto261.jpg",
  },
  {
    original: "https://i.ibb.co/f0CkQxQ/foto27.jpg",
    thumbnail: "https://i.ibb.co/wM328c6/foto271.jpg",
  },
];

const GallerySlider = () => {
  return (
    <div>
      <Container>
        <ImageGallery items={images} />
      </Container>
    </div>
  );
};
export default GallerySlider;
