import { SagaIterator } from "redux-saga";
import { getType } from "typesafe-actions";
import { call, put, takeLatest } from "redux-saga/effects";

import { networkHandlerGet } from "@common/axios/networkHandler";

import { getSingleArticleStarted } from "./actions";

import * as C from "./consts";

export function* getSingleArticle({
  payload,
}: ReturnType<typeof getSingleArticleStarted>) {
  try {
    //@ts-ignore
    const request = yield call(
      networkHandlerGet,
      `/article/get-single-article?articleId=${payload.id}`
    );

    yield put({
      type: C.GET_SINGLE_ARTICLE_DATA.success,
      payload: request.data,
    });
  } catch (e) {
    yield put({
      type: C.GET_SINGLE_ARTICLE_DATA.failure,
      payload: { error: C.SOMETHING_WENT_WRONG },
    });
  }
}

export function* getSingleArticleSaga(): SagaIterator {
  yield takeLatest(getType(getSingleArticleStarted), getSingleArticle);
}
