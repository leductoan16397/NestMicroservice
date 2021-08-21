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
  search(@Payload() data: { page: number; jobTitle: string; city: string }) {
    return this.jobSearchService.search(data.page, data.jobTitle, data.city);
  }

  @MessagePattern({ service: 'JobSearch', action: 'delete' })
  delete(@Payload() data: any) {
    return this.jobSearchService.delete(data);
  }
}
