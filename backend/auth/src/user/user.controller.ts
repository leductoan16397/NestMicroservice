import { Controller } from '@nestjs/common';
import { UserService } from './user.service';

import { UserEntity } from './Entity/user.entity';
import { classToPlain } from 'class-transformer';
import { MessagePattern } from '@nestjs/microservices';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('findAll')
  async findAll(): Promise<unknown> {
    const users = await this.userService.findAll();

    return classToPlain(
      users.map((user) => new UserEntity(user.toJSON())),
      { excludePrefixes: ['_'] },
    );
  }
}
