/* eslint-disable prefer-promise-reject-errors */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import queryString from 'query-string';
import { AdminStore } from 'admin/store';
import { AdminUser, setUser } from 'admin/features/user/userSlice';
import { refreshToken } from './api';

export const axiosClientAdmin = axios.create({
  baseURL: 'http://localhost:8000/admin',
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

export const axiosClientAdminWithoutAuth = axios.create({
  baseURL: 'http://localhost:8000/admin',
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

const getToken = async (): Promise<string | null | undefined> => {
  const { user } = AdminStore.getState().user;
  if (user && user.expires >= new Date()) {
    const newToken = await refreshToken(user.refreshToken);
    const newUser: AdminUser = {
      ...user,
      ...newToken,
    };
    AdminStore.dispatch(setUser(newUser));
    return newToken.accessToken;
  }
  return user?.accessToken;
};

axiosClientAdmin.interceptors.request.use(
  async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
    const newConfig = { ...config };
    const token = await getToken();
    if (token) newConfig.headers.Authorization = `Bearer ${token}`;
    return newConfig;
  },
);

axiosClientAdmin.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    if (response && response.data) return response.data;
    return response;
  },
  (error) => {
    throw error;
  },
);

axiosClientAdminWithoutAuth.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    if (response && response.data && response.data.data) return response.data.data;
    return response;
  },
  (error) => {
    throw error;
  },
);
