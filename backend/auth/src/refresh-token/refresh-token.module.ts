import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RefreshTokenService } from './refresh-token.service';
import {
  RefreshTokenSchema,
  RefresTokenModel,
} from './schemas/refresh-token.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RefresTokenModel.name, schema: RefreshTokenSchema },
    ]),
  ],
  exports: [RefreshTokenService],
  providers: [RefreshTokenService],
})
export class RefreshTokenModule {}
