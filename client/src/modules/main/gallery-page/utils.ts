import Image1 from "@img/foto1.jpg";
import Image2 from "@img/foto2.jpg";
import Image7 from "@img/foto7.jpg";
import Image8 from "@img/foto8.jpg";

export enum EGalleryPageContentKeys {
  IMAGES = "images",
}
export type TGalleryPageContent = {
  [EGalleryPageContentKeys.IMAGES]: string[];
};

export const GALLERY_PAGE_CONTENT: readonly TGalleryPageContent[] = [
  {
    [EGalleryPageContentKeys.IMAGES]: [Image2, Image1],
  },
  {
    [EGalleryPageContentKeys.IMAGES]: [Image7, Image8],
  },
];
