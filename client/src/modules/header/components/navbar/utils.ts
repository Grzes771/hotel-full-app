import * as C from "../../../../common/consts/routes";

import * as B from "./consts";

export type TNavbarListItem = {
  name: string;
  path: string;
};

export const NAVBAR_LIST_ITEMS = (isLoggedIn: boolean): TNavbarListItem[] => [
  {
    name: B.MAIN_PAGE_TITLE,
    path: C.LANDING_PAGE_ROUTE,
  },
  {
    name: B.OFFER_TITLE,
    path: C.OFFER_ROUTE,
  },
  {
    name: B.GALLERY_TITLE,
    path: C.GALLERY_ROUTE,
  },
  {
    name: B.RESERVATION_TITLE,
    path: C.RESERVATION_ROUTE,
  },
  {
    name: B.BLOG_TITLE,
    path: C.HOMEPAGE_BLOG_ROUTE,
  },
  {
    name: isLoggedIn ? B.LOG_OUT_TITLE : B.LOG_IN_TITLE,
    path: C.LOGIN_ROUTE,
  },
];

export const SCROLL_EVENT = "scroll";
