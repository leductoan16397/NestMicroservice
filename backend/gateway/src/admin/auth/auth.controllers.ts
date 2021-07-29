import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { MessagePatternInterface } from 'interface/messageParten.interface';
import { SERVICE } from 'interface/service.enum';
import { Observable } from 'rxjs';
import { LoginUserDto } from './dto/login-user.dto';
import { LogoutDto } from './dto/logout.dto';
import { RefreshAccessTokenDto } from './dto/refresh-access-token.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';

@ApiTags('Auth Admin')
@Controller('')
export class AuthController {
  constructor(@Inject('AUTH_SERVICE') private AuthClientService: ClientProxy) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() loginUserDto: LoginUserDto): Observable<any> {
    const message: MessagePatternInterface = {
      service: SERVICE.AUTH,
      action: 'admin-login',
    };
    return this.AuthClientService.send(message, loginUserDto);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(@Body() logoutDto: LogoutDto): any {
    const message: MessagePatternInterface = {
      service: SERVICE.AUTH,
      action: 'admin-logout',
    };
    return this.AuthClientService.send(message, logoutDto.refreshToken);
  }

  @Post('refresh-token')
  @HttpCode(HttpStatus.OK)
  refreshToken(@Body() refreshAccessTokenDto: RefreshAccessTokenDto): any {
    const message: MessagePatternInterface = {
      service: SERVICE.AUTH,
      action: 'admin-refresh-token',
    };
    return this.AuthClientService.send(
      message,
      refreshAccessTokenDto.refreshToken,
    );
  }

  @Post('reset-password')
  @HttpCode(HttpStatus.OK)
  resetPassword(@Body() resetPasswordDto: ResetPasswordDto): any {
    const message: MessagePatternInterface = {
      service: SERVICE.AUTH,
      action: 'admin-reset-password',
    };
    return this.AuthClientService.send(message, resetPasswordDto);
  }
}
