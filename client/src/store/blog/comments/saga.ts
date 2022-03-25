import { SagaIterator } from "redux-saga";
import { getType } from "typesafe-actions";
import { call, put, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";

import {
  networkHandlerGet,
  networkHandlerPost,
} from "@common/axios/networkHandler";

import { commentUserStarted, getCommentsStarted } from "./actions";
import { ADD_COMMENT_USER, GET_COMMENTS } from "./consts";
import * as C from "./consts";

export function* commentUser({
  payload,
}: ReturnType<typeof commentUserStarted>) {
  const { commentText, articleId } = payload;

  const requestData = { commentText, articleId };

  try {
    //@ts-ignore
    const request = yield call(networkHandlerPost, `/comment/add`, requestData);

    if (request.status === 202) toast.error(request.data.message);
    else {
      toast.success(request.data.message);
      yield put({
        type: GET_COMMENTS.started,
        payload: { id: payload.articleId },
      });
    }
  } catch (e) {
    yield put({
      type: ADD_COMMENT_USER.failure,
      payload: { error: C.SOMETHING_WENT_WRONG },
    });
  }
}

export function* commentUserSaga(): SagaIterator {
  yield takeLatest(getType(commentUserStarted), commentUser);
}

export function* getComments({
  payload,
}: ReturnType<typeof getCommentsStarted>) {
  try {
    //@ts-ignore
    const request = yield call(
      networkHandlerGet,
      `/comment/get?articleId=${payload.id}`
    );

    yield put({
      type: GET_COMMENTS.success,
      payload: { comment: request.data.comment },
    });
  } catch (e) {
    yield put({
      type: GET_COMMENTS.failure,
      payload: { error: C.SOMETHING_WENT_WRONG },
    });
  }
}

export function* getCommentsSaga(): SagaIterator {
  yield takeLatest(getType(getCommentsStarted), getComments);
}
