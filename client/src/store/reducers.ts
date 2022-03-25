import { combineReducers } from "redux";

import { TReservationUserState, reservationUser } from "./reservation/reducer";
import { LoginUserState, loginUser } from "./login-user/reducer";
import { TRegisterUserState, registerUser } from "./register-user/reducer";
import { LogoutUserState, logoutUser } from "./logout-user/reducers";
import { CheckAuthState, checkAuth } from "./isAuth/reducers";
import {
  resetPassword,
  ResetPasswordState,
} from "./remind-password-user/reset-password-user/reducer";
import {
  forgetPassword,
  ForgetPasswordState,
} from "./remind-password-user/reducer";
import { getUserData, TGetUserDataState } from "./user-data/reducer";
import {
  updateUserData,
  TUpdateUserDataState,
} from "./user-data/update-user-data/reducer";
import { newArticle, TArticleState } from "./blog/write-article/reducer";
import {
  getSingleArticleData,
  TGetSingleArticleDataState,
} from "./blog/single-article/reducer";
import { commentUser, TCommentUserState } from "./blog/comments/reducer";
import { singleLike, TSingleLikeState } from "./blog/add-delete-like/reducer";
import {
  TUpdateCommentDataState,
  updateCommentData,
} from "./blog/comments/update-comment/reducer";
import {
  TUpdateArticleDataState,
  updateArticleData,
} from "./blog/update-article/reducer";
import {
  getArticleLikesData,
  TGetArticleLikesDataState,
} from "./blog/add-delete-like/get-likes-amount/reducer";
import {
  singleCommentLike,
  TSingleCommentLikeState,
} from "./blog/comments/add-delete-like-comment/reducer";
import {
  getCommentLikesData,
  TGetArticleCommentLikesDataState,
} from "./blog/comments/add-delete-like-comment/get-likes-comment-amount/reducer";

export type AppState = {
  reservationUser: TReservationUserState;
  loginUser: LoginUserState;
  registerUser: TRegisterUserState;
  logoutUser: LogoutUserState;
  checkAuth: CheckAuthState;
  resetPassword: ResetPasswordState;
  forgetPassword: ForgetPasswordState;
  getUserData: TGetUserDataState;
  updateUserData: TUpdateUserDataState;
  newArticle: TArticleState;
  getSingleArticleData: TGetSingleArticleDataState;
  commentUser: TCommentUserState;
  singleLike: TSingleLikeState;
  updateCommentData: TUpdateCommentDataState;
  updateArticleData: TUpdateArticleDataState;
  getArticleLikesData: TGetArticleLikesDataState;
  singleCommentLike: TSingleCommentLikeState;
  getCommentLikesData: TGetArticleCommentLikesDataState;
};

export const reducer = combineReducers<AppState>({
  reservationUser,
  loginUser,
  registerUser,
  logoutUser,
  checkAuth,
  resetPassword,
  forgetPassword,
  getUserData,
  updateUserData,
  newArticle,
  commentUser,
  getSingleArticleData,
  singleLike,
  updateCommentData,
  updateArticleData,
  getArticleLikesData,
  singleCommentLike,
  getCommentLikesData,
});

export type RootState = ReturnType<typeof reducer>;
