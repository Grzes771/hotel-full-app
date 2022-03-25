import { fork } from "redux-saga/effects";

import {
  getUserReservationsSaga,
  reservationUserSaga,
} from "./reservation/saga";
import { loginUserSaga } from "./login-user/saga";
import { registerUserSaga } from "./register-user/saga";
import { resetPasswordSaga } from "./remind-password-user/reset-password-user/saga";
import { forgetPasswordSaga } from "./remind-password-user/saga";
import { getUserDataSaga } from "./user-data/saga";
import { updateUserDataSaga } from "./user-data/update-user-data/saga";
import { createArticleSaga, getArticlesSaga } from "./blog/write-article/saga";
import { singleLikeSaga } from "./blog/add-delete-like/saga";
import { getSingleArticleSaga } from "./blog/single-article/saga";
import { commentUserSaga, getCommentsSaga } from "./blog/comments/saga";
import { updateCommentDataSaga } from "./blog/comments/update-comment/saga";
import { updateArticleDataSaga } from "./blog/update-article/saga";
import { getLikesAmountSaga } from "./blog/add-delete-like/get-likes-amount/saga";
import { singleCommentLikeSaga } from "./blog/comments/add-delete-like-comment/saga";
import { getLikesCommentAmountSaga } from "./blog/comments/add-delete-like-comment/get-likes-comment-amount/saga";

export function* rootSaga(services = {}) {
  yield fork(reservationUserSaga);
  yield fork(getUserReservationsSaga);
  yield fork(loginUserSaga);
  yield fork(registerUserSaga);
  yield fork(forgetPasswordSaga);
  yield fork(resetPasswordSaga);
  yield fork(getUserDataSaga);
  yield fork(updateUserDataSaga);
  yield fork(createArticleSaga);
  yield fork(getArticlesSaga);
  yield fork(singleLikeSaga);
  yield fork(getSingleArticleSaga);
  yield fork(commentUserSaga);
  yield fork(getCommentsSaga);
  yield fork(updateCommentDataSaga);
  yield fork(updateArticleDataSaga);
  yield fork(getLikesAmountSaga);
  yield fork(singleCommentLikeSaga);
  yield fork(getLikesCommentAmountSaga);
}
