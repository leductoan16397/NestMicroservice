import { CreateForgotPasswordDto } from 'auth/dto/create-forgot-password.dto';
import { ReqInfo } from './requestInfo.interface';

export interface ForgotPasswordPayload {
  reqInfo: ReqInfo;
  createForgotPasswordDto: CreateForgotPasswordDto;
}
