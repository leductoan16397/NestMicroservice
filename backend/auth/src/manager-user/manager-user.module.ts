import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ManagerUserController } from './manager-user.controller';
import { ManagerUserService } from './manager-user.service';
import {
  ManagerUserSchema,
  ManagerUserModel,
} from './schemas/manager-user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ManagerUserModel.name, schema: ManagerUserSchema },
    ]),
  ],
  exports: [ManagerUserService],
  providers: [ManagerUserService],
  controllers: [ManagerUserController],
})
export class ManagerUserModule {}
