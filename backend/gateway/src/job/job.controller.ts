import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';

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
}
