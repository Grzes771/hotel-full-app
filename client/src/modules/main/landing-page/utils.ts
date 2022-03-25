import Image1 from "@img/foto1.jpg";
import Image2 from "@img/foto2.jpg";
import Image3 from "@img/foto3.jpg";
import Image4 from "@img/foto4.jpg";
import Image5 from "@img/foto5.jpg";
import Image6 from "@img/foto6.jpg";

import * as C from "./consts";

export enum ELandingPageContentKeys {
  IMAGES = "images",
  TITLE = "title",
  CONTENT = "content",
  SUBTITLE = "subtitle",
  CONTENTS = "contents",
}

export type TLandingPageContent = {
  [ELandingPageContentKeys.TITLE]: string[];
  [ELandingPageContentKeys.CONTENT]: string;
  [ELandingPageContentKeys.SUBTITLE]: string;
  [ELandingPageContentKeys.CONTENTS]: string[];
  [ELandingPageContentKeys.IMAGES]: string[];
};

export const LANDING_PAGE_CONTENT: readonly TLandingPageContent[] = [
  {
    [ELandingPageContentKeys.IMAGES]: [Image1, Image2],
    [ELandingPageContentKeys.TITLE]: C.TITLE1,
    [ELandingPageContentKeys.CONTENT]: C.CONTENT1,
    [ELandingPageContentKeys.SUBTITLE]: C.SUBTITLE1,
    [ELandingPageContentKeys.CONTENTS]: C.CONTENTS1,
  },
  {
    [ELandingPageContentKeys.IMAGES]: [Image3, Image4],
    [ELandingPageContentKeys.TITLE]: C.TITLE2,
    [ELandingPageContentKeys.CONTENT]: C.CONTENT2,
    [ELandingPageContentKeys.SUBTITLE]: C.SUBTITLE2,
    [ELandingPageContentKeys.CONTENTS]: C.CONTENTS2,
  },
  {
    [ELandingPageContentKeys.IMAGES]: [Image5, Image6],
    [ELandingPageContentKeys.TITLE]: C.TITLE3,
    [ELandingPageContentKeys.CONTENT]: C.CONTENT3,
    [ELandingPageContentKeys.SUBTITLE]: C.SUBTITLE3,
    [ELandingPageContentKeys.CONTENTS]: C.CONTENTS3,
  },
];
