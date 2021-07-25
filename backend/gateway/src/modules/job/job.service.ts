import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class JobService {
  constructor(@Inject('JOB_SERVICE') private JobService: ClientProxy) {}
}
