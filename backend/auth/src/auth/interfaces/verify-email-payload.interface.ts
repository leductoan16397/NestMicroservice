import { VerifyUuidDto } from 'auth/dto/verify-uuid.dto';
import { ReqInfo } from './requestInfo.interface';

export interface VerifyEmailPayload {
  reqInfo: ReqInfo;
  verifyUuidDto: VerifyUuidDto;
}
