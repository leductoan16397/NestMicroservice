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

@Controller('auth')
export class AuthController {
  constructor(@Inject('AUTH_SERVICE') private AuthService: ClientProxy) {}

  @Get()
  getHello(): Observable<string> {
    const message = { cmd: 'hello' };
    const payload = 'auth';
    return this.AuthService.send(message, payload);
  }

  @Post('sign-up')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Register user' })
  @ApiCreatedResponse({})
  async register(/* @Body() createUserDto: SignUpDto */) {
    const message = 'sign-up';
    const payload = 'auth';
    console.log('sign-up');
    return this.AuthService.send(message, payload);
    // return await this.AuthService.create(createUserDto);
  }

  @Post('verify-email')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Verify Email' })
  @ApiOkResponse({})
  async verifyEmail(
    @Req() request: FastifyRequest,
    @Body() verifyUuidDto: VerifyUuidDto,
  ) {
    const message = 'verify-email';
    const payload = 'auth';
    return this.AuthService.send(message, payload);
    // return await this.AuthService.verifyEmail(request, verifyUuidDto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Login User' })
  @ApiOkResponse({})
  async login(@Req() req: FastifyRequest, @Body() loginUserDto: LoginUserDto) {
    const message = 'login';
    const payload = 'auth';
    return this.AuthService.send(message, payload);
    // return await this.AuthService.login(req, loginUserDto);
  }

  @Post('refresh-access-token')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Refresh Access Token with refresh token' })
  @ApiCreatedResponse({})
  async refreshAccessToken(
    @Body() refreshAccessTokenDto: RefreshAccessTokenDto,
  ) {
    const message = 'refresh-access-token';
    const payload = 'auth';
    return this.AuthService.send(message, payload);
    // return await this.AuthService.refreshAccessToken(refreshAccessTokenDto);
  }

  @Post('forgot-password')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Forgot password' })
  @ApiOkResponse({})
  async forgotPassword(
    @Req() req: FastifyRequest,
    @Body() createForgotPasswordDto: CreateForgotPasswordDto,
  ) {
    const message = 'forgot-password';
    const payload = 'auth';
    return this.AuthService.send(message, payload);
    // return await this.AuthService.forgotPassword(req, createForgotPasswordDto);
  }

  @Post('forgot-password-verify')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Verfiy forget password code' })
  @ApiOkResponse({})
  async forgotPasswordVerify(
    @Req() req: FastifyRequest,
    @Body() verifyUuidDto: VerifyUuidDto,
  ) {
    const message = 'forgot-password-verify';
    const payload = 'auth';
    return this.AuthService.send(message, payload);
    // return await this.AuthService.forgotPasswordVerify(req, verifyUuidDto);
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
    const message = 'reset-password';
    const payload = 'auth';
    return this.AuthService.send(message, payload);
    // return await this.AuthService.resetPassword(resetPasswordDto);
  }
}
