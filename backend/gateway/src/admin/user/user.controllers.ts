import {
  Controller,
  Delete,
  Inject,
  Post,
  Put,
  Param,
  Body,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { MessagePatternInterface } from 'interface/messageParten.interface';
import { SERVICE } from 'interface/service.enum';
import { CreateAdminUserDto } from './dto/create-user.dto';
import { UpdateAdminUser } from './dto/update-user.dto';

@ApiTags('User Admin')
@Controller('')
export class UserController {
  constructor(@Inject('AUTH_SERVICE') private AuthClientService: ClientProxy) {}

  @Post('recruiter-manager')
  addRecruiterManager(@Body() body: CreateAdminUserDto): any {
    const message: MessagePatternInterface = {
      service: SERVICE.AUTH,
      action: 'add-recruiter-manager',
    };
    return this.AuthClientService.send(message, body);
  }

  @Put('recruiter-manager/:id')
  updateRecruiterManager(
    @Param('id') id: string,
    @Body() input: UpdateAdminUser,
  ): any {
    const message: MessagePatternInterface = {
      service: SERVICE.AUTH,
      action: 'update-recruiter-manager',
    };
    return this.AuthClientService.send(message, { id, input });
  }

  @Delete('recruiter-manager/:id')
  deleteRecruiterManager(@Param('id') id: string): any {
    const message: MessagePatternInterface = {
      service: SERVICE.AUTH,
      action: 'delete-recruiter-manager',
    };
    return this.AuthClientService.send(message, id);
  }

  @Post('recruiter')
  addRecruiter(@Body() body: CreateAdminUserDto): any {
    const message: MessagePatternInterface = {
      service: SERVICE.AUTH,
      action: 'add-recruiter',
    };
    return this.AuthClientService.send(message, body);
  }

  @Put('recruiter/:id')
  updateRecruiter(
    @Param('id') id: string,
    @Body() input: UpdateAdminUser,
  ): any {
    const message: MessagePatternInterface = {
      service: SERVICE.AUTH,
      action: 'update-recruiter',
    };
    return this.AuthClientService.send(message, { id, input });
  }

  @Delete('recruiter/:id')
  deleteRecruiter(@Param('id') id: string): any {
    const message: MessagePatternInterface = {
      service: SERVICE.AUTH,
      action: 'delete-recruiter',
    };
    return this.AuthClientService.send(message, id);
  }
}
