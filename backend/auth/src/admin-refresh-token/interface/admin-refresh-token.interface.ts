import { UserInterface as User } from 'user/interfaces/user.interface';

export interface AdminRefreshToken {
  userId: string;
  refreshToken: string;
}

export interface AdminRefreshTokenRef {
  userId: User;
  refreshToken: string;
}
