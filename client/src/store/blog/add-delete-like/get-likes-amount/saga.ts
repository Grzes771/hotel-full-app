import { SagaIterator } from "redux-saga";
import { getType } from "typesafe-actions";
import { call, put, takeLatest } from "redux-saga/effects";

import { networkHandlerGet } from "@common/axios/networkHandler";

import { getLikesAmountStarted } from "./actions";

import { GET_LIKES_AMOUNT_DATA } from "./consts";
import * as C from "./consts";
export function* getLikesAmountData({
  payload,
}: ReturnType<typeof getLikesAmountStarted>) {
  try {
    //@ts-ignore
    const request = yield call(
      networkHandlerGet,
      `/article/get-likes-amount?articleId=${payload.id}`
    );

    yield put({
      type: GET_LIKES_AMOUNT_DATA.success,
      payload: request.data,
    });
  } catch (e) {
    yield put({
      type: GET_LIKES_AMOUNT_DATA.failure,
      payload: { error: C.SOMETHING_WENT_WRONG },
    });
  }
}

export function* getLikesAmountSaga(): SagaIterator {
  yield takeLatest(getType(getLikesAmountStarted), getLikesAmountData);
}
