import { SagaIterator } from "redux-saga";
import { getType } from "typesafe-actions";
import { toast } from "react-toastify";

import { call, put, takeLatest } from "redux-saga/effects";
import { networkHandlerPost } from "../../../../common/axios/networkHandler";

import { addSingleCommentLikeStarted } from "./actions";
import { GET_COMMENTS } from "../consts";
import * as C from "./consts";

export function* singleCommentLike({
  payload,
}: ReturnType<typeof addSingleCommentLikeStarted>) {
  const { commentId, articleId } = payload;

  const requestData = { commentId };

  try {
    //@ts-ignore
    const request = yield call(
      networkHandlerPost,
      `/comment/add-comment-like`,
      requestData
    );

    if (request.status === 202) toast.error(request.data.message);
    else {
      yield put({
        type: GET_COMMENTS.started,
        payload: { id: articleId },
      });
    }
  } catch (e) {
    yield put({
      type: C.ADD_SINGLE_COMMENT_LIKE.failure,
      payload: { error: C.SOMETHING_WENT_WRONG },
    });
  }
}
export function* singleCommentLikeSaga(): SagaIterator {
  yield takeLatest(getType(addSingleCommentLikeStarted), singleCommentLike);
}
