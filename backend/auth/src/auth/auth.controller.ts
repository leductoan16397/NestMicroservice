import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SignUpDto } from './dto/signUp.dto';
import { AuthService } from './auth.service';
import { UserInterface } from 'user/interfaces/user.interface';
import { VerifyEmailPayload } from './interfaces/verify-email-payload.interface';
import { LoginPayload } from './interfaces/login-payload.interface';
import { RefreshAccessTokenDto } from './dto/refresh-access-token.dto';
import { ForgotPasswordPayload } from './interfaces/forgot-password-payload.interface';
import { ForgotPassVerifyPayload } from '../../dist/auth/interfaces/forgot-pass-verify-payload.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern('sign-up')
  register(@Payload() data: SignUpDto): Promise<UserInterface> {
    return this.authService.create(data);
  }

  @MessagePattern('verify-email')
  verifyEmail(@Payload() { reqInfo, verifyUuidDto }: VerifyEmailPayload) {
    return this.authService.verifyEmail(reqInfo, verifyUuidDto);
  }

  @MessagePattern('login')
  login(@Payload() { reqInfo, loginUserDto }: LoginPayload) {
    return this.authService.login(reqInfo, loginUserDto);
  }

  @MessagePattern('refresh-access-token')
  refreshAccessToken(@Payload() refreshAccessTokenDto: RefreshAccessTokenDto) {
    return this.authService.refreshAccessToken(refreshAccessTokenDto);
  }

  @MessagePattern('forgot-password')
  forgotPassword(
    @Payload() { reqInfo, createForgotPasswordDto }: ForgotPasswordPayload,
  ) {
    return this.authService.forgotPassword(reqInfo, createForgotPasswordDto);
  }

  @MessagePattern('forgot-password-verify')
  forgotPasswordVerify(
    @Payload() { reqInfo, verifyUuidDto }: ForgotPassVerifyPayload,
  ) {
    return this.authService.forgotPasswordVerify(reqInfo, verifyUuidDto);
  }

  @MessagePattern('reset-password')
  resetPassword(@Payload() data: string): string {
    return 'reset-password';
    // return this.authService.resetPassword(data);
  }
}
