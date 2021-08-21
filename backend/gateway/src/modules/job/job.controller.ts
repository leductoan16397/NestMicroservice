import { Controller, Get, Inject, Param, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { MessagePatternInterface } from 'interface/messageParten.interface';
import { SERVICE } from 'interface/service.enum';
import { SearchJobDto } from './dto/searchJob.dto';

@ApiTags('Job')
@Controller('job')
export class JobController {
  constructor(@Inject('JOB_SERVICE') private JobService: ClientProxy) {}

  @Get()
  getJobs(@Query() query: SearchJobDto) {
    const city: any = {
      HN: 'Hà Nội',
      HCM: 'Hồ Chí Mính',
      DN: 'Đà Nẵng',
    };
    if (query.jobTitle || city[query.city]) {
      const messageSearch: MessagePatternInterface = {
        service: SERVICE.JOBSEARCH,
        action: 'search',
      };
      return this.JobService.send(messageSearch, {
        page: query.page,
        jobTitle: query.jobTitle,
        city: city[query.city],
      });
    }

    const message: MessagePatternInterface = {
      service: SERVICE.JOB,
      action: 'findAll',
    };
    return this.JobService.send(message, { page: query.page });
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
