import {
  Controller,
  Get,
  UseGuards,
  HttpCode,
  HttpStatus,
  ClassSerializerInterceptor,
  UseInterceptors,
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
// import { RolesGuard } from 'auth/auth/guards/roles.guard';
import { UserEntity } from './Entity/user.entity';
import { classToPlain } from 'class-transformer';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AuthGuard } from 'auth/guards/auth.guard';
import { RolesGuard } from 'auth/guards/roles.guard';
import { MessagePatternInterface } from 'interface/message-parten.interface';

@ApiTags('User')
@Controller('users')
@UseGuards(AuthGuard, RolesGuard)
// @UseInterceptors(ClassSerializerInterceptor)
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
      service: 'User',
      action: 'findAll',
    };
    return this.UserService.send(message, {});
  }
}
