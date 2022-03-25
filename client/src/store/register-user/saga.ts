import { SagaIterator } from "redux-saga";
import { getType } from "typesafe-actions";
import { toast } from "react-toastify";
import { call, put, takeLatest } from "redux-saga/effects";

import { networkHandlerGet } from "@common/axios/networkHandler";
import { axiosPost } from "@common/axios/basic";
import { registerUserStarted, getUserSettingsStarted } from "./actions";

import * as C from "./consts";

export function* registerUser({
  payload,
}: ReturnType<typeof registerUserStarted>) {
  try {
    const { user } = payload;
    //@ts-ignore
    const request = yield call(axiosPost, `/auth/register`, user);

    if (request.status === 202) toast.error(request.data.message);
    else toast.success(request.data.message);
  } catch (e) {
    yield put({
      type: C.REGISTER_USER.failure,
      payload: { error: C.SOMETHING_WENT_WRONG },
    });
  }
}

export function* registerUserSaga(): SagaIterator {
  yield takeLatest(getType(registerUserStarted), registerUser);
}

export function* getUserSettings({
  payload,
}: ReturnType<typeof getUserSettingsStarted>) {
  const { skip, take } = payload;

  try {
    //@ts-ignore
    const request = yield call(
      networkHandlerGet,
      `/setting/get?skip=${skip}&take=${take}`
    );

    yield put({
      type: C.GET_USER_SETTINGS.success,
      payload: { users: request.data.items },
    });
  } catch (e) {
    yield put({
      type: C.GET_USER_SETTINGS.failure,
      payload: { error: C.SOMETHING_WENT_WRONG },
    });
  }
}

export function* getUserSettingsSaga(): SagaIterator {
  yield takeLatest(getType(getUserSettingsStarted), getUserSettings);
}
