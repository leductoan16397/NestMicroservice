import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
// import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  // constructor(private readonly authService: AuthService) {}

  @MessagePattern('sign-up')
  register(@Payload() data: string): string {
    return 'sign-up';
    // return this.authService.create(data);
  }

  @MessagePattern('verify-email')
  verifyEmail(@Payload() data: string): string {
    return 'verify-email';
    // return this.authService.verifyEmail(data);
  }

  @MessagePattern('login')
  login(@Payload() data: string): string {
    return 'login';
    // return this.authService.login(data);
  }

  @MessagePattern('refresh-access-token')
  refreshAccessToken(@Payload() data: string): string {
    return 'refresh-access-token';
    // return this.authService.refreshAccessToken(data);
  }

  @MessagePattern('forgot-password')
  forgotPassword(@Payload() data: string): string {
    return 'forgot-password';
    // return this.authService.forgotPassword(data);
  }

  @MessagePattern('forgot-password-verify')
  forgotPasswordVerify(@Payload() data: string): string {
    return 'forgot-password-verify';
    // return this.authService.forgotPasswordVerify(data);
  }

  @MessagePattern('reset-password')
  resetPassword(@Payload() data: string): string {
    return 'reset-password';
    // return this.authService.resetPassword(data);
  }
}
