import { lazy } from "react";

import * as C from "../consts/routes";

const LandingPage = lazy(() => import("@modules/main/landing-page/index"));

const OfferPage = lazy(() => import("@modules/main/offer-page/index"));

const GalleryPage = lazy(() => import("@modules/main/gallery-page/index"));

const LoginForm = lazy(() => import("@modules/main/login-page/"));

const RemindForm = lazy(
  () => import("@modules/main/login-page/components/remind-page/")
);
const NewPassword = lazy(
  () => import("@modules/main/login-page/components/new-password")
);
const RegisterForm = lazy(
  () => import("@modules/main/login-page/components/register-page")
);
const ReservationPage = lazy(() => import("@modules/main/reservation-page"));
const UserSettings = lazy(
  () => import("@modules/additives/slide-menu/user-menu/components/settings")
);
const UserReservationList = lazy(
  () =>
    import("@modules/additives/slide-menu/user-menu/components/reservations")
);
const ReservationList = lazy(
  () =>
    import("@modules/additives/slide-menu/admin-menu/components/reservations")
);
const Write = lazy(
  () =>
    import(
      "@modules/additives/slide-menu/admin-menu/components/write-article-page/index"
    )
);
const Blog = lazy(() => import("@modules/main/blog/blog-home-page/index"));

const Single = lazy(
  () =>
    import("@modules/main/blog/blog-single-page/single-article+comment/index")
);
const UpdateArticle = lazy(
  () => import("@modules/main/blog/blog-edit-page/index")
);
export type TAppRoute = {
  path: string;
  element: any;
};

export const appRoutes = [
  { path: C.LANDING_PAGE_ROUTE, element: <LandingPage /> },
  { path: C.OFFER_ROUTE, element: <OfferPage /> },
  { path: C.GALLERY_ROUTE, element: <GalleryPage /> },
  { path: C.RESERVATION_ROUTE, element: <ReservationPage /> },
  { path: C.LOGIN_ROUTE, element: <LoginForm /> },
  { path: C.REMIND_ROUTE, element: <RemindForm /> },
  { path: C.REGISTER_ROUTE, element: <RegisterForm /> },
  { path: C.NEW_PASSWORD_ROUTE, element: <NewPassword /> },
  { path: C.USER_SETTINGS_ROUTE, element: <UserSettings /> },
  { path: C.USER_RESERVATION_LIST_ROUTE, element: <UserReservationList /> },
  { path: C.RESERVATION_LIST_ROUTE, element: <ReservationList /> },
  { path: C.WRITE_BLOG_ROUTE, element: <Write /> },
  { path: C.HOMEPAGE_BLOG_ROUTE, element: <Blog /> },
  { path: C.SINGLEPAGE_BLOG_ROUTE, element: <Single /> },
  { path: C.UPDATE_ARTICLE_BLOG_ROUTE, element: <UpdateArticle /> },
];
