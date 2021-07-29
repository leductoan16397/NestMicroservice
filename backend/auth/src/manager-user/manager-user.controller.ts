import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { classToPlain } from 'class-transformer';
import { AdminUserEntity } from './Entity/user.entity';
import {
  AddManagerUser,
  UpdatePayload,
} from './interface/manager-user.interface';
import { ManagerUserService } from './manager-user.service';

@Controller('auth')
export class ManagerUserController {
  constructor(private readonly managerUserService: ManagerUserService) {}

  @MessagePattern({ service: 'Auth', action: 'add-recruiter-manager' })
  adminRecruiterManager(@Payload() userInput: AddManagerUser) {
    return this.managerUserService.addManager(userInput);
  }

  @MessagePattern({ service: 'Auth', action: 'update-recruiter-manager' })
  updateRecruiterManager(@Payload() { id, input }) {
    return this.managerUserService.updateUser(id, input);
  }

  @MessagePattern({ service: 'Auth', action: 'delete-recruiter-manager' })
  deleteRecruiterManager(@Payload() id: string) {
    this.managerUserService.deleteUser(id);
  }

  @MessagePattern({ service: 'Auth', action: 'add-recruiter' })
  adminRecruiter(@Payload() userInput: AddManagerUser) {
    return this.managerUserService.addRecuiter(userInput);
  }

  @MessagePattern({ service: 'Auth', action: 'update-recruiter' })
  async updateRecruiter(@Payload() { id, input }: UpdatePayload) {
    const user = await this.managerUserService.updateUser(id, input);
    return classToPlain(new AdminUserEntity(user.toJSON()), {
      excludePrefixes: ['_'],
    });
  }

  @MessagePattern({ service: 'Auth', action: 'delete-recruiter' })
  deleteRecruiter(@Payload() id: string) {
    this.managerUserService.deleteUser(id);
  }
}
