import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import { getType } from "typesafe-actions";
import { axiosPut } from "@common/axios/basic";

import { resetPasswordStarted } from "./actions";

import * as C from "./consts";

export function* resetPassword({
  payload,
}: ReturnType<typeof resetPasswordStarted>) {
  toast.configure();
  try {
    const { newPassword, resetPasswordLink } = payload;

    const resetPasswordData = {
      ...(newPassword as object),
      resetPasswordLink,
    };
    // @ts-ignore
    const request = yield call(
      axiosPut,
      `auth/resetPassword`,
      resetPasswordData
    );

    if (request.status === 200) {
      toast.success(request.data.message);
      yield put({
        type: C.RESET_PASSWORD.success,

        payload: { message: request.data.message },
      });
    } else if (request.status === 202)
      yield put({
        type: C.RESET_PASSWORD.failure,
        payload: { error: request.data.error },
      });
  } catch (e) {
    yield put({
      type: C.RESET_PASSWORD.failure,
      payload: { error: C.SOMETHING_WENT_WRONG },
    });
  }
}

export function* resetPasswordSaga(): SagaIterator {
  yield takeLatest(getType(resetPasswordStarted), resetPassword);
}
