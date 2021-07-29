import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateAdminUserDto } from './create-user.dto';

export class UpdateAdminUser extends OmitType(PartialType(CreateAdminUserDto), [
  'email',
]) {}
