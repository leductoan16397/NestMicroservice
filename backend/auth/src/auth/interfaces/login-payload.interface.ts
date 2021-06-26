import { LoginUserDto } from 'auth/dto/login-user.dto';
import { ReqInfo } from './requestInfo.interface';

export interface LoginPayload {
  reqInfo: ReqInfo;
  loginUserDto: LoginUserDto;
}
