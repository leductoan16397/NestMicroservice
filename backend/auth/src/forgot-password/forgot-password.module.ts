import { Module } from '@nestjs/common';
import { ForgotPasswordService } from './forgot-password.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ForgotPasswordModel,
  ForgotPasswordSchema,
} from './schemas/forgot-password.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ForgotPasswordModel.name, schema: ForgotPasswordSchema },
    ]),
  ],
  providers: [ForgotPasswordService],
  exports: [ForgotPasswordService],
})
export class ForgotPasswordModule {}
