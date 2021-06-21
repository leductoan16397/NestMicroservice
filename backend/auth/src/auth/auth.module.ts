import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ForgotPasswordModule } from 'forgot-password/forgot-password.module';
import { RefreshTokenModule } from 'refresh-token/refresh-token.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { CoreModule } from 'core/core.module';
import { UserModule } from 'user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel, UserSchema } from 'user/schemas/user.schema';

@Module({
  imports: [
    CoreModule,
    ForgotPasswordModule,
    RefreshTokenModule,
    PassportModule,
    UserModule,
    MongooseModule.forFeature([{ name: UserModel.name, schema: UserSchema }]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRATION },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
