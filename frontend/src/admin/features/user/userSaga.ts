import {
  call, put, select, takeLeading,
} from 'redux-saga/effects';
// import history from 'admin/history';
import { PayloadAction } from '@reduxjs/toolkit';
import { logout, signIn } from 'api/admin/api';
import {
  AdminUser,
  login,
  loginFailed,
  loginSuccess,
  selectAdminUser,
  signOut, signOutFailed, signOutSuccess, UserLogin,
} from './userSlice';

function* signOutHandler(): any {
  try {
    const user: AdminUser = yield select(selectAdminUser);
    yield call(logout, user.refreshToken);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error as string));
  }
}

function* loginHandler(action: PayloadAction<UserLogin>): any {
  try {
    const user = yield call(signIn, action.payload.email, action.payload.password);
    yield put(loginSuccess(user));
  } catch (error) {
    yield put(loginFailed(error as string));
  }
}

export default function* authSaga(): any {
  yield takeLeading(signOut.toString(), signOutHandler);
  yield takeLeading(login.toString(), loginHandler);
}
