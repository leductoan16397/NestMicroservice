import {
  ClassSerializerInterceptor,
  Controller,
  SerializeOptions,
  UseInterceptors,
} from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SignUpDto } from './dto/signUp.dto';
import { AuthService } from './auth.service';
import { UserInterface } from 'user/interfaces/user.interface';
import { VerifyEmailPayload } from './interfaces/verify-email-payload.interface';
import { LoginPayload } from './interfaces/login-payload.interface';
import { RefreshAccessTokenDto } from './dto/refresh-access-token.dto';
import { ForgotPasswordPayload } from './interfaces/forgot-password-payload.interface';
import { ForgotPassVerifyPayload } from './interfaces/forgot-pass-verify-payload.interface';
import { ResetPasswordDto } from './dto/reset-password.dto';
import {
  AdminLoginPayload,
  AdminResetPasswordPayload,
  LoginInfo,
  RefreshTokenInfo,
} from './interfaces/adminInterface';
import { AdminUserEntity } from 'manager-user/Entity/user.entity';

@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern({ service: 'Auth', action: 'sign-up' })
  register(@Payload() data: SignUpDto): Promise<UserInterface> {
    return this.authService.create(data);
  }

  @MessagePattern({ service: 'Auth', action: 'verify-email' })
  verifyEmail(@Payload() { reqInfo, verifyUuidDto }: VerifyEmailPayload) {
    return this.authService.verifyEmail(reqInfo, verifyUuidDto);
  }

  @MessagePattern({ service: 'Auth', action: 'login' })
  login(@Payload() { reqInfo, loginUserDto }: LoginPayload) {
    return this.authService.login(reqInfo, loginUserDto);
  }

  @MessagePattern({ service: 'Auth', action: 'refresh-access-token' })
  refreshAccessToken(@Payload() refreshAccessTokenDto: RefreshAccessTokenDto) {
    return this.authService.refreshAccessToken(refreshAccessTokenDto);
  }

  @MessagePattern({ service: 'Auth', action: 'forgot-password' })
  forgotPassword(
    @Payload() { reqInfo, createForgotPasswordDto }: ForgotPasswordPayload,
  ) {
    return this.authService.forgotPassword(reqInfo, createForgotPasswordDto);
  }

  @MessagePattern({ service: 'Auth', action: 'forgot-password-verify' })
  forgotPasswordVerify(
    @Payload() { reqInfo, verifyUuidDto }: ForgotPassVerifyPayload,
  ) {
    return this.authService.forgotPasswordVerify(reqInfo, verifyUuidDto);
  }

  @MessagePattern({ service: 'Auth', action: 'reset-password' })
  resetPassword(@Payload() data: ResetPasswordDto) {
    return this.authService.resetPassword(data);
  }

  @MessagePattern({ service: 'Auth', action: 'verify-token' })
  verifyToken(@Payload() token: string) {
    return this.authService.verifyToken(token);
  }

  @MessagePattern({ service: 'Auth', action: 'admin-login' })
  adminLogin(
    @Payload() { email, password }: AdminLoginPayload,
  ): Promise<LoginInfo> {
    console.log(email);
    console.log(password);
    return this.authService.adminLogin(email, password);
  }

  @MessagePattern({ service: 'Auth', action: 'admin-logout' })
  adminLogout(@Payload() token: string): Promise<any> {
    return this.authService.adminLogout(token);
  }

  @MessagePattern({ service: 'Auth', action: 'admin-refresh-token' })
  adminRefreshToken(@Payload() token: string): Promise<RefreshTokenInfo> {
    return this.authService.adminRefreshAccessToken(token);
  }

  @MessagePattern({ service: 'Auth', action: 'admin-reset-password' })
  adminResetPassword(
    @Payload() { email, password }: AdminResetPasswordPayload,
  ): Promise<void> {
    return this.authService.adminResetPassword(email, password);
  }

  @SerializeOptions({
    excludePrefixes: ['_'],
  })
  @MessagePattern({ service: 'Auth', action: 'admin-verify-token' })
  async verifyAdminToken(@Payload() token: string): Promise<AdminUserEntity> {
    const user = await this.authService.adminVerifyToken(token);
    return new AdminUserEntity(user.toJSON());
  }
}
