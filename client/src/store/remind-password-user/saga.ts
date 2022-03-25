import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";

import { axiosPut } from "@common/axios/basic";
import { forgetPasswordStarted } from "./actions";
import { getType } from "typesafe-actions";

import * as C from "./consts";

export function* forgetPassword({
  payload,
}: ReturnType<typeof forgetPasswordStarted>) {
  toast.configure();

  try {
    // @ts-ignore
    const request = yield call(axiosPut, `auth/forgotPassword`, payload.email);

    if (request.status === 200) {
      toast.success(request.data.message);
      yield put({
        type: C.FORGET_PASSWORD.success,
        payload: { message: request.data.message },
      });
    } else if (request.status === 202)
      yield put({
        type: C.FORGET_PASSWORD.failure,
        payload: { error: request.data.error },
      });
  } catch (e) {
    yield put({
      type: C.FORGET_PASSWORD.failure,
      payload: { error: C.SOMETHING_WENT_WRONG },
    });
  }
}

export function* forgetPasswordSaga(): SagaIterator {
  yield takeLatest(getType(forgetPasswordStarted), forgetPassword);
}
