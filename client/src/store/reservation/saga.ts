import { SagaIterator } from "redux-saga";
import { getType } from "typesafe-actions";
import { call, put, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";

import {
  networkHandlerGet,
  networkHandlerPost,
} from "../../common/axios/networkHandler";
import { getUserReservationsStarted, reservationUserStarted } from "./actions";

import * as C from "./consts";

export function* reservationUser({
  payload,
}: ReturnType<typeof reservationUserStarted>) {
  const { startDate, endDate, reservation } = payload;

  const requestBody = {
    ...reservation,
    startDate,
    endDate,
  };

  try {
    //@ts-ignore
    const request = yield call(
      networkHandlerPost,
      `/reservation/add`,
      requestBody
    );

    if (request.status === 202) toast.error(request.data.message);
    else toast.success(request.data.message);
  } catch (e) {
    yield put({
      type: C.ADD_RESERVATION_USER.failure,
      payload: { error: C.SOMETHING_WENT_WRONG },
    });
  }
}

export function* reservationUserSaga(): SagaIterator {
  yield takeLatest(getType(reservationUserStarted), reservationUser);
}

export function* getUserReservations({
  payload,
}: ReturnType<typeof getUserReservationsStarted>) {
  const { skip, take } = payload;

  try {
    //@ts-ignore
    const request = yield call(
      networkHandlerGet,
      `/reservation/get?skip=${skip}&take=${take}`
    );

    yield put({
      type: C.GET_USER_RESERVATIONS.success,
      payload: { reservations: request.data.items },
    });
  } catch (e) {
    yield put({
      type: C.GET_USER_RESERVATIONS.failure,
      payload: { error: C.SOMETHING_WENT_WRONG },
    });
  }
}

export function* getUserReservationsSaga(): SagaIterator {
  yield takeLatest(getType(getUserReservationsStarted), getUserReservations);
}
