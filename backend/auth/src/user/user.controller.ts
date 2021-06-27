import { Controller } from '@nestjs/common';
import { UserService } from './user.service';

import { UserEntity } from './Entity/user.entity';
import { classToPlain } from 'class-transformer';
import { MessagePattern, RpcException } from '@nestjs/microservices';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ service: 'User', action: 'findAll' })
  async findAll(): Promise<unknown> {
    try {
      const users = await this.userService.findAll();

      return classToPlain(
        users.map((user) => new UserEntity(user.toJSON())),
        { excludePrefixes: ['_'] },
      );
    } catch (error) {
      throw new RpcException(error);
    }
  }
}
