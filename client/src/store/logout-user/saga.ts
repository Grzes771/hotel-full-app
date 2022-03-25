import { SagaIterator } from "redux-saga";
import { getType } from "typesafe-actions";
import { toast } from "react-toastify";

import { put, takeLatest } from "redux-saga/effects";
import { logoutUserStarted } from "./actions";
import { removeLocalStorage } from "../../helpers/local-storage";

import { RESET_IS_AUTH_STATE } from "../isAuth/consts";
import { CLEAR_LOGIN_USER_STATE } from "../login-user/consts";

import * as C from "./consts";

export function* logoutUser() {
  try {
    removeLocalStorage("token");
    yield put({
      type: RESET_IS_AUTH_STATE,
    });
    yield put({
      type: CLEAR_LOGIN_USER_STATE,
    });
    yield put({
      type: C.LOGOUT_USER.success,
    });
  } catch (e) {
    toast.dark(C.SOMETHING_WENT_WRONG);
  }
}

export function* logoutUserSaga(): SagaIterator {
  yield takeLatest(getType(logoutUserStarted), logoutUser);
}
