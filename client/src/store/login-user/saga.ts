import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";
import { getType } from "typesafe-actions";

import { axiosPost } from "../../common/axios/basic";
import { loginUserStarted } from "./actions";
import { setLocalStorage } from "../../helpers/local-storage";

import { TOKEN, ROLE } from "../../common/consts/general";
import * as C from "./consts";

export function* loginUser({ payload }: ReturnType<typeof loginUserStarted>) {
  try {
    const { login } = payload;
    //@ts-ignore
    const request = yield call(axiosPost, `/auth/login`, login);
    if (request.status === 200) {
      setLocalStorage(TOKEN, request.data.token);
      setLocalStorage(ROLE, request.data.role);

      yield put({
        type: C.LOGIN_USER.success,
        payload: { token: request.data.token },
      });
    } else if (request.status === 202)
      yield put({
        type: C.LOGIN_USER.failure,
        payload: { error: request.data.error },
      });
  } catch (e) {
    yield put({
      type: C.LOGIN_USER.failure,
      payload: { errors: C.SOMETHING_WENT_WRONG },
    });
  }
}

export function* loginUserSaga(): SagaIterator {
  yield takeLatest(getType(loginUserStarted), loginUser);
}
