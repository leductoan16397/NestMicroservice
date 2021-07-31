/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'admin/store';
import { getUserFromLocalStorage, setLocaleToLocalStorage } from './Utils';

export interface AdminUserState {
  user: AdminUser | null;
  status: 'idle' | 'loading';
}

export interface AdminUser {
  fullName: string;
  roles?: string[];
  email: string;
  refreshToken: string;
  accessToken: string;
  expires: Date;
}

export interface RefreshTokenInfo {
  accessToken: string;
  expires: Date;
}

export enum FirebaseLoginOption {
  FACEBOOK = 'facebook',
  GOOGLE = 'google',
}

const initialState: AdminUserState = {
  user: getUserFromLocalStorage(),
  status: 'loading',
};

export interface UserLogin {
  email: string;
  password: string;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AdminUser | null>) => {
      const user = action.payload || getUserFromLocalStorage();
      state.user = user;
      state.status = 'idle';
    },
    login: (state, action: PayloadAction<UserLogin>): void => {
      state.status = 'loading';
    },
    loginSuccess: (state, action: PayloadAction<AdminUser>) => {
      setLocaleToLocalStorage(action.payload);
      state.user = action.payload;
      state.status = 'idle';
    },
    loginFailed: (state, action: PayloadAction<string>) => {
      state.status = 'idle';
      console.log(action.payload);
    },
    signOut: (state) => {
      state.status = 'loading';
    },
    signOutSuccess: (state) => {
      state.user = null;
      setLocaleToLocalStorage(null);
      state.status = 'idle';
    },
    signOutFailed: (state, action: PayloadAction<string>) => {
      state.status = 'idle';
      console.log(action.payload);
    },
  },
});

export const {
  signOut, signOutSuccess, signOutFailed, setUser, login, loginSuccess, loginFailed,
} = authSlice.actions;

export const selectAdminUser = (state: RootState): any => state.user.user;
export const selectAdminUserStatus = (state: RootState): any => state.user.status;

export default authSlice.reducer;
