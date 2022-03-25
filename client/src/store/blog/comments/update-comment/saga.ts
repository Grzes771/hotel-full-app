import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";
import { getType } from "typesafe-actions";

import { networkHandlerPost } from "@common/axios/networkHandler";
import { updateCommentDataStarted } from "./actions";

import { UPDATE_COMMENT_DATA } from "./consts";
import { GET_COMMENTS } from "../consts";
import * as C from "./consts";

export function* updateCommentData({
  payload,
}: ReturnType<typeof updateCommentDataStarted>) {
  const { comment, commentId, articleId } = payload;

  const requestBody = {
    commentText: comment.commentText,
    commentId,
    articleId,
  };

  try {
    //@ts-ignore
    const request = yield call(
      networkHandlerPost,
      `/comment/update-comment-data`,
      requestBody
    );
    if (request.status === 200) {
      yield put({
        type: UPDATE_COMMENT_DATA.success,
        payload: { message: request.data.message },
      });
      yield put({
        type: GET_COMMENTS.started,
        payload: { id: payload.articleId },
      });
    } else if (request.status === 203)
      yield put({
        type: UPDATE_COMMENT_DATA.failure,
        payload: { error: request.data.error },
      });
  } catch (e) {
    yield put({
      type: UPDATE_COMMENT_DATA.failure,
      payload: { error: C.SOMETHING_WENT_WRONG },
    });
  }
}

export function* updateCommentDataSaga(): SagaIterator {
  yield takeLatest(getType(updateCommentDataStarted), updateCommentData);
}
