import { SagaIterator } from "redux-saga";
import { getType } from "typesafe-actions";
import { call, put, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";

import { networkHandlerPost } from "../../../common/axios/networkHandler";
import { updateUserDataStarted } from "./actions";

import * as C from "./consts";

export function* updateUserData({
  payload,
}: ReturnType<typeof updateUserDataStarted>) {
  try {
    //@ts-ignore
    const request = yield call(
      networkHandlerPost,
      `/user/update-user-data`,
      payload.user
    );
    if (request.status === 200) {
      toast.success(request.data.message);
      yield put({
        type: C.UPDATE_USER_DATA.success,
        payload: { message: request.data.message },
      });
    } else if (request.status === 203)
      yield put({
        type: C.UPDATE_USER_DATA.failure,
        payload: { error: request.data.error },
      });
  } catch (e) {
    yield put({
      type: C.UPDATE_USER_DATA.failure,
      payload: { error: C.SOMETHING_WENT_WRONG },
    });
  }
}

export function* updateUserDataSaga(): SagaIterator {
  yield takeLatest(getType(updateUserDataStarted), updateUserData);
}
