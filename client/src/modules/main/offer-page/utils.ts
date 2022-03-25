import Image3 from "@img/foto3.jpg";
import Image5 from "@img/foto5.jpg";

import Image12 from "@img/foto12.jpg";
import Image1 from "@img/foto1.jpg";

import * as C from "./consts";

export enum EOfferPageContentKeys {
  IMAGES = "images",
  TITLE = "title",
  CONTENT = "content",
  REORDER = "reorder",
}

export type TOfferPageContent = {
  [EOfferPageContentKeys.TITLE]: string;
  [EOfferPageContentKeys.CONTENT]: string[];
  [EOfferPageContentKeys.IMAGES]: string;
  [EOfferPageContentKeys.REORDER]: boolean;
};

export const OFFER_PAGE_CONTENT: readonly TOfferPageContent[] = [
  {
    [EOfferPageContentKeys.IMAGES]: Image5,
    [EOfferPageContentKeys.TITLE]: C.TITLE1,
    [EOfferPageContentKeys.CONTENT]: C.CONTENT1,
    [EOfferPageContentKeys.REORDER]: false,
  },
  {
    [EOfferPageContentKeys.IMAGES]: Image3,
    [EOfferPageContentKeys.TITLE]: C.TITLE2,
    [EOfferPageContentKeys.CONTENT]: C.CONTENT2,
    [EOfferPageContentKeys.REORDER]: true,
  },
  {
    [EOfferPageContentKeys.IMAGES]: Image1,
    [EOfferPageContentKeys.TITLE]: C.TITLE3,
    [EOfferPageContentKeys.CONTENT]: C.CONTENT3,
    [EOfferPageContentKeys.REORDER]: false,
  },
  {
    [EOfferPageContentKeys.IMAGES]: Image12,
    [EOfferPageContentKeys.TITLE]: C.TITLE4,
    [EOfferPageContentKeys.CONTENT]: C.CONTENT4,
    [EOfferPageContentKeys.REORDER]: true,
  },
  {
    [EOfferPageContentKeys.IMAGES]: Image1,
    [EOfferPageContentKeys.TITLE]: C.TITLE5,
    [EOfferPageContentKeys.CONTENT]: C.CONTENT5,
    [EOfferPageContentKeys.REORDER]: false,
  },
];
