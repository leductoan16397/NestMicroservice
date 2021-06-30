import {
  Controller,
  Get,
  UseGuards,
  HttpCode,
  HttpStatus,
  Inject,
} from '@nestjs/common';

import {
  ApiOkResponse,
  ApiTags,
  ApiBearerAuth,
  ApiHeader,
  ApiOperation,
} from '@nestjs/swagger';
import { Roles } from 'auth/decorators/roles.decorator';
import { ClientProxy } from '@nestjs/microservices';
import { AuthGuard } from 'auth/guards/auth.guard';
import { RolesGuard } from 'auth/guards/roles.guard';
import { MessagePatternInterface } from 'interface/messageParten.interface';
import { SERVICE } from 'interface/service.enum';

@ApiTags('User')
@Controller('users')
@UseGuards(AuthGuard, RolesGuard)
export class UserController {
  constructor(@Inject('USER_SERVICE') private UserService: ClientProxy) {}

  @Get('data')
  @ApiBearerAuth()
  @Roles('user')
  @ApiOperation({ summary: 'A private route for check the auth' })
  @ApiHeader({
    name: 'Bearer',
    description: 'the token we need for auth.',
  })
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({})
  async findAll() {
    const message: MessagePatternInterface = {
      service: SERVICE.USER,
      action: 'findAll',
    };
    return this.UserService.send(message, {});
  }
}
