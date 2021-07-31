/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable require-yield */
import userSaga from 'admin/features/user/userSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([userSaga()]);
}
