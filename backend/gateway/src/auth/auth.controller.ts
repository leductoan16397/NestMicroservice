import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
  Req,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiHeader,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { SignUpDto } from './dto/signUp.dto';
import { FastifyRequest } from 'fastify';
import { VerifyUuidDto } from 'user/dto/verify-uuid.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateForgotPasswordDto } from './dto/create-forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { RefreshAccessTokenDto } from './dto/refresh-access-token.dto';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { MessagePatternInterface } from 'interface/message-parten.interface';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    @Inject('AUTH_SERVICE') private AuthClientService: ClientProxy,
    private readonly authService: AuthService,
  ) {}

  @Get()
  getHello(): Observable<string> {
    const message = { cmd: 'hello' };
    const payload = 'auth';
    return this.AuthClientService.send(message, payload);
  }

  @Post('sign-up')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Register user' })
  @ApiCreatedResponse({})
  async register(@Body() createUserDto: SignUpDto) {
    const message: MessagePatternInterface = {
      service: 'Auth',
      action: 'sign-up',
    };
    return this.AuthClientService.send(message, createUserDto);
  }

  @Post('verify-email')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Verify Email' })
  @ApiOkResponse({})
  async verifyEmail(
    @Req() request: FastifyRequest,
    @Body() verifyUuidDto: VerifyUuidDto,
  ) {
    const message: MessagePatternInterface = {
      service: 'Auth',
      action: 'verify-email',
    };
    const reqInfo = this.authService.getReqInfo(request);
    return this.AuthClientService.send(message, { reqInfo, verifyUuidDto });
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Login User' })
  @ApiOkResponse({})
  async login(
    @Req() request: FastifyRequest,
    @Body() loginUserDto: LoginUserDto,
  ) {
    const message: MessagePatternInterface = {
      service: 'Auth',
      action: 'login',
    };
    const reqInfo = this.authService.getReqInfo(request);
    return this.AuthClientService.send(message, { reqInfo, loginUserDto });
  }

  @Post('refresh-access-token')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Refresh Access Token with refresh token' })
  @ApiCreatedResponse({})
  async refreshAccessToken(
    @Body() refreshAccessTokenDto: RefreshAccessTokenDto,
  ) {
    const message: MessagePatternInterface = {
      service: 'Auth',
      action: 'refresh-access-token',
    };
    return this.AuthClientService.send(message, refreshAccessTokenDto);
  }

  @Post('forgot-password')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Forgot password' })
  @ApiOkResponse({})
  async forgotPassword(
    @Req() req: FastifyRequest,
    @Body() createForgotPasswordDto: CreateForgotPasswordDto,
  ) {
    const message: MessagePatternInterface = {
      service: 'Auth',
      action: 'forgot-password',
    };
    return this.AuthClientService.send(message, {
      reqInfo: this.authService.getReqInfo(req),
      createForgotPasswordDto,
    });
  }

  @Post('forgot-password-verify')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Verfiy forget password code' })
  @ApiOkResponse({})
  async forgotPasswordVerify(
    @Req() req: FastifyRequest,
    @Body() verifyUuidDto: VerifyUuidDto,
  ) {
    const message: MessagePatternInterface = {
      service: 'Auth',
      action: 'forgot-password-verify',
    };
    const reqInfo = this.authService.getReqInfo(req);
    return this.AuthClientService.send(message, { reqInfo, verifyUuidDto });
  }

  @Post('reset-password')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Reset password after verify reset password' })
  @ApiBearerAuth()
  @ApiHeader({
    name: 'Bearer',
    description: 'the token we need for auth.',
  })
  @ApiOkResponse({})
  async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    const message: MessagePatternInterface = {
      service: 'Auth',
      action: 'reset-password',
    };
    return this.AuthClientService.send(message, resetPasswordDto);
  }
}
