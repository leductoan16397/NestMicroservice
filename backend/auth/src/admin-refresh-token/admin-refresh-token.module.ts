import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminRefreshTokenService } from './admin-refresh-token.service';
import {
  AdminRefreshTokenSchema,
  AdminRefresTokenModel,
} from './schemas/admin-refresh-token.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AdminRefresTokenModel.name, schema: AdminRefreshTokenSchema },
    ]),
  ],
  exports: [AdminRefreshTokenService],
  providers: [AdminRefreshTokenService],
})
export class AdminRefreshTokenModule {}
