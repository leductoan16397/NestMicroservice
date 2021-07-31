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
  roles: string[];
  accessToken: string;
  refreshToken: string;
  expires: Date;
}
export interface RefreshTokenInfo {
  accessToken: string;
  expires: Date;
}
