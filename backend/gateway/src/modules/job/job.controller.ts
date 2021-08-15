import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { MessagePatternInterface } from 'interface/messageParten.interface';
import { SERVICE } from 'interface/service.enum';

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

  @Get(':id')
  findById(@Param('id') id: string) {
    const message: MessagePatternInterface = {
      service: SERVICE.JOB,
      action: 'findById',
    };
    return this.JobService.send(message, id);
  }
}
