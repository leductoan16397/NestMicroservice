import { Controller } from '@nestjs/common';
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

@Controller('auth')
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
  verifyToken(@Payload() token) {
    return this.authService.verifyToken(token);
  }
}
