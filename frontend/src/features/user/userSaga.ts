/* eslint-disable no-return-await */
import { firebaseAuth } from 'firebaseConfig/firebase';
import { call, put, takeLeading } from 'redux-saga/effects';
import {
  signOut, signOutFailed, signOutSuccess,
} from './userSlice';

function* signOutHandler(): any {
  try {
    yield call(logoutFirebase);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error as string));
  }
}

const logoutFirebase = async (): Promise<void> => await firebaseAuth.signOut();

export default function* authSaga(): any {
  yield takeLeading(signOut.toString(), signOutHandler);
}
