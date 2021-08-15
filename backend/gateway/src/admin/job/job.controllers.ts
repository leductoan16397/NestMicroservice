import {
  Controller,
  Post,
  Delete,
  Body,
  Param,
  Put,
  Inject,
  HttpCode,
  HttpStatus,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiHeader,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AdminRoles } from 'admin/auth/decorators/roles.decorator';
import { AdminAuthGuard } from 'admin/auth/guards/auth.guard';
import { AdminRolesGuard } from 'admin/auth/guards/roles.guard';
import { MessagePatternInterface } from 'interface/messageParten.interface';
import { SERVICE } from 'interface/service.enum';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { FastifyRequest } from 'fastify';

@ApiTags('Admin Job')
@Controller('')
@UseGuards(AdminAuthGuard, AdminRolesGuard)
export class JobController {
  constructor(@Inject('JOB_SERVICE') private JobService: ClientProxy) {}

  @Post()
  @ApiBearerAuth()
  @AdminRoles('manager')
  @ApiOperation({ summary: 'A private route for check the auth' })
  @ApiHeader({
    name: 'Bearer',
    description: 'the token we need for auth.',
  })
  @HttpCode(HttpStatus.CREATED)
  @ApiOkResponse({})
  create(@Req() req, @Body() data: CreateJobDto) {
    const { user } = req;
    const message: MessagePatternInterface = {
      service: SERVICE.JOB,
      action: 'create',
    };
    return this.JobService.send(message, {
      ...data,
      author: user.id,
      company: user.company,
    });
  }

  @Put(':id')
  @ApiBearerAuth()
  @AdminRoles('manager')
  @ApiOperation({ summary: 'A private route for check the auth' })
  @ApiHeader({
    name: 'Bearer',
    description: 'the token we need for auth.',
  })
  @HttpCode(HttpStatus.CREATED)
  @ApiOkResponse({})
  update(@Param('id') id: string, @Body() input: UpdateJobDto) {
    const message: MessagePatternInterface = {
      service: SERVICE.JOB,
      action: 'update',
    };
    return this.JobService.send(message, { id, input });
  }

  @Delete(':id')
  @ApiBearerAuth()
  @AdminRoles('manager')
  @ApiOperation({ summary: 'A private route for check the auth' })
  @ApiHeader({
    name: 'Bearer',
    description: 'the token we need for auth.',
  })
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({})
  delete(@Param('id') id: string) {
    const message: MessagePatternInterface = {
      service: SERVICE.JOB,
      action: 'deleteById',
    };
    return this.JobService.send(message, id);
  }
}
