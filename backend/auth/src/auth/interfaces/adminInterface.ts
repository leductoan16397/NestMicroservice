export interface AdminLoginPayload {
  email: string;
  password: string;
}

export interface AdminResetPasswordPayload {
  email: string;
  password: string;
}

export interface LoginInfo {
  fullName: string;
  email: string;
  accessToken: string;
  refreshToken: string;
}
