import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { MessagePatternInterface } from 'interface/messageParten.interface';
import { SERVICE } from 'interface/service.enum';
import { Observable } from 'rxjs';

import { CreateJobDto } from './dto/create-job.dto';

@ApiTags('Job')
@Controller('job')
export class JobController {
  constructor(@Inject('JOB_SERVICE') private JobService: ClientProxy) {}

  @Get()
  getHello(): Observable<string> {
    const pattern = { cmd: 'hello' };
    const payload = 'job';
    return this.JobService.send<string>(pattern, payload);
  }

  @Get('findall')
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
}
