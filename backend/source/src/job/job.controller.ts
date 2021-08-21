import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { JobService } from './job.service';

interface QueryParams {
  page: number;
}
@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @MessagePattern({ service: 'Job', action: 'findAll' })
  findAll(@Payload() data: QueryParams) {
    return this.jobService.findAll(data.page);
  }

  @MessagePattern({ service: 'Job', action: 'create' })
  create(@Payload() data: any) {
    return this.jobService.create(data);
  }

  @MessagePattern({ service: 'Job', action: 'findById' })
  findJobById(@Payload() id: string) {
    return this.jobService.findById(id);
  }

  @MessagePattern({ service: 'Job', action: 'update' })
  updateJobById(@Payload() data: any) {
    const { id, input } = data;
    return this.jobService.updateById(id, input);
  }

  @MessagePattern({ service: 'Job', action: 'deleteById' })
  deleteJobById(@Payload() id: string) {
    return this.jobService.deleteById(id);
  }
}
