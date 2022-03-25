import { SagaIterator } from "redux-saga";
import { getType } from "typesafe-actions";
import { call, put, takeLatest } from "redux-saga/effects";

import { networkHandlerGet } from "../../../../../common/axios/networkHandler";

import { getLikesCommentAmountStarted } from "./actions";

import { GET_LIKES_COMMENT_AMOUNT_DATA } from "./consts";
import * as C from "./consts";

export function* getLikesCommentAmountData({
  payload,
}: ReturnType<typeof getLikesCommentAmountStarted>) {
  try {
    //@ts-ignore
    const request = yield call(
      networkHandlerGet,
      `/comment/get-comment-likes-amount?commentId=${payload.id}`
    );

    yield put({
      type: GET_LIKES_COMMENT_AMOUNT_DATA.success,
      payload: request.data,
    });
  } catch (e) {
    yield put({
      type: GET_LIKES_COMMENT_AMOUNT_DATA.failure,
      payload: { error: C.SOMETHING_WENT_WRONG },
    });
  }
}

export function* getLikesCommentAmountSaga(): SagaIterator {
  yield takeLatest(
    getType(getLikesCommentAmountStarted),
    getLikesCommentAmountData
  );
}
