import { AdminUser, RefreshTokenInfo } from 'admin/features/user/userSlice';
import { axiosClientAdminWithoutAuth } from './axiosCLientAdmin';

export const signIn = async (email: string, password: string): Promise<AdminUser> => {
  const user: AdminUser = await axiosClientAdminWithoutAuth.post('/auth/login', { email, password });
  return user;
};

export const refreshToken = async (token: string): Promise<RefreshTokenInfo> => {
  const info: RefreshTokenInfo = await axiosClientAdminWithoutAuth.post('/auth/refresh-token', { refreshToken: token });
  return info;
};

export const logout = async (token: string): Promise<void> => {
  await axiosClientAdminWithoutAuth.post('/auth/logout', { refreshToken: token });
};
