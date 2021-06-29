import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { JobService } from './job.service';

@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @MessagePattern({ service: 'Job', action: 'findAll' })
  findAll(@Payload() data: any) {
    return this.jobService.findAll();
  }

  @MessagePattern({ service: 'Job', action: 'create' })
  create(@Payload() data: any) {
    return this.jobService.create(data);
  }
}
