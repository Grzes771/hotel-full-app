import { SagaIterator } from "redux-saga";
import { getType } from "typesafe-actions";
import { call, put, takeLatest } from "redux-saga/effects";

import { networkHandlerGet } from "@common/axios/networkHandler";
import { getUserDataStarted } from "./actions";

import * as C from "./consts";

export function* getUserData({
  payload,
}: ReturnType<typeof getUserDataStarted>) {
  try {
    //@ts-ignore
    const request = yield call(networkHandlerGet, `/user/get-user-data`);

    yield put({
      type: C.GET_USER_DATA.success,
      payload: request.data,
    });
  } catch (e) {
    yield put({
      type: C.GET_USER_DATA.failure,
      payload: { error: C.SOMETHING_WENT_WRONG },
    });
  }
}

export function* getUserDataSaga(): SagaIterator {
  yield takeLatest(getType(getUserDataStarted), getUserData);
}
