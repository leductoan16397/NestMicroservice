/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import firebase from 'firebaseConfig/firebase';
import { transformUser } from './Utils';

export interface UserState {
  user: User | null;
  status: 'idle' | 'loading';
}

export interface User {
  role?: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  refreshToken: string | null;
  uid: string | null;
  creationTime: string | null;
  lastSignInTime: string | null;
}

export enum FirebaseLoginOption {
  FACEBOOK = 'facebook',
  GOOGLE = 'google',
}

const initialState: UserState = {
  user: null,
  status: 'loading',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<firebase.User | null>) => {
      state.status = 'idle';
      const user: User | null = action.payload
        ? transformUser(action.payload as firebase.User) : null;
      state.user = user;
    },
    signOut: (state) => {
      state.status = 'loading';
    },
    signOutSuccess: (state) => {
      state.user = null;
      state.status = 'idle';
    },
    signOutFailed: (state, action: PayloadAction<string>) => {
      state.status = 'idle';
      console.log(action.payload);
    },
  },
});

export const {
  signOut, signOutSuccess, signOutFailed, setUser,
} = authSlice.actions;

export const selectUser = (state: RootState): any => state.user.user;
export const selectUserStatus = (state: RootState): any => state.user.status;

export default authSlice.reducer;
