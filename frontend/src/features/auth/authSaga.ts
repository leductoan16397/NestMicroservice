/* eslint-disable no-return-await */
import { PayloadAction } from '@reduxjs/toolkit';
import { auth, signInWithFacebook, signInWithGoogle } from 'firebaseConfig/firebase';
import { call, put, takeLeading } from 'redux-saga/effects';
import history from 'app/history';
import {
  FirebaseLoginOption,
  signIn, signInFailed, signInSuccess, signOut, signOutFailed, signOutSuccess, UserState,
} from './authSlice';
import { transformUser } from './Utils';

function* signOutHandler(): any {
  try {
    yield call(logoutFirebase);
    yield put(signOutSuccess());
    history.push('/');
  } catch (error) {
    yield put(signOutFailed(error as string));
  }
}

const logoutFirebase = async (): Promise<unknown> => await auth.signOut();

const loginByFacrbook = async (): Promise<UserState> => {
  const UserCredential = await signInWithFacebook();
  const currentUser: UserState = transformUser(UserCredential);
  return currentUser;
};

const loginByGoogle = async (): Promise<UserState> => {
  const UserCredential = await signInWithGoogle();
  const currentUser: UserState = transformUser(UserCredential);
  return currentUser;
};

function* signInHandler(action: PayloadAction<FirebaseLoginOption>): any {
  try {
    let user: UserState | null;
    if (action.payload === FirebaseLoginOption.FACEBOOK) {
      user = yield call(loginByFacrbook);
    } else {
      user = yield call(loginByGoogle);
    }
    yield put(signInSuccess(user));
    history.push('/');
  } catch (error) {
    yield put(signInFailed(error as string));
  }
}

export default function* authSaga(): any {
  yield takeLeading(signOut.toString(), signOutHandler);
  yield takeLeading(signIn.toString(), signInHandler);
}
