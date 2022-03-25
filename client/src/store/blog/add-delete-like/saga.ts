import { SagaIterator } from "redux-saga";
import { getType } from "typesafe-actions";
import { toast } from "react-toastify";

import { call, put, takeLatest } from "redux-saga/effects";
import { networkHandlerPost } from "@common/axios/networkHandler";
import { addSingleLikeStarted } from "./actions";

import { ADD_SINGLE_LIKE, GET_LIKES_AMOUNT_DATA } from "./consts";
import * as C from "./consts";

export function* singleLike({
  payload,
}: ReturnType<typeof addSingleLikeStarted>) {
  const { articleId } = payload;

  const requestData = { articleId };

  try {
    //@ts-ignore
    const request = yield call(
      networkHandlerPost,
      `/article/add-like`,
      requestData
    );
    if (request.status === 202) toast.error(request.data.message);
    else {
      yield put({
        type: GET_LIKES_AMOUNT_DATA.started,
        payload: { id: payload.articleId },
      });
    }
  } catch (e) {
    yield put({
      type: ADD_SINGLE_LIKE.failure,
      payload: { error: C.SOMETHING_WENT_WRONG },
    });
  }
}
export function* singleLikeSaga(): SagaIterator {
  yield takeLatest(getType(addSingleLikeStarted), singleLike);
}
