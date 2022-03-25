import { SagaIterator } from "redux-saga";
import { getType } from "typesafe-actions";
import { call, put, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";

import { axiosPost } from "@common/axios/basic";
import { createArticleStarted, getArticlesStarted } from "./actions";
import { networkHandlerGet } from "@common/axios/networkHandler";

import * as C from "./consts";
toast.configure();

export function* createArticle({
  payload,
}: ReturnType<typeof createArticleStarted>) {
  try {
    const { article } = payload;
    //@ts-ignore
    const request = yield call(axiosPost, `/article/new-article`, article);

    if (request.status === 202) toast.error(request.data.message);
    else {
      toast.success(request.data.message);
    }
  } catch (e) {
    yield put({
      type: C.CREATE_ARTICLE.failure,
      payload: { error: C.SOMETHING_WENT_WRONG },
    });
  }
}

export function* createArticleSaga(): SagaIterator {
  yield takeLatest(getType(createArticleStarted), createArticle);
}

export function* getArticles({
  payload,
}: ReturnType<typeof getArticlesStarted>) {
  const { skip, take } = payload;

  try {
    //@ts-ignore
    const request = yield call(
      networkHandlerGet,
      `/article/get-articles?skip=${skip}&take=${take}`
    );

    yield put({
      type: C.GET_ARTICLES.success,
      payload: { articles: request.data.items },
    });
  } catch (e) {
    yield put({
      type: C.GET_ARTICLES.failure,
      payload: { error: C.ERROR },
    });
  }
}

export function* getArticlesSaga(): SagaIterator {
  yield takeLatest(getType(getArticlesStarted), getArticles);
}
