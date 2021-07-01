import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { JobSearchService } from './job-search.service';

@Controller('job-search')
export class JobSearchController {
  constructor(private readonly jobSearchService: JobSearchService) {}

  @MessagePattern({ service: 'JobSearch', action: 'insert' })
  insert(@Payload() data: any) {
    return this.jobSearchService.insert(data);
  }

  @MessagePattern({ service: 'JobSearch', action: 'update' })
  update(@Payload() data: any) {
    return this.jobSearchService.update(data);
  }

  @MessagePattern({ service: 'JobSearch', action: 'search' })
  search(@Payload() data: any) {
    return this.jobSearchService.search(data);
  }

  @MessagePattern({ service: 'JobSearch', action: 'delete' })
  delete(@Payload() data: any) {
    return this.jobSearchService.delete(data);
  }
}
