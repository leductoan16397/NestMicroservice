/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { History } from 'history';
import { getUserFromLocalStorage, setUserToLocalStorage } from './Utils';

export interface AuthState {
  user: UserState | null;
  status: 'idle' | 'loading' | 'failed';
}

export interface UserState {
  role?: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  refreshToken: string | null;
  uid: string | null;
  creationTime: string | null;
  lastSignInTime: string | null;
  profile: any | null;
}

export enum FirebaseLoginOption {
  FACEBOOK = 'facebook',
  GOOGLE = 'google',
}

export interface FirebaseLogin {
  option: FirebaseLoginOption;
  history: History;
}

export interface LoginSucces {
  user: UserState | null;
  history: History;
}

const initialState: AuthState = {
  user: getUserFromLocalStorage() || null,
  status: 'idle',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<FirebaseLoginOption>) => {
      state.status = 'loading';
    },
    signInSuccess: (state, action: PayloadAction<UserState | null>) => {
      try {
        const user = action.payload;
        state.user = user;
        state.status = 'idle';
        setUserToLocalStorage(user);
      } catch (error) {
        console.log(error);
      }
    },
    signInFailed: (state, action: PayloadAction<string>) => {
      state.status = 'failed';
      state.user = null;
      console.log(action.payload);
    },
    signOut: (state) => {
      state.status = 'loading';
    },
    signOutSuccess: (state) => {
      state.user = null;
      state.status = 'idle';
      setUserToLocalStorage(null);
    },
    signOutFailed: (state, action: PayloadAction<string>) => {
      state.user = null;
      state.status = 'failed';
      console.log(action.payload);
    },
  },
});

export const {
  signIn, signInSuccess, signInFailed,
  signOut, signOutSuccess, signOutFailed,
} = authSlice.actions;

export const selectUser = (state: RootState): any => state.auth.user;
export const selectUserStatus = (state: RootState): any => state.auth.status;

export default authSlice.reducer;
