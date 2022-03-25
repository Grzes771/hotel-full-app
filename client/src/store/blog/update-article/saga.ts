import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import { networkHandlerPost } from "@common/axios/networkHandler";

import { updateArticleDataStarted } from "./actions";
import * as C from "./consts";

export function* updateArticleData({
  payload,
}: ReturnType<typeof updateArticleDataStarted>) {
  try {
    //@ts-ignore
    const request = yield call(
      networkHandlerPost,
      `/article/update-article-data`,
      payload.article
    );
    if (request.status === 200)
      yield put({
        type: C.UPDATE_ARTICLE_DATA.success,
        payload: { message: request.data.message },
      });
    else if (request.status === 203)
      yield put({
        type: C.UPDATE_ARTICLE_DATA.failure,
        payload: { error: request.data.error },
      });
  } catch (e) {
    yield put({
      type: C.UPDATE_ARTICLE_DATA.failure,
      payload: { error: C.SOMETHING_WENT_WRONG },
    });
  }
}

export function* updateArticleDataSaga(): SagaIterator {
  yield takeLatest(getType(updateArticleDataStarted), updateArticleData);
}
