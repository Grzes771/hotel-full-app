import { SagaIterator } from "redux-saga";
import { getType } from "typesafe-actions";

import { put, call, takeLatest } from "redux-saga/effects";
import { networkHandlerGet } from "@common/axios/networkHandler";
import { isAuthStarted } from "./actions";

import * as C from "./consts";

export function* checkAuth() {
  try {
    //@ts-ignore
    const request = yield call(networkHandlerGet, `/auth/is_auth`);

    if (request.status === 200)
      yield put({
        type: C.IS_AUTH.success,
      });
    else if (request.status === 202)
      yield put({
        type: C.IS_AUTH.failure,
        payload: { error: request.data.error },
      });
  } catch (e) {
    yield put({
      type: C.IS_AUTH.failure,
      payload: { error: C.SESSION_EXPIRED },
    });
  }
}

export function* checkAuthSaga(): SagaIterator {
  yield takeLatest(getType(isAuthStarted), checkAuth);
}
