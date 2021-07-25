import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { MessagePatternInterface } from 'interface/messageParten.interface';
import { SERVICE } from 'interface/service.enum';
import { Observable } from 'rxjs';

import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';

@ApiTags('Job')
@Controller('job')
export class JobController {
  constructor(@Inject('JOB_SERVICE') private JobService: ClientProxy) {}

  @Get()
  findAll() {
    const message: MessagePatternInterface = {
      service: SERVICE.JOB,
      action: 'findAll',
    };
    return this.JobService.send(message, {});
  }

  @Post()
  create(@Body() data: CreateJobDto) {
    const message: MessagePatternInterface = {
      service: SERVICE.JOB,
      action: 'create',
    };
    return this.JobService.send(message, data);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    const message: MessagePatternInterface = {
      service: SERVICE.JOB,
      action: 'findById',
    };
    return this.JobService.send(message, id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() input: UpdateJobDto) {
    const message: MessagePatternInterface = {
      service: SERVICE.JOB,
      action: 'update',
    };
    return this.JobService.send(message, { id, input });
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    const message: MessagePatternInterface = {
      service: SERVICE.JOB,
      action: 'deleteById',
    };
    return this.JobService.send(message, id);
  }
}
